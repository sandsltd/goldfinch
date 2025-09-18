import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // European Goldfinch inspired color palette with customer colors
        goldfinch: {
          // CTA Gold color from goldfinch - brighter yellow
          gold: '#FFD700',
          // Main dark color - changed to black
          dark: '#1a1a1a',
          // Main light color  
          light: '#D5CCC0',
          
          // Bright red from the face
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444', // Main red
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
          // Golden yellow variations based on customer gold
          yellow: {
            50: '#fefdf5',
            100: '#fefbe8',
            200: '#fef7c6',
            300: '#fef099',
            400: '#fde85c',
            500: '#FFD700', // Customer CTA gold - brighter
            600: '#c5a916',
            700: '#a18913',
            800: '#846c15',
            900: '#6e5814',
          },
          // Light variations based on customer light color
          white: {
            50: '#fdfcfb',
            100: '#fcfaf8',
            200: '#f9f6f2',
            300: '#f5f0ea',
            400: '#ede4d9',
            500: '#D5CCC0', // Customer light color
            600: '#c1b5a8',
            700: '#a69a8c',
            800: '#8a7f73',
            900: '#71675d',
          },
          // Black from the wing tips and markings
          black: {
            50: '#f8f8f8',
            100: '#f0f0f0',
            200: '#e4e4e4',
            300: '#d1d1d1',
            400: '#b4b4b4',
            500: '#9a9a9a',
            600: '#818181',
            700: '#6a6a6a',
            800: '#5a5a5a',
            900: '#1a1a1a', // Main black
          },
          // Brown variations based on customer dark color
          brown: {
            50: '#faf8f6',
            100: '#f4f0ed',
            200: '#e8ddd6',
            300: '#dbc6b9',
            400: '#c7a590',
            500: '#b8936f',
            600: '#a4825c',
            700: '#84674B', // Customer dark color
            800: '#6d5540',
            900: '#5a4735',
          },
        },
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
    },
  },
  plugins: [],
};
export default config;
