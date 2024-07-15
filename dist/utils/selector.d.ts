import type { PlatformOSType } from "react-native";
export declare const PARENT_FOCUS = 4194304;
export declare const PARENT_HOVER = 2097152;
export declare const PARENT_ACTIVE = 1048576;
export declare const ISO_GROUP_FOCUS = 524288;
export declare const ISO_GROUP_HOVER = 262144;
export declare const ISO_GROUP_ACTIVE = 131072;
export declare const GROUP_FOCUS = 65536;
export declare const GROUP_HOVER = 32768;
export declare const GROUP_ACTIVE = 16384;
export declare const PARENT = 8192;
export declare const GROUP_ISO = 4096;
export declare const GROUP = 2048;
export declare const FOCUS = 1024;
export declare const HOVER = 512;
export declare const ACTIVE = 256;
export declare const RTL = 128;
export declare const OSX = 64;
export declare const WINDOWS = 32;
export declare const WEB = 16;
export declare const ANDROID = 8;
export declare const HARMONY = 4;
export declare const IOS = 2;
export declare const DARK_MODE = 1;
export declare const hasDarkPseudoClass: (string: string) => boolean;
export declare function normalizeCssSelector(selector: string): string;
export interface StateBitOptions {
    darkMode?: boolean;
    hover?: boolean;
    active?: boolean;
    focus?: boolean;
    group?: boolean;
    groupHover?: boolean;
    groupActive?: boolean;
    groupFocus?: boolean;
    isolateGroup?: boolean;
    isolateGroupHover?: boolean;
    isolateGroupActive?: boolean;
    isolateGroupFocus?: boolean;
    parent?: boolean;
    parentHover?: boolean;
    parentFocus?: boolean;
    parentActive?: boolean;
    platform?: PlatformOSType;
    rtl?: boolean;
    baseBit?: number;
}
export declare function getStateBit(options?: StateBitOptions): number;
export declare function createAtRuleSelector(className: string, atRuleIndex: number): string;
export declare function matchesMask(value: number, mask: number): boolean;
export declare function getSelectorMask(selector: string, rtl?: boolean): number;