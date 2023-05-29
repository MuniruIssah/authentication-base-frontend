module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "ignorePatterns":["postcss.config.js","tailwind.config.js"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'react/react-in-jsx-scope': 0,
        'react/function-component-definition':0,
        'react/jsx-props-no-spreading':0
    }
}
