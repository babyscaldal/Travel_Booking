"use client";
import "./chunk-4LOYHJS5.js";
import "./chunk-VE2O66JP.js";
import {
  ColorInversionProvider,
  generateUtilityClass,
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
  isMuiElement,
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

// node_modules/@mui/joy/Card/Card.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
init_clsx();
var import_prop_types = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/joy/Card/cardClasses.js
function getCardUtilityClass(slot) {
  return generateUtilityClass("MuiCard", slot);
}
var cardClasses = generateUtilityClasses("MuiCard", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
var cardClasses_default = cardClasses;

// node_modules/@mui/joy/styles/styleUtils.js
init_extends();
var resolveSxValue = ({
  theme,
  ownerState
}, keys) => {
  let sxObject = {};
  function resolveSx(sxProp) {
    if (typeof sxProp === "function") {
      const result = sxProp(theme);
      resolveSx(result);
    } else if (Array.isArray(sxProp)) {
      sxProp.forEach((sxItem) => {
        if (typeof sxItem !== "boolean") {
          resolveSx(sxItem);
        }
      });
    } else if (typeof sxProp === "object") {
      sxObject = _extends({}, sxObject, sxProp);
    }
  }
  if (ownerState.sx) {
    resolveSx(ownerState.sx);
    keys.forEach((key) => {
      const value = sxObject[key];
      if (typeof value === "string" || typeof value === "number") {
        if (key === "borderRadius") {
          if (typeof value === "number") {
            sxObject[key] = `${value}px`;
          } else {
            var _theme$vars;
            sxObject[key] = ((_theme$vars = theme.vars) == null ? void 0 : _theme$vars.radius[value]) || value;
          }
        } else if (["p", "padding", "m", "margin"].indexOf(key) !== -1 && typeof value === "number") {
          sxObject[key] = theme.spacing(value);
        } else {
          sxObject[key] = value;
        }
      } else if (typeof value === "function") {
        sxObject[key] = value(theme);
      } else {
        sxObject[key] = void 0;
      }
    });
  }
  return sxObject;
};

// node_modules/@mui/joy/Card/Card.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "color", "component", "invertedColors", "size", "variant", "children", "orientation", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getCardUtilityClass, {});
};
var CardRoot = styled_default("div", {
  name: "JoyCard",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$colorInversion;
  const {
    p,
    padding,
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["p", "padding", "borderRadius"]);
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    // a context variable for any child component
    "--Card-childRadius": "max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))",
    // AspectRatio integration
    "--AspectRatio-radius": "var(--Card-childRadius)",
    // Link integration
    "--unstable_actionMargin": "calc(-1 * var(--variant-borderWidth, 0px))",
    // Link, Radio, Checkbox integration
    "--unstable_actionRadius": "var(--Card-radius)",
    // CardCover integration
    "--CardCover-radius": "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
    // CardOverflow integration
    "--CardOverflow-offset": `calc(-1 * var(--Card-padding))`,
    "--CardOverflow-radius": "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
    // Divider integration
    "--Divider-inset": "calc(-1 * var(--Card-padding))"
  }, ownerState.size === "sm" && {
    "--Card-radius": theme.vars.radius.sm,
    "--Card-padding": "0.625rem",
    gap: "0.5rem"
  }, ownerState.size === "md" && {
    "--Card-radius": theme.vars.radius.md,
    "--Card-padding": "1rem",
    gap: "0.75rem 1rem"
  }, ownerState.size === "lg" && {
    "--Card-radius": theme.vars.radius.lg,
    "--Card-padding": "1.5rem",
    gap: "1rem 1.5rem"
  }, {
    padding: "var(--Card-padding)",
    borderRadius: "var(--Card-radius)",
    backgroundColor: theme.vars.palette.background.surface,
    position: "relative",
    display: "flex",
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, theme.typography[`body-${ownerState.size}`], (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]), ownerState.color !== "context" && ownerState.invertedColors && ((_theme$colorInversion = theme.colorInversion[ownerState.variant]) == null ? void 0 : _theme$colorInversion[ownerState.color]), p !== void 0 && {
    "--Card-padding": p
  }, padding !== void 0 && {
    "--Card-padding": padding
  }, borderRadius !== void 0 && {
    "--Card-radius": borderRadius
  }];
});
var Card = React.forwardRef(function Card2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCard"
  });
  const {
    className,
    color: colorProp = "neutral",
    component = "div",
    invertedColors = false,
    size = "md",
    variant = "outlined",
    children,
    orientation = "vertical",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    getColor
  } = useColorInversion(variant);
  const color = getColor(inProps.color, colorProp);
  const ownerState = _extends({}, props, {
    color,
    component,
    orientation,
    size,
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
    elementType: CardRoot,
    externalForwardedProps,
    ownerState
  });
  const result = (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children: React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) {
        return child;
      }
      const extraProps = {};
      if (isMuiElement(child, ["Divider"])) {
        extraProps.inset = "inset" in child.props ? child.props.inset : "context";
        const dividerOrientation = orientation === "vertical" ? "horizontal" : "vertical";
        extraProps.orientation = "orientation" in child.props ? child.props.orientation : dividerOrientation;
      }
      if (isMuiElement(child, ["CardOverflow"])) {
        if (orientation === "horizontal") {
          extraProps["data-parent"] = "Card-horizontal";
        }
        if (orientation === "vertical") {
          extraProps["data-parent"] = "Card-vertical";
        }
      }
      if (index === 0) {
        extraProps["data-first-child"] = "";
      }
      if (index === React.Children.count(children) - 1) {
        extraProps["data-last-child"] = "";
      }
      return React.cloneElement(child, extraProps);
    })
  }));
  if (invertedColors) {
    return (0, import_jsx_runtime.jsx)(ColorInversionProvider, {
      variant,
      children: result
    });
  }
  return result;
});
true ? Card.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the Card if `src` is not set.
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
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types.default.bool,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["lg", "md", "sm"]), import_prop_types.default.string]),
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
   * @default 'outlined'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var Card_default = Card;
export {
  cardClasses_default as cardClasses,
  Card_default as default,
  getCardUtilityClass
};
//# sourceMappingURL=@mui_joy_Card.js.map
