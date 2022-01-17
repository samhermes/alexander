module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "semi": ["error", "never"],
        "quotes": ["error", "single"],
        "no-console": ["error", { allow: ["warn", "error"] }]
    }
};