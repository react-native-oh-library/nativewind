"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boxShadow = void 0;
const css_to_react_native_1 = require("css-to-react-native");
const boxShadow = ({ matchUtilities, theme, addComponents }, notSupported) => {
    matchUtilities({
        "shadow-inner": notSupported("shadow-inner"),
    }, { values: theme("boxShadow"), type: ["shadow"] });
    const themeValues = Object.entries(theme("boxShadow"));
    const elevation = theme("elevation");
    const androidShadowComponents = themeValues.map(([size, value]) => ({
        "@media android": {
            [key(size)]: {
                elevation: elevation[size],
                shadowColor: (0, css_to_react_native_1.getStylesForProperty)("boxShadow", value)
                    .shadowColor,
            },
        },
    }));
    const iosShadowComponents = themeValues.map(([size, value]) => ({
        "@media ios": {
            [key(size)]: {
                boxShadow: value,
            },
        },
    }));
    const harmonyShadowComponents = themeValues.map(([size, value]) => ({
        "@media harmony": {
            [key(size)]: {
                boxShadow: value,
            },
        },
    }));
    const webShadowComponents = themeValues.map(([size, value]) => ({
        "@media web": {
            [key(size)]: {
                boxShadow: value,
            },
        },
    }));
    addComponents([
        androidShadowComponents,
        harmonyShadowComponents,
        iosShadowComponents,
        webShadowComponents,
    ]);
};
exports.boxShadow = boxShadow;
const key = (size) => {
    return size === "DEFAULT" ? ".shadow" : `.shadow-${size}`;
};
