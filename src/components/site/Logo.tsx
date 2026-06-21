import logoAsset from "@/assets/growsecure-logo.png.asset.json";

export function Logo({ className = "", showText = true, size = 32 }: { className?: string; showText?: boolean; size?: number }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={logoAsset.url} alt="GrowSecure" width={size} height={size} className="object-contain" style={{ width: size, height: size }} />
      {showText && <span className="text-lg font-bold tracking-tight">GrowSecure</span>}
    </div>
  );
}
