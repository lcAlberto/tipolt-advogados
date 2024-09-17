/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        my: {
          "primary": "#012a2c",
          "primary-content": "#c8d0d0",
          "secondary": "#cab48f",
          "secondary-content": "#0f0c07",
          "accent": "#023536",
          "accent-content": "#cad3d3",
          "neutral": "#10171f",
          "neutral-content": "#c9cbcd",
          "base-100": "#fff5f2",
          "base-200": "#d2bd9e",
          "base-300": "#cab48f",
          "base-content": "#161514",
          "info": "#0074c3",
          "info-content": "#d2e3f5",
          "success": "#aed900",
          "success-content": "#0b1100",
          "warning": "#fcd34d",
          "warning-content": "#161002",
          "error": "#fb7185",
          "error-content": "#150406",
        },
        dark: {
          "primary": "#012a2c",
          "primary-content": "#c8d0d0",
          "secondary": "#cab48f",
          "secondary-content": "#0f0c07",
          "accent": "#023536",
          "accent-content": "#cad3d3",
          "neutral": "#c9cbcd",
          "neutral-content": "#10171f",
          "base-100": "#161514",
          "base-200": "#d2bd9e",
          "base-300": "#cab48f",
          "base-content": "#fff5f2",
          "info": "#0074c3",
          "info-content": "#d2e3f5",
          "success": "#aed900",
          "success-content": "#0b1100",
          "warning": "#fcd34d",
          "warning-content": "#161002",
          "error": "#fb7185",
          "error-content": "#150406",
        },
      },
    ],
  },
}

