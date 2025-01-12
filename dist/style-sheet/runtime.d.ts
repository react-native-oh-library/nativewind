import { Dimensions, Appearance, ScaledSize, EmitterSubscription, NativeEventSubscription, TextStyle, ImageStyle, ViewStyle, Platform, StyleProp, PlatformOSType } from "react-native";
import { MatchChildAtRuleOptions } from "./match-at-rule";
import { StateBitOptions } from "../utils/selector";
import { MediaRecord } from "../types/common";
import { ColorSchemeStore } from "./color-scheme";
export type { ColorSchemeSystem, ColorSchemeName } from "./color-scheme";
export declare type Style = ViewStyle | ImageStyle | TextStyle;
export declare type InlineStyle<T extends Style> = T;
export declare type AtRuleStyle<T extends Style> = T & {
    atRules: unknown[];
};
export declare type CompiledStyle = {
    [key: string]: string;
} & {
    $$css: boolean;
};
export declare type EitherStyle<T extends Style = Style> = AtRuleStyle<T> | CompiledStyle | InlineStyle<T> | StyleProp<T>;
export declare type Snapshot = Record<string, StylesArray>;
export interface StylesArray<T extends Style = Style> extends Array<EitherStyle<T>> {
    childClassNames?: string[];
    mask?: number;
}
/**
 * Tailwind styles are strings of atomic classes. eg "a b" compiles to [a, b]
 *
 * If the styles are static we can simply cache them and return a stable result
 *
 * However, if the styles are dynamic (have atRules) there are two things we need to do
 *  - Update the atomic style
 *  - Update the dependencies of the atomic style
 *
 * This is performed by each style subscribing to a atRule topic. The atomic styles are updated
 * before the parent styles.
 *
 * The advantage of this system is that styles are only updated once, no matter how many components
 * are on using them
 *
 * The disadvantages are
 * - Is that the store doesn't purge unused styles, so the listeners will continue to grow
 * - UI states (hover/active/focus) are considered separate styles
 *
 * If you are interested in helping me build a more robust store, please create an issue on Github.
 *
 */
export declare class StyleSheetRuntime extends ColorSchemeStore {
    snapshot: Snapshot;
    listeners: Set<() => void>;
    atRuleListeners: Set<(topics: string[]) => void>;
    dimensionListener?: EmitterSubscription;
    appearanceListener?: NativeEventSubscription;
    dangerouslyCompileStyles?: (className: string, store: StyleSheetRuntime) => void;
    styles: Record<string, Style>;
    atRules: MediaRecord;
    transforms: Record<string, true>;
    topics: Record<string, Array<string>>;
    childClasses: Record<string, Array<string>>;
    masks: Record<string, number>;
    units: Record<string, Record<string, string>>;
    preprocessed: boolean;
    platform: typeof Platform.OS;
    window: ScaledSize;
    orientation: OrientationLockType;
    constructor();
    setDimensions(dimensions: Dimensions): void;
    setAppearance(appearance: typeof Appearance): void;
    setPlatform(platform: typeof Platform.OS): void;
    setOutput(specifics: {
        [platform in PlatformOSType | "default"]?: "css" | "native";
    }): void;
    setDangerouslyCompileStyles(dangerouslyCompileStyles: (className: string, store: StyleSheetRuntime) => void): void;
    getSnapshot: () => Snapshot;
    getServerSnapshot(): Snapshot;
    subscribe: (listener: () => void) => () => boolean;
    destroy(): void;
    notify(): void;
    subscribeMedia(listener: (topics: string[]) => void): () => boolean;
    notifyMedia(topics: string[]): void;
    isEqual(a: StylesArray, b: StylesArray): boolean;
    prepare(composedClassName?: string, options?: StateBitOptions): string;
    preparePreprocessed(className: string, { isolateGroupActive, isolateGroupFocus, isolateGroupHover, }?: {
        isolateGroupActive?: boolean | undefined;
        isolateGroupFocus?: boolean | undefined;
        isolateGroupHover?: boolean | undefined;
    }): string;
    getStyleArray(className: string): StylesArray;
    /**
     * ClassNames are made of multiple atomic styles. eg "a b" are the styles [a, b]
     *
     * This function will be called for each atomic style
     */
    upsertAtomicStyle(className: string): StylesArray;
    getChildStyles<T extends Style>(parent: StylesArray<T>, options: MatchChildAtRuleOptions): StylesArray<Style> | undefined;
    create({ styles, atRules, masks, topics, units, childClasses, transforms, }: Partial<Pick<StyleSheetRuntime, "styles" | "atRules" | "masks" | "topics" | "units" | "childClasses" | "transforms">>): void;
    platformSelect: {
        <T>(specifics: ({
            ios?: T | undefined;
            harmony?: T | undefined;
            android?: T | undefined;
            windows?: T | undefined;
            macos?: T | undefined;
            web?: T | undefined;
            native?: T | undefined;
        } & {
            default: T;
        }) | {
            ios: T;
            harmony: T;
            android: T;
            windows: T;
            macos: T;
            web: T;
            native: T;
        }): T;
        <T_1>(specifics: {
            ios?: T_1 | undefined;
            harmony?: T_1 | undefined;
            android?: T_1 | undefined;
            windows?: T_1 | undefined;
            macos?: T_1 | undefined;
            web?: T_1 | undefined;
            native?: T_1 | undefined;
        }): T_1 | undefined;
    };
    platformColor(color: string): string | import("react-native").OpaqueColorValue;
    hairlineWidth(): number;
    pixelRatio(value: number | Record<string, number>): number;
    fontScale(value: number | Record<string, number>): number;
    getPixelSizeForLayoutSize: (layoutSize: number) => number;
    roundToNearestPixel: (layoutSize: number) => number;
}
