import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      'bounce': "bounce 2s infinite",
    },
    fontFamily: {
      // primary: "var(--font-adlam-display)",
      knockoutLight: ['knockout-light', 'sans-serif'],
      knockoutHeavy: ['knockout-heavy', 'sans-serif'],
      knockoutHeavyLight: ['knockout-heavy-light', 'sans-serif'],
      knockoutWelter: ['knockout-welter', 'sans-serif'],
      primary: ['raleway', 'sans-serif'],
    },
    extend: {
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
        'mobile': {'max': '480px'},
        'tablet': {'max': '768px'},
        'laptop': {'max': '992px'},
        'desktop': {'max': '1440px'},
        'fhd': {'max': '1920px'},
        'qhd': {'max': '2560px '},
        '4k': {'max': '3840px '},
        'min-mbl': {'min': '480px'},
        'min-tbl': {'min': '768px'},
        'min-lpt': {'min': '992px'},
        'min-desk': {'min': '1440px'},
        'min-fhd': {'min': '1920px'},
        'min-qhd': {'min': '2560px '},
        'min-4k': {'min': '3840px '},
        
      },
      width: {
        mobile: '480px',
        tablet: '768px',
        laptop: '992px',
        desktop: '1440px',
        largeDesktop: '1920px',
      },
      maxWidth: {
        mobile: '480px',
        tablet: '768px',
        laptop: '992px',
        desktop: '1440px',
        largeDesktop: '1920px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
