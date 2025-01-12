"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectorMask = exports.matchesMask = exports.createAtRuleSelector = exports.getStateBit = exports.normalizeCssSelector = exports.hasDarkPseudoClass = exports.DARK_MODE = exports.IOS = exports.HARMONY = exports.ANDROID = exports.WEB = exports.WINDOWS = exports.OSX = exports.RTL = exports.ACTIVE = exports.HOVER = exports.FOCUS = exports.GROUP = exports.GROUP_ISO = exports.PARENT = exports.GROUP_ACTIVE = exports.GROUP_HOVER = exports.GROUP_FOCUS = exports.ISO_GROUP_ACTIVE = exports.ISO_GROUP_HOVER = exports.ISO_GROUP_FOCUS = exports.PARENT_ACTIVE = exports.PARENT_HOVER = exports.PARENT_FOCUS = void 0;
/* prettier-ignore */ exports.PARENT_FOCUS = 0b10000000000000000000000;
/* prettier-ignore */ exports.PARENT_HOVER = 0b01000000000000000000000;
/* prettier-ignore */ exports.PARENT_ACTIVE = 0b00100000000000000000000;
/* prettier-ignore */ exports.ISO_GROUP_FOCUS = 0b00010000000000000000000;
/* prettier-ignore */ exports.ISO_GROUP_HOVER = 0b00001000000000000000000;
/* prettier-ignore */ exports.ISO_GROUP_ACTIVE = 0b00000100000000000000000;
/* prettier-ignore */ exports.GROUP_FOCUS = 0b00000010000000000000000;
/* prettier-ignore */ exports.GROUP_HOVER = 0b00000001000000000000000;
/* prettier-ignore */ exports.GROUP_ACTIVE = 0b00000000100000000000000;
/* prettier-ignore */ exports.PARENT = 0b00000000010000000000000;
/* prettier-ignore */ exports.GROUP_ISO = 0b00000000001000000000000;
/* prettier-ignore */ exports.GROUP = 0b00000000000100000000000;
/* prettier-ignore */ exports.FOCUS = 0b00000000000010000000000;
/* prettier-ignore */ exports.HOVER = 0b00000000000001000000000;
/* prettier-ignore */ exports.ACTIVE = 0b00000000000000100000000;
/* prettier-ignore */ exports.RTL = 0b00000000000000010000000;
/* prettier-ignore */ exports.OSX = 0b00000000000000001000000;
/* prettier-ignore */ exports.WINDOWS = 0b00000000000000000100000;
/* prettier-ignore */ exports.WEB = 0b00000000000000000010000;
/* prettier-ignore */ exports.ANDROID = 0b00000000000000000001000;
/* prettier-ignore */ exports.HARMONY = 0b00000000000000000000100;
/* prettier-ignore */ exports.IOS = 0b00000000000000000000010;
/* prettier-ignore */ exports.DARK_MODE = 0b00000000000000000000001;
const makePseudoClassTest = (pseudoClass) => {
    const regex = new RegExp(`\\S+::${pseudoClass}(:|\\s|$)`);
    return regex.test.bind(regex);
};
const hasHover = makePseudoClassTest("hover");
const hasActive = makePseudoClassTest("active");
const hasFocus = makePseudoClassTest("focus");
const hasGroupHover = makePseudoClassTest("group-hover");
const hasGroupActive = makePseudoClassTest("group-active");
const hasGroupFocus = makePseudoClassTest("group-focus");
const hasGroupIsolate = RegExp.prototype.test.bind(/(:|\s|^)group-isolate(:|\s|^)/gi);
const hasGroupIsolateHover = makePseudoClassTest("group-isolate-hover");
const hasGroupIsolateActive = makePseudoClassTest("group-isolate-active");
const hasGroupIsolateFocus = makePseudoClassTest("group-isolate-focus");
const hasParent = RegExp.prototype.test.bind(/(:|\s|^)parent(:|\s|$)/gi);
const hasParentHover = makePseudoClassTest("parent-hover");
const hasParentActive = makePseudoClassTest("parent-active");
const hasParentFocus = makePseudoClassTest("parent-focus");
const hasIos = makePseudoClassTest("ios");
const hasHarmony = makePseudoClassTest("harmony");
const hasAndroid = makePseudoClassTest("android");
const hasWindows = makePseudoClassTest("windows");
const hasMacos = makePseudoClassTest("macos");
const hasWeb = makePseudoClassTest("web");
exports.hasDarkPseudoClass = makePseudoClassTest("dark");
function normalizeCssSelector(selector) {
    selector = selector.trim().replace(/^\.|\\/g, "");
    selector = selector.split("::")[0];
    selector = selector.split(" ").pop();
    return selector;
}
exports.normalizeCssSelector = normalizeCssSelector;
function getStateBit(options = {}) {
    let finalBit = options.baseBit || 0;
    if (options.darkMode)
        finalBit |= exports.DARK_MODE;
    if (options.platform === "ios")
        finalBit |= exports.IOS;
    if (options.platform === "harmony")
        finalBit |= exports.HARMONY;
    if (options.platform === "android")
        finalBit |= exports.ANDROID;
    if (options.platform === "web")
        finalBit |= exports.WEB;
    if (options.platform === "windows")
        finalBit |= exports.WINDOWS;
    if (options.platform === "macos")
        finalBit |= exports.OSX;
    if (options.rtl)
        finalBit |= exports.RTL;
    if (options.active)
        finalBit |= exports.ACTIVE;
    if (options.hover)
        finalBit |= exports.HOVER;
    if (options.focus)
        finalBit |= exports.FOCUS;
    if (options.group)
        finalBit |= exports.GROUP;
    if (options.groupActive)
        finalBit |= exports.GROUP_ACTIVE;
    if (options.groupHover)
        finalBit |= exports.GROUP_HOVER;
    if (options.groupFocus)
        finalBit |= exports.GROUP_FOCUS;
    if (options.isolateGroup)
        finalBit |= exports.GROUP_ISO;
    if (options.isolateGroupActive)
        finalBit |= exports.ISO_GROUP_ACTIVE;
    if (options.isolateGroupHover)
        finalBit |= exports.ISO_GROUP_HOVER;
    if (options.isolateGroupFocus)
        finalBit |= exports.ISO_GROUP_FOCUS;
    if (options.parent)
        finalBit |= exports.PARENT;
    if (options.parentActive)
        finalBit |= exports.PARENT_ACTIVE;
    if (options.parentHover)
        finalBit |= exports.PARENT_HOVER;
    if (options.parentFocus)
        finalBit |= exports.PARENT_FOCUS;
    return finalBit;
}
exports.getStateBit = getStateBit;
function createAtRuleSelector(className, atRuleIndex) {
    return `${className}@${atRuleIndex}`;
}
exports.createAtRuleSelector = createAtRuleSelector;
function matchesMask(value, mask) {
    return (value & mask) === mask;
}
exports.matchesMask = matchesMask;
function getSelectorMask(selector, rtl = false) {
    return getStateBit({
        rtl,
        hover: hasHover(selector),
        active: hasActive(selector),
        focus: hasFocus(selector),
        groupHover: hasGroupHover(selector),
        groupActive: hasGroupActive(selector),
        groupFocus: hasGroupFocus(selector),
        isolateGroup: hasGroupIsolate(selector),
        isolateGroupHover: hasGroupIsolateHover(selector),
        isolateGroupActive: hasGroupIsolateActive(selector),
        isolateGroupFocus: hasGroupIsolateFocus(selector),
        parent: hasParent(selector),
        parentHover: hasParentHover(selector),
        parentActive: hasParentActive(selector),
        parentFocus: hasParentFocus(selector),
        darkMode: (0, exports.hasDarkPseudoClass)(selector),
        platform: hasIos(selector)
            ? "ios"
            : hasHarmony(selector)
                ? "harmony"
                : hasAndroid(selector)
                    ? "android"
                    : hasWindows(selector)
                        ? "windows"
                        : hasMacos(selector)
                            ? "macos"
                            : hasWeb(selector)
                                ? "web"
                                : undefined,
    });
}
exports.getSelectorMask = getSelectorMask;
