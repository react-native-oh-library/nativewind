import { PlatformOSType } from "react-native";
declare type PlatformFunctionString = string;
export declare const platformSelect: (value: Partial<Record<PlatformOSType | "default", unknown>> | PlatformFunctionString) => string;
export declare const platformColor: (color: PlatformFunctionString) => string;
export declare const hairlineWidth: () => string;
export declare const pixelRatio: (v: number | Record<string, number> | PlatformFunctionString) => string;
export declare const fontScale: (v: number | Record<string, number> | PlatformFunctionString) => string;
export declare const getPixelSizeForLayoutSize: (n: number | PlatformFunctionString) => string;
export declare const roundToNearestPixel: (n: number | PlatformFunctionString) => string;
export {};
