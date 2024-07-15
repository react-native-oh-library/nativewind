"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.properties = void 0;
const aspect_ratio_1 = require("./aspect-ratio");
const flex_1 = require("./flex");
const font_family_1 = require("./font-family");
const only_1 = require("./only");
const position_1 = require("./position");
exports.properties = {
    alignContent: (0, only_1.only)([
        "flex-start",
        "flex-end",
        "center",
        "stretch",
        "space-between",
        "space-around",
    ]),
    alignItems: (0, only_1.only)([
        "flex-start",
        "flex-end",
        "center",
        "stretch",
        "baseline",
    ]),
    alignSelf: (0, only_1.only)([
        "auto",
        "flex-start",
        "flex-end",
        "center",
        "stretch",
        "baseline",
    ]),
    aspectRatio: aspect_ratio_1.aspectRatio,
    columns: (0, only_1.only)([]),
    order: (0, only_1.only)([]),
    gridRowStart: (0, only_1.only)([]),
    gridRowEnd: (0, only_1.only)([]),
    gridColumnStart: (0, only_1.only)([]),
    gridColumnEnd: (0, only_1.only)([]),
    strokeWidth: (0, only_1.only)({ number: true }),
    backgroundColor: (0, only_1.only)({ color: true }),
    borderBottomWidth: (0, only_1.only)({ number: true }),
    borderEndWidth: (0, only_1.only)({ number: true }),
    borderLeftWidth: (0, only_1.only)({ number: true }),
    borderRightWidth: (0, only_1.only)({ number: true }),
    borderStartWidth: (0, only_1.only)({ number: true }),
    borderTopWidth: (0, only_1.only)({ number: true }),
    borderLeftColor: (0, only_1.only)({ color: true }),
    borderRightColor: (0, only_1.only)({ color: true }),
    borderBottomColor: (0, only_1.only)({ color: true }),
    borderTopColor: (0, only_1.only)({ color: true }),
    borderWidth: (0, only_1.only)({ number: true }),
    borderStyle: (0, only_1.only)(["solid", "dotted", "dashed"]),
    bottom: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    direction: (0, only_1.only)(["inherit", "ltr", "rtl"]),
    display: (0, only_1.only)(["none", "flex"]),
    end: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    height: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    minHeight: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    maxHeight: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    flex: flex_1.flex,
    overflow: (0, only_1.only)(["visible", "hidden", "scroll"]),
    position: position_1.position,
    flexBasis: (0, only_1.only)({ number: true, units: ["%", "px"] }),
    top: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    left: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    right: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    margin: (0, only_1.only)({ number: true, units: ["px", "%"], auto: true }),
    marginBottom: (0, only_1.only)({
        number: true,
        units: ["px", "%"],
        auto: true,
    }),
    marginLeft: (0, only_1.only)({
        number: true,
        units: ["px", "%"],
        auto: true,
    }),
    marginRight: (0, only_1.only)({
        number: true,
        units: ["px", "%"],
        auto: true,
    }),
    marginTop: (0, only_1.only)({
        number: true,
        units: ["px", "%"],
        auto: true,
    }),
    width: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    minWidth: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    maxWidth: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    padding: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    paddingLeft: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    paddingRight: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    paddingTop: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    paddingBottom: (0, only_1.only)({ number: true, units: ["px", "%"] }),
    zIndex: (0, only_1.only)({ number: true }),
    color: (0, only_1.only)({ color: true }),
    fontSize: (0, only_1.only)({ number: true }),
    fontStyle: (0, only_1.only)(["normal", "italic"]),
    fontWeight: (0, only_1.only)([
        "normal",
        "bold",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ]),
    // fontVariant: only<"fontVariant", TextStyle>([
    //   ["small-caps"],
    //   "oldstyle-nums",
    //   "lining-nums",
    //   "tabular-nums",
    //   "proportional-nums",
    // ]),
    fontFamily: font_family_1.fontFamily,
    letterSpacing: (0, only_1.only)({ number: true }),
    lineHeight: (0, only_1.only)({ number: true }),
    textAlign: (0, only_1.only)([
        "auto",
        "left",
        "right",
        "center",
        "justify",
    ]),
    textTransform: (0, only_1.only)([
        "none",
        "uppercase",
        "lowercase",
        "capitalize",
    ]),
    textDecorationColor: (0, only_1.only)({ color: true }),
    textDecorationStyle: (0, only_1.only)([
        "solid",
        "double",
        "dotted",
        "dashed",
    ]),
};
