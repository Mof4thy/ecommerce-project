import React from "react";

export default function LoadingBar() {
  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center">
      <div className="w-40 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#35AFA0] rounded-full animate-[progress_2s_linear_infinite]"
          style={{ animationTimingFunction: "linear" }}
        ></div>
      </div>
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); width: 100%; }
          100% { transform: translateX(100%); width: 100%; }
        }
      `}</style>
    </div>
  );
}
