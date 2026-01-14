import { AdsFeatureItem } from "@/types";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  item: AdsFeatureItem;
  index: number;
}

export function FeatureCard({ item, index }: FeatureCardProps) {
  const Icon = item.icon;
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30",
        // Mobile-first order logic if needed, but grid usually handles this naturally
      )}
    >
      {/* Hover Gradient */}
      <div className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 font-heading">
            {item.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}