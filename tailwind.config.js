/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'sans-serif'],
      },
      colors: {
        color1: "#1b1b1d",
        color2: "#242526",
        color3: "#444950",
        color4: "#d1d3d8",
        color5: "#f1f1f1",
        color6: "#f9fafb",
        color7: "#ff5722",
        color8: "#3f51b5",
        color9: "#00dc82",
        color10: "#9c27b0",
      },
      backgroundImage: {
        // 'hero-gradient': 'linear-gradient(to bottom, #67311f 0%, #1b1b1d 15%, #242526 90%, transparent 100%)',
      },
    },
  },
  plugins: [],
}

