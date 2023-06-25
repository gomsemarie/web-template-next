import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from 'vite-plugin-html'
import react from "@vitejs/plugin-react-swc";
import dns from "dns";
import * as path from "path";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(), 
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            VITE_FONTAWESOME_KEY: env.VITE_FONTAWESOME_KEY,
          }
        }
      }),
    ],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
      host: "localhost",
      port: 3001,
    },
  }
};
