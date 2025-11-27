"use client";

import React, { forwardRef } from "react";
import { Shader } from "react-shaders";
import { cn } from "@/lib/utils";

export interface WaterShadersProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  depth?: number;
  clarity?: number;
  waves?: number;
  reflection?: number;
}

const fragmentShader = `
// Hash function for noise generation
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

// Smooth noise function
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Fractal Brownian Motion for water patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    for (int i = 0; i < 6; i++) {
        value += amplitude * noise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }

    return value;
}

// Water surface normal calculation
vec3 waterNormal(vec2 uv, float time) {
    float scale = u_waves * 8.0;
    vec2 offset = vec2(time * u_speed * 0.3, time * u_speed * 0.2);

    // Sample height at current and nearby points
    float h = fbm(uv * scale + offset);
    float hx = fbm((uv + vec2(0.01, 0.0)) * scale + offset);
    float hy = fbm((uv + vec2(0.0, 0.01)) * scale + offset);

    // Calculate normal from height differences
    vec3 normal = normalize(vec3(h - hx, h - hy, 0.02));
    return normal;
}

// Fresnel effect for realistic water reflection
float fresnel(vec3 normal, vec3 viewDir) {
    float cosTheta = max(0.0, dot(normal, viewDir));
    float f0 = 0.02; // Water's base reflectance
    return f0 + (1.0 - f0) * pow(1.0 - cosTheta, 5.0);
}

// Water depth color
vec3 waterDepthColor(vec2 uv, float time) {
    // Create depth variation
    float depth = u_depth * (0.5 + 0.5 * fbm(uv * 2.0 + time * u_speed * 0.1));

    // Deep water is darker blue-green, shallow is lighter cyan
    vec3 deepColor = vec3(0.0, 0.1, 0.3);
    vec3 shallowColor = vec3(0.1, 0.4, 0.6);

    return mix(shallowColor, deepColor, depth);
}

// Caustics effect (light patterns under water)
float caustics(vec2 uv, float time) {
    vec2 p = uv * 6.0;
    float t = time * u_speed * 2.0;

    // Multiple overlapping caustic patterns
    float c1 = sin(p.x + t) * cos(p.y + t * 1.3);
    float c2 = sin(p.x * 1.4 - t * 0.8) * cos(p.y * 1.6 + t);
    float c3 = sin(p.x * 0.7 + t * 1.5) * cos(p.y * 0.9 - t * 0.6);

    float caustic = (c1 + c2 + c3) * 0.5 + 0.5;
    caustic = pow(caustic, 3.0); // Sharpen the caustic lines

    return caustic * 0.3;
}

// Sky reflection
vec3 skyReflection(vec2 uv, vec3 normal) {
    // Distort UV based on water normal for realistic reflection
    vec2 reflectUV = uv + normal.xy * u_reflection * 0.1;

    // Create gradient sky
    float horizon = 1.0 - reflectUV.y;
    vec3 skyColor = mix(vec3(0.4, 0.7, 1.0), vec3(0.8, 0.9, 1.0), horizon);

    // Add some cloud-like patterns
    float clouds = fbm(reflectUV * 3.0) * 0.3;
    skyColor = mix(skyColor, vec3(1.0, 1.0, 1.0), clouds * horizon);

    return skyColor;
}

// Underwater light rays
float lightRays(vec2 uv, float time) {
    vec2 p = uv * 4.0;
    float t = time * u_speed;

    // Create moving light ray patterns
    float rays = sin(p.x * 2.0 + t) * sin(p.y * 1.5 + t * 1.2);
    rays += sin(p.x * 3.0 - t * 0.8) * sin(p.y * 2.5 - t);

    rays = (rays + 2.0) * 0.25; // Normalize
    rays = pow(rays, 2.0); // Sharpen

    return rays * 0.2;
}

// Surface foam and bubbles
float surfaceFoam(vec2 uv, float time) {
    vec2 p = uv * 12.0;
    float t = time * u_speed * 3.0;

    // Moving foam patterns
    float foam = fbm(p + vec2(t, 0.0));
    foam += fbm(p * 1.5 + vec2(-t * 0.6, t * 0.8)) * 0.5;

    // Only show foam at wave peaks
    float waves = fbm(uv * u_waves * 4.0 + time * u_speed);
    foam *= smoothstep(0.6, 1.0, waves);

    return foam * 0.4;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord / iResolution.xy;
    float time = iTime;

    // Calculate water surface normal
    vec3 normal = waterNormal(uv, time);

    // View direction (looking down at water)
    vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));

    // Calculate fresnel for reflection strength
    float fresnelEffect = fresnel(normal, viewDir);

    // Get base water depth color
    vec3 waterColor = waterDepthColor(uv, time);

    // Add caustics (light patterns)
    float causticsEffect = caustics(uv, time);
    waterColor += vec3(0.8, 1.0, 1.0) * causticsEffect;

    // Add underwater light rays
    float rays = lightRays(uv, time);
    waterColor += vec3(0.6, 0.8, 1.0) * rays;

    // Get sky reflection
    vec3 reflection = skyReflection(uv, normal);

    // Mix water color with reflection based on fresnel
    vec3 finalColor = mix(waterColor, reflection, fresnelEffect * u_reflection);

    // Add surface foam
    float foam = surfaceFoam(uv, time);
    finalColor = mix(finalColor, vec3(1.0, 1.0, 1.0), foam);

    // Apply water clarity (how clear/murky the water is)
    finalColor = mix(finalColor, vec3(0.2, 0.3, 0.4), (1.0 - u_clarity) * 0.5);

    // Add subtle water surface highlights
    float highlight = pow(max(0.0, dot(normal, normalize(vec3(1.0, 1.0, 2.0)))), 32.0);
    finalColor += vec3(1.0, 1.0, 1.0) * highlight * 0.3;

    // Enhance depth with darker edges
    float edgeDarkening = smoothstep(0.0, 0.2, min(uv.x, min(uv.y, min(1.0 - uv.x, 1.0 - uv.y))));
    finalColor *= 0.7 + edgeDarkening * 0.3;

    // Ensure colors stay in valid range
    finalColor = clamp(finalColor, 0.0, 1.0);

    fragColor = vec4(finalColor, 1.0);
}
`;

export const WaterShaders = forwardRef<HTMLDivElement, WaterShadersProps>(({
  className,
  speed = 1.0,
  depth = 1.0,
  clarity = 1.0,
  waves = 1.0,
  reflection = 1.0,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('w-full h-full', className)}
      {...props}
    >
      <Shader
        fs={fragmentShader}
        uniforms={{
          u_speed: { type: '1f', value: speed },
          u_depth: { type: '1f', value: depth },
          u_clarity: { type: '1f', value: clarity },
          u_waves: { type: '1f', value: waves },
          u_reflection: { type: '1f', value: reflection },
        }}
        style={{ width: '100%', height: '100%' } as CSSStyleDeclaration}
      />
    </div>
  );
});

WaterShaders.displayName = "WaterShaders";