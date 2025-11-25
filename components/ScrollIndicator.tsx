export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
        <span className="text-xs text-neutral/70 mt-2 font-medium">Scroll</span>
      </div>
    </div>
  );
}
