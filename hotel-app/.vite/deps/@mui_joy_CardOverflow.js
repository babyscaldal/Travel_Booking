"use client";
import {
  cardOverflowClasses_default,
  getCardOverflowUtilityClass
} from "./chunk-3NXRTDYM.js";
import "./chunk-4LOYHJS5.js";
import "./chunk-VE2O66JP.js";
import {
  generateUtilityClasses,
  styled_default,
  useColorInversion,
  useSlot,
  useThemeProps
} from "./chunk-R72IT4HO.js";
import "./chunk-ZMKL5X57.js";
import "./chunk-OTY6O57J.js";
import {
  capitalize,
  clsx_default,
  composeClasses,
  init_clsx,
  init_esm,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-TIQHJRXJ.js";
import "./chunk-GO2D3IR7.js";
import "./chunk-GYOI4P2W.js";
import {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose
} from "./chunk-NNN4RV4Y.js";
import {
  _extends,
  init_extends
} from "./chunk-BJM7UO3E.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/joy/CardOverflow/CardOverflow.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
init_clsx();
var import_prop_types = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/joy/Button/buttonClasses.js
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "focusVisible", "disabled", "sizeSm", "sizeMd", "sizeLg", "fullWidth", "startDecorator", "endDecorator", "loading", "loadingIndicatorCenter"]);
var buttonClasses_default = buttonClasses;

// node_modules/@mui/joy/CardOverflow/CardOverflow.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "component", "children", "color", "variant", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getCardOverflowUtilityClass, {});
};
var CardOverflowRoot = styled_default("div", {
  name: "JoyCardOverflow",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const childRadius = "calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))";
  return _extends({
    alignSelf: "stretch",
    // prevent shrinking if parent's align-items is not initial
    borderRadius: "var(--CardOverflow-radius)",
    position: "relative",
    display: "flex"
  }, ownerState["data-parent"] === "Card-horizontal" && _extends({
    "--AspectRatio-margin": "calc(-1 * var(--Card-padding)) 0px",
    marginTop: "var(--CardOverflow-offset)",
    marginBottom: "var(--CardOverflow-offset)",
    padding: "var(--Card-padding) 0px"
  }, ownerState["data-first-child"] !== void 0 && {
    "--AspectRatio-radius": `${childRadius} 0 0 ${childRadius}`,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginLeft: "var(--CardOverflow-offset)"
  }, ownerState["data-last-child"] !== void 0 && {
    "--AspectRatio-radius": `0 ${childRadius} ${childRadius} 0`,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginRight: "var(--CardOverflow-offset)"
  }, ownerState["data-first-child"] !== void 0 && ownerState["data-last-child"] !== void 0 && {
    "--AspectRatio-radius": childRadius
  }, {
    [`& > .${buttonClasses_default.root}:only-child`]: {
      height: "calc(100% + -2 * var(--CardOverflow-offset))",
      "--Button-margin": "var(--CardOverflow-offset) 0",
      "--Button-radius": "0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0"
    }
  }), ownerState["data-parent"] === "Card-vertical" && _extends({
    "--AspectRatio-margin": "0px calc(-1 * var(--Card-padding))",
    flexDirection: "column",
    // required to make AspectRatio works
    marginLeft: "var(--CardOverflow-offset)",
    marginRight: "var(--CardOverflow-offset)",
    padding: "0px var(--Card-padding)"
  }, ownerState["data-first-child"] !== void 0 && {
    "--AspectRatio-radius": `${childRadius} ${childRadius} 0 0`,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginTop: "var(--CardOverflow-offset)"
  }, ownerState["data-last-child"] !== void 0 && {
    "--AspectRatio-radius": `0 0 ${childRadius} ${childRadius}`,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginBottom: "var(--CardOverflow-offset)"
  }, ownerState["data-first-child"] !== void 0 && ownerState["data-last-child"] !== void 0 && {
    "--AspectRatio-radius": childRadius
  }, {
    [`& > .${buttonClasses_default.root}:only-child`]: {
      zIndex: 1,
      // prevent button from being covered Link overlay. This can be improved in the future with :has() selector
      width: "calc(100% + -2 * var(--CardOverflow-offset))",
      "--Button-margin": "0 var(--CardOverflow-offset)",
      "--Button-radius": "0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)"
    }
  }), (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var CardOverflow = React.forwardRef(function CardOverflow2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCardOverflow"
  });
  const {
    className,
    component = "div",
    children,
    color: colorProp = "neutral",
    variant = "plain",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    getColor
  } = useColorInversion(variant);
  const color = getColor(inProps.color, colorProp);
  const ownerState = _extends({}, props, {
    component,
    color,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CardOverflowRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? CardOverflow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the CardOverflow if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
CardOverflow.muiName = "CardOverflow";
var CardOverflow_default = CardOverflow;
export {
  cardOverflowClasses_default as cardOverflowClasses,
  CardOverflow_default as default,
  getCardOverflowUtilityClass
};
//# sourceMappingURL=@mui_joy_CardOverflow.js.map
