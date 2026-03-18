import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────
   Base Card
   ────────────────────────────────────────────── */

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm",
        "hover:border-[#5B21B6]/40 hover:shadow-[0_4px_20px_rgba(91,33,182,0.08)]",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Service Card
   ────────────────────────────────────────────── */

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  ctaLabel = "En savoir plus",
  className,
}: ServiceCardProps) {
  return (
    <Card className={cn("group flex flex-col h-full", className)}>
      {/* Icon */}
      <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-lg bg-[#5B21B6]/10 text-[#5B21B6] group-hover:bg-[#5B21B6]/20 transition-colors duration-300">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3
        className="text-lg md:text-xl font-semibold text-[#1F2937] mb-3"
        style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#6B7280] text-sm leading-relaxed mb-5 flex-grow">
        {description}
      </p>

      {/* CTA Link */}
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5B21B6] hover:text-[#7C3AED] transition-colors duration-300 group/link"
        >
          {ctaLabel}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      )}
    </Card>
  );
}

/* ──────────────────────────────────────────────
   Team Card
   ────────────────────────────────────────────── */

interface TeamCardProps {
  avatar: string;
  name: string;
  role: string;
  bio?: string;
  className?: string;
}

export function TeamCard({
  avatar,
  name,
  role,
  bio,
  className,
}: TeamCardProps) {
  return (
    <Card className={cn("group text-center", className)}>
      {/* Avatar */}
      <div className="relative mx-auto mb-5 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#5B21B6]/20 group-hover:border-[#5B21B6] transition-colors duration-300">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 96px, 112px"
        />
      </div>

      {/* Name */}
      <h3
        className="text-lg font-semibold text-[#1F2937] mb-1"
        style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
      >
        {name}
      </h3>

      {/* Role */}
      <p className="text-sm font-medium text-[#5B21B6] mb-3">{role}</p>

      {/* Bio */}
      {bio && (
        <p className="text-[#6B7280] text-sm leading-relaxed">{bio}</p>
      )}
    </Card>
  );
}

/* ──────────────────────────────────────────────
   Case Study Card
   ────────────────────────────────────────────── */

interface CaseStudyMetric {
  label: string;
  value: string;
}

interface CaseStudyCardProps {
  image: string;
  title: string;
  sector: string;
  metrics?: CaseStudyMetric[];
  href?: string;
  ctaLabel?: string;
  className?: string;
}

export function CaseStudyCard({
  image,
  title,
  sector,
  metrics,
  href,
  ctaLabel = "Voir le cas",
  className,
}: CaseStudyCardProps) {
  return (
    <Card className={cn("group overflow-hidden p-0", className)}>
      {/* Image */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Sector badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white rounded-full shadow-sm">
          {sector}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-lg md:text-xl font-semibold text-[#1F2937] mb-4"
          style={{ fontFamily: "var(--font-sub), system-ui, sans-serif" }}
        >
          {title}
        </h3>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-5">
            {metrics.map((metric, index) => (
              <div key={index} className="flex-1 min-w-[80px]">
                <p className="text-xl font-bold text-[#5B21B6]">
                  {metric.value}
                </p>
                <p className="text-xs text-[#6B7280] mt-0.5">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5B21B6] hover:text-[#7C3AED] transition-colors duration-300 group/link"
          >
            {ctaLabel}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </Link>
        )}
      </div>
    </Card>
  );
}
