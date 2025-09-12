import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    redirects: {
        "exploration-and-emergence": "/blog/exploration-and-emergence"
    }
});