module.exports = {
    "env": {
        "es6": true,
        "react-native/react-native": true,
    },
    "parser": "babel-eslint",
    "plugins": [
      "flowtype",
      "react",
      "react-native",
    ],
    "extends": [
      "eslint:recommended",
      "plugin:flowtype/recommended",
      "plugin:react/recommended",
      "plugin:react-native/all"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react-native/no-color-literals": 0,
    }
};
