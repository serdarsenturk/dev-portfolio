export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl">
      <div className="relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl animate-gradient bg-[length:200%_auto] opacity-60" />
        
        {/* Loading spinner */}
        <div className="relative w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        
        {/* Loading text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium text-primary animate-pulse">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}
