import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
			bg: 'hsl(var(--bg))',
			primary: 'hsl(var(--primary))',
			secondary: 'hsl(var(--secondary))',
			textPrimary: 'hsl(var(--text-primary))',
			primaryText: 'hsl(var(--primary-text))',
			secondaryText: 'hsl(var(--secondary-text))',
			lightText: 'hsl(var(--light-text))',
			thirdText: 'hsl(var(--third-text))',
  		},
		transitionDuration: {
			DEFAULT: '500ms', // Set default duration to 500ms
		},
		screens : {
			xs : '400px'
		}
  	}
  },
  plugins: [tailwindAnimate],
} satisfies Config;
