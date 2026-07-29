import { defineConfig } from "eslint/config";
import compat from "eslint-plugin-compat";

export default defineConfig([
    {
        plugins: {
            compat,
		},
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            quotes: ["error", "single"],
            "no-console": ["error", { allow: ["warn", "error"] }],
            semi: ["warn", "always"],
        }
    }
]);