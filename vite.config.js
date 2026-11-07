import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// base './' keeps every asset path relative, so the build works on a GitHub project page (user.github.io/repo/) and on a custom domain alike.
export default defineConfig({ base: './', plugins: [svelte()] });
