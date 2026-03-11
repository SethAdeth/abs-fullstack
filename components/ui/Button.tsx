"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline-light" | "white" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton
  extends ButtonBaseProps,
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: undefined;
}

interface ButtonAsLink
  extends ButtonBaseProps,
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-[#5B21B6] text-white font-semibold rounded",
    "hover:bg-[#7C3AED]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  ),
  secondary: cn(
    "border-2 border-[#5B21B6] text-[#5B21B6] bg-transparent rounded",
    "hover:bg-[#5B21B6] hover:text-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  ),
  "outline-light": cn(
    "border-2 border-white/80 text-white bg-transparent rounded",
    "hover:bg-white hover:text-[#5B21B6]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#5B21B6]"
  ),
  white: cn(
    "bg-white text-[#5B21B6] font-semibold rounded shadow-lg",
    "hover:bg-[#F5F3FF] hover:shadow-xl",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#5B21B6]"
  ),
  ghost: cn(
    "text-[#1F2937] bg-transparent underline-offset-4 hover:underline",
    "hover:text-[#5B21B6]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const combinedClassName = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    const { ...linkProps } = props as Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof ButtonBaseProps
    >;

    // External links
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps
  >;

  return (
    <button className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
