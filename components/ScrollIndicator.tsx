export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex flex-col items-center">
        <div className="w-6 h-10 border-2 border-offWhite rounded-full p-1 animate-pulse">
          <div className="w-1 h-3 bg-accent rounded-full mx-auto animate-bounce"></div>
        </div>
        <span className="text-xs text-offWhite/70 mt-2 font-medium">Scroll</span>
      </div>
    </div>
  );
}
