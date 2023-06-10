import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'build',
    },
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  };
});
