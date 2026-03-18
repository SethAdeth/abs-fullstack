import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-gradient-gold"
        )}
        style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
      >
        {title}
      </h2>

      {/* Gold-Violet underline accent bar */}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet via-gold to-violet",
          centered && "mx-auto"
        )}
        aria-hidden="true"
      />

      {subtitle && (
        <p
          className={cn(
            "mt-6 text-base md:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/80" : "text-[#6B7280]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
