import { useState } from "react";
import { ChevronDown, Heart, MessageSquare, Users, TrendingUp, Shield, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandRelation {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface PersonaCardProps {
  name: string;
  description: string;
  coreDimensions: [string, string, string];
  brandRelations: BrandRelation[];
  postsCount: number;
  expandedDetails?: {
    label: string;
    value: string;
  }[];
}

const PersonaCard = ({
  name,
  description,
  coreDimensions,
  brandRelations,
  postsCount,
  expandedDetails = [],
}: PersonaCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={cn(
        "group relative cursor-pointer rounded-2xl p-6 transition-all duration-300",
        "bg-[hsl(var(--persona-glass))] backdrop-blur-xl",
        "border border-[hsl(var(--persona-glass-border))]",
        "shadow-[0_4px_24px_-4px_hsl(215_75%_55%/0.08)]",
        "hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_hsl(215_75%_55%/0.15)]",
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(210_80%_95%/0.5)] via-transparent to-[hsl(220_70%_92%/0.3)]" />

      <div className="relative z-10">
        {/* Layer 1: Persona Name */}
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          {name}
        </h2>

        {/* Layer 2: Description */}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Layer 3: Core Dimensions */}
        <div className="flex flex-wrap gap-2">
          {coreDimensions.map((dim) => (
            <span
              key={dim}
              className="rounded-full bg-[hsl(var(--persona-tag))] px-3 py-1 text-xs font-medium text-[hsl(var(--persona-tag-foreground))]"
            >
              {dim}
            </span>
          ))}
        </div>

        {/* Layer 4: Brand Relations */}
        <div className="mt-4 space-y-2">
          {brandRelations.map((rel) => (
            <div key={rel.label} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-primary/60">{rel.icon}</span>
              <span className="font-medium text-foreground/70">{rel.label}:</span>
              <span>{rel.value}</span>
            </div>
          ))}
        </div>

        {/* Layer 5: Posts Count */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>{postsCount.toLocaleString()} posts</span>
          </div>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-300",
              isExpanded && "rotate-180"
            )}
          />
        </div>

        {/* Expandable Details */}
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isExpanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="grid grid-cols-2 gap-3 pt-4">
              {expandedDetails.map((detail) => (
                <div key={detail.label} className="rounded-xl bg-secondary/50 p-3">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {detail.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground/80">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
