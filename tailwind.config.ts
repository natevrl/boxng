import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-inter)",
      knockoutHeavy: "var(--font-knockout-heavy)",
      knockoutHeavyLight: "var(--font-knockout-light)",
    },
    extend: {
      fontSize: {
        clamp: "clamp(2rem, 20vw, 170px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        mobile: {max: "479px"},
        tablet: {max: "767px"},
        laptop: {max: "1023px"},
        desktop: {max: "1439px"},
        fhd: {max: "1919px"},
        qhd: {max: "2559px"},
        "4k": {max: "3839px"},
        "min-mbl": {min: "480px"},
        "min-tbl": {min: "768px"},
        "min-lpt": {min: "1024px"},
        "min-desk": {min: "1440px"},
        "min-fhd": {min: "1920px"},
        "min-qhd": {min: "2560px "},
        "min-4k": {min: "3840px "},
      },
      width: {
        mobile: "480px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
        largeDesktop: "1920px",
      },
      maxWidth: {
        mobile: "480px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
        largeDesktop: "1920px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'pulse-faster': "pulse 1s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
