/**
 * Oreko — Design System
 *
 * Centralised design tokens for colours, typography, spacing, shadows,
 * components, transitions, breakpoints, and z-index.
 *
 * This file is the single source of truth for the visual language of the
 * Oreko website. Import from here instead of hard-coding values across
 * components. All CSS custom properties defined in globals.css are
 * mirrored here so that TypeScript components can reference them with
 * full type-safety.
 *
 * Colour model: OKLCH (perceptually uniform). The raw OKLCH values are
 * stored as CSS variables; this file exposes both the variable references
 * and the approximate hex equivalents for quick reference.
 */

export const designSystem = {
  meta: {
    name: "Oreko Design System",
    version: "1.0.0",
    colorModel: "OKLCH",
    cssFramework: "Tailwind CSS 3.4",
    componentVariants: "Class Variance Authority (CVA)",
  },

  // ─── Colours ────────────────────────────────────────────────
  colors: {
    brand: {
      primary: {
        50: { oklch: "oklch(0.9785 0.0093 231.94)", approxHex: "#F8F9FE", cssVar: "var(--primary-50)" },
        100: { oklch: "oklch(0.9521 0.0193 232.19)", approxHex: "#F0F2FE", cssVar: "var(--primary-100)" },
        200: { oklch: "oklch(0.9035 0.041 230.66)", approxHex: "#DEE3FC", cssVar: "var(--primary-200)" },
        300: { oklch: "oklch(0.815 0.0757 230.32)", approxHex: "#B5C2F7", cssVar: "var(--primary-300)" },
        400: { oklch: "oklch(0.7527 0.1062 232.98)", approxHex: "#8DA3F0", cssVar: "var(--primary-400)" },
        500: { oklch: "oklch(0.6898 0.1101 233.96)", approxHex: "#5B7FDB", cssVar: "var(--primary-500)" },
        600: { oklch: "oklch(0.5915 0.1022 236.73)", approxHex: "#4C5FC7", cssVar: "var(--primary-600)" },
        700: { oklch: "oklch(0.5033 0.0865 237.61)", approxHex: "#3D4BA8", cssVar: "var(--primary-700)" },
        800: { oklch: "oklch(0.4444 0.0709 238.67)", approxHex: "#33407E", cssVar: "var(--primary-800)" },
        900: { oklch: "oklch(0.3924 0.0581 239.91)", approxHex: "#1F2A5C", cssVar: "var(--primary-900)" },
        950: { oklch: "oklch(0.2947 0.0431 240.34)", approxHex: "#1B2547", cssVar: "var(--primary-950)" },
        1000: { oklch: "oklch(0.231 0.033 241.68)", approxHex: "#141B35", cssVar: "var(--primary-1000)" },
      },
    },

    base: {
      50: { oklch: "oklch(0.9842 0.0032 228.71)", approxHex: "#F9FAFB", cssVar: "var(--base-50)" },
      100: { oklch: "oklch(0.9682 0.0064 229.74)", approxHex: "#F3F4F6", cssVar: "var(--base-100)" },
      200: { oklch: "oklch(0.9213 0.0126 230.32)", approxHex: "#E5E7EB", cssVar: "var(--base-200)" },
      300: { oklch: "oklch(0.869 0.019 231.62)", approxHex: "#D1D5DB", cssVar: "var(--base-300)" },
      400: { oklch: "oklch(0.7047 0.0227 234.18)", approxHex: "#9CA3AF", cssVar: "var(--base-400)" },
      500: { oklch: "oklch(0.554 0.0246 234.94)", approxHex: "#6B7280", cssVar: "var(--base-500)" },
      600: { oklch: "oklch(0.4459 0.0239 235)", approxHex: "#4B5563", cssVar: "var(--base-600)" },
      700: { oklch: "oklch(0.3723 0.0221 234.88)", approxHex: "#374151", cssVar: "var(--base-700)" },
      800: { oklch: "oklch(0.2779 0.0189 236.17)", approxHex: "#1F2937", cssVar: "var(--base-800)" },
      900: { oklch: "oklch(0.209 0.0176 237.67)", approxHex: "#111827", cssVar: "var(--base-900)" },
      950: { oklch: "oklch(0.1311 0.0164 238.31)", approxHex: "#030712", cssVar: "var(--base-950)" },
      1000: { oklch: "oklch(0.0807 0.0151 238.65)", approxHex: "#000000", cssVar: "var(--base-1000)" },
    },

    semantic: {
      success: { main: "oklch(0.648 0.150 160)", approxHex: "#22C55E", cssVar: "var(--success)", contrastText: "#FFFFFF" },
      warning: { main: "oklch(0.769 0.189 70.08)", approxHex: "#F59E0B", cssVar: "var(--warning)", contrastText: "#FFFFFF" },
      destructive: { main: "oklch(0.577 0.245 27.325)", approxHex: "#EF4444", cssVar: "var(--destructive)", contrastText: "#FFFFFF" },
      info: { main: "var(--primary-500)", approxHex: "#5B7FDB", cssVar: "var(--primary-500)", contrastText: "#FFFFFF" },
    },

    background: {
      light: {
        default: "var(--base-50)",    // #F9FAFB
        paper: "var(--base-50)",      // #F9FAFB (card)
        muted: "var(--base-100)",     // #F3F4F6
        overlay: "rgba(0, 0, 0, 0.5)",
      },
      dark: {
        default: "var(--base-950)",   // #030712
        paper: "var(--base-900)",     // #111827 (card)
        muted: "var(--base-800)",     // #1F2937
        overlay: "rgba(0, 0, 0, 0.7)",
      },
    },

    text: {
      light: {
        primary: "var(--base-950)",     // #030712
        secondary: "var(--base-500)",   // #6B7280
        disabled: "var(--base-400)",    // #9CA3AF
        link: "var(--primary-600)",     // #4C5FC7
      },
      dark: {
        primary: "var(--base-50)",      // #F9FAFB
        secondary: "var(--base-400)",   // #9CA3AF
        disabled: "var(--base-600)",    // #4B5563
        link: "var(--primary-400)",     // #8DA3F0
      },
    },

    border: {
      light: {
        default: "var(--base-200)",     // #E5E7EB
        input: "var(--base-200)",       // #E5E7EB
        accent: "var(--primary-500)",   // #5B7FDB
      },
      dark: {
        default: "var(--base-800)",     // #1F2937
        input: "var(--base-800)",       // #1F2937
        accent: "var(--primary-400)",   // #8DA3F0
      },
    },

    chart: {
      1: "var(--primary-500)",
      2: "oklch(0.648 0.150 160)",      // Green
      3: "var(--primary-700)",
      4: "oklch(0.769 0.189 70.08)",    // Warning yellow
      5: "oklch(0.7 0.15 45)",          // Orange
    },

    gradients: {
      primary: "linear-gradient(135deg, var(--primary-500), var(--primary-700))",
      primarySubtle: {
        light: "linear-gradient(135deg, var(--primary-50), var(--primary-100))",
        dark: "linear-gradient(135deg, var(--primary-950), var(--primary-900))",
      },
      accent: "linear-gradient(135deg, var(--primary-400), var(--primary-600))",
      cardBorder: "linear-gradient(to right, var(--primary-200), var(--primary-400))",
    },
  },

  // ─── Typography ─────────────────────────────────────────────
  typography: {
    fontFamilies: {
      display: "Lexend, sans-serif",
      text: "Funnel Sans, sans-serif",
      mono: "JetBrains Mono, monospace",
      serif: "Merriweather, serif",
    },

    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },

    fontSizeScale: 1.03, // html font-size: calc(16px * 1.03) ≈ 16.5px base

    scale: {
      h1: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 500,
        fontSize: "3rem",         // 48px — text-5xl
        lineHeight: 1.2,
        letterSpacing: "normal",
        responsiveClass: "text-4xl sm:text-5xl lg:text-[3.5rem]",
      },
      h2: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 500,
        fontSize: "2.25rem",      // 36px — text-4xl
        lineHeight: 1.3,
        letterSpacing: "normal",
        responsiveClass: "text-3xl sm:text-4xl",
      },
      h3: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 500,
        fontSize: "1.875rem",     // 30px — text-3xl
        lineHeight: 1.4,
        letterSpacing: "normal",
        responsiveClass: "text-2xl sm:text-3xl",
      },
      h4: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 600,
        fontSize: "1.5rem",       // 24px — text-2xl
        lineHeight: 1.4,
        letterSpacing: "normal",
      },
      h5: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 600,
        fontSize: "1.25rem",      // 20px — text-xl
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      h6: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 600,
        fontSize: "1.125rem",     // 18px — text-lg
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      subtitle1: {
        fontFamily: "Funnel Sans, sans-serif",
        fontWeight: 400,
        fontSize: "1.125rem",     // 18px — text-lg
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      body1: {
        fontFamily: "Funnel Sans, sans-serif",
        fontWeight: 400,
        fontSize: "1rem",         // 16px — text-base
        lineHeight: 1.6,
        letterSpacing: "normal",
      },
      body2: {
        fontFamily: "Funnel Sans, sans-serif",
        fontWeight: 400,
        fontSize: "0.875rem",     // 14px — text-sm
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      caption: {
        fontFamily: "Funnel Sans, sans-serif",
        fontWeight: 400,
        fontSize: "0.75rem",      // 12px — text-xs
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      button: {
        fontFamily: "Funnel Sans, sans-serif",
        fontWeight: 600,
        fontSize: "0.875rem",     // 14px — text-sm
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
      navigation: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 500,
        fontSize: "1.125rem",     // 18px — text-lg
        lineHeight: 1.5,
        letterSpacing: "normal",
      },
    },

    fontFeatureSettings: "'rlig' 1, 'calt' 1",

    utilities: {
      textBalance: "text-wrap: balance",
      fontDisplay: "font-display — Lexend with medium weight",
      fontText: "font-text — Funnel Sans with regular weight",
    },
  },

  // ─── Spacing ────────────────────────────────────────────────
  spacing: {
    base: 4,
    unit: "px",
    scale: {
      "0.5": "2px",
      "1": "4px",
      "1.5": "6px",
      "2": "8px",
      "2.5": "10px",
      "3": "12px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "8": "32px",
      "10": "40px",
      "12": "48px",
      "14": "56px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "28": "112px",
    },
    component: {
      badgePadding: "px-2.5 py-0.5",
      buttonPaddingDefault: "px-4 py-2",
      buttonPaddingLg: "px-8",
      buttonPaddingXl: "px-10",
      cardPadding: "p-6",
      inputPadding: "px-3 py-2",
    },
    section: {
      hero: "pt-24 pb-16",
      standard: "py-24",
      footer: "py-16",
      containerGutter: "px-6",
    },
    gaps: {
      iconText: "gap-2",         // 8px
      listItems: "gap-3",        // 12px
      sectionContent: "gap-8",   // 32px
      gridItems: "gap-10",       // 40px
      marquee: "1rem",           // 16px
    },
  },

  // ─── Border Radius ──────────────────────────────────────────
  borderRadius: {
    cssVar: "--radius: 0.5rem",  // 8px base
    none: "0px",
    sm: "calc(var(--radius) - 4px)",  // 4px — rounded-sm
    md: "calc(var(--radius) - 2px)",  // 6px — rounded-md
    lg: "var(--radius)",              // 8px — rounded-lg (default)
    xl: "calc(var(--radius) + 4px)",  // 12px — rounded-xl
    "2xl": "16px",                    // rounded-2xl
    full: "9999px",                   // rounded-full (pills, avatars)
    usage: {
      buttons: "rounded-md",
      badges: "rounded-md",
      cards: "rounded-lg",
      images: "rounded-xl",
      avatars: "rounded-full",
    },
  },

  // ─── Shadows ────────────────────────────────────────────────
  shadows: {
    light: {
      "2xs": "0px 4px 8px -1px rgb(0 0 0 / 0.05)",
      xs: "0px 4px 8px -1px rgb(0 0 0 / 0.05)",
      sm: "0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 1px 2px -2px rgb(0 0 0 / 0.10)",
      DEFAULT: "0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 1px 2px -2px rgb(0 0 0 / 0.10)",
      md: "0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 2px 4px -2px rgb(0 0 0 / 0.10)",
      lg: "0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 4px 6px -2px rgb(0 0 0 / 0.10)",
      xl: "0px 4px 8px -1px rgb(0 0 0 / 0.10), 0px 8px 10px -2px rgb(0 0 0 / 0.10)",
      "2xl": "0px 4px 8px -1px rgb(0 0 0 / 0.25)",
    },
    dark: {
      "2xs": "0 1px 3px 0px rgb(0 0 0 / 0.15)",
      xs: "0 1px 3px 0px rgb(0 0 0 / 0.15)",
      sm: "0 1px 3px 0px rgb(0 0 0 / 0.20), 0 1px 2px -1px rgb(0 0 0 / 0.20)",
      DEFAULT: "0 1px 3px 0px rgb(0 0 0 / 0.20), 0 1px 2px -1px rgb(0 0 0 / 0.20)",
      md: "0 1px 3px 0px rgb(0 0 0 / 0.20), 0 2px 4px -1px rgb(0 0 0 / 0.20)",
      lg: "0 1px 3px 0px rgb(0 0 0 / 0.20), 0 4px 6px -1px rgb(0 0 0 / 0.20)",
      xl: "0 1px 3px 0px rgb(0 0 0 / 0.20), 0 8px 10px -1px rgb(0 0 0 / 0.20)",
      "2xl": "0 1px 3px 0px rgb(0 0 0 / 0.35)",
    },
    none: "none",
  },

  // ─── Component Tokens ───────────────────────────────────────
  components: {
    button: {
      variants: {
        default: {
          className: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          description: "Primary filled button",
        },
        destructive: {
          className: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          description: "Red destructive action",
        },
        outline: {
          className: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          description: "Outlined button",
        },
        secondary: {
          className: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          description: "Muted background button",
        },
        ghost: {
          className: "hover:bg-accent hover:text-accent-foreground",
          description: "Transparent, hover fills",
        },
        link: {
          className: "text-primary underline-offset-4 hover:underline",
          description: "Text link style",
        },
        success: {
          className: "bg-success text-success-foreground shadow hover:bg-success/90",
          description: "Green success action",
        },
      },
      sizes: {
        sm: { height: "h-8", padding: "px-3", fontSize: "text-xs" },
        default: { height: "h-9", padding: "px-4 py-2", fontSize: "text-sm" },
        lg: { height: "h-10", padding: "px-8", fontSize: "text-sm" },
        xl: { height: "h-12", padding: "px-10", fontSize: "text-base" },
        icon: { height: "h-9", width: "w-9", padding: "p-0" },
      },
      base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
      loading: "Spinner SVG replaces icon when loading prop is true",
    },

    badge: {
      variants: {
        default: "bg-primary text-primary-foreground shadow",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground shadow-sm",
        outline: "border border-foreground text-foreground",
        success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
        warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
        info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
      },
      base: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    },

    card: {
      base: "rounded-lg border border-border bg-card text-card-foreground",
      header: "flex flex-col space-y-1.5 p-6",
      title: "font-semibold leading-none tracking-tight",
      description: "text-sm text-muted-foreground",
      content: "p-6 pt-0",
      footer: "flex items-center p-6 pt-0",
    },

    spotlightCard: {
      description: "Card with radial gradient spotlight that follows cursor",
      spotlightColor: "rgba(59, 130, 246, 0.08)",
      spotlightRadius: "600px",
      transitionDuration: "duration-300",
    },

    input: {
      base: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    },

    navigation: {
      position: "sticky top-0 z-50",
      desktop: "hidden md:flex",
      mobile: "md:hidden",
      maxWidth: "max-w-6xl",
      logo: { size: "w-8 h-8", borderRadius: "rounded-lg", background: "bg-primary" },
      font: "font-display font-medium text-lg",
    },

    footer: {
      base: "border-t border-border bg-background",
      grid: "grid-cols-2 md:grid-cols-6",
      gap: "gap-8",
      sectionTitle: "text-sm font-medium text-foreground",
      linkText: "text-sm text-muted-foreground hover:text-foreground",
      linkSpacing: "space-y-3",
    },

    divider: {
      className: "border-border",
      thickness: "1px",
    },
  },

  // ─── Transitions & Animations ───────────────────────────────
  transitions: {
    durations: {
      fast: "150ms",
      default: "200ms",
      medium: "300ms",
      slow: "500ms",
    },
    easing: {
      default: "ease-out",
      inOut: "ease-in-out",
      linear: "linear",
    },
    common: {
      colors: "transition-colors",
      all: "transition-all",
      transform: "transition-transform",
      opacity: "transition-opacity",
      shadow: "transition-shadow",
    },
  },

  animations: {
    keyframes: {
      accordionDown: { duration: "0.2s", easing: "ease-out" },
      accordionUp: { duration: "0.2s", easing: "ease-out" },
      fadeIn: { duration: "0.2s" },
      fadeOut: { duration: "0.2s" },
      shimmer: { duration: "3s", iteration: "infinite" },
      marquee: { duration: "var(--duration, 40s)", iteration: "infinite" },
      borderSpin: { duration: "7s", iteration: "infinite", easing: "linear" },
      cellRipple: { duration: "var(--duration)" },
    },
    motionLibrary: "Motion (Framer Motion v12)",
    gsap: "GSAP 3.14 with InertiaPlugin — used for DotGrid interactive physics",
  },

  // ─── Breakpoints ────────────────────────────────────────────
  breakpoints: {
    approach: "Mobile-first (min-width)",
    values: {
      xs: "0px",       // (no prefix) — base styles
      sm: "640px",     // sm:
      md: "768px",     // md:
      lg: "1024px",    // lg:
      xl: "1280px",    // xl:
      "2xl": "1536px", // 2xl:
    },
    container: {
      maxWidth: "max-w-6xl",   // 1152px
      padding: "px-6",         // 24px gutters
      centered: "mx-auto",
    },
    patterns: {
      showDesktopNav: "hidden md:flex",
      showMobileNav: "md:hidden",
      responsiveGrid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
      responsiveStack: "flex-col lg:flex-row",
      hideOnMobile: "hidden sm:inline",
    },
  },

  // ─── Z-Index ────────────────────────────────────────────────
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 50,         // Sticky header
    skipToContent: 100,  // Accessibility skip link
    overlay: 1200,
    modal: 1300,
    tooltip: 1500,
  },

  // ─── Scrollbar ──────────────────────────────────────────────
  scrollbar: {
    hidden: true,
    description: "Scrollbars are hidden globally. Use .no-scrollbar utility class.",
    css: "scrollbar-width: none; -ms-overflow-style: none; ::-webkit-scrollbar { width: 0; height: 0; }",
  },

  // ─── Theme ──────────────────────────────────────────────────
  theme: {
    provider: "next-themes",
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    disableTransitionOnChange: true,
    viewportMetaColor: { light: "white", dark: "black" },
  },

  // ─── Icons ──────────────────────────────────────────────────
  icons: {
    library: "Lucide React",
    defaultSize: "h-4 w-4",
    largeSize: "h-5 w-5",
    svgBased: true,
  },

  // ─── Accessibility ──────────────────────────────────────────
  accessibility: {
    skipToContent: "sr-only, visible on focus at z-[100]",
    focusRing: "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    disabledState: "disabled:pointer-events-none disabled:opacity-50",
    ariaLabels: "Required on icon-only buttons and nav menus",
  },

  // ─── Print ──────────────────────────────────────────────────
  print: {
    bodyBackground: "white",
    hideClass: ".no-print { display: none }",
    showClass: ".print-only { display: block }",
  },
} as const;

// ─── Convenience Aliases ────────────────────────────────────
export const colors = designSystem.colors;
export const typography = designSystem.typography;
export const spacing = designSystem.spacing;
export const shadows = designSystem.shadows;
export const borderRadius = designSystem.borderRadius;
export const transitions = designSystem.transitions;
export const breakpoints = designSystem.breakpoints;
export const components = designSystem.components;
export const zIndex = designSystem.zIndex;
export const animations = designSystem.animations;
