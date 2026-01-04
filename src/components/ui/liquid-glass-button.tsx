"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 duration-300 transition text-primary",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 text-xs gap-1.5 px-4 has-[>svg]:px-4",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-md px-8 has-[>svg]:px-6",
        xxl: "h-14 rounded-md px-10 has-[>svg]:px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xxl",
    },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <>
      <GlassFilter />
      <Comp
        className={cn(
          "relative",
          liquidbuttonVariants({ variant, size, className })
        )}
        {...props}
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ filter: "url(#glass)" }}
        >
          <span className="absolute inset-0 rounded-[inherit] bg-primary/60 backdrop-blur-md" />
        </span>

        <span
          className="pointer-events-none absolute inset-0 rounded-[inherit] border border-primary/50"
          style={{ filter: "url(#glass)" }}
        />

        <span className="pointer-events-none absolute inset-0 rounded-[inherit] border border-primary/30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <span className="relative z-10 flex items-center justify-center gap-2 text-primary-foreground drop-shadow-md">
          {children}
        </span>

        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_1px_2px_2px_rgba(255,255,255,0.4)]" />
      </Comp>
    </>
  )
}

function GlassFilter() {
  return (
    <span className="sr-only">
      <svg aria-hidden="true">
        <defs>
          <filter id="glass" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.15"
              numOctaves="2"
              result="noise"
            />

            <feGaussianBlur in="noise" stdDeviation="0.5" result="blurredNoise" />

            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredNoise"
              scale="1.5"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />

            <feGaussianBlur in="displaced" stdDeviation="0.35" result="finalBlur" />

            <feMerge>
              <feMergeNode in="finalBlur" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </span>
  );
}

export { LiquidButton, liquidbuttonVariants }
