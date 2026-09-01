/* =========================================================
   BhoomiMesh site — Tailwind Play CDN configuration
   MUST be loaded after https://cdn.tailwindcss.com in <head>.
   ========================================================= */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
      /* fadeUp / pulseSoft keyframes live in assets/css/site.css
         so they are available to both Tailwind utilities and
         the inline animation styles injected by the JS renderers. */
    }
  }
};
