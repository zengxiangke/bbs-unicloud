import { defineConfig, type Plugin } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //
    uni(),
    extraUniSdk(),
  ],
});

function extraUniSdk(): Plugin {
  return {
    name: "extra-uni-sdk",
    apply: "build",
    enforce: "post",
    transform(code, id, options) {
      if (id.includes("index.html")) {
        return `

  import "/src/main.ts"

            `;
      }

      if (id.includes("uni-sdk/src/main.ts")) {
        return `

  // fix: Uncaught (in promise) ReferenceError: __uniConfig is not defined
  import "./pages-json-js";

  import { default as uniCloud } from '@dcloudio/uni-cloud';
  window.uni_sdk = uniCloud;

            `;
      }
      return code;
    },
  };
}
