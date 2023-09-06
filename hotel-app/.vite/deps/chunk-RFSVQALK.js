import {
  buildWarning
} from "./chunk-BRAU7EQW.js";
import {
  Chip_default,
  DialogContent_default,
  ListItem_default,
  Popper_default,
  useMediaQuery
} from "./chunk-HLFGB3EL.js";
import {
  TextField_default
} from "./chunk-6FS24OPH.js";
import {
  Stack_default
} from "./chunk-RDA3T5O5.js";
import {
  Grow_default,
  List_default
} from "./chunk-VGE3QPPV.js";
import {
  DialogActions_default
} from "./chunk-MXX4OXBP.js";
import {
  Dialog_default,
  dialogClasses_default
} from "./chunk-DPMML37V.js";
import {
  Fade_default
} from "./chunk-SSC6WWAI.js";
import {
  FocusTrap,
  resolveComponentProps,
  useSlotProps
} from "./chunk-WCBZ6CGG.js";
import {
  Paper_default
} from "./chunk-CLKLNOJE.js";
import {
  useTheme
} from "./chunk-GYGNN4HM.js";
import {
  IconButton_default
} from "./chunk-B6KTXHAF.js";
import {
  Typography_default
} from "./chunk-5FRD2HXU.js";
import {
  Button_default
} from "./chunk-D65BR3RT.js";
import {
  ButtonBase_default
} from "./chunk-XAQWBOF4.js";
import {
  CSSTransition_default,
  TransitionGroup_default
} from "./chunk-EKGI35CB.js";
import {
  init_utils
} from "./chunk-HUDFI6JW.js";
import {
  createSvgIcon
} from "./chunk-7PLXT3M4.js";
import {
  styled_default
} from "./chunk-63TKIQOL.js";
import {
  useThemeProps
} from "./chunk-QNMCFX6G.js";
import {
  alpha,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_esm,
  init_useControlled,
  init_useEnhancedEffect,
  init_useEventCallback,
  init_useForkRef,
  init_useId,
  ownerDocument,
  ponyfillGlobal_default,
  require_jsx_runtime,
  require_prop_types,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useId
} from "./chunk-3A3AY3EH.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose
} from "./chunk-NNN4RV4Y.js";
import {
  _extends,
  init_extends
} from "./chunk-BJM7UO3E.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/x-date-pickers-pro/DateRangePicker/DateRangePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React51 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers-pro/DesktopDateRangePicker/DesktopDateRangePicker.js
init_extends();
var React48 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
init_objectWithoutPropertiesLoose();
init_extends();
var React2 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/icons/index.js
init_utils();
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var ArrowDropDownIcon = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
var ArrowLeftIcon = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft");
var ArrowRightIcon = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight");
var CalendarIcon = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
var ClockIcon = createSvgIcon((0, import_jsx_runtime2.jsxs)(React.Fragment, {
  children: [(0, import_jsx_runtime.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), (0, import_jsx_runtime.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
var DateRangeIcon = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
var TimeIcon = createSvgIcon((0, import_jsx_runtime2.jsxs)(React.Fragment, {
  children: [(0, import_jsx_runtime.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), (0, import_jsx_runtime.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");

// node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/pickersArrowSwitcherClasses.js
init_esm();
function getPickersArrowSwitcherUtilityClass(slot) {
  return generateUtilityClass("MuiPickersArrowSwitcher", slot);
}
var pickersArrowSwitcherClasses = generateUtilityClasses("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"];
var _excluded2 = ["ownerState"];
var _excluded3 = ["ownerState"];
var PickersArrowSwitcherRoot = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex"
});
var PickersArrowSwitcherSpacer = styled_default("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (props, styles) => styles.spacer
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
var PickersArrowSwitcherButton = styled_default(IconButton_default, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (props, styles) => styles.button
})(({
  ownerState
}) => _extends({}, ownerState.hidden && {
  visibility: "hidden"
}));
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  };
  return composeClasses(slots, getPickersArrowSwitcherUtilityClass, classes);
};
var PickersArrowSwitcher = React2.forwardRef(function PickersArrowSwitcher2(inProps, ref) {
  var _slots$previousIconBu, _slots$nextIconButton, _slots$leftArrowIcon, _slots$rightArrowIcon;
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersArrowSwitcher"
  });
  const {
    children,
    className,
    slots,
    slotProps,
    isNextDisabled,
    isNextHidden,
    onGoToNext,
    nextLabel,
    isPreviousDisabled,
    isPreviousHidden,
    onGoToPrevious,
    previousLabel
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const PreviousIconButton = (_slots$previousIconBu = slots == null ? void 0 : slots.previousIconButton) != null ? _slots$previousIconBu : PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.previousIconButton,
    additionalProps: {
      size: "medium",
      title: previousProps.label,
      "aria-label": previousProps.label,
      disabled: previousProps.isDisabled,
      edge: "end",
      onClick: previousProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      hidden: previousProps.isHidden
    }),
    className: classes.button
  });
  const NextIconButton = (_slots$nextIconButton = slots == null ? void 0 : slots.nextIconButton) != null ? _slots$nextIconButton : PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps({
    elementType: NextIconButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.nextIconButton,
    additionalProps: {
      size: "medium",
      title: nextProps.label,
      "aria-label": nextProps.label,
      disabled: nextProps.isDisabled,
      edge: "start",
      onClick: nextProps.goTo
    },
    ownerState: _extends({}, ownerState, {
      hidden: nextProps.isHidden
    }),
    className: classes.button
  });
  const LeftArrowIcon = (_slots$leftArrowIcon = slots == null ? void 0 : slots.leftArrowIcon) != null ? _slots$leftArrowIcon : ArrowLeftIcon;
  const _useSlotProps = useSlotProps({
    elementType: LeftArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), leftArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded2);
  const RightArrowIcon = (_slots$rightArrowIcon = slots == null ? void 0 : slots.rightArrowIcon) != null ? _slots$rightArrowIcon : ArrowRightIcon;
  const _useSlotProps2 = useSlotProps({
    elementType: RightArrowIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), rightArrowIconProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded3);
  return (0, import_jsx_runtime4.jsxs)(PickersArrowSwitcherRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime3.jsx)(PreviousIconButton, _extends({}, previousIconButtonProps, {
      children: isRTL ? (0, import_jsx_runtime3.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps)) : (0, import_jsx_runtime3.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps))
    })), children ? (0, import_jsx_runtime3.jsx)(Typography_default, {
      variant: "subtitle1",
      component: "span",
      children
    }) : (0, import_jsx_runtime3.jsx)(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState
    }), (0, import_jsx_runtime3.jsx)(NextIconButton, _extends({}, nextIconButtonProps, {
      children: isRTL ? (0, import_jsx_runtime3.jsx)(LeftArrowIcon, _extends({}, leftArrowIconProps)) : (0, import_jsx_runtime3.jsx)(RightArrowIcon, _extends({}, rightArrowIconProps))
    }))]
  }));
});

// node_modules/@mui/x-date-pickers/internals/components/PickersModalDialog.js
init_extends();
var React3 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/internals/constants/dimensions.js
var DAY_SIZE = 36;
var DAY_MARGIN = 2;
var DIALOG_WIDTH = 320;
var VIEW_HEIGHT = 358;
var DIGITAL_CLOCK_VIEW_HEIGHT = 232;
var MULTI_SECTION_CLOCK_SECTION_WIDTH = 48;

// node_modules/@mui/x-date-pickers/internals/components/PickersModalDialog.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var PickersModalDialogRoot = styled_default(Dialog_default)({
  [`& .${dialogClasses_default.container}`]: {
    outline: 0
  },
  [`& .${dialogClasses_default.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
var PickersModalDialogContent = styled_default(DialogContent_default)({
  "&:first-of-type": {
    padding: 0
  }
});
function PickersModalDialog(props) {
  var _slots$dialog, _slots$mobileTransiti;
  const {
    children,
    onDismiss,
    open,
    slots,
    slotProps
  } = props;
  const Dialog = (_slots$dialog = slots == null ? void 0 : slots.dialog) != null ? _slots$dialog : PickersModalDialogRoot;
  const Transition = (_slots$mobileTransiti = slots == null ? void 0 : slots.mobileTransition) != null ? _slots$mobileTransiti : Fade_default;
  return (0, import_jsx_runtime5.jsx)(Dialog, _extends({
    open,
    onClose: onDismiss
  }, slotProps == null ? void 0 : slotProps.dialog, {
    TransitionComponent: Transition,
    TransitionProps: slotProps == null ? void 0 : slotProps.mobileTransition,
    PaperComponent: slots == null ? void 0 : slots.mobilePaper,
    PaperProps: slotProps == null ? void 0 : slotProps.mobilePaper,
    children: (0, import_jsx_runtime5.jsx)(PickersModalDialogContent, {
      children
    })
  }));
}

// node_modules/@mui/x-date-pickers/internals/components/PickersPopper.js
init_objectWithoutPropertiesLoose();
init_extends();
var React4 = __toESM(require_react());
init_esm();

// node_modules/@mui/x-date-pickers/internals/components/pickersPopperClasses.js
init_esm();
function getPickersPopperUtilityClass(slot) {
  return generateUtilityClass("MuiPickersPopper", slot);
}
var pickersPopperClasses = generateUtilityClasses("MuiPickersPopper", ["root", "paper"]);

// node_modules/@mui/x-date-pickers/internals/utils/utils.js
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every((item) => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
var onSpaceOrEnter = (innerFn, externalEvent) => (event) => {
  if (event.key === "Enter" || event.key === " ") {
    innerFn(event);
    event.preventDefault();
    event.stopPropagation();
  }
  if (externalEvent) {
    externalEvent(event);
  }
};
var executeInTheNextEventLoopTick = (fn) => {
  setTimeout(fn, 0);
};
var getActiveElement = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElement(activeEl.shadowRoot);
  }
  return activeEl;
};
var DEFAULT_DESKTOP_MODE_MEDIA_QUERY = "@media (pointer: fine)";

// node_modules/@mui/x-date-pickers/internals/hooks/useDefaultReduceAnimations.js
var PREFERS_REDUCED_MOTION = "@media (prefers-reduced-motion: reduce)";
var mobileVersionMatches = typeof navigator !== "undefined" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
var androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
var iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
var slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
var useDefaultReduceAnimations = () => {
  const prefersReduced = useMediaQuery(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  return prefersReduced || slowAnimationDevices;
};

// node_modules/@mui/x-date-pickers/internals/components/PickersPopper.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded4 = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"];
var useUtilityClasses2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPickersPopperUtilityClass, classes);
};
var PickersPopperRoot = styled_default(Popper_default, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
var PickersPopperPaper = styled_default(Paper_default, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (_, styles) => styles.paper
})(({
  ownerState
}) => _extends({
  outline: 0,
  transformOrigin: "top center"
}, ownerState.placement.includes("top") && {
  transformOrigin: "bottom center"
}));
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function useClickAwayListener(active, onClickAway) {
  const movedRef = React4.useRef(false);
  const syntheticEventRef = React4.useRef(false);
  const nodeRef = React4.useRef(null);
  const activatedRef = React4.useRef(false);
  React4.useEffect(() => {
    if (!active) {
      return void 0;
    }
    function armClickAwayListener() {
      activatedRef.current = true;
    }
    document.addEventListener("mousedown", armClickAwayListener, true);
    document.addEventListener("touchstart", armClickAwayListener, true);
    return () => {
      document.removeEventListener("mousedown", armClickAwayListener, true);
      document.removeEventListener("touchstart", armClickAwayListener, true);
      activatedRef.current = false;
    };
  }, [active]);
  const handleClickAway = useEventCallback_default((event) => {
    if (!activatedRef.current) {
      return;
    }
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!nodeRef.current || // is a TouchEvent?
    "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && !insideReactTree) {
      onClickAway(event);
    }
  });
  const handleSynthetic = () => {
    syntheticEventRef.current = true;
  };
  React4.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener("touchstart", handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener("touchstart", handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  React4.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener("click", handleClickAway);
      return () => {
        doc.removeEventListener("click", handleClickAway);
        syntheticEventRef.current = false;
      };
    }
    return void 0;
  }, [active, handleClickAway]);
  return [nodeRef, handleSynthetic, handleSynthetic];
}
var PickersPopperPaperWrapper = React4.forwardRef((props, ref) => {
  const {
    PaperComponent,
    popperPlacement,
    ownerState: inOwnerState,
    children,
    paperSlotProps,
    paperClasses,
    onPaperClick,
    onPaperTouchStart
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const ownerState = _extends({}, inOwnerState, {
    placement: popperPlacement
  });
  const paperProps = useSlotProps({
    elementType: PaperComponent,
    externalSlotProps: paperSlotProps,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref
    },
    className: paperClasses,
    ownerState
  });
  return (0, import_jsx_runtime6.jsx)(PaperComponent, _extends({}, other, paperProps, {
    onClick: (event) => {
      var _paperProps$onClick;
      onPaperClick(event);
      (_paperProps$onClick = paperProps.onClick) == null || _paperProps$onClick.call(paperProps, event);
    },
    onTouchStart: (event) => {
      var _paperProps$onTouchSt;
      onPaperTouchStart(event);
      (_paperProps$onTouchSt = paperProps.onTouchStart) == null || _paperProps$onTouchSt.call(paperProps, event);
    },
    ownerState,
    children
  }));
});
function PickersPopper(inProps) {
  var _slots$desktopTransit, _slots$desktopTrapFoc, _slots$desktopPaper, _slots$popper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersPopper"
  });
  const {
    anchorEl,
    children,
    containerRef = null,
    shouldRestoreFocus,
    onBlur,
    onDismiss,
    open,
    role,
    placement,
    slots,
    slotProps,
    reduceAnimations: inReduceAnimations
  } = props;
  React4.useEffect(() => {
    function handleKeyDown2(nativeEvent) {
      if (open && (nativeEvent.key === "Escape" || nativeEvent.key === "Esc")) {
        onDismiss();
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [onDismiss, open]);
  const lastFocusedElementRef = React4.useRef(null);
  React4.useEffect(() => {
    if (role === "tooltip" || shouldRestoreFocus && !shouldRestoreFocus()) {
      return;
    }
    if (open) {
      lastFocusedElementRef.current = getActiveElement(document);
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      setTimeout(() => {
        if (lastFocusedElementRef.current instanceof HTMLElement) {
          lastFocusedElementRef.current.focus();
        }
      });
    }
  }, [open, role, shouldRestoreFocus]);
  const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, onBlur != null ? onBlur : onDismiss);
  const paperRef = React4.useRef(null);
  const handleRef = useForkRef(paperRef, containerRef);
  const handlePaperRef = useForkRef(handleRef, clickAwayRef);
  const ownerState = props;
  const classes = useUtilityClasses2(ownerState);
  const defaultReduceAnimations = useDefaultReduceAnimations();
  const reduceAnimations = inReduceAnimations != null ? inReduceAnimations : defaultReduceAnimations;
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onDismiss();
    }
  };
  const Transition = ((_slots$desktopTransit = slots == null ? void 0 : slots.desktopTransition) != null ? _slots$desktopTransit : reduceAnimations) ? Fade_default : Grow_default;
  const TrapFocus = (_slots$desktopTrapFoc = slots == null ? void 0 : slots.desktopTrapFocus) != null ? _slots$desktopTrapFoc : FocusTrap;
  const Paper = (_slots$desktopPaper = slots == null ? void 0 : slots.desktopPaper) != null ? _slots$desktopPaper : PickersPopperPaper;
  const Popper = (_slots$popper = slots == null ? void 0 : slots.popper) != null ? _slots$popper : PickersPopperRoot;
  const popperProps = useSlotProps({
    elementType: Popper,
    externalSlotProps: slotProps == null ? void 0 : slotProps.popper,
    additionalProps: {
      transition: true,
      role,
      open,
      anchorEl,
      placement,
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState: props
  });
  return (0, import_jsx_runtime6.jsx)(Popper, _extends({}, popperProps, {
    children: ({
      TransitionProps,
      placement: popperPlacement
    }) => (0, import_jsx_runtime6.jsx)(TrapFocus, _extends({
      open,
      disableAutoFocus: true,
      disableRestoreFocus: true,
      disableEnforceFocus: role === "tooltip",
      isEnabled: () => true
    }, slotProps == null ? void 0 : slotProps.desktopTrapFocus, {
      children: (0, import_jsx_runtime6.jsx)(Transition, _extends({}, TransitionProps, slotProps == null ? void 0 : slotProps.desktopTransition, {
        children: (0, import_jsx_runtime6.jsx)(PickersPopperPaperWrapper, {
          PaperComponent: Paper,
          ownerState,
          popperPlacement,
          ref: handlePaperRef,
          onPaperClick,
          onPaperTouchStart,
          paperClasses: classes.paper,
          paperSlotProps: slotProps == null ? void 0 : slotProps.desktopPaper,
          children
        })
      }))
    }))
  }));
}

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbar.js
init_extends();
var React5 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/internals/components/pickersToolbarClasses.js
init_esm();
function getPickersToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbar", slot);
}
var pickersToolbarClasses = generateUtilityClasses("MuiPickersToolbar", ["root", "content"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbar.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", isLandscape && "penIconButtonLandscape"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarRoot = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: theme.spacing(2, 3)
}, ownerState.isLandscape && {
  height: "auto",
  maxWidth: 160,
  padding: 16,
  justifyContent: "flex-start",
  flexWrap: "wrap"
}));
var PickersToolbarContent = styled_default("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})(({
  ownerState
}) => {
  var _ownerState$landscape;
  return {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: ownerState.isLandscape ? "flex-start" : "space-between",
    flexDirection: ownerState.isLandscape ? (_ownerState$landscape = ownerState.landscapeDirection) != null ? _ownerState$landscape : "column" : "row",
    flex: 1,
    alignItems: ownerState.isLandscape ? "flex-start" : "center"
  };
});
var PickersToolbar = React5.forwardRef(function PickersToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbar"
  });
  const {
    children,
    className,
    toolbarTitle,
    hidden,
    titleId
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses3(ownerState);
  if (hidden) {
    return null;
  }
  return (0, import_jsx_runtime8.jsxs)(PickersToolbarRoot, {
    ref,
    className: clsx_default(classes.root, className),
    ownerState,
    children: [(0, import_jsx_runtime7.jsx)(Typography_default, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      children: toolbarTitle
    }), (0, import_jsx_runtime7.jsx)(PickersToolbarContent, {
      className: classes.content,
      ownerState,
      children
    })]
  });
});

// node_modules/@mui/x-date-pickers/internals/components/pickersToolbarButtonClasses.js
init_esm();
var pickersToolbarButtonClasses = generateUtilityClasses("MuiPickersToolbarButton", ["root"]);

// node_modules/@mui/x-date-pickers/internals/components/pickersToolbarTextClasses.js
init_esm();
function getPickersToolbarTextUtilityClass(slot) {
  return generateUtilityClass("MuiPickersToolbarText", slot);
}
var pickersToolbarTextClasses = generateUtilityClasses("MuiPickersToolbarText", ["root", "selected"]);

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbarButton.js
init_extends();
init_objectWithoutPropertiesLoose();
var React7 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbarText.js
init_extends();
init_objectWithoutPropertiesLoose();
var React6 = __toESM(require_react());
init_clsx();
init_esm();
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded5 = ["className", "selected", "value"];
var useUtilityClasses4 = (ownerState) => {
  const {
    classes,
    selected
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected"]
  };
  return composeClasses(slots, getPickersToolbarTextUtilityClass, classes);
};
var PickersToolbarTextRoot = styled_default(Typography_default, {
  name: "MuiPickersToolbarText",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${pickersToolbarTextClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => ({
  transition: theme.transitions.create("color"),
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${pickersToolbarTextClasses.selected}`]: {
    color: (theme.vars || theme).palette.text.primary
  }
}));
var PickersToolbarText = React6.forwardRef(function PickersToolbarText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarText"
  });
  const {
    className,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const classes = useUtilityClasses4(props);
  return (0, import_jsx_runtime9.jsx)(PickersToolbarTextRoot, _extends({
    ref,
    className: clsx_default(className, classes.root),
    component: "span"
  }, other, {
    children: value
  }));
});

// node_modules/@mui/x-date-pickers/internals/components/PickersToolbarButton.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded6 = ["align", "className", "selected", "typographyClassName", "value", "variant", "width"];
var useUtilityClasses5 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersToolbarUtilityClass, classes);
};
var PickersToolbarButtonRoot = styled_default(Button_default, {
  name: "MuiPickersToolbarButton",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
});
var PickersToolbarButton = React7.forwardRef(function PickersToolbarButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersToolbarButton"
  });
  const {
    align,
    className,
    selected,
    typographyClassName,
    value,
    variant,
    width
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const classes = useUtilityClasses5(props);
  return (0, import_jsx_runtime10.jsx)(PickersToolbarButtonRoot, _extends({
    variant: "text",
    ref,
    className: clsx_default(className, classes.root)
  }, width ? {
    sx: {
      width
    }
  } : {}, other, {
    children: (0, import_jsx_runtime10.jsx)(PickersToolbarText, {
      align,
      className: typographyClassName,
      variant,
      value,
      selected
    })
  }));
});

// node_modules/@mui/x-date-pickers/internals/hooks/useValueWithTimezone.js
var React10 = __toESM(require_react());
init_useEventCallback();
init_useControlled();

// node_modules/@mui/x-date-pickers/internals/hooks/useUtils.js
init_extends();
var React9 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js
init_extends();
init_objectWithoutPropertiesLoose();
var React8 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded7 = ["localeText"];
var MuiPickersAdapterContext = React8.createContext(null);
if (true) {
  MuiPickersAdapterContext.displayName = "MuiPickersAdapterContext";
}
var LocalizationProvider = function LocalizationProvider2(inProps) {
  var _React$useContext;
  const {
    localeText: inLocaleText
  } = inProps, otherInProps = _objectWithoutPropertiesLoose(inProps, _excluded7);
  const {
    utils: parentUtils,
    localeText: parentLocaleText
  } = (_React$useContext = React8.useContext(MuiPickersAdapterContext)) != null ? _React$useContext : {
    utils: void 0,
    localeText: void 0
  };
  const props = useThemeProps({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: "MuiLocalizationProvider"
  });
  const {
    children,
    dateAdapter: DateAdapter,
    dateFormats,
    dateLibInstance,
    adapterLocale,
    localeText: themeLocaleText
  } = props;
  const localeText = React8.useMemo(() => _extends({}, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
  const utils = React8.useMemo(() => {
    if (!DateAdapter) {
      if (parentUtils) {
        return parentUtils;
      }
      return null;
    }
    const adapter = new DateAdapter({
      locale: adapterLocale,
      formats: dateFormats,
      instance: dateLibInstance
    });
    if (!adapter.isMUIAdapter) {
      throw new Error(["MUI: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    }
    return adapter;
  }, [DateAdapter, adapterLocale, dateFormats, dateLibInstance, parentUtils]);
  const defaultDates = React8.useMemo(() => {
    if (!utils) {
      return null;
    }
    return {
      minDate: utils.date("1900-01-01T00:00:00.000"),
      maxDate: utils.date("2099-12-31T00:00:00.000")
    };
  }, [utils]);
  const contextValue = React8.useMemo(() => {
    return {
      utils,
      defaultDates,
      localeText
    };
  }, [defaultDates, utils, localeText]);
  return (0, import_jsx_runtime11.jsx)(MuiPickersAdapterContext.Provider, {
    value: contextValue,
    children
  });
};
true ? LocalizationProvider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: import_prop_types.default.any,
  children: import_prop_types.default.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/getting-started/#setup-your-date-library-adapter date adapter setup section} for more details.
   */
  dateAdapter: import_prop_types.default.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: import_prop_types.default.shape({
    dayOfMonth: import_prop_types.default.string,
    fullDate: import_prop_types.default.string,
    fullDateTime: import_prop_types.default.string,
    fullDateTime12h: import_prop_types.default.string,
    fullDateTime24h: import_prop_types.default.string,
    fullDateWithWeekday: import_prop_types.default.string,
    fullTime: import_prop_types.default.string,
    fullTime12h: import_prop_types.default.string,
    fullTime24h: import_prop_types.default.string,
    hours12h: import_prop_types.default.string,
    hours24h: import_prop_types.default.string,
    keyboardDate: import_prop_types.default.string,
    keyboardDateTime: import_prop_types.default.string,
    keyboardDateTime12h: import_prop_types.default.string,
    keyboardDateTime24h: import_prop_types.default.string,
    meridiem: import_prop_types.default.string,
    minutes: import_prop_types.default.string,
    month: import_prop_types.default.string,
    monthAndDate: import_prop_types.default.string,
    monthAndYear: import_prop_types.default.string,
    monthShort: import_prop_types.default.string,
    normalDate: import_prop_types.default.string,
    normalDateWithWeekday: import_prop_types.default.string,
    seconds: import_prop_types.default.string,
    shortDate: import_prop_types.default.string,
    weekday: import_prop_types.default.string,
    weekdayShort: import_prop_types.default.string,
    year: import_prop_types.default.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: import_prop_types.default.any,
  /**
   * Locale for components texts
   */
  localeText: import_prop_types.default.object
} : void 0;

// node_modules/@mui/x-date-pickers/locales/utils/getPickersLocalization.js
init_extends();
var getPickersLocalization = (pickersTranslations) => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: _extends({}, pickersTranslations)
        }
      }
    }
  };
};

// node_modules/@mui/x-date-pickers/locales/enUS.js
var enUSPickers = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "open previous view",
  openNextView: "open next view",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange placeholders
  start: "Start",
  end: "End",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Select ${view}. ${time === null ? "No time selected" : `Selected time is ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} hours`,
  minutesClockNumberText: (minutes) => `${minutes} minutes`,
  secondsClockNumberText: (seconds) => `${seconds} seconds`,
  // Digital clock labels
  selectViewText: (view) => `Select ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose date, selected date is ${utils.format(value, "fullDate")}` : "Choose date",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choose time, selected time is ${utils.format(value, "fullTime")}` : "Choose time",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var DEFAULT_LOCALE = enUSPickers;
var enUS = getPickersLocalization(enUSPickers);

// node_modules/@mui/x-date-pickers/internals/hooks/useUtils.js
var useLocalizationContext = () => {
  const localization = React9.useContext(MuiPickersAdapterContext);
  if (localization === null) {
    throw new Error(["MUI: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join("\n"));
  }
  if (localization.utils === null) {
    throw new Error(["MUI: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join("\n"));
  }
  const localeText = React9.useMemo(() => _extends({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return React9.useMemo(() => _extends({}, localization, {
    localeText
  }), [localization, localeText]);
};
var useUtils = () => useLocalizationContext().utils;
var useDefaultDates = () => useLocalizationContext().defaultDates;
var useLocaleText = () => useLocalizationContext().localeText;
var useNow = (timezone) => {
  const utils = useUtils();
  const now = React9.useRef();
  if (now.current === void 0) {
    now.current = utils.dateWithTimezone(void 0, timezone);
  }
  return now.current;
};

// node_modules/@mui/x-date-pickers/internals/hooks/useValueWithTimezone.js
var useValueWithTimezone = ({
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  onChange,
  valueManager
}) => {
  var _ref, _ref2;
  const utils = useUtils();
  const firstDefaultValue = React10.useRef(defaultValue);
  const inputValue = (_ref = valueProp != null ? valueProp : firstDefaultValue.current) != null ? _ref : valueManager.emptyValue;
  const inputTimezone = React10.useMemo(() => valueManager.getTimezone(utils, inputValue), [utils, valueManager, inputValue]);
  const setInputTimezone = useEventCallback_default((newValue) => {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(utils, inputTimezone, newValue);
  });
  const timezoneToRender = (_ref2 = timezoneProp != null ? timezoneProp : inputTimezone) != null ? _ref2 : "default";
  const valueWithTimezoneToRender = React10.useMemo(() => valueManager.setTimezone(utils, timezoneToRender, inputValue), [valueManager, utils, timezoneToRender, inputValue]);
  const handleValueChange = useEventCallback_default((newValue, ...otherParams) => {
    const newValueWithInputTimezone = setInputTimezone(newValue);
    onChange == null || onChange(newValueWithInputTimezone, ...otherParams);
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender
  };
};
var useControlledValueWithTimezone = ({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  onChange: onChangeProp,
  valueManager
}) => {
  const [valueWithInputTimezone, setValue] = useControlled({
    name,
    state: "value",
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : valueManager.emptyValue
  });
  const onChange = useEventCallback_default((newValue, ...otherParams) => {
    setValue(newValue);
    onChangeProp == null || onChangeProp(newValue, ...otherParams);
  });
  return useValueWithTimezone({
    timezone: timezoneProp,
    value: valueWithInputTimezone,
    defaultValue: void 0,
    onChange,
    valueManager
  });
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React14 = __toESM(require_react());
init_useEnhancedEffect();
init_useEventCallback();
init_useForkRef();

// node_modules/@mui/x-date-pickers/internals/hooks/useValidation.js
var React11 = __toESM(require_react());
function useValidation(props, validate, isSameError, defaultErrorState) {
  const {
    value,
    onError
  } = props;
  const adapter = useLocalizationContext();
  const previousValidationErrorRef = React11.useRef(defaultErrorState);
  const validationError = validate({
    adapter,
    value,
    props
  });
  React11.useEffect(() => {
    if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [isSameError, onError, previousValidationErrorRef, validationError, value]);
  return validationError;
}

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.utils.js
init_extends();

// node_modules/@mui/x-date-pickers/internals/utils/views.js
var areViewsEqual = (views, expectedViews) => {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every((expectedView) => views.includes(expectedView));
};
var applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views != null ? views : defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error("MUI: The `views` prop must contain at least one view");
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};

// node_modules/@mui/x-date-pickers/internals/utils/date-utils.js
var findClosestEnabledDate = ({
  date,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  isDateDisabled,
  utils,
  timezone
}) => {
  const today = utils.startOfDay(utils.dateWithTimezone(void 0, timezone));
  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }
  let forward = date;
  let backward = date;
  if (utils.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = utils.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = utils.addDays(backward, -1);
    }
  }
  return null;
};
var replaceInvalidDateByNull = (utils, value) => value == null || !utils.isValid(value) ? null : value;
var applyDefaultDate = (utils, value, defaultValue) => {
  if (value == null || !utils.isValid(value)) {
    return defaultValue;
  }
  return value;
};
var areDatesEqual = (utils, a, b) => {
  if (!utils.isValid(a) && a != null && !utils.isValid(b) && b != null) {
    return true;
  }
  return utils.isEqual(a, b);
};
var getMonthsInYear = (utils, year) => {
  const firstMonth = utils.startOfYear(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(utils.addMonths(prevMonth, 1));
  }
  return months;
};
var mergeDateAndTime = (utils, dateParam, timeParam) => {
  let mergedDate = dateParam;
  mergedDate = utils.setHours(mergedDate, utils.getHours(timeParam));
  mergedDate = utils.setMinutes(mergedDate, utils.getMinutes(timeParam));
  mergedDate = utils.setSeconds(mergedDate, utils.getSeconds(timeParam));
  return mergedDate;
};
var getTodayDate = (utils, timezone, valueType) => valueType === "date" ? utils.startOfDay(utils.dateWithTimezone(void 0, timezone)) : utils.dateWithTimezone(void 0, timezone);
var formatMeridiem = (utils, meridiem) => {
  const date = utils.setHours(utils.date(), meridiem === "am" ? 2 : 14);
  return utils.format(date, "meridiem");
};
var dateViews = ["year", "month", "day"];
var isDatePickerView = (view) => dateViews.includes(view);
var resolveDateFormat = (utils, {
  format,
  views
}, isInToolbar) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if (areViewsEqual(views, ["year"])) {
    return formats.year;
  }
  if (areViewsEqual(views, ["month"])) {
    return formats.month;
  }
  if (areViewsEqual(views, ["day"])) {
    return formats.dayOfMonth;
  }
  if (areViewsEqual(views, ["month", "year"])) {
    return `${formats.month} ${formats.year}`;
  }
  if (areViewsEqual(views, ["day", "month"])) {
    return `${formats.month} ${formats.dayOfMonth}`;
  }
  if (isInToolbar) {
    return /en/.test(utils.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
  }
  return formats.keyboardDate;
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.utils.js
var getDateSectionConfigFromFormatToken = (utils, formatToken) => {
  const config = utils.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI: The token "${formatToken}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join("\n"));
  }
  if (typeof config === "string") {
    return {
      type: config,
      contentType: config === "meridiem" ? "letter" : "digit",
      maxLength: void 0
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType,
    maxLength: config.maxLength
  };
};
var getDeltaFromKeyCode = (keyCode) => {
  switch (keyCode) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
};
var getDaysInWeekStr = (utils, timezone, format) => {
  const elements = [];
  const now = utils.dateWithTimezone(void 0, timezone);
  const startDate = utils.startOfWeek(now);
  const endDate = utils.endOfWeek(now);
  let current = startDate;
  while (utils.isBefore(current, endDate)) {
    elements.push(current);
    current = utils.addDays(current, 1);
  }
  return elements.map((weekDay) => utils.formatByString(weekDay, format));
};
var getLetterEditingOptions = (utils, timezone, sectionType, format) => {
  switch (sectionType) {
    case "month": {
      return getMonthsInYear(utils, utils.dateWithTimezone(void 0, timezone)).map((month) => utils.formatByString(month, format));
    }
    case "weekDay": {
      return getDaysInWeekStr(utils, timezone, format);
    }
    case "meridiem": {
      const now = utils.dateWithTimezone(void 0, timezone);
      return [utils.startOfDay(now), utils.endOfDay(now)].map((date) => utils.formatByString(date, format));
    }
    default: {
      return [];
    }
  }
};
var cleanLeadingZeros = (utils, valueStr, size) => {
  let cleanValueStr = valueStr;
  cleanValueStr = Number(cleanValueStr).toString();
  while (cleanValueStr.length < size) {
    cleanValueStr = `0${cleanValueStr}`;
  }
  return cleanValueStr;
};
var cleanDigitSectionValue = (utils, timezone, value, sectionBoundaries, section) => {
  if (true) {
    if (section.type !== "day" && section.contentType === "digit-with-letter") {
      throw new Error([`MUI: The token "${section.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join("\n"));
    }
  }
  if (section.type === "day" && section.contentType === "digit-with-letter") {
    const date = utils.setDate(sectionBoundaries.longestMonth, value);
    return utils.formatByString(date, section.format);
  }
  const valueStr = value.toString();
  if (section.hasLeadingZerosInInput) {
    return cleanLeadingZeros(utils, valueStr, section.maxLength);
  }
  return valueStr;
};
var adjustSectionValue = (utils, timezone, section, keyCode, sectionsValueBoundaries, activeDate, stepsAttributes) => {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === "Home";
  const isEnd = keyCode === "End";
  const shouldSetAbsolute = section.value === "" || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = (value) => cleanDigitSectionValue(utils, timezone, value, sectionBoundaries, section);
    const step = section.type === "minutes" && stepsAttributes != null && stepsAttributes.minutesStep ? stepsAttributes.minutesStep : 1;
    const currentSectionValue = parseInt(section.value, 10);
    let newSectionValueNumber = currentSectionValue + delta * step;
    if (shouldSetAbsolute) {
      if (section.type === "year" && !isEnd && !isStart) {
        return utils.formatByString(utils.dateWithTimezone(void 0, timezone), section.format);
      }
      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    }
    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - (step + newSectionValueNumber) % step;
      }
      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(utils, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + options.length + delta) % options.length;
    return options[newOptionIndex];
  };
  if (section.contentType === "digit" || section.contentType === "digit-with-letter") {
    return adjustDigitSection();
  }
  return adjustLetterSection();
};
var getSectionVisibleValue = (section, target) => {
  let value = section.value || section.placeholder;
  const hasLeadingZeros = target === "non-input" ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
  if (target === "non-input" && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
    value = Number(value).toString();
  }
  const shouldAddInvisibleSpace = ["input-rtl", "input-ltr"].includes(target) && section.contentType === "digit" && !hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}‎`;
  }
  if (target === "input-rtl") {
    value = `⁨${value}⁩`;
  }
  return value;
};
var cleanString = (dirtyString) => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, "");
var addPositionPropertiesToSections = (sections, isRTL) => {
  let position = 0;
  let positionInInput = isRTL ? 1 : 0;
  const newSections = [];
  for (let i2 = 0; i2 < sections.length; i2 += 1) {
    const section = sections[i2];
    const renderedValue = getSectionVisibleValue(section, isRTL ? "input-rtl" : "input-ltr");
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + renderedValue.indexOf(cleanedValue[0]) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push(_extends({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
var getSectionPlaceholder = (utils, timezone, localeText, sectionConfig, currentTokenValue) => {
  switch (sectionConfig.type) {
    case "year": {
      return localeText.fieldYearPlaceholder({
        digitAmount: utils.formatByString(utils.dateWithTimezone(void 0, timezone), currentTokenValue).length
      });
    }
    case "month": {
      return localeText.fieldMonthPlaceholder({
        contentType: sectionConfig.contentType
      });
    }
    case "day": {
      return localeText.fieldDayPlaceholder();
    }
    case "weekDay": {
      return localeText.fieldWeekDayPlaceholder({
        contentType: sectionConfig.contentType
      });
    }
    case "hours": {
      return localeText.fieldHoursPlaceholder();
    }
    case "minutes": {
      return localeText.fieldMinutesPlaceholder();
    }
    case "seconds": {
      return localeText.fieldSecondsPlaceholder();
    }
    case "meridiem": {
      return localeText.fieldMeridiemPlaceholder();
    }
    default: {
      return currentTokenValue;
    }
  }
};
var changeSectionValueFormat = (utils, valueStr, currentFormat, newFormat) => {
  if (true) {
    if (getDateSectionConfigFromFormatToken(utils, currentFormat).type === "weekDay") {
      throw new Error("changeSectionValueFormat doesn't support week day formats");
    }
  }
  return utils.formatByString(utils.parse(valueStr, currentFormat), newFormat);
};
var isFourDigitYearFormat = (utils, timezone, format) => utils.formatByString(utils.dateWithTimezone(void 0, timezone), format).length === 4;
var doesSectionFormatHaveLeadingZeros = (utils, timezone, contentType, sectionType, format) => {
  if (contentType !== "digit") {
    return false;
  }
  const now = utils.dateWithTimezone(void 0, timezone);
  switch (sectionType) {
    case "year": {
      if (isFourDigitYearFormat(utils, timezone, format)) {
        const formatted0001 = utils.formatByString(utils.setYear(now, 1), format);
        return formatted0001 === "0001";
      }
      const formatted2001 = utils.formatByString(utils.setYear(now, 2001), format);
      return formatted2001 === "01";
    }
    case "month": {
      return utils.formatByString(utils.startOfYear(now), format).length > 1;
    }
    case "day": {
      return utils.formatByString(utils.startOfMonth(now), format).length > 1;
    }
    case "weekDay": {
      return utils.formatByString(utils.startOfWeek(now), format).length > 1;
    }
    case "hours": {
      return utils.formatByString(utils.setHours(now, 1), format).length > 1;
    }
    case "minutes": {
      return utils.formatByString(utils.setMinutes(now, 1), format).length > 1;
    }
    case "seconds": {
      return utils.formatByString(utils.setMinutes(now, 1), format).length > 1;
    }
    default: {
      throw new Error("Invalid section type");
    }
  }
};
var getEscapedPartsFromFormat = (utils, format) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = utils.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, "g");
  let match = null;
  while (match = regExp.exec(format)) {
    escapedParts.push({
      start: match.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
var splitFormatIntoSections = (utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL) => {
  let startSeparator = "";
  const sections = [];
  const now = utils.date();
  const commitToken = (token) => {
    if (token === "") {
      return null;
    }
    const sectionConfig = getDateSectionConfigFromFormatToken(utils, token);
    const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, timezone, sectionConfig.contentType, sectionConfig.type, token);
    const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === "digit";
    const isValidDate = date != null && utils.isValid(date);
    let sectionValue = isValidDate ? utils.formatByString(date, token) : "";
    let maxLength = null;
    if (hasLeadingZerosInInput) {
      if (hasLeadingZerosInFormat) {
        maxLength = sectionValue === "" ? utils.formatByString(now, token).length : sectionValue.length;
      } else {
        if (sectionConfig.maxLength == null) {
          throw new Error(`MUI: The token ${token} should have a 'maxDigitNumber' property on it's adapter`);
        }
        maxLength = sectionConfig.maxLength;
        if (isValidDate) {
          sectionValue = cleanLeadingZeros(utils, sectionValue, maxLength);
        }
      }
    }
    sections.push(_extends({}, sectionConfig, {
      format: token,
      maxLength,
      value: sectionValue,
      placeholder: getSectionPlaceholder(utils, timezone, localeText, sectionConfig, token),
      hasLeadingZeros: hasLeadingZerosInFormat,
      hasLeadingZerosInFormat,
      hasLeadingZerosInInput,
      startSeparator: sections.length === 0 ? startSeparator : "",
      endSeparator: "",
      modified: false
    }));
    return null;
  };
  let formatExpansionOverflow = 10;
  let prevFormat = format;
  let nextFormat = utils.expandFormat(format);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = utils.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error("MUI: The format expansion seems to be  enter in an infinite loop. Please open an issue with the format passed to the picker component");
    }
  }
  const expandedFormat = nextFormat;
  const escapedParts = getEscapedPartsFromFormat(utils, expandedFormat);
  const isTokenStartRegExp = new RegExp(`^(${Object.keys(utils.formatTokenMap).join("|")})`);
  let currentTokenValue = "";
  for (let i2 = 0; i2 < expandedFormat.length; i2 += 1) {
    const escapedPartOfCurrentChar = escapedParts.find((escapeIndex) => escapeIndex.start <= i2 && escapeIndex.end >= i2);
    const char = expandedFormat[i2];
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const potentialToken = `${currentTokenValue}${expandedFormat.slice(i2)}`;
    if (!isEscapedChar && char.match(/([A-Za-z]+)/) && isTokenStartRegExp.test(potentialToken)) {
      currentTokenValue += char;
    } else {
      const isEscapeBoundary = isEscapedChar && (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.start) === i2 || (escapedPartOfCurrentChar == null ? void 0 : escapedPartOfCurrentChar.end) === i2;
      if (!isEscapeBoundary) {
        commitToken(currentTokenValue);
        currentTokenValue = "";
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
        }
      }
    }
  }
  commitToken(currentTokenValue);
  return sections.map((section) => {
    const cleanSeparator = (separator) => {
      let cleanedSeparator = separator;
      if (isRTL && cleanedSeparator !== null && cleanedSeparator.includes(" ")) {
        cleanedSeparator = `⁩${cleanedSeparator}⁦`;
      }
      if (formatDensity === "spacious" && ["/", ".", "-"].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};
var getDateFromDateSections = (utils, sections) => {
  const shouldSkipWeekDays = sections.some((section) => section.type === "day");
  const sectionFormats = [];
  const sectionValues = [];
  for (let i2 = 0; i2 < sections.length; i2 += 1) {
    const section = sections[i2];
    const shouldSkip = shouldSkipWeekDays && section.type === "weekDay";
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, "non-input"));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(" ");
  const dateWithoutSeparatorStr = sectionValues.join(" ");
  return utils.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
var createDateStrForInputFromSections = (sections, isRTL) => {
  const formattedSections = sections.map((section) => {
    const dateValue = getSectionVisibleValue(section, isRTL ? "input-rtl" : "input-ltr");
    return `${section.startSeparator}${dateValue}${section.endSeparator}`;
  });
  const dateStr = formattedSections.join("");
  if (!isRTL) {
    return dateStr;
  }
  return `⁦${dateStr}⁩`;
};
var getSectionsBoundaries = (utils, timezone) => {
  const today = utils.dateWithTimezone(void 0, timezone);
  const endOfYear = utils.endOfYear(today);
  const endOfDay = utils.endOfDay(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = getMonthsInYear(utils, today).reduce((acc, month) => {
    const daysInMonth = utils.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(utils, timezone, format) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: utils.getMonth(endOfYear) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: currentDate != null && utils.isValid(currentDate) ? utils.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth
    }),
    weekDay: ({
      format,
      contentType
    }) => {
      if (contentType === "digit") {
        const daysInWeek = getDaysInWeekStr(utils, timezone, format).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format
    }) => {
      const lastHourInDay = utils.getHours(endOfDay);
      const hasMeridiem = utils.formatByString(utils.endOfDay(today), format) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          maximum: Number(utils.formatByString(utils.startOfDay(today), format))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: utils.getMinutes(endOfDay)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: utils.getSeconds(endOfDay)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
var warnedOnceInvalidSection = false;
var validateSections = (sections, valueType) => {
  if (true) {
    if (!warnedOnceInvalidSection) {
      const supportedSections = [];
      if (["date", "date-time"].includes(valueType)) {
        supportedSections.push("weekDay", "day", "month", "year");
      }
      if (["time", "date-time"].includes(valueType)) {
        supportedSections.push("hours", "minutes", "seconds", "meridiem");
      }
      const invalidSection = sections.find((section) => !supportedSections.includes(section.type));
      if (invalidSection) {
        console.warn(`MUI: The field component you are using is not compatible with the "${invalidSection.type} date section.`, `The supported date sections are ["${supportedSections.join('", "')}"]\`.`);
        warnedOnceInvalidSection = true;
      }
    }
  }
};
var transferDateSectionValue = (utils, timezone, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case "year": {
      return utils.setYear(dateToTransferTo, utils.getYear(dateToTransferFrom));
    }
    case "month": {
      return utils.setMonth(dateToTransferTo, utils.getMonth(dateToTransferFrom));
    }
    case "weekDay": {
      const formattedDaysInWeek = getDaysInWeekStr(utils, timezone, section.format);
      const dayInWeekStrOfActiveDate = utils.formatByString(dateToTransferFrom, section.format);
      const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
      const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
      const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
      return utils.addDays(dateToTransferFrom, diff);
    }
    case "day": {
      return utils.setDate(dateToTransferTo, utils.getDate(dateToTransferFrom));
    }
    case "meridiem": {
      const isAM = utils.getHours(dateToTransferFrom) < 12;
      const mergedDateHours = utils.getHours(dateToTransferTo);
      if (isAM && mergedDateHours >= 12) {
        return utils.addHours(dateToTransferTo, -12);
      }
      if (!isAM && mergedDateHours < 12) {
        return utils.addHours(dateToTransferTo, 12);
      }
      return dateToTransferTo;
    }
    case "hours": {
      return utils.setHours(dateToTransferTo, utils.getHours(dateToTransferFrom));
    }
    case "minutes": {
      return utils.setMinutes(dateToTransferTo, utils.getMinutes(dateToTransferFrom));
    }
    case "seconds": {
      return utils.setSeconds(dateToTransferTo, utils.getSeconds(dateToTransferFrom));
    }
    default: {
      return dateToTransferTo;
    }
  }
};
var reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8
};
var mergeDateIntoReferenceDate = (utils, timezone, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) => (
  // cloning sections before sort to avoid mutating it
  [...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
    if (!shouldLimitToEditedSections || section.modified) {
      return transferDateSectionValue(utils, timezone, section, dateToTransferFrom, mergedDate);
    }
    return mergedDate;
  }, referenceDate)
);
var isAndroid = () => navigator.userAgent.toLowerCase().indexOf("android") > -1;
var getSectionOrder = (sections, isRTL) => {
  const neighbors = {};
  if (!isRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (section, index) => {
        var _section$endSeparator;
        return index >= groupedSectionsStart && ((_section$endSeparator = section.endSeparator) == null ? void 0 : _section$endSeparator.includes(" ")) && // Special case where the spaces were not there in the initial input
        section.endSeparator !== " / ";
      }
    );
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i2 = groupedSectionsEnd; i2 >= groupedSectionsStart; i2 -= 1) {
      ltr2rtl[i2] = RTLIndex;
      rtl2ltr[RTLIndex] = i2;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldState.js
init_extends();
var React12 = __toESM(require_react());
init_useControlled();

// node_modules/@mui/x-date-pickers/internals/utils/time-utils.js
var timeViews = ["hours", "minutes", "seconds"];
var isTimeView = (view) => timeViews.includes(view);
var isInternalTimeView = (view) => timeViews.includes(view) || view === "meridiem";
var getMeridiem = (date, utils) => {
  if (!date) {
    return null;
  }
  return utils.getHours(date) >= 12 ? "pm" : "am";
};
var convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? "pm" : "am";
    if (currentMeridiem !== meridiem) {
      return meridiem === "am" ? value - 12 : value + 12;
    }
  }
  return value;
};
var convertToMeridiem = (time, meridiem, ampm, utils) => {
  const newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};
var getSecondsInDay = (date, utils) => {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
};
var createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, utils) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return utils.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
};
var resolveTimeFormat = (utils, {
  format,
  views,
  ampm
}) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if (areViewsEqual(views, ["hours"])) {
    return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
  }
  if (areViewsEqual(views, ["minutes"])) {
    return formats.minutes;
  }
  if (areViewsEqual(views, ["seconds"])) {
    return formats.seconds;
  }
  if (areViewsEqual(views, ["minutes", "seconds"])) {
    return `${formats.minutes}:${formats.seconds}`;
  }
  if (areViewsEqual(views, ["hours", "minutes", "seconds"])) {
    return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
  }
  return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};

// node_modules/@mui/x-date-pickers/internals/utils/getDefaultReferenceDate.js
var SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
var getSectionTypeGranularity = (sections) => Math.max(...sections.map((section) => {
  var _SECTION_TYPE_GRANULA;
  return (_SECTION_TYPE_GRANULA = SECTION_TYPE_GRANULARITY[section.type]) != null ? _SECTION_TYPE_GRANULA : 1;
}));
var roundDate = (utils, granularity, date) => {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return utils.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return utils.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return utils.startOfDay(date);
  }
  let roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = utils.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = utils.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = utils.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
var getDefaultReferenceDate = ({
  props,
  utils,
  granularity,
  timezone,
  getTodayDate: inGetTodayDate
}) => {
  var _props$disableIgnorin;
  let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(utils, granularity, getTodayDate(utils, timezone));
  if (props.minDate != null && utils.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.minDate);
  }
  if (props.maxDate != null && utils.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.maxDate);
  }
  const isAfter = createIsAfterIgnoreDatePart((_props$disableIgnorin = props.disableIgnoringDatePartForTimeValidation) != null ? _props$disableIgnorin : false, utils);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(utils, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(utils, referenceDate, props.maxTime));
  }
  return referenceDate;
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldState.js
var useFieldState = (params) => {
  const utils = useUtils();
  const localeText = useLocaleText();
  const adapter = useLocalizationContext();
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const {
    valueManager,
    fieldValueManager,
    valueType,
    validator,
    internalProps,
    internalProps: {
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      onChange,
      format,
      formatDensity = "dense",
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange,
      shouldRespectLeadingZeros = false,
      timezone: timezoneProp
    }
  } = params;
  const {
    timezone,
    value: valueFromTheOutside,
    handleValueChange
  } = useValueWithTimezone({
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager
  });
  const sectionsValueBoundaries = React12.useMemo(() => getSectionsBoundaries(utils, timezone), [utils, timezone]);
  const getSectionsFromValue = React12.useCallback((value, fallbackSections = null) => fieldValueManager.getSectionsFromValue(utils, value, fallbackSections, isRTL, (date) => splitFormatIntoSections(utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL)), [fieldValueManager, format, localeText, isRTL, shouldRespectLeadingZeros, utils, formatDensity, timezone]);
  const placeholder = React12.useMemo(() => fieldValueManager.getValueStrFromSections(getSectionsFromValue(valueManager.emptyValue), isRTL), [fieldValueManager, getSectionsFromValue, valueManager.emptyValue, isRTL]);
  const [state, setState] = React12.useState(() => {
    const sections = getSectionsFromValue(valueFromTheOutside);
    validateSections(sections, valueType);
    const stateWithoutReferenceDate = {
      sections,
      value: valueFromTheOutside,
      referenceValue: valueManager.emptyValue,
      tempValueStrAndroid: null
    };
    const granularity = getSectionTypeGranularity(sections);
    const referenceValue = valueManager.getInitialReferenceValue({
      referenceDate: referenceDateProp,
      value: valueFromTheOutside,
      utils,
      props: internalProps,
      granularity,
      timezone
    });
    return _extends({}, stateWithoutReferenceDate, {
      referenceValue
    });
  });
  const [selectedSections, innerSetSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: "useField",
    state: "selectedSectionIndexes"
  });
  const setSelectedSections = (newSelectedSections) => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange == null || onSelectedSectionsChange(newSelectedSections);
    setState((prevState) => _extends({}, prevState, {
      selectedSectionQuery: null
    }));
  };
  const selectedSectionIndexes = React12.useMemo(() => {
    if (selectedSections == null) {
      return null;
    }
    if (selectedSections === "all") {
      return {
        startIndex: 0,
        endIndex: state.sections.length - 1,
        shouldSelectBoundarySelectors: true
      };
    }
    if (typeof selectedSections === "number") {
      return {
        startIndex: selectedSections,
        endIndex: selectedSections
      };
    }
    if (typeof selectedSections === "string") {
      const selectedSectionIndex = state.sections.findIndex((section) => section.type === selectedSections);
      return {
        startIndex: selectedSectionIndex,
        endIndex: selectedSectionIndex
      };
    }
    return selectedSections;
  }, [selectedSections, state.sections]);
  const publishValue = ({
    value,
    referenceValue,
    sections
  }) => {
    setState((prevState) => _extends({}, prevState, {
      sections,
      value,
      referenceValue,
      tempValueStrAndroid: null
    }));
    const context = {
      validationError: validator({
        adapter,
        value,
        props: _extends({}, internalProps, {
          value,
          timezone
        })
      })
    };
    handleValueChange(value, context);
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = _extends({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return addPositionPropertiesToSections(newSections, isRTL);
  };
  const clearValue = () => {
    if (valueManager.areValuesEqual(utils, state.value, valueManager.emptyValue)) {
      return;
    }
    publishValue({
      value: valueManager.emptyValue,
      referenceValue: state.referenceValue,
      sections: getSectionsFromValue(valueManager.emptyValue)
    });
  };
  const clearActiveSection = () => {
    if (selectedSectionIndexes == null) {
      return;
    }
    const activeSection = state.sections[selectedSectionIndexes.startIndex];
    if (activeSection.value === "") {
      return;
    }
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const nonEmptySectionCountBefore = activeDateManager.getSections(state.sections).filter((section) => section.value !== "").length;
    const isTheOnlyNonEmptySection = nonEmptySectionCountBefore === 1;
    const newSections = setSectionValue(selectedSectionIndexes.startIndex, "");
    const newActiveDate = isTheOnlyNonEmptySection ? null : utils.date(/* @__PURE__ */ new Date(""));
    const newValues = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
    if ((newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date))) {
      publishValue(_extends({}, newValues, {
        sections: newSections
      }));
    } else {
      setState((prevState) => _extends({}, prevState, newValues, {
        sections: newSections,
        tempValueStrAndroid: null
      }));
    }
  };
  const updateValueFromValueStr = (valueStr) => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = utils.parse(dateStr, format);
      if (date == null || !utils.isValid(date)) {
        return null;
      }
      const sections = splitFormatIntoSections(utils, timezone, localeText, format, date, formatDensity, shouldRespectLeadingZeros, isRTL);
      return mergeDateIntoReferenceDate(utils, timezone, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    const newReferenceValue = fieldValueManager.updateReferenceValue(utils, newValue, state.referenceValue);
    publishValue({
      value: newValue,
      referenceValue: newReferenceValue,
      sections: getSectionsFromValue(newValue, state.sections)
    });
  };
  const updateSectionValue = ({
    activeSection,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    if (shouldGoToNextSection && selectedSectionIndexes && selectedSectionIndexes.startIndex < state.sections.length - 1) {
      setSelectedSections(selectedSectionIndexes.startIndex + 1);
    } else if (selectedSectionIndexes && selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
      setSelectedSections(selectedSectionIndexes.startIndex);
    }
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const newSections = setSectionValue(selectedSectionIndexes.startIndex, newSectionValue);
    const newActiveDateSections = activeDateManager.getSections(newSections);
    const newActiveDate = getDateFromDateSections(utils, newActiveDateSections);
    let values;
    let shouldPublish;
    if (newActiveDate != null && utils.isValid(newActiveDate)) {
      const mergedDate = mergeDateIntoReferenceDate(utils, timezone, newActiveDate, newActiveDateSections, activeDateManager.referenceDate, true);
      values = activeDateManager.getNewValuesFromNewActiveDate(mergedDate);
      shouldPublish = true;
    } else {
      values = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
      shouldPublish = (newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date));
    }
    if (shouldPublish) {
      return publishValue(_extends({}, values, {
        sections: newSections
      }));
    }
    return setState((prevState) => _extends({}, prevState, values, {
      sections: newSections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = (tempValueStrAndroid) => setState((prev) => _extends({}, prev, {
    tempValueStrAndroid
  }));
  React12.useEffect(() => {
    const sections = getSectionsFromValue(state.value);
    validateSections(sections, valueType);
    setState((prevState) => _extends({}, prevState, {
      sections
    }));
  }, [format, utils.locale]);
  React12.useEffect(() => {
    let shouldUpdate = false;
    if (!valueManager.areValuesEqual(utils, state.value, valueFromTheOutside)) {
      shouldUpdate = true;
    } else {
      shouldUpdate = valueManager.getTimezone(utils, state.value) !== valueManager.getTimezone(utils, valueFromTheOutside);
    }
    if (shouldUpdate) {
      setState((prevState) => _extends({}, prevState, {
        value: valueFromTheOutside,
        referenceValue: fieldValueManager.updateReferenceValue(utils, valueFromTheOutside, prevState.referenceValue),
        sections: getSectionsFromValue(valueFromTheOutside)
      }));
    }
  }, [valueFromTheOutside]);
  return {
    state,
    selectedSectionIndexes,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    placeholder,
    timezone
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldCharacterEditing.js
init_extends();
var React13 = __toESM(require_react());
init_useEventCallback();
var QUERY_LIFE_DURATION_MS = 5e3;
var isQueryResponseWithoutValue = (response) => response.saveQuery != null;
var useFieldCharacterEditing = ({
  sections,
  updateSectionValue,
  sectionsValueBoundaries,
  setTempAndroidValueStr,
  timezone
}) => {
  const utils = useUtils();
  const [query, setQuery] = React13.useState(null);
  const resetQuery = useEventCallback_default(() => setQuery(null));
  React13.useEffect(() => {
    var _sections$query$secti;
    if (query != null && ((_sections$query$secti = sections[query.sectionIndex]) == null ? void 0 : _sections$query$secti.type) !== query.sectionType) {
      resetQuery();
    }
  }, [sections, query, resetQuery]);
  React13.useEffect(() => {
    if (query != null) {
      const timeout = setTimeout(() => resetQuery(), QUERY_LIFE_DURATION_MS);
      return () => {
        window.clearTimeout(timeout);
      };
    }
    return () => {
    };
  }, [query, resetQuery]);
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = sections[sectionIndex];
    if (query != null && (!isValidQueryValue || isValidQueryValue(query.value)) && query.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${query.value}${cleanKeyPressed}`;
      const queryResponse2 = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse2)) {
        setQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse2;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      resetQuery();
      return null;
    }
    setQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = (params) => {
    const findMatchingOptions = (format, options, queryValue) => {
      const matchingValues = options.filter((option) => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = (format) => getLetterEditingOptions(utils, timezone, activeSection.type, format);
      if (activeSection.contentType === "letter") {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }
      if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(utils, fallbackFormat).contentType === "letter") {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return _extends({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case "month": {
          const formatFallbackValue = (fallbackValue) => changeSectionValueFormat(utils, fallbackValue, utils.formats.month, activeSection.format);
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.month, formatFallbackValue);
        }
        case "weekDay": {
          const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.weekday, formatFallbackValue);
        }
        case "meridiem": {
          return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
        }
        default: {
          return {
            saveQuery: false
          };
        }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = (params) => {
    const getNewSectionValue = (queryValue, section) => {
      const queryValueNumber = Number(`${queryValue}`);
      const sectionBoundaries = sectionsValueBoundaries[section.type]({
        currentDate: null,
        format: section.format,
        contentType: section.contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }
      if (queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = Number(`${queryValue}0`) > sectionBoundaries.maximum || queryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = cleanDigitSectionValue(utils, timezone, queryValueNumber, sectionBoundaries, section);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === "digit" || activeSection.contentType === "digit-with-letter") {
        return getNewSectionValue(queryValue, activeSection);
      }
      if (activeSection.type === "month") {
        const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, timezone, "digit", "month", "MM");
        const response = getNewSectionValue(queryValue, {
          type: activeSection.type,
          format: "MM",
          hasLeadingZerosInFormat,
          hasLeadingZerosInInput: true,
          contentType: "digit",
          maxLength: 2
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = changeSectionValueFormat(utils, response.sectionValue, "MM", activeSection.format);
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      if (activeSection.type === "weekDay") {
        const response = getNewSectionValue(queryValue, activeSection);
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = getDaysInWeekStr(utils, timezone, activeSection.format)[Number(response.sectionValue) - 1];
        return _extends({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, (queryValue) => !Number.isNaN(Number(queryValue)));
  };
  const applyCharacterEditing = useEventCallback_default((params) => {
    const activeSection = sections[params.sectionIndex];
    const isNumericEditing = !Number.isNaN(Number(params.keyPressed));
    const response = isNumericEditing ? applyNumericEditing(params) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
    } else {
      updateSectionValue({
        activeSection,
        newSectionValue: response.sectionValue,
        shouldGoToNextSection: response.shouldGoToNextSection
      });
    }
  });
  return {
    applyCharacterEditing,
    resetCharacterQuery: resetQuery
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.js
var _excluded8 = ["onClick", "onKeyDown", "onFocus", "onBlur", "onMouseUp", "onPaste", "error"];
var useField = (params) => {
  const utils = useUtils();
  const {
    state,
    selectedSectionIndexes,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    placeholder,
    timezone
  } = useFieldState(params);
  const {
    inputRef: inputRefProp,
    internalProps,
    internalProps: {
      readOnly = false,
      unstableFieldRef,
      minutesStep
    },
    forwardedProps: {
      onClick,
      onKeyDown,
      onFocus,
      onBlur,
      onMouseUp,
      onPaste,
      error
    },
    fieldValueManager,
    valueManager,
    validator
  } = params, otherForwardedProps = _objectWithoutPropertiesLoose(params.forwardedProps, _excluded8);
  const {
    applyCharacterEditing,
    resetCharacterQuery
  } = useFieldCharacterEditing({
    sections: state.sections,
    updateSectionValue,
    sectionsValueBoundaries,
    setTempAndroidValueStr,
    timezone
  });
  const inputRef = React14.useRef(null);
  const handleRef = useForkRef(inputRefProp, inputRef);
  const focusTimeoutRef = React14.useRef(void 0);
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const sectionOrder = React14.useMemo(() => getSectionOrder(state.sections, isRTL), [state.sections, isRTL]);
  const syncSelectionFromDOM = () => {
    var _selectionStart;
    if (readOnly) {
      setSelectedSections(null);
      return;
    }
    const browserStartIndex = (_selectionStart = inputRef.current.selectionStart) != null ? _selectionStart : 0;
    let nextSectionIndex;
    if (browserStartIndex <= state.sections[0].startInInput) {
      nextSectionIndex = 1;
    } else if (browserStartIndex >= state.sections[state.sections.length - 1].endInInput) {
      nextSectionIndex = 1;
    } else {
      nextSectionIndex = state.sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
    }
    const sectionIndex = nextSectionIndex === -1 ? state.sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  };
  const handleInputClick = useEventCallback_default((...args) => {
    onClick == null || onClick(...args);
    syncSelectionFromDOM();
  });
  const handleInputMouseUp = useEventCallback_default((event) => {
    onMouseUp == null || onMouseUp(event);
    event.preventDefault();
  });
  const handleInputFocus = useEventCallback_default((...args) => {
    onFocus == null || onFocus(...args);
    const input = inputRef.current;
    window.clearTimeout(focusTimeoutRef.current);
    focusTimeoutRef.current = setTimeout(() => {
      if (!input || input !== inputRef.current) {
        return;
      }
      if (selectedSectionIndexes != null || readOnly) {
        return;
      }
      if (
        // avoid selecting all sections when focusing empty field without value
        input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length
      ) {
        setSelectedSections("all");
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputBlur = useEventCallback_default((...args) => {
    onBlur == null || onBlur(...args);
    setSelectedSections(null);
  });
  const handleInputPaste = useEventCallback_default((event) => {
    onPaste == null || onPaste(event);
    if (readOnly) {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData("text");
    if (selectedSectionIndexes && selectedSectionIndexes.startIndex === selectedSectionIndexes.endIndex) {
      const activeSection = state.sections[selectedSectionIndexes.startIndex];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === "letter" && lettersOnly || activeSection.contentType === "digit" && digitsOnly || activeSection.contentType === "digit-with-letter" && digitsAndLetterOnly;
      if (isValidPastedValue) {
        return;
      }
      if (lettersOnly || digitsOnly) {
        event.preventDefault();
        return;
      }
    }
    event.preventDefault();
    resetCharacterQuery();
    updateValueFromValueStr(pastedValue);
  });
  const handleInputChange = useEventCallback_default((event) => {
    if (readOnly) {
      return;
    }
    const targetValue = event.target.value;
    const eventData = event.nativeEvent.data;
    const shouldUseEventData = eventData && eventData.length > 1;
    const valueStr2 = shouldUseEventData ? eventData : targetValue;
    const cleanValueStr = cleanString(valueStr2);
    if (selectedSectionIndexes == null || shouldUseEventData) {
      updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
      return;
    }
    let keyPressed;
    if (selectedSectionIndexes.startIndex === 0 && selectedSectionIndexes.endIndex === state.sections.length - 1 && cleanValueStr.length === 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = cleanString(fieldValueManager.getValueStrFromSections(state.sections, isRTL));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i2 = 0; i2 < prevValueStr.length; i2 += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i2] !== cleanValueStr[i2]) {
          startOfDiffIndex = i2;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i2 - 1] !== cleanValueStr[cleanValueStr.length - i2 - 1]) {
          endOfDiffIndex = i2;
        }
      }
      const activeSection = state.sections[selectedSectionIndexes.startIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        return;
      }
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || "").length;
      keyPressed = cleanValueStr.slice(activeSection.start + cleanString(activeSection.startSeparator || "").length, activeSectionEndRelativeToNewValue);
    }
    if (isAndroid() && keyPressed.length === 0) {
      setTempAndroidValueStr(valueStr2);
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: selectedSectionIndexes.startIndex
    });
  });
  const handleInputKeyDown = useEventCallback_default((event) => {
    onKeyDown == null || onKeyDown(event);
    switch (true) {
      case (event.key === "a" && (event.ctrlKey || event.metaKey)): {
        event.preventDefault();
        setSelectedSections("all");
        break;
      }
      case event.key === "ArrowRight": {
        event.preventDefault();
        if (selectedSectionIndexes == null) {
          setSelectedSections(sectionOrder.startIndex);
        } else if (selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
          setSelectedSections(selectedSectionIndexes.endIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[selectedSectionIndexes.startIndex].rightIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      case event.key === "ArrowLeft": {
        event.preventDefault();
        if (selectedSectionIndexes == null) {
          setSelectedSections(sectionOrder.endIndex);
        } else if (selectedSectionIndexes.startIndex !== selectedSectionIndexes.endIndex) {
          setSelectedSections(selectedSectionIndexes.startIndex);
        } else {
          const nextSectionIndex = sectionOrder.neighbors[selectedSectionIndexes.startIndex].leftIndex;
          if (nextSectionIndex !== null) {
            setSelectedSections(nextSectionIndex);
          }
        }
        break;
      }
      case ["Backspace", "Delete"].includes(event.key): {
        event.preventDefault();
        if (readOnly) {
          break;
        }
        if (selectedSectionIndexes == null || selectedSectionIndexes.startIndex === 0 && selectedSectionIndexes.endIndex === state.sections.length - 1) {
          clearValue();
        } else {
          clearActiveSection();
        }
        resetCharacterQuery();
        break;
      }
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(event.key): {
        event.preventDefault();
        if (readOnly || selectedSectionIndexes == null) {
          break;
        }
        const activeSection = state.sections[selectedSectionIndexes.startIndex];
        const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
        const newSectionValue = adjustSectionValue(utils, timezone, activeSection, event.key, sectionsValueBoundaries, activeDateManager.date, {
          minutesStep
        });
        updateSectionValue({
          activeSection,
          newSectionValue,
          shouldGoToNextSection: false
        });
        break;
      }
    }
  });
  useEnhancedEffect_default(() => {
    if (!inputRef.current) {
      return;
    }
    if (selectedSectionIndexes == null) {
      if (inputRef.current.scrollLeft) {
        inputRef.current.scrollLeft = 0;
      }
      return;
    }
    const firstSelectedSection = state.sections[selectedSectionIndexes.startIndex];
    const lastSelectedSection = state.sections[selectedSectionIndexes.endIndex];
    let selectionStart = firstSelectedSection.startInInput;
    let selectionEnd = lastSelectedSection.endInInput;
    if (selectedSectionIndexes.shouldSelectBoundarySelectors) {
      selectionStart -= firstSelectedSection.startSeparator.length;
      selectionEnd += lastSelectedSection.endSeparator.length;
    }
    if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
      const currentScrollTop = inputRef.current.scrollTop;
      if (inputRef.current === getActiveElement(document)) {
        inputRef.current.setSelectionRange(selectionStart, selectionEnd);
      }
      inputRef.current.scrollTop = currentScrollTop;
    }
  });
  const validationError = useValidation(_extends({}, internalProps, {
    value: state.value,
    timezone
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const inputError = React14.useMemo(() => {
    if (error !== void 0) {
      return error;
    }
    return valueManager.hasError(validationError);
  }, [valueManager, validationError, error]);
  React14.useEffect(() => {
    if (!inputError && !selectedSectionIndexes) {
      resetCharacterQuery();
    }
  }, [state.referenceValue, selectedSectionIndexes, inputError]);
  React14.useEffect(() => {
    if (inputRef.current && inputRef.current === document.activeElement) {
      setSelectedSections("all");
    }
    return () => window.clearTimeout(focusTimeoutRef.current);
  }, []);
  React14.useEffect(() => {
    if (state.tempValueStrAndroid != null && selectedSectionIndexes != null) {
      resetCharacterQuery();
      clearActiveSection();
    }
  }, [state.tempValueStrAndroid]);
  const valueStr = React14.useMemo(() => {
    var _state$tempValueStrAn;
    return (_state$tempValueStrAn = state.tempValueStrAndroid) != null ? _state$tempValueStrAn : fieldValueManager.getValueStrFromSections(state.sections, isRTL);
  }, [state.sections, fieldValueManager, state.tempValueStrAndroid, isRTL]);
  const inputMode = React14.useMemo(() => {
    if (selectedSectionIndexes == null) {
      return "text";
    }
    if (state.sections[selectedSectionIndexes.startIndex].contentType === "letter") {
      return "text";
    }
    return "numeric";
  }, [selectedSectionIndexes, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === getActiveElement(document);
  const shouldShowPlaceholder = !inputHasFocus && valueManager.areValuesEqual(utils, state.value, valueManager.emptyValue);
  React14.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: () => {
      var _selectionStart2, _selectionEnd;
      const browserStartIndex = (_selectionStart2 = inputRef.current.selectionStart) != null ? _selectionStart2 : 0;
      const browserEndIndex = (_selectionEnd = inputRef.current.selectionEnd) != null ? _selectionEnd : 0;
      if (browserStartIndex === 0 && browserEndIndex === 0) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= state.sections[0].startInInput ? 1 : state.sections.findIndex((section) => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? state.sections.length - 1 : nextSectionIndex - 1;
    },
    setSelectedSections: (activeSectionIndex) => setSelectedSections(activeSectionIndex)
  }));
  return _extends({
    placeholder,
    autoComplete: "off"
  }, otherForwardedProps, {
    value: shouldShowPlaceholder ? "" : valueStr,
    inputMode,
    readOnly,
    onClick: handleInputClick,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onPaste: handleInputPaste,
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown,
    onMouseUp: handleInputMouseUp,
    error: inputError,
    ref: handleRef
  });
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.js
init_extends();
var React16 = __toESM(require_react());
init_esm();
init_useEventCallback();

// node_modules/@mui/x-date-pickers/internals/hooks/useOpenState.js
var React15 = __toESM(require_react());
var useOpenState = ({
  open,
  onOpen,
  onClose
}) => {
  const isControllingOpenProp = React15.useRef(typeof open === "boolean").current;
  const [openState, setIsOpenState] = React15.useState(false);
  React15.useEffect(() => {
    if (isControllingOpenProp) {
      if (typeof open !== "boolean") {
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      }
      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);
  const setIsOpen = React15.useCallback((newIsOpen) => {
    if (!isControllingOpenProp) {
      setIsOpenState(newIsOpen);
    }
    if (newIsOpen && onOpen) {
      onOpen();
    }
    if (!newIsOpen && onClose) {
      onClose();
    }
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: openState,
    setIsOpen
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.js
var shouldPublishValue = (params) => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === "setValueFromField") {
    return true;
  }
  if (action.name === "setValueFromAction") {
    if (isCurrentValueTheDefaultValue && ["accept", "today", "clear"].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === "setValueFromView" && action.selectionState !== "shallow") {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === "setValueFromShortcut") {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  return false;
};
var shouldCommitValue = (params) => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled,
    closeOnSelect
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === "setValueFromAction") {
    if (isCurrentValueTheDefaultValue && ["accept", "today", "clear"].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === "setValueFromView" && action.selectionState === "finish" && closeOnSelect) {
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === "setValueFromShortcut") {
    return action.changeImportance === "accept" && hasChanged(dateState.lastCommittedValue);
  }
  return false;
};
var shouldClosePicker = (params) => {
  const {
    action,
    closeOnSelect
  } = params;
  if (action.name === "setValueFromAction") {
    return true;
  }
  if (action.name === "setValueFromView") {
    return action.selectionState === "finish" && closeOnSelect;
  }
  if (action.name === "setValueFromShortcut") {
    return action.changeImportance === "accept";
  }
  return false;
};
var usePickerValue = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  validator
}) => {
  const {
    onAccept,
    onChange,
    value: inValue,
    defaultValue: inDefaultValue,
    closeOnSelect = wrapperVariant === "desktop",
    selectedSections: selectedSectionsProp,
    onSelectedSectionsChange,
    timezone: timezoneProp
  } = props;
  const {
    current: defaultValue
  } = React16.useRef(inDefaultValue);
  const {
    current: isControlled
  } = React16.useRef(inValue !== void 0);
  if (true) {
    React16.useEffect(() => {
      if (isControlled !== (inValue !== void 0)) {
        console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled value of a picker to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled valuefor the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [inValue]);
    React16.useEffect(() => {
      if (!isControlled && defaultValue !== inDefaultValue) {
        console.error([`MUI: A component is changing the defaultValue of an uncontrolled picker after being initialized. To suppress this warning opt to use a controlled value.`].join("\n"));
      }
    }, [JSON.stringify(defaultValue)]);
  }
  const utils = useUtils();
  const adapter = useLocalizationContext();
  const [selectedSections, setSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: "usePickerValue",
    state: "selectedSections"
  });
  const {
    isOpen,
    setIsOpen
  } = useOpenState(props);
  const [dateState, setDateState] = React16.useState(() => {
    let initialValue;
    if (inValue !== void 0) {
      initialValue = inValue;
    } else if (defaultValue !== void 0) {
      initialValue = defaultValue;
    } else {
      initialValue = valueManager.emptyValue;
    }
    return {
      draft: initialValue,
      lastPublishedValue: initialValue,
      lastCommittedValue: initialValue,
      lastControlledValue: inValue,
      hasBeenModifiedSinceMount: false
    };
  });
  const {
    timezone,
    handleValueChange
  } = useValueWithTimezone({
    timezone: timezoneProp,
    value: inValue,
    defaultValue,
    onChange,
    valueManager
  });
  useValidation(_extends({}, props, {
    value: dateState.draft,
    timezone
  }), validator, valueManager.isSameError, valueManager.defaultErrorState);
  const updateDate = useEventCallback_default((action) => {
    const updaterParams = {
      action,
      dateState,
      hasChanged: (comparison) => !valueManager.areValuesEqual(utils, action.value, comparison),
      isControlled,
      closeOnSelect
    };
    const shouldPublish = shouldPublishValue(updaterParams);
    const shouldCommit = shouldCommitValue(updaterParams);
    const shouldClose = shouldClosePicker(updaterParams);
    setDateState((prev) => _extends({}, prev, {
      draft: action.value,
      lastPublishedValue: shouldPublish ? action.value : prev.lastPublishedValue,
      lastCommittedValue: shouldCommit ? action.value : prev.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    if (shouldPublish) {
      const validationError = action.name === "setValueFromField" ? action.context.validationError : validator({
        adapter,
        value: action.value,
        props: _extends({}, props, {
          value: action.value,
          timezone
        })
      });
      const context = {
        validationError
      };
      if (action.name === "setValueFromShortcut" && action.shortcut != null) {
        context.shortcut = action.shortcut;
      }
      handleValueChange(action.value, context);
    }
    if (shouldCommit && onAccept) {
      onAccept(action.value);
    }
    if (shouldClose) {
      setIsOpen(false);
    }
  });
  if (inValue !== void 0 && (dateState.lastControlledValue === void 0 || !valueManager.areValuesEqual(utils, dateState.lastControlledValue, inValue))) {
    const isUpdateComingFromPicker = valueManager.areValuesEqual(utils, dateState.draft, inValue);
    setDateState((prev) => _extends({}, prev, {
      lastControlledValue: inValue
    }, isUpdateComingFromPicker ? {} : {
      lastCommittedValue: inValue,
      lastPublishedValue: inValue,
      draft: inValue,
      hasBeenModifiedSinceMount: true
    }));
  }
  const handleClear = useEventCallback_default(() => {
    updateDate({
      value: valueManager.emptyValue,
      name: "setValueFromAction",
      pickerAction: "clear"
    });
  });
  const handleAccept = useEventCallback_default(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "accept"
    });
  });
  const handleDismiss = useEventCallback_default(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "dismiss"
    });
  });
  const handleCancel = useEventCallback_default(() => {
    updateDate({
      value: dateState.lastCommittedValue,
      name: "setValueFromAction",
      pickerAction: "cancel"
    });
  });
  const handleSetToday = useEventCallback_default(() => {
    updateDate({
      value: valueManager.getTodayValue(utils, timezone, valueType),
      name: "setValueFromAction",
      pickerAction: "today"
    });
  });
  const handleOpen = useEventCallback_default(() => setIsOpen(true));
  const handleClose = useEventCallback_default(() => setIsOpen(false));
  const handleChange = useEventCallback_default((newValue, selectionState = "partial") => updateDate({
    name: "setValueFromView",
    value: newValue,
    selectionState
  }));
  const handleSelectShortcut = useEventCallback_default((newValue, changeImportance, shortcut) => updateDate({
    name: "setValueFromShortcut",
    value: newValue,
    changeImportance: changeImportance != null ? changeImportance : "accept",
    shortcut
  }));
  const handleChangeFromField = useEventCallback_default((newValue, context) => updateDate({
    name: "setValueFromField",
    value: newValue,
    context
  }));
  const handleFieldSelectedSectionsChange = useEventCallback_default((newSelectedSections) => {
    setSelectedSections(newSelectedSections);
    onSelectedSectionsChange == null || onSelectedSectionsChange(newSelectedSections);
  });
  const actions = {
    onClear: handleClear,
    onAccept: handleAccept,
    onDismiss: handleDismiss,
    onCancel: handleCancel,
    onSetToday: handleSetToday,
    onOpen: handleOpen,
    onClose: handleClose
  };
  const fieldResponse = {
    value: dateState.draft,
    onChange: handleChangeFromField,
    selectedSections,
    onSelectedSectionsChange: handleFieldSelectedSectionsChange
  };
  const viewValue = React16.useMemo(() => valueManager.cleanValue(utils, dateState.draft), [utils, valueManager, dateState.draft]);
  const viewResponse = {
    value: viewValue,
    onChange: handleChange,
    onClose: handleClose,
    open: isOpen,
    onSelectedSectionsChange: handleFieldSelectedSectionsChange
  };
  const isValid = (testedValue) => {
    const error = validator({
      adapter,
      value: testedValue,
      props: _extends({}, props, {
        value: testedValue,
        timezone
      })
    });
    return !valueManager.hasError(error);
  };
  const layoutResponse = _extends({}, actions, {
    value: viewValue,
    onChange: handleChange,
    onSelectShortcut: handleSelectShortcut,
    isValid
  });
  return {
    open: isOpen,
    fieldProps: fieldResponse,
    viewProps: viewResponse,
    layoutProps: layoutResponse,
    actions
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerViews.js
init_extends();
init_objectWithoutPropertiesLoose();
var React18 = __toESM(require_react());
init_useEnhancedEffect();
init_useEventCallback();

// node_modules/@mui/x-date-pickers/internals/hooks/useViews.js
var React17 = __toESM(require_react());
init_useEventCallback();
init_esm();
var warnedOnceNotValidView = false;
function useViews({
  onChange,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange
}) {
  var _views, _views2;
  if (true) {
    if (!warnedOnceNotValidView) {
      if (inView != null && !views.includes(inView)) {
        console.warn(`MUI: \`view="${inView}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
      if (inView == null && openTo != null && !views.includes(openTo)) {
        console.warn(`MUI: \`openTo="${openTo}"\` is not a valid prop.`, `It must be an element of \`views=["${views.join('", "')}"]\`.`);
        warnedOnceNotValidView = true;
      }
    }
  }
  const previousOpenTo = React17.useRef(openTo);
  const previousViews = React17.useRef(views);
  const defaultView = React17.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = useControlled({
    name: "useViews",
    state: "view",
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = React17.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = useControlled({
    name: "useViews",
    state: "focusedView",
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  React17.useEffect(() => {
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some((previousView2) => !views.includes(previousView2))) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = (_views = views[viewIndex - 1]) != null ? _views : null;
  const nextView = (_views2 = views[viewIndex + 1]) != null ? _views2 : null;
  const handleFocusedViewChange = useEventCallback_default((viewToFocus, hasFocus) => {
    if (hasFocus) {
      setFocusedView(viewToFocus);
    } else {
      setFocusedView(
        (prevFocusedView) => viewToFocus === prevFocusedView ? null : prevFocusedView
        // If false the blur is due to view switching
      );
    }
    onFocusedViewChange == null || onFocusedViewChange(viewToFocus, hasFocus);
  });
  const handleChangeView = useEventCallback_default((newView) => {
    if (newView === view) {
      return;
    }
    setView(newView);
    handleFocusedViewChange(newView, true);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = useEventCallback_default(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
    handleFocusedViewChange(nextView, true);
  });
  const setValueAndGoToNextView = useEventCallback_default((value, currentViewSelectionState, selectedView) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === "finish";
    const hasMoreViews = selectedView ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but we it's not the final view given all `views` -> overall selection state should be `partial`.
      views.indexOf(selectedView) < views.length - 1
    ) : Boolean(nextView);
    const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? "partial" : currentViewSelectionState;
    onChange(value, globalSelectionState);
    if (isSelectionFinishedOnCurrentView) {
      goToNextView();
    }
  });
  const setValueAndGoToView = useEventCallback_default((value, newView, selectedView) => {
    onChange(value, newView ? "partial" : "finish", selectedView);
    if (newView) {
      handleChangeView(newView);
      handleFocusedViewChange(newView, true);
    }
  });
  return {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    defaultView: defaultView.current,
    goToNextView,
    setValueAndGoToNextView,
    setValueAndGoToView
  };
}

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerViews.js
var _excluded9 = ["className", "sx"];
var usePickerViews = ({
  props,
  propsFromPickerValue,
  additionalViewProps,
  inputRef,
  autoFocusView
}) => {
  const {
    onChange,
    open,
    onSelectedSectionsChange,
    onClose
  } = propsFromPickerValue;
  const {
    views,
    openTo,
    onViewChange,
    disableOpenPicker,
    viewRenderers,
    timezone
  } = props;
  const propsToForwardToView = _objectWithoutPropertiesLoose(props, _excluded9);
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView
  } = useViews({
    view: void 0,
    views,
    openTo,
    onChange,
    onViewChange,
    autoFocus: autoFocusView
  });
  const {
    hasUIView,
    viewModeLookup
  } = React18.useMemo(() => views.reduce((acc, viewForReduce) => {
    let viewMode;
    if (disableOpenPicker) {
      viewMode = "field";
    } else if (viewRenderers[viewForReduce] != null) {
      viewMode = "UI";
    } else {
      viewMode = "field";
    }
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === "UI") {
      acc.hasUIView = true;
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {}
  }), [disableOpenPicker, viewRenderers, views]);
  const timeViewsCount = React18.useMemo(() => views.reduce((acc, viewForReduce) => {
    if (viewRenderers[viewForReduce] != null && isTimeView(viewForReduce)) {
      return acc + 1;
    }
    return acc;
  }, 0), [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const shouldRestoreFocus = useEventCallback_default(() => currentViewMode === "UI");
  const [popperView, setPopperView] = React18.useState(currentViewMode === "UI" ? view : null);
  if (popperView !== view && viewModeLookup[view] === "UI") {
    setPopperView(view);
  }
  useEnhancedEffect_default(() => {
    if (currentViewMode === "field" && open) {
      onClose();
      setTimeout(() => {
        inputRef == null || inputRef.current.focus();
        onSelectedSectionsChange(view);
      });
    }
  }, [view]);
  useEnhancedEffect_default(() => {
    if (!open) {
      return;
    }
    let newView = view;
    if (currentViewMode === "field" && popperView != null) {
      newView = popperView;
    }
    if (newView !== defaultView && viewModeLookup[newView] === "UI" && viewModeLookup[defaultView] === "UI") {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [open]);
  const layoutProps = {
    views,
    view: popperView,
    onViewChange: setView
  };
  return {
    hasUIView,
    shouldRestoreFocus,
    layoutProps,
    renderCurrentView: () => {
      if (popperView == null) {
        return null;
      }
      const renderer = viewRenderers[popperView];
      if (renderer == null) {
        return null;
      }
      return renderer(_extends({}, propsToForwardToView, additionalViewProps, propsFromPickerValue, {
        views,
        timezone,
        onChange: setValueAndGoToNextView,
        view: popperView,
        onViewChange: setView,
        focusedView,
        onFocusedViewChange: setFocusedView,
        showViewSwitcher: timeViewsCount > 1,
        timeViewsCount
      }));
    }
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerLayoutProps.js
init_extends();

// node_modules/@mui/x-date-pickers/internals/hooks/useIsLandscape.js
var React19 = __toESM(require_react());
init_esm();
function getOrientation() {
  if (typeof window === "undefined") {
    return "portrait";
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait";
  }
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
  }
  return "portrait";
}
var useIsLandscape = (views, customOrientation) => {
  const [orientation, setOrientation] = React19.useState(getOrientation);
  useEnhancedEffect_default(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener("orientationchange", eventHandler);
    return () => {
      window.removeEventListener("orientationchange", eventHandler);
    };
  }, []);
  if (arrayIncludes(views, ["hours", "minutes", "seconds"])) {
    return false;
  }
  const orientationToUse = customOrientation || orientation;
  return orientationToUse === "landscape";
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerLayoutProps.js
var usePickerLayoutProps = ({
  props,
  propsFromPickerValue,
  propsFromPickerViews,
  wrapperVariant
}) => {
  const {
    orientation
  } = props;
  const isLandscape = useIsLandscape(propsFromPickerViews.views, orientation);
  const layoutProps = _extends({}, propsFromPickerViews, propsFromPickerValue, {
    isLandscape,
    wrapperVariant,
    disabled: props.disabled,
    readOnly: props.readOnly
  });
  return {
    layoutProps
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePicker.js
var warnRenderInputIsDefined = buildWarning(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]);
var usePicker = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  inputRef,
  additionalViewProps,
  validator,
  autoFocusView
}) => {
  if (true) {
    if (props.renderInput != null) {
      warnRenderInputIsDefined();
    }
  }
  const pickerValueResponse = usePickerValue({
    props,
    valueManager,
    valueType,
    wrapperVariant,
    validator
  });
  const pickerViewsResponse = usePickerViews({
    props,
    inputRef,
    additionalViewProps,
    autoFocusView,
    propsFromPickerValue: pickerValueResponse.viewProps
  });
  const pickerLayoutResponse = usePickerLayoutProps({
    props,
    wrapperVariant,
    propsFromPickerValue: pickerValueResponse.layoutProps,
    propsFromPickerViews: pickerViewsResponse.layoutProps
  });
  return {
    // Picker value
    open: pickerValueResponse.open,
    actions: pickerValueResponse.actions,
    fieldProps: pickerValueResponse.fieldProps,
    // Picker views
    renderCurrentView: pickerViewsResponse.renderCurrentView,
    hasUIView: pickerViewsResponse.hasUIView,
    shouldRestoreFocus: pickerViewsResponse.shouldRestoreFocus,
    // Picker layout
    layoutProps: pickerLayoutResponse.layoutProps
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/useStaticPicker/useStaticPicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React24 = __toESM(require_react());
init_clsx();

// node_modules/@mui/x-date-pickers/PickersLayout/PickersLayout.js
var React23 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/PickersLayout/pickersLayoutClasses.js
init_esm();
function getPickersLayoutUtilityClass(slot) {
  return generateUtilityClass("MuiPickersLayout", slot);
}
var pickersLayoutClasses = generateUtilityClasses("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "shortcuts"]);

// node_modules/@mui/x-date-pickers/PickersLayout/usePickerLayout.js
init_extends();
var React22 = __toESM(require_react());
init_esm();

// node_modules/@mui/x-date-pickers/PickersActionBar/PickersActionBar.js
init_extends();
init_objectWithoutPropertiesLoose();
var React20 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded10 = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function PickersActionBar(props) {
  const {
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    actions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const localeText = useLocaleText();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions == null ? void 0 : actions.map((actionType) => {
    switch (actionType) {
      case "clear":
        return (0, import_jsx_runtime12.jsx)(Button_default, {
          onClick: onClear,
          children: localeText.clearButtonLabel
        }, actionType);
      case "cancel":
        return (0, import_jsx_runtime12.jsx)(Button_default, {
          onClick: onCancel,
          children: localeText.cancelButtonLabel
        }, actionType);
      case "accept":
        return (0, import_jsx_runtime12.jsx)(Button_default, {
          onClick: onAccept,
          children: localeText.okButtonLabel
        }, actionType);
      case "today":
        return (0, import_jsx_runtime12.jsx)(Button_default, {
          onClick: onSetToday,
          children: localeText.todayButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return (0, import_jsx_runtime12.jsx)(DialogActions_default, _extends({}, other, {
    children: buttons
  }));
}
true ? PickersActionBar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default `['cancel', 'accept']` for mobile and `[]` for desktop
   */
  actions: import_prop_types2.default.arrayOf(import_prop_types2.default.oneOf(["accept", "cancel", "clear", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: import_prop_types2.default.bool,
  onAccept: import_prop_types2.default.func.isRequired,
  onCancel: import_prop_types2.default.func.isRequired,
  onClear: import_prop_types2.default.func.isRequired,
  onSetToday: import_prop_types2.default.func.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/PickersShortcuts/PickersShortcuts.js
init_extends();
init_objectWithoutPropertiesLoose();
var React21 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded11 = ["items", "changeImportance", "isLandscape", "onChange", "isValid"];
var _excluded22 = ["getValue"];
function PickersShortcuts(props) {
  const {
    items,
    changeImportance,
    onChange,
    isValid
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map((_ref) => {
    let {
      getValue
    } = _ref, item = _objectWithoutPropertiesLoose(_ref, _excluded22);
    const newValue = getValue({
      isValid
    });
    return {
      label: item.label,
      onClick: () => {
        onChange(newValue, changeImportance, item);
      },
      disabled: !isValid(newValue)
    };
  });
  return (0, import_jsx_runtime13.jsx)(List_default, _extends({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(other.sx) ? other.sx : [other.sx]]
  }, other, {
    children: resolvedItems.map((item) => {
      return (0, import_jsx_runtime13.jsx)(ListItem_default, {
        children: (0, import_jsx_runtime13.jsx)(Chip_default, _extends({}, item))
      }, item.label);
    })
  }));
}
true ? PickersShortcuts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the picker.
   * @default "accept"
   */
  changeImportance: import_prop_types3.default.oneOf(["accept", "set"]),
  className: import_prop_types3.default.string,
  component: import_prop_types3.default.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: import_prop_types3.default.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: import_prop_types3.default.bool,
  isLandscape: import_prop_types3.default.bool.isRequired,
  isValid: import_prop_types3.default.func.isRequired,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default `[]`
   */
  items: import_prop_types3.default.arrayOf(import_prop_types3.default.shape({
    getValue: import_prop_types3.default.func.isRequired,
    label: import_prop_types3.default.string.isRequired
  })),
  onChange: import_prop_types3.default.func.isRequired,
  style: import_prop_types3.default.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: import_prop_types3.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/internals/utils/slots-migration.js
init_extends();
var uncapitalizeObjectKeys = (capitalizedObject) => {
  if (capitalizedObject === void 0) {
    return void 0;
  }
  return Object.keys(capitalizedObject).reduce((acc, key) => _extends({}, acc, {
    [`${key.slice(0, 1).toLowerCase()}${key.slice(1)}`]: capitalizedObject[key]
  }), {});
};

// node_modules/@mui/x-date-pickers/PickersLayout/usePickerLayout.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
var useUtilityClasses6 = (ownerState) => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var usePickerLayout = (props) => {
  var _slots$actionBar, _slots$shortcuts;
  const {
    wrapperVariant,
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    view,
    views,
    onViewChange,
    value,
    onChange,
    onSelectShortcut,
    isValid,
    isLandscape,
    disabled,
    readOnly,
    children,
    components,
    componentsProps,
    slots: innerSlots,
    slotProps: innerSlotProps
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = props;
  const slots = innerSlots != null ? innerSlots : uncapitalizeObjectKeys(components);
  const slotProps = innerSlotProps != null ? innerSlotProps : componentsProps;
  const classes = useUtilityClasses6(props);
  const ActionBar = (_slots$actionBar = slots == null ? void 0 : slots.actionBar) != null ? _slots$actionBar : PickersActionBar;
  const actionBarProps = useSlotProps({
    elementType: ActionBar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.actionBar,
    additionalProps: {
      onAccept,
      onClear,
      onCancel,
      onSetToday,
      actions: wrapperVariant === "desktop" ? [] : ["cancel", "accept"],
      className: classes.actionBar
    },
    ownerState: _extends({}, props, {
      wrapperVariant
    })
  });
  const actionBar = (0, import_jsx_runtime14.jsx)(ActionBar, _extends({}, actionBarProps));
  const Toolbar = slots == null ? void 0 : slots.toolbar;
  const toolbarProps = useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps == null ? void 0 : slotProps.toolbar,
    additionalProps: {
      isLandscape,
      onChange,
      value,
      view,
      onViewChange,
      views,
      disabled,
      readOnly,
      className: classes.toolbar
    },
    ownerState: _extends({}, props, {
      wrapperVariant
    })
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? (0, import_jsx_runtime14.jsx)(Toolbar, _extends({}, toolbarProps)) : null;
  const content = children;
  const Tabs = slots == null ? void 0 : slots.tabs;
  const tabs = view && Tabs ? (0, import_jsx_runtime14.jsx)(Tabs, _extends({
    view,
    onViewChange
  }, slotProps == null ? void 0 : slotProps.tabs)) : null;
  const Shortcuts = (_slots$shortcuts = slots == null ? void 0 : slots.shortcuts) != null ? _slots$shortcuts : PickersShortcuts;
  const shortcutsProps = useSlotProps({
    elementType: Shortcuts,
    externalSlotProps: slotProps == null ? void 0 : slotProps.shortcuts,
    additionalProps: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts
    },
    ownerState: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      className: classes.shortcuts,
      wrapperVariant
    }
  });
  const shortcuts = view && !!Shortcuts ? (0, import_jsx_runtime14.jsx)(Shortcuts, _extends({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  };
};
var usePickerLayout_default = usePickerLayout;

// node_modules/@mui/x-date-pickers/PickersLayout/PickersLayout.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var useUtilityClasses7 = (ownerState) => {
  const {
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root", isLandscape && "landscape"],
    contentWrapper: ["contentWrapper"]
  };
  return composeClasses(slots, getPickersLayoutUtilityClass, classes);
};
var PickersLayoutRoot = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${pickersLayoutClasses.toolbar}`]: ownerState.isLandscape ? {
    gridColumn: theme.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  } : {
    gridColumn: "2 / 4",
    gridRow: 1
  },
  [`.${pickersLayoutClasses.shortcuts}`]: ownerState.isLandscape ? {
    gridColumn: "2 / 4",
    gridRow: 1
  } : {
    gridColumn: theme.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  },
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  }
}));
PickersLayoutRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types4.default.elementType,
  ownerState: import_prop_types4.default.shape({
    isLandscape: import_prop_types4.default.bool.isRequired
  }).isRequired,
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object])
};
var PickersLayoutContentWrapper = styled_default("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (props, styles) => styles.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
});
var PickersLayout = function PickersLayout2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersLayout"
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  } = usePickerLayout_default(props);
  const {
    sx,
    className,
    isLandscape,
    ref,
    wrapperVariant
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses7(ownerState);
  return (0, import_jsx_runtime15.jsxs)(PickersLayoutRoot, {
    ref,
    sx,
    className: clsx_default(className, classes.root),
    ownerState,
    children: [isLandscape ? shortcuts : toolbar, isLandscape ? toolbar : shortcuts, (0, import_jsx_runtime16.jsx)(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      children: wrapperVariant === "desktop" ? (0, import_jsx_runtime15.jsxs)(React23.Fragment, {
        children: [content, tabs]
      }) : (0, import_jsx_runtime15.jsxs)(React23.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
};
true ? PickersLayout.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types4.default.node,
  classes: import_prop_types4.default.object,
  className: import_prop_types4.default.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types4.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types4.default.object,
  disabled: import_prop_types4.default.bool,
  isLandscape: import_prop_types4.default.bool.isRequired,
  isValid: import_prop_types4.default.func.isRequired,
  onAccept: import_prop_types4.default.func.isRequired,
  onCancel: import_prop_types4.default.func.isRequired,
  onChange: import_prop_types4.default.func.isRequired,
  onClear: import_prop_types4.default.func.isRequired,
  onClose: import_prop_types4.default.func.isRequired,
  onDismiss: import_prop_types4.default.func.isRequired,
  onOpen: import_prop_types4.default.func.isRequired,
  onSelectShortcut: import_prop_types4.default.func.isRequired,
  onSetToday: import_prop_types4.default.func.isRequired,
  onViewChange: import_prop_types4.default.func.isRequired,
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types4.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types4.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types4.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types4.default.object,
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  value: import_prop_types4.default.any,
  view: import_prop_types4.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  views: import_prop_types4.default.arrayOf(import_prop_types4.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired,
  wrapperVariant: import_prop_types4.default.oneOf(["desktop", "mobile"])
} : void 0;

// node_modules/@mui/x-date-pickers/internals/hooks/useStaticPicker/useStaticPicker.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded12 = ["props", "ref"];
var PickerStaticLayout = styled_default(PickersLayout)(({
  theme
}) => ({
  overflow: "hidden",
  minWidth: DIALOG_WIDTH,
  backgroundColor: (theme.vars || theme).palette.background.paper
}));
var useStaticPicker = (_ref) => {
  var _slots$layout;
  let {
    props,
    ref
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded12);
  const {
    localeText,
    slots,
    slotProps,
    className,
    sx,
    displayStaticWrapperAs,
    autoFocus
  } = props;
  const {
    layoutProps,
    renderCurrentView
  } = usePicker(_extends({}, pickerParams, {
    props,
    autoFocusView: autoFocus != null ? autoFocus : false,
    additionalViewProps: {},
    wrapperVariant: displayStaticWrapperAs
  }));
  const Layout = (_slots$layout = slots == null ? void 0 : slots.layout) != null ? _slots$layout : PickerStaticLayout;
  const renderPicker = () => {
    var _slotProps$layout, _slotProps$layout2, _slotProps$layout3;
    return (0, import_jsx_runtime17.jsx)(LocalizationProvider, {
      localeText,
      children: (0, import_jsx_runtime17.jsx)(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        sx: [...Array.isArray(sx) ? sx : [sx], ...Array.isArray(slotProps == null || (_slotProps$layout = slotProps.layout) == null ? void 0 : _slotProps$layout.sx) ? slotProps.layout.sx : [slotProps == null || (_slotProps$layout2 = slotProps.layout) == null ? void 0 : _slotProps$layout2.sx]],
        className: clsx_default(className, slotProps == null || (_slotProps$layout3 = slotProps.layout) == null ? void 0 : _slotProps$layout3.className),
        ref,
        children: renderCurrentView()
      }))
    });
  };
  return {
    renderPicker
  };
};

// node_modules/@mui/x-date-pickers/internals/hooks/date-helpers-hooks.js
var React25 = __toESM(require_react());
function useNextMonthDisabled(month, {
  disableFuture,
  maxDate,
  timezone
}) {
  const utils = useUtils();
  return React25.useMemo(() => {
    const now = utils.dateWithTimezone(void 0, timezone);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils, timezone]);
}
function usePreviousMonthDisabled(month, {
  disablePast,
  minDate,
  timezone
}) {
  const utils = useUtils();
  return React25.useMemo(() => {
    const now = utils.dateWithTimezone(void 0, timezone);
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils, timezone]);
}
function useMeridiemMode(date, ampm, onChange, selectionState) {
  const utils = useUtils();
  const meridiemMode = getMeridiem(date, utils);
  const handleMeridiemChange = React25.useCallback((mode) => {
    const timeWithMeridiem = date == null ? null : convertToMeridiem(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, selectionState != null ? selectionState : "partial");
  }, [ampm, date, onChange, selectionState, utils]);
  return {
    meridiemMode,
    handleMeridiemChange
  };
}

// node_modules/@mui/x-date-pickers/internals/utils/fields.js
init_extends();

// node_modules/@mui/x-date-pickers/internals/utils/validation/extractValidationProps.js
var DATE_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"];
var TIME_VALIDATION_PROP_NAMES = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableClock", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"];
var DATE_TIME_VALIDATION_PROP_NAMES = ["minDateTime", "maxDateTime"];
var VALIDATION_PROP_NAMES = [...DATE_VALIDATION_PROP_NAMES, ...TIME_VALIDATION_PROP_NAMES, ...DATE_TIME_VALIDATION_PROP_NAMES];
var extractValidationProps = (props) => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});

// node_modules/@mui/x-date-pickers/internals/utils/fields.js
var SHARED_FIELD_INTERNAL_PROP_NAMES = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "readOnly", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef"];
var splitFieldInternalAndForwardedProps = (props, valueType) => {
  const forwardedProps = _extends({}, props);
  const internalProps = {};
  const extractProp = (propName) => {
    if (forwardedProps.hasOwnProperty(propName)) {
      internalProps[propName] = forwardedProps[propName];
      delete forwardedProps[propName];
    }
  };
  SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
  if (valueType === "date") {
    DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
  } else if (valueType === "time") {
    TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
  } else if (valueType === "date-time") {
    DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
    TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    DATE_TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
  }
  return {
    forwardedProps,
    internalProps
  };
};

// node_modules/@mui/x-date-pickers/internals/utils/validation/validateDate.js
var validateDate = ({
  props,
  value,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const {
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    disablePast,
    disableFuture,
    timezone
  } = props;
  const now = adapter.utils.dateWithTimezone(void 0, timezone);
  const minDate = applyDefaultDate(adapter.utils, props.minDate, adapter.defaultDates.minDate);
  const maxDate = applyDefaultDate(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return "shouldDisableDate";
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return "shouldDisableMonth";
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return "shouldDisableYear";
    case Boolean(disableFuture && adapter.utils.isAfterDay(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.utils.isBeforeDay(value, now)):
      return "disablePast";
    case Boolean(minDate && adapter.utils.isBeforeDay(value, minDate)):
      return "minDate";
    case Boolean(maxDate && adapter.utils.isAfterDay(value, maxDate)):
      return "maxDate";
    default:
      return null;
  }
};

// node_modules/@mui/x-date-pickers/internals/utils/validation/validateTime.js
var validateTime = ({
  adapter,
  value,
  props
}) => {
  if (value === null) {
    return null;
  }
  const {
    minTime,
    maxTime,
    minutesStep,
    shouldDisableClock,
    shouldDisableTime,
    disableIgnoringDatePartForTimeValidation = false,
    disablePast,
    disableFuture,
    timezone
  } = props;
  const now = adapter.utils.dateWithTimezone(void 0, timezone);
  const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, adapter.utils);
  switch (true) {
    case !adapter.utils.isValid(value):
      return "invalidDate";
    case Boolean(minTime && isAfter(minTime, value)):
      return "minTime";
    case Boolean(maxTime && isAfter(value, maxTime)):
      return "maxTime";
    case Boolean(disableFuture && adapter.utils.isAfter(value, now)):
      return "disableFuture";
    case Boolean(disablePast && adapter.utils.isBefore(value, now)):
      return "disablePast";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "hours")):
      return "shouldDisableTime-hours";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "minutes")):
      return "shouldDisableTime-minutes";
    case Boolean(shouldDisableTime && shouldDisableTime(value, "seconds")):
      return "shouldDisableTime-seconds";
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getHours(value), "hours")):
      return "shouldDisableClock-hours";
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getMinutes(value), "minutes")):
      return "shouldDisableClock-minutes";
    case Boolean(shouldDisableClock && shouldDisableClock(adapter.utils.getSeconds(value), "seconds")):
      return "shouldDisableClock-seconds";
    case Boolean(minutesStep && adapter.utils.getMinutes(value) % minutesStep !== 0):
      return "minutesStep";
    default:
      return null;
  }
};

// node_modules/@mui/x-date-pickers/internals/utils/validation/validateDateTime.js
var validateDateTime = ({
  props,
  value,
  adapter
}) => {
  const dateValidationResult = validateDate({
    adapter,
    value,
    props
  });
  if (dateValidationResult !== null) {
    return dateValidationResult;
  }
  return validateTime({
    adapter,
    value,
    props
  });
};

// node_modules/@mui/x-date-pickers/DateCalendar/DayCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React29 = __toESM(require_react());
init_useEventCallback();
init_esm();
init_clsx();

// node_modules/@mui/x-date-pickers/PickersDay/PickersDay.js
init_objectWithoutPropertiesLoose();
init_extends();
var React26 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/PickersDay/pickersDayClasses.js
init_esm();
function getPickersDayUtilityClass(slot) {
  return generateUtilityClass("MuiPickersDay", slot);
}
var pickersDayClasses = generateUtilityClasses("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]);

// node_modules/@mui/x-date-pickers/PickersDay/PickersDay.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded13 = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"];
var useUtilityClasses8 = (ownerState) => {
  const {
    selected,
    disableMargin,
    disableHighlightToday,
    today,
    disabled,
    outsideCurrentMonth,
    showDaysOutsideCurrentMonth,
    classes
  } = ownerState;
  const isHiddenDaySpacingFiller = outsideCurrentMonth && !showDaysOutsideCurrentMonth;
  const slots = {
    root: ["root", selected && !isHiddenDaySpacingFiller && "selected", disabled && "disabled", !disableMargin && "dayWithMargin", !disableHighlightToday && today && "today", outsideCurrentMonth && showDaysOutsideCurrentMonth && "dayOutsideMonth", isHiddenDaySpacingFiller && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  };
  return composeClasses(slots, getPickersDayUtilityClass, classes);
};
var styleArg = ({
  theme,
  ownerState
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  color: (theme.vars || theme).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.short
    }),
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}:not(.${pickersDayClasses.selected})`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${pickersDayClasses.disabled}&.${pickersDayClasses.selected}`]: {
    opacity: 0.6
  }
}, !ownerState.disableMargin && {
  margin: `0 ${DAY_MARGIN}px`
}, ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && {
  color: (theme.vars || theme).palette.text.secondary
}, !ownerState.disableHighlightToday && ownerState.today && {
  [`&:not(.${pickersDayClasses.selected})`]: {
    border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
  }
});
var overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
var PickersDayRoot = styled_default(ButtonBase_default, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(styleArg);
var PickersDayFiller = styled_default("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, styleArg({
  theme,
  ownerState
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
}));
var noop = () => {
};
var PickersDayRaw = React26.forwardRef(function PickersDay(inProps, forwardedRef) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersDay"
  });
  const {
    autoFocus = false,
    className,
    day,
    disabled = false,
    disableHighlightToday = false,
    disableMargin = false,
    isAnimating,
    onClick,
    onDaySelect,
    onFocus = noop,
    onBlur = noop,
    onKeyDown = noop,
    onMouseDown = noop,
    onMouseEnter = noop,
    outsideCurrentMonth,
    selected = false,
    showDaysOutsideCurrentMonth = false,
    children,
    today: isToday = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const ownerState = _extends({}, props, {
    autoFocus,
    disabled,
    disableHighlightToday,
    disableMargin,
    selected,
    showDaysOutsideCurrentMonth,
    today: isToday
  });
  const classes = useUtilityClasses8(ownerState);
  const utils = useUtils();
  const ref = React26.useRef(null);
  const handleRef = useForkRef(ref, forwardedRef);
  useEnhancedEffect_default(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);
  const handleMouseDown = (event) => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = (event) => {
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return (0, import_jsx_runtime18.jsx)(PickersDayFiller, {
      className: clsx_default(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState,
      role: other.role
    });
  }
  return (0, import_jsx_runtime18.jsx)(PickersDayRoot, _extends({
    className: clsx_default(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: (event) => onKeyDown(event, day),
    onFocus: (event) => onFocus(event, day),
    onBlur: (event) => onBlur(event, day),
    onMouseEnter: (event) => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState,
    children: !children ? utils.format(day, "dayOfMonth") : children
  }));
});
true ? PickersDayRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.shape({
    current: import_prop_types5.default.shape({
      focusVisible: import_prop_types5.default.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: import_prop_types5.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types5.default.object,
  className: import_prop_types5.default.string,
  component: import_prop_types5.default.elementType,
  /**
   * The date to show.
   */
  day: import_prop_types5.default.any.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: import_prop_types5.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types5.default.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: import_prop_types5.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types5.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: import_prop_types5.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: import_prop_types5.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types5.default.string,
  isAnimating: import_prop_types5.default.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: import_prop_types5.default.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: import_prop_types5.default.bool.isRequired,
  onBlur: import_prop_types5.default.func,
  onDaySelect: import_prop_types5.default.func.isRequired,
  onFocus: import_prop_types5.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types5.default.func,
  onKeyDown: import_prop_types5.default.func,
  onMouseEnter: import_prop_types5.default.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: import_prop_types5.default.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: import_prop_types5.default.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types5.default.bool,
  style: import_prop_types5.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types5.default.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: import_prop_types5.default.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types5.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.shape({
    current: import_prop_types5.default.shape({
      pulsate: import_prop_types5.default.func.isRequired,
      start: import_prop_types5.default.func.isRequired,
      stop: import_prop_types5.default.func.isRequired
    })
  })])
} : void 0;
var PickersDay2 = React26.memo(PickersDayRaw);

// node_modules/@mui/x-date-pickers/DateCalendar/PickersSlideTransition.js
init_extends();
init_objectWithoutPropertiesLoose();
var React27 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/DateCalendar/pickersSlideTransitionClasses.js
init_esm();
var getPickersSlideTransitionUtilityClass = (slot) => generateUtilityClass("MuiPickersSlideTransition", slot);
var pickersSlideTransitionClasses = generateUtilityClasses("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]);

// node_modules/@mui/x-date-pickers/DateCalendar/PickersSlideTransition.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded14 = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];
var useUtilityClasses9 = (ownerState) => {
  const {
    classes,
    slideDirection
  } = ownerState;
  const slots = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return composeClasses(slots, getPickersSlideTransitionUtilityClass, classes);
};
var slideAnimationDuration = 350;
var PickersSlideTransitionRoot = styled_default(TransitionGroup_default, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`.${pickersSlideTransitionClasses["slideEnter-left"]}`]: styles["slideEnter-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideEnter-right"]}`]: styles["slideEnter-right"]
  }, {
    [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: styles["slideExitActiveLeft-left"]
  }, {
    [`.${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: styles["slideExitActiveLeft-right"]
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create("transform", {
    duration: slideAnimationDuration,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: slideTransition
    },
    [`& .${pickersSlideTransitionClasses.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${pickersSlideTransitionClasses["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: slideTransition,
      zIndex: 0
    }
  };
});
function PickersSlideTransition(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersSlideTransition"
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
    // extracting `classes` from `other`
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const classes = useUtilityClasses9(props);
  if (reduceAnimations) {
    return (0, import_jsx_runtime19.jsx)("div", {
      className: clsx_default(classes.root, className),
      children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return (0, import_jsx_runtime19.jsx)(PickersSlideTransitionRoot, {
    className: clsx_default(classes.root, className),
    childFactory: (element) => React27.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    children: (0, import_jsx_runtime19.jsx)(CSSTransition_default, _extends({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: slideAnimationDuration,
      classNames: transitionClasses
    }, other, {
      children
    }), transKey)
  });
}

// node_modules/@mui/x-date-pickers/DateCalendar/useIsDateDisabled.js
var React28 = __toESM(require_react());
var useIsDateDisabled = ({
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  minDate,
  maxDate,
  disableFuture,
  disablePast,
  timezone
}) => {
  const adapter = useLocalizationContext();
  return React28.useCallback((day) => validateDate({
    adapter,
    value: day,
    props: {
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast,
      timezone
    }
  }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone]);
};

// node_modules/@mui/x-date-pickers/DateCalendar/dayCalendarClasses.js
init_esm();
var getDayCalendarUtilityClass = (slot) => generateUtilityClass("MuiDayCalendar", slot);
var dayPickerClasses = generateUtilityClasses("MuiDayCalendar", ["header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);

// node_modules/@mui/x-date-pickers/DateCalendar/DayCalendar.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var _excluded15 = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"];
var _excluded23 = ["ownerState"];
var useUtilityClasses10 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  };
  return composeClasses(slots, getDayCalendarUtilityClass, classes);
};
var defaultDayOfWeekFormatter = (day) => day.charAt(0).toUpperCase();
var weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
var PickersCalendarDayHeader = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (_, styles) => styles.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
var PickersCalendarWeekDayLabel = styled_default(Typography_default, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (_, styles) => styles.weekDayLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (theme.vars || theme).palette.text.secondary
}));
var PickersCalendarWeekNumberLabel = styled_default(Typography_default, {
  name: "MuiDayPicker",
  slot: "WeekNumberLabel",
  overridesResolver: (_, styles) => styles.weekNumberLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.text.disabled
}));
var PickersCalendarWeekNumber = styled_default(Typography_default, {
  name: "MuiDayPicker",
  slot: "WeekNumber",
  overridesResolver: (_, styles) => styles.weekNumber
})(({
  theme
}) => _extends({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  padding: 0,
  margin: `0 ${DAY_MARGIN}px`,
  color: theme.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
}));
var PickersCalendarLoadingContainer = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (_, styles) => styles.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: weeksContainerHeight
});
var PickersCalendarSlideTransition = styled_default(PickersSlideTransition, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (_, styles) => styles.slideTransition
})({
  minHeight: weeksContainerHeight
});
var PickersCalendarWeekContainer = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (_, styles) => styles.monthContainer
})({
  overflow: "hidden"
});
var PickersCalendarWeek = styled_default("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (_, styles) => styles.weekContainer
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
function WrappedDay(_ref) {
  var _ref2, _slots$day, _slotProps$day;
  let {
    parentProps,
    day,
    focusableDay,
    selectedDays,
    isDateDisabled,
    currentMonthNumber,
    isViewFocused
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded15);
  const {
    disabled,
    disableHighlightToday,
    isMonthSwitchingAnimating,
    showDaysOutsideCurrentMonth,
    components,
    componentsProps,
    slots,
    slotProps,
    timezone
  } = parentProps;
  const utils = useUtils();
  const now = useNow(timezone);
  const isFocusableDay = focusableDay !== null && utils.isSameDay(day, focusableDay);
  const isSelected = selectedDays.some((selectedDay) => utils.isSameDay(selectedDay, day));
  const isToday = utils.isSameDay(day, now);
  const Day = (_ref2 = (_slots$day = slots == null ? void 0 : slots.day) != null ? _slots$day : components == null ? void 0 : components.Day) != null ? _ref2 : PickersDay2;
  const _useSlotProps = useSlotProps({
    elementType: Day,
    externalSlotProps: (_slotProps$day = slotProps == null ? void 0 : slotProps.day) != null ? _slotProps$day : componentsProps == null ? void 0 : componentsProps.day,
    additionalProps: _extends({
      disableHighlightToday,
      showDaysOutsideCurrentMonth,
      role: "gridcell",
      isAnimating: isMonthSwitchingAnimating,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": utils.toJsDate(day).valueOf()
    }, other),
    ownerState: _extends({}, parentProps, {
      day,
      selected: isSelected
    })
  }), dayProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded23);
  const isDisabled = React29.useMemo(() => disabled || isDateDisabled(day), [disabled, isDateDisabled, day]);
  const outsideCurrentMonth = React29.useMemo(() => utils.getMonth(day) !== currentMonthNumber, [utils, day, currentMonthNumber]);
  const isFirstVisibleCell = React29.useMemo(() => {
    const startOfMonth = utils.startOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, startOfMonth);
    }
    return utils.isSameDay(day, utils.startOfWeek(startOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  const isLastVisibleCell = React29.useMemo(() => {
    const endOfMonth = utils.endOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, endOfMonth);
    }
    return utils.isSameDay(day, utils.endOfWeek(endOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  return (0, import_jsx_runtime20.jsx)(Day, _extends({}, dayProps, {
    day,
    disabled: isDisabled,
    autoFocus: isViewFocused && isFocusableDay,
    today: isToday,
    outsideCurrentMonth,
    isFirstVisibleCell,
    isLastVisibleCell,
    selected: isSelected,
    tabIndex: isFocusableDay ? 0 : -1,
    "aria-selected": isSelected,
    "aria-current": isToday ? "date" : void 0
  }));
}
function DayCalendar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendar"
  });
  const {
    onFocusedDayChange,
    className,
    currentMonth,
    selectedDays,
    focusedDay,
    loading,
    onSelectedDaysChange,
    onMonthSwitchingAnimationEnd,
    readOnly,
    reduceAnimations,
    renderLoading = () => (0, import_jsx_runtime20.jsx)("span", {
      children: "..."
    }),
    slideDirection,
    TransitionProps,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    dayOfWeekFormatter = defaultDayOfWeekFormatter,
    hasFocus,
    onFocusedViewChange,
    gridLabelId,
    displayWeekNumber,
    fixedWeekNumber,
    autoFocus,
    timezone
  } = props;
  const now = useNow(timezone);
  const utils = useUtils();
  const classes = useUtilityClasses10(props);
  const theme = useTheme();
  const isRTL = theme.direction === "rtl";
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    timezone
  });
  const localeText = useLocaleText();
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus != null ? autoFocus : false
  });
  const [internalFocusedDay, setInternalFocusedDay] = React29.useState(() => focusedDay || now);
  const handleDaySelect = useEventCallback_default((day) => {
    if (readOnly) {
      return;
    }
    onSelectedDaysChange(day);
  });
  const focusDay = (day) => {
    if (!isDateDisabled(day)) {
      onFocusedDayChange(day);
      setInternalFocusedDay(day);
      onFocusedViewChange == null || onFocusedViewChange(true);
      setInternalHasFocus(true);
    }
  };
  const handleKeyDown = useEventCallback_default((event, day) => {
    switch (event.key) {
      case "ArrowUp":
        focusDay(utils.addDays(day, -7));
        event.preventDefault();
        break;
      case "ArrowDown":
        focusDay(utils.addDays(day, 7));
        event.preventDefault();
        break;
      case "ArrowLeft": {
        const newFocusedDayDefault = utils.addDays(day, isRTL ? 1 : -1);
        const nextAvailableMonth = utils.addMonths(day, isRTL ? 1 : -1);
        const closestDayToFocus = findClosestEnabledDate({
          utils,
          date: newFocusedDayDefault,
          minDate: isRTL ? newFocusedDayDefault : utils.startOfMonth(nextAvailableMonth),
          maxDate: isRTL ? utils.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        const newFocusedDayDefault = utils.addDays(day, isRTL ? -1 : 1);
        const nextAvailableMonth = utils.addMonths(day, isRTL ? -1 : 1);
        const closestDayToFocus = findClosestEnabledDate({
          utils,
          date: newFocusedDayDefault,
          minDate: isRTL ? utils.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
          maxDate: isRTL ? newFocusedDayDefault : utils.endOfMonth(nextAvailableMonth),
          isDateDisabled,
          timezone
        });
        focusDay(closestDayToFocus || newFocusedDayDefault);
        event.preventDefault();
        break;
      }
      case "Home":
        focusDay(utils.startOfWeek(day));
        event.preventDefault();
        break;
      case "End":
        focusDay(utils.endOfWeek(day));
        event.preventDefault();
        break;
      case "PageUp":
        focusDay(utils.addMonths(day, 1));
        event.preventDefault();
        break;
      case "PageDown":
        focusDay(utils.addMonths(day, -1));
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleFocus = useEventCallback_default((event, day) => focusDay(day));
  const handleBlur = useEventCallback_default((event, day) => {
    if (internalHasFocus && utils.isSameDay(internalFocusedDay, day)) {
      onFocusedViewChange == null || onFocusedViewChange(false);
    }
  });
  const currentMonthNumber = utils.getMonth(currentMonth);
  const validSelectedDays = React29.useMemo(() => selectedDays.filter((day) => !!day).map((day) => utils.startOfDay(day)), [utils, selectedDays]);
  const transitionKey = currentMonthNumber;
  const slideNodeRef = React29.useMemo(() => React29.createRef(), [transitionKey]);
  const startOfCurrentWeek = utils.startOfWeek(now);
  const focusableDay = React29.useMemo(() => {
    const startOfMonth = utils.startOfMonth(currentMonth);
    const endOfMonth = utils.endOfMonth(currentMonth);
    if (isDateDisabled(internalFocusedDay) || utils.isAfterDay(internalFocusedDay, endOfMonth) || utils.isBeforeDay(internalFocusedDay, startOfMonth)) {
      return findClosestEnabledDate({
        utils,
        date: internalFocusedDay,
        minDate: startOfMonth,
        maxDate: endOfMonth,
        disablePast,
        disableFuture,
        isDateDisabled,
        timezone
      });
    }
    return internalFocusedDay;
  }, [currentMonth, disableFuture, disablePast, internalFocusedDay, isDateDisabled, utils, timezone]);
  const weeksToDisplay = React29.useMemo(() => {
    const currentMonthWithTimezone = utils.setTimezone(currentMonth, timezone);
    const toDisplay = utils.getWeekArray(currentMonthWithTimezone);
    let nextMonth = utils.addMonths(currentMonthWithTimezone, 1);
    while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
      const additionalWeeks = utils.getWeekArray(nextMonth);
      const hasCommonWeek = utils.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
      additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach((week) => {
        if (toDisplay.length < fixedWeekNumber) {
          toDisplay.push(week);
        }
      });
      nextMonth = utils.addMonths(nextMonth, 1);
    }
    return toDisplay;
  }, [currentMonth, fixedWeekNumber, utils, timezone]);
  return (0, import_jsx_runtime21.jsxs)("div", {
    role: "grid",
    "aria-labelledby": gridLabelId,
    children: [(0, import_jsx_runtime21.jsxs)(PickersCalendarDayHeader, {
      role: "row",
      className: classes.header,
      children: [displayWeekNumber && (0, import_jsx_runtime20.jsx)(PickersCalendarWeekNumberLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": localeText.calendarWeekNumberHeaderLabel,
        className: classes.weekNumberLabel,
        children: localeText.calendarWeekNumberHeaderText
      }), utils.getWeekdays().map((day, i2) => {
        var _dayOfWeekFormatter;
        return (0, import_jsx_runtime20.jsx)(PickersCalendarWeekDayLabel, {
          variant: "caption",
          role: "columnheader",
          "aria-label": utils.format(utils.addDays(startOfCurrentWeek, i2), "weekday"),
          className: classes.weekDayLabel,
          children: (_dayOfWeekFormatter = dayOfWeekFormatter == null ? void 0 : dayOfWeekFormatter(day)) != null ? _dayOfWeekFormatter : day
        }, day + i2.toString());
      })]
    }), loading ? (0, import_jsx_runtime20.jsx)(PickersCalendarLoadingContainer, {
      className: classes.loadingContainer,
      children: renderLoading()
    }) : (0, import_jsx_runtime20.jsx)(PickersCalendarSlideTransition, _extends({
      transKey: transitionKey,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations,
      slideDirection,
      className: clsx_default(className, classes.slideTransition)
    }, TransitionProps, {
      nodeRef: slideNodeRef,
      children: (0, import_jsx_runtime20.jsx)(PickersCalendarWeekContainer, {
        ref: slideNodeRef,
        role: "rowgroup",
        className: classes.monthContainer,
        children: weeksToDisplay.map((week, index) => (0, import_jsx_runtime21.jsxs)(PickersCalendarWeek, {
          role: "row",
          className: classes.weekContainer,
          "aria-rowindex": index + 1,
          children: [displayWeekNumber && (0, import_jsx_runtime20.jsx)(PickersCalendarWeekNumber, {
            className: classes.weekNumber,
            role: "rowheader",
            "aria-label": localeText.calendarWeekNumberAriaLabelText(utils.getWeekNumber(week[0])),
            children: localeText.calendarWeekNumberText(utils.getWeekNumber(week[0]))
          }), week.map((day, dayIndex) => (0, import_jsx_runtime20.jsx)(WrappedDay, {
            parentProps: props,
            day,
            selectedDays: validSelectedDays,
            focusableDay,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onDaySelect: handleDaySelect,
            isDateDisabled,
            currentMonthNumber,
            isViewFocused: internalHasFocus,
            "aria-colindex": dayIndex + 1
          }, day.toString()))]
        }, `week-${week[0]}`))
      })
    }))]
  });
}

// node_modules/@mui/x-date-pickers/DateCalendar/useCalendarState.js
init_extends();
var React30 = __toESM(require_react());
init_useEventCallback();

// node_modules/@mui/x-date-pickers/internals/utils/valueManagers.js
init_objectWithoutPropertiesLoose();
var _excluded16 = ["value", "referenceDate"];
var singleItemValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: (_ref) => {
    let {
      value,
      referenceDate
    } = _ref, params = _objectWithoutPropertiesLoose(_ref, _excluded16);
    if (value != null && params.utils.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return getDefaultReferenceDate(params);
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: (error) => error != null,
  defaultErrorState: null,
  getTimezone: (utils, value) => value == null || !utils.isValid(value) ? null : utils.getTimezone(value),
  setTimezone: (utils, timezone, value) => value == null ? null : utils.setTimezone(value, timezone)
};
var singleItemFieldValueManager = {
  updateReferenceValue: (utils, value, prevReferenceValue) => value == null || !utils.isValid(value) ? prevReferenceValue : value,
  getSectionsFromValue: (utils, date, prevSections, isRTL, getSectionsFromDate) => {
    const shouldReUsePrevDateSections = !utils.isValid(date) && !!prevSections;
    if (shouldReUsePrevDateSections) {
      return prevSections;
    }
    return addPositionPropertiesToSections(getSectionsFromDate(date), isRTL);
  },
  getValueStrFromSections: createDateStrForInputFromSections,
  getActiveDateManager: (utils, state) => ({
    date: state.value,
    referenceDate: state.referenceValue,
    getSections: (sections) => sections,
    getNewValuesFromNewActiveDate: (newActiveDate) => ({
      value: newActiveDate,
      referenceValue: newActiveDate == null || !utils.isValid(newActiveDate) ? state.referenceValue : newActiveDate
    })
  }),
  parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue)
};

// node_modules/@mui/x-date-pickers/DateCalendar/useCalendarState.js
var createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
  switch (action.type) {
    case "changeMonth":
      return _extends({}, state, {
        slideDirection: action.direction,
        currentMonth: action.newMonth,
        isMonthSwitchingAnimating: !reduceAnimations
      });
    case "finishMonthSwitchingAnimation":
      return _extends({}, state, {
        isMonthSwitchingAnimating: false
      });
    case "changeFocusedDay": {
      if (state.focusedDay != null && action.focusedDay != null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
        return state;
      }
      const needMonthSwitch = action.focusedDay != null && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
      return _extends({}, state, {
        focusedDay: action.focusedDay,
        isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations && !action.withoutMonthSwitchingAnimation,
        currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
        slideDirection: action.focusedDay != null && utils.isAfterDay(action.focusedDay, state.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
};
var useCalendarState = (params) => {
  const {
    value,
    referenceDate: referenceDateProp,
    defaultCalendarMonth,
    disableFuture,
    disablePast,
    disableSwitchToMonthOnDayFocus = false,
    maxDate,
    minDate,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    timezone
  } = params;
  const now = useNow(timezone);
  const utils = useUtils();
  const reducerFn = React30.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
  const referenceDate = React30.useMemo(
    () => {
      let externalReferenceDate = null;
      if (referenceDateProp) {
        externalReferenceDate = referenceDateProp;
      } else if (defaultCalendarMonth) {
        externalReferenceDate = utils.startOfMonth(defaultCalendarMonth);
      }
      return singleItemValueManager.getInitialReferenceValue({
        value,
        utils,
        timezone,
        props: params,
        referenceDate: externalReferenceDate,
        granularity: SECTION_TYPE_GRANULARITY.day
      });
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const [calendarState, dispatch] = React30.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: value || now,
    currentMonth: utils.startOfMonth(referenceDate),
    slideDirection: "left"
  });
  const handleChangeMonth = React30.useCallback((payload) => {
    dispatch(_extends({
      type: "changeMonth"
    }, payload));
    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  const changeMonth = React30.useCallback((newDate) => {
    const newDateRequested = newDate;
    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }
    handleChangeMonth({
      newMonth: utils.startOfMonth(newDateRequested),
      direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? "left" : "right"
    });
  }, [calendarState.currentMonth, handleChangeMonth, utils]);
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    timezone
  });
  const onMonthSwitchingAnimationEnd = React30.useCallback(() => {
    dispatch({
      type: "finishMonthSwitchingAnimation"
    });
  }, []);
  const changeFocusedDay = useEventCallback_default((newFocusedDate, withoutMonthSwitchingAnimation) => {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: "changeFocusedDay",
        focusedDay: newFocusedDate,
        withoutMonthSwitchingAnimation
      });
    }
  });
  return {
    referenceDate,
    calendarState,
    changeMonth,
    changeFocusedDay,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    handleChangeMonth
  };
};

// node_modules/@mui/x-date-pickers-pro/internals/utils/valueManagers.js
init_extends();
init_objectWithoutPropertiesLoose();

// node_modules/@mui/x-date-pickers-pro/internals/utils/date-fields-utils.js
init_extends();
var splitDateRangeSections = (sections) => {
  const startDateSections = [];
  const endDateSections = [];
  sections.forEach((section) => {
    if (section.dateName === "start") {
      startDateSections.push(section);
    } else {
      endDateSections.push(section);
    }
  });
  return {
    startDate: startDateSections,
    endDate: endDateSections
  };
};
var removeLastSeparator = (dateSections) => dateSections.map((section, sectionIndex) => {
  if (sectionIndex === dateSections.length - 1) {
    return _extends({}, section, {
      separator: null
    });
  }
  return section;
});

// node_modules/@mui/x-date-pickers-pro/internals/utils/valueManagers.js
var _excluded17 = ["value", "referenceDate"];
var rangeValueManager = {
  emptyValue: [null, null],
  getTodayValue: (utils, timezone, valueType) => [getTodayDate(utils, timezone, valueType), getTodayDate(utils, timezone, valueType)],
  getInitialReferenceValue: (_ref) => {
    let {
      value,
      referenceDate: referenceDateProp
    } = _ref, params = _objectWithoutPropertiesLoose(_ref, _excluded17);
    const shouldKeepStartDate = value[0] != null && params.utils.isValid(value[0]);
    const shouldKeepEndDate = value[1] != null && params.utils.isValid(value[1]);
    if (shouldKeepStartDate && shouldKeepEndDate) {
      return value;
    }
    const referenceDate = referenceDateProp != null ? referenceDateProp : getDefaultReferenceDate(params);
    return [shouldKeepStartDate ? value[0] : referenceDate, shouldKeepEndDate ? value[1] : referenceDate];
  },
  cleanValue: (utils, value) => value.map((date) => replaceInvalidDateByNull(utils, date)),
  areValuesEqual: (utils, a, b) => areDatesEqual(utils, a[0], b[0]) && areDatesEqual(utils, a[1], b[1]),
  isSameError: (a, b) => b !== null && a[1] === b[1] && a[0] === b[0],
  hasError: (error) => error[0] != null || error[1] != null,
  defaultErrorState: [null, null],
  getTimezone: (utils, value) => {
    const timezoneStart = value[0] == null || !utils.isValid(value[0]) ? null : utils.getTimezone(value[0]);
    const timezoneEnd = value[1] == null || !utils.isValid(value[1]) ? null : utils.getTimezone(value[1]);
    if (timezoneStart != null && timezoneEnd != null && timezoneStart !== timezoneEnd) {
      throw new Error("MUI: The timezone of the start and the end date should be the same");
    }
    return timezoneStart != null ? timezoneStart : timezoneEnd;
  },
  setTimezone: (utils, timezone, value) => [value[0] == null ? null : utils.setTimezone(value[0], timezone), value[1] == null ? null : utils.setTimezone(value[1], timezone)]
};
var rangeFieldValueManager = {
  updateReferenceValue: (utils, value, prevReferenceValue) => {
    const shouldKeepStartDate = value[0] != null && utils.isValid(value[0]);
    const shouldKeepEndDate = value[1] != null && utils.isValid(value[1]);
    if (!shouldKeepStartDate && !shouldKeepEndDate) {
      return prevReferenceValue;
    }
    if (shouldKeepStartDate && shouldKeepEndDate) {
      return value;
    }
    if (shouldKeepStartDate) {
      return [value[0], prevReferenceValue[0]];
    }
    return [prevReferenceValue[1], value[1]];
  },
  getSectionsFromValue: (utils, [start, end], fallbackSections, isRTL, getSectionsFromDate) => {
    const separatedFallbackSections = fallbackSections == null ? {
      startDate: null,
      endDate: null
    } : splitDateRangeSections(fallbackSections);
    const getSections = (newDate, fallbackDateSections, position) => {
      const shouldReUsePrevDateSections = !utils.isValid(newDate) && !!fallbackDateSections;
      if (shouldReUsePrevDateSections) {
        return fallbackDateSections;
      }
      const sections = getSectionsFromDate(newDate);
      return sections.map((section, sectionIndex) => {
        if (sectionIndex === sections.length - 1 && position === "start") {
          return _extends({}, section, {
            dateName: position,
            endSeparator: `${section.endSeparator}${isRTL ? "⁩ – ⁦" : " – "}`
          });
        }
        return _extends({}, section, {
          dateName: position
        });
      });
    };
    return addPositionPropertiesToSections([...getSections(start, separatedFallbackSections.startDate, "start"), ...getSections(end, separatedFallbackSections.endDate, "end")], isRTL);
  },
  getValueStrFromSections: (sections, isRTL) => {
    const dateRangeSections = splitDateRangeSections(sections);
    return createDateStrForInputFromSections([...dateRangeSections.startDate, ...dateRangeSections.endDate], isRTL);
  },
  parseValueStr: (valueStr, referenceValue, parseDate) => {
    const [startStr, endStr] = valueStr.split("–");
    return [startStr, endStr].map((dateStr, index) => {
      if (dateStr == null) {
        return null;
      }
      return parseDate(dateStr.trim(), referenceValue[index]);
    });
  },
  getActiveDateManager: (utils, state, activeSection) => {
    const index = activeSection.dateName === "start" ? 0 : 1;
    const updateDateInRange = (newDate, prevDateRange) => index === 0 ? [newDate, prevDateRange[1]] : [prevDateRange[0], newDate];
    return {
      date: state.value[index],
      referenceDate: state.referenceValue[index],
      getSections: (sections) => {
        const dateRangeSections = splitDateRangeSections(sections);
        if (index === 0) {
          return removeLastSeparator(dateRangeSections.startDate);
        }
        return dateRangeSections.endDate;
      },
      getNewValuesFromNewActiveDate: (newActiveDate) => ({
        value: updateDateInRange(newActiveDate, state.value),
        referenceValue: newActiveDate == null || !utils.isValid(newActiveDate) ? state.referenceValue : updateDateInRange(newActiveDate, state.referenceValue)
      })
    };
  }
};

// node_modules/@mui/x-date-pickers-pro/DateRangePicker/shared.js
init_extends();
init_objectWithoutPropertiesLoose();
var React32 = __toESM(require_react());

// node_modules/@mui/x-date-pickers-pro/DateRangePicker/DateRangePickerToolbar.js
init_extends();
init_objectWithoutPropertiesLoose();
var React31 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers-pro/DateRangePicker/dateRangePickerToolbarClasses.js
init_esm();
function getDateRangePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDateRangePickerToolbar", slot);
}
var dateRangePickerToolbarClasses = generateUtilityClasses("MuiDateRangePickerToolbar", ["root", "container"]);

// node_modules/@mui/x-date-pickers-pro/DateRangePicker/DateRangePickerToolbar.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var _excluded18 = ["value", "rangePosition", "onRangePositionChange", "toolbarFormat", "className"];
var useUtilityClasses11 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    container: ["container"]
  };
  return composeClasses(slots, getDateRangePickerToolbarUtilityClass, classes);
};
var DateRangePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiDateRangePickerToolbar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
var DateRangePickerToolbarContainer = styled_default("div", {
  name: "MuiDateRangePickerToolbar",
  slot: "Container",
  overridesResolver: (_, styles) => styles.container
})({
  display: "flex"
});
var DateRangePickerToolbar = React31.forwardRef(function DateRangePickerToolbar2(inProps, ref) {
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateRangePickerToolbar"
  });
  const {
    value: [start, end],
    rangePosition,
    onRangePositionChange,
    toolbarFormat,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const localeText = useLocaleText();
  const startDateValue = start ? utils.formatByString(start, toolbarFormat || utils.formats.shortDate) : localeText.start;
  const endDateValue = end ? utils.formatByString(end, toolbarFormat || utils.formats.shortDate) : localeText.end;
  const ownerState = props;
  const classes = useUtilityClasses11(ownerState);
  return (0, import_jsx_runtime22.jsx)(DateRangePickerToolbarRoot, _extends({}, other, {
    toolbarTitle: localeText.dateRangePickerToolbarTitle,
    isLandscape: false,
    className: clsx_default(className, classes.root),
    ownerState,
    ref,
    children: (0, import_jsx_runtime23.jsxs)(DateRangePickerToolbarContainer, {
      className: classes.container,
      children: [(0, import_jsx_runtime22.jsx)(PickersToolbarButton, {
        variant: start !== null ? "h5" : "h6",
        value: startDateValue,
        selected: rangePosition === "start",
        onClick: () => onRangePositionChange("start")
      }), (0, import_jsx_runtime23.jsxs)(Typography_default, {
        variant: "h5",
        children: [" ", "–", " "]
      }), (0, import_jsx_runtime22.jsx)(PickersToolbarButton, {
        variant: end !== null ? "h5" : "h6",
        value: endDateValue,
        selected: rangePosition === "end",
        onClick: () => onRangePositionChange("end")
      })]
    })
  }));
});
true ? DateRangePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types6.default.object,
  /**
   * className applied to the root component.
   */
  className: import_prop_types6.default.string,
  disabled: import_prop_types6.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types6.default.bool,
  onRangePositionChange: import_prop_types6.default.func.isRequired,
  rangePosition: import_prop_types6.default.oneOf(["end", "start"]).isRequired,
  readOnly: import_prop_types6.default.bool,
  titleId: import_prop_types6.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types6.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types6.default.node,
  value: import_prop_types6.default.arrayOf(import_prop_types6.default.any).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers-pro/DateRangePicker/shared.js
var _excluded19 = ["components", "componentsProps"];
function useDateRangePickerDefaultizedProps(props, name) {
  var _themeProps$disableFu, _themeProps$disablePa, _themeProps$slots, _themeProps$slotProps;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const _useThemeProps = useThemeProps({
    props,
    name
  }), {
    components,
    componentsProps
  } = _useThemeProps, themeProps = _objectWithoutPropertiesLoose(_useThemeProps, _excluded19);
  const localeText = React32.useMemo(() => {
    var _themeProps$localeTex;
    if (((_themeProps$localeTex = themeProps.localeText) == null ? void 0 : _themeProps$localeTex.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      dateRangePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  return _extends({}, themeProps, {
    localeText,
    disableFuture: (_themeProps$disableFu = themeProps.disableFuture) != null ? _themeProps$disableFu : false,
    disablePast: (_themeProps$disablePa = themeProps.disablePast) != null ? _themeProps$disablePa : false,
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate),
    slots: _extends({
      toolbar: DateRangePickerToolbar
    }, (_themeProps$slots = themeProps.slots) != null ? _themeProps$slots : uncapitalizeObjectKeys(components)),
    slotProps: (_themeProps$slotProps = themeProps.slotProps) != null ? _themeProps$slotProps : componentsProps
  });
}

// node_modules/@mui/x-date-pickers-pro/dateRangeViewRenderers/dateRangeViewRenderers.js
var React43 = __toESM(require_react());

// node_modules/@mui/x-date-pickers-pro/DateRangeCalendar/DateRangeCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React42 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
init_clsx();
init_useEventCallback();
init_esm();

// node_modules/@mui/x-license-pro/encoding/md5.js
var k = [];
var i = 0;
for (; i < 64; ) {
  k[i] = 0 | Math.sin(++i % Math.PI) * 4294967296;
}
function md5(s) {
  const words = [];
  let b, c, d, j = unescape(encodeURI(s)) + "", a = j.length;
  const h = [b = 1732584193, c = 4023233417, ~b, ~c];
  s = --a / 4 + 2 | 15;
  words[--s] = a * 8;
  for (; ~a; ) {
    words[a >> 2] |= j.charCodeAt(a) << 8 * a--;
  }
  for (i = j = 0; i < s; i += 16) {
    a = h;
    for (; j < 64; a = [d = a[3], b + ((d = a[0] + [b & c | ~b & d, d & b | ~d & c, b ^ c ^ d, c ^ (b | ~d)][a = j >> 4] + k[j] + ~~words[i | [j, 5 * j + 1, 3 * j + 5, 7 * j][a] & 15]) << (a = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][4 * a + j++ % 4]) | d >>> -a), b, c]) {
      b = a[1] | 0;
      c = a[2];
    }
    for (j = 4; j; )
      h[--j] += a[j];
  }
  for (s = ""; j < 32; ) {
    s += (h[j >> 3] >> (1 ^ j++) * 4 & 15).toString(16);
  }
  return s;
}

// node_modules/@mui/x-license-pro/encoding/base64.js
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var base64Decode = (input) => {
  let output = "";
  let chr1, chr2, chr3;
  let enc1, enc2, enc3, enc4;
  let i2 = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i2 < input.length) {
    enc1 = _keyStr.indexOf(input.charAt(i2++));
    enc2 = _keyStr.indexOf(input.charAt(i2++));
    enc3 = _keyStr.indexOf(input.charAt(i2++));
    enc4 = _keyStr.indexOf(input.charAt(i2++));
    chr1 = enc1 << 2 | enc2 >> 4;
    chr2 = (enc2 & 15) << 4 | enc3 >> 2;
    chr3 = (enc3 & 3) << 6 | enc4;
    output = output + String.fromCharCode(chr1);
    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3);
    }
  }
  return output;
};

// node_modules/@mui/x-license-pro/utils/licenseScope.js
var LICENSE_SCOPES = ["pro", "premium"];

// node_modules/@mui/x-license-pro/utils/licensingModel.js
var LICENSING_MODELS = [
  /**
   * A license is outdated if the current version of the software was released after the expiry date of the license.
   * But the license can be used indefinitely with an older version of the software.
   */
  "perpetual",
  /**
   * On development, a license is outdated if the expiry date has been reached
   * On production, a license is outdated if the current version of the software was released after the expiry date of the license (see "perpetual")
   */
  "annual",
  /**
   * TODO 2025 remove, legacy name of annual.
   */
  "subscription"
];

// node_modules/@mui/x-license-pro/utils/licenseErrorMessageUtils.js
function showError(message) {
  console.error(["*************************************************************", "", ...message, "", "*************************************************************"].join("\n"));
}
function showInvalidLicenseKeyError() {
  showError(["MUI: Invalid license key.", "", "Your MUI X license key format isn't valid. It could be because the license key is missing a character or has a typo.", "", "To solve the issue, you need to double check that `setLicenseKey()` is called with the right argument", "Please check the license key installation https://mui.com/r/x-license-key-installation."]);
}
function showLicenseKeyPlanMismatchError() {
  showError(["MUI: License key plan mismatch.", "", "Your use of MUI X is not compatible with the plan of your license key. The feature you are trying to use is not included in the plan of your license key. This happens if you try to use `DataGridPremium` with a license key for the Pro plan.", "", "To solve the issue, you can upgrade your plan from Pro to Premium at https://mui.com/r/x-get-license?scope=premium.", "Of if you didn't intend to use Premium features, you can replace the import of `@mui/x-data-grid-premium` with `@mui/x-data-grid-pro`."]);
}
function showMissingLicenseKeyError({
  plan,
  packageName
}) {
  showError(["MUI: Missing license key.", "", `The license key is missing. You might not be allowed to use \`${packageName}\` which is part of MUI X ${plan}.`, "", "To solve the issue, you can check the free trial conditions: https://mui.com/r/x-license-trial.", "If you are eligible no actions are required. If you are not eligible to the free trial, you need to purchase a license https://mui.com/r/x-get-license or stop using the software immediately."]);
}
function showExpiredPackageVersionError({
  packageName
}) {
  showError(["MUI: Expired package version.", "", `You have installed a version of \`${packageName}\` that is outside of the maintenance plan of your license key. By default, commercial licenses provide access to new versions released during the first year after the purchase.`, "", "To solve the issue, you can renew your license https://mui.com/r/x-get-license or install an older version of the npm package that is compatible with your license key."]);
}
function showExpiredAnnualGraceLicenseKeyError({
  plan,
  licenseKey,
  expiryTimestamp
}) {
  showError(["MUI: Expired license key.", "", `Your annual license key to use MUI X ${plan}'s on non-production environments is expired. If you are seeing this development console message, you might be close to breach the license terms by making direct or indirect changes to the frontend of an app that render a MUI X ${plan} component (more details in https://mui.com/r/x-license-annual).`, "", "To solve the problem you can either:", "", "- Renew your license https://mui.com/r/x-get-license and use the new key", `- Stop making changes to code depending directly or indirectly on MUI X ${plan}'s APIs`, "", "Note that your license is perpetual in production environments with any version released before your license term ends.", "", `- License key expiry timestamp: ${new Date(expiryTimestamp)}`, `- Installed license key: ${licenseKey}`, ""]);
}
function showExpiredAnnualLicenseKeyError({
  plan,
  licenseKey,
  expiryTimestamp
}) {
  throw new Error(["MUI: Expired license key.", "", `Your annual license key to use MUI X ${plan}'s on non-production environments is expired. If you are seeing this development console message, you might be close to breach the license terms by making direct or indirect changes to the frontend of an app that render a MUI X ${plan} component (more details in https://mui.com/r/x-license-annual).`, "", "To solve the problem you can either:", "", "- Renew your license https://mui.com/r/x-get-license and use the new key", `- Stop making changes to code depending directly or indirectly on MUI X ${plan}'s APIs`, "", "Note that your license is perpetual in production environments with any version released before your license term ends.", "", `- License key expiry timestamp: ${new Date(expiryTimestamp)}`, `- Installed license key: ${licenseKey}`, ""].join("\n"));
}

// node_modules/@mui/x-license-pro/utils/licenseInfo.js
init_esm();
ponyfillGlobal_default.__MUI_LICENSE_INFO__ = ponyfillGlobal_default.__MUI_LICENSE_INFO__ || {
  key: void 0
};
var LicenseInfo = class _LicenseInfo {
  static getLicenseInfo() {
    return ponyfillGlobal_default.__MUI_LICENSE_INFO__;
  }
  static getLicenseKey() {
    return _LicenseInfo.getLicenseInfo().key;
  }
  static setLicenseKey(key) {
    const licenseInfo = _LicenseInfo.getLicenseInfo();
    licenseInfo.key = key;
  }
};

// node_modules/@mui/x-license-pro/utils/licenseStatus.js
var LICENSE_STATUS = function(LICENSE_STATUS2) {
  LICENSE_STATUS2["NotFound"] = "NotFound";
  LICENSE_STATUS2["Invalid"] = "Invalid";
  LICENSE_STATUS2["ExpiredAnnual"] = "ExpiredAnnual";
  LICENSE_STATUS2["ExpiredAnnualGrace"] = "ExpiredAnnualGrace";
  LICENSE_STATUS2["ExpiredVersion"] = "ExpiredVersion";
  LICENSE_STATUS2["Valid"] = "Valid";
  LICENSE_STATUS2["OutOfScope"] = "OutOfScope";
  return LICENSE_STATUS2;
}({});

// node_modules/@mui/x-license-pro/verifyLicense/verifyLicense.js
var expiryReg = /^.*EXPIRY=([0-9]+),.*$/;
var decodeLicenseVersion1 = (license) => {
  let expiryTimestamp;
  try {
    expiryTimestamp = parseInt(license.match(expiryReg)[1], 10);
    if (!expiryTimestamp || Number.isNaN(expiryTimestamp)) {
      expiryTimestamp = null;
    }
  } catch (err) {
    expiryTimestamp = null;
  }
  return {
    scope: "pro",
    licensingModel: "perpetual",
    expiryTimestamp
  };
};
var decodeLicenseVersion2 = (license) => {
  const licenseInfo = {
    scope: null,
    licensingModel: null,
    expiryTimestamp: null
  };
  license.split(",").map((token) => token.split("=")).filter((el) => el.length === 2).forEach(([key, value]) => {
    if (key === "S") {
      licenseInfo.scope = value;
    }
    if (key === "LM") {
      licenseInfo.licensingModel = value;
    }
    if (key === "E") {
      const expiryTimestamp = parseInt(value, 10);
      if (expiryTimestamp && !Number.isNaN(expiryTimestamp)) {
        licenseInfo.expiryTimestamp = expiryTimestamp;
      }
    }
  });
  return licenseInfo;
};
var decodeLicense = (encodedLicense) => {
  const license = base64Decode(encodedLicense);
  if (license.includes("KEYVERSION=1")) {
    return decodeLicenseVersion1(license);
  }
  if (license.includes("KV=2")) {
    return decodeLicenseVersion2(license);
  }
  return null;
};
function verifyLicense({
  releaseInfo: releaseInfo5,
  licenseKey,
  acceptedScopes
}) {
  if (!releaseInfo5) {
    throw new Error("MUI: The release information is missing. Not able to validate license.");
  }
  if (!licenseKey) {
    return {
      status: LICENSE_STATUS.NotFound
    };
  }
  const hash = licenseKey.substr(0, 32);
  const encoded = licenseKey.substr(32);
  if (hash !== md5(encoded)) {
    return {
      status: LICENSE_STATUS.Invalid
    };
  }
  const license = decodeLicense(encoded);
  if (license == null) {
    console.error("Error checking license. Key version not found!");
    return {
      status: LICENSE_STATUS.Invalid
    };
  }
  if (license.licensingModel == null || !LICENSING_MODELS.includes(license.licensingModel)) {
    console.error("Error checking license. Licensing model not found or invalid!");
    return {
      status: LICENSE_STATUS.Invalid
    };
  }
  if (license.expiryTimestamp == null) {
    console.error("Error checking license. Expiry timestamp not found or invalid!");
    return {
      status: LICENSE_STATUS.Invalid
    };
  }
  if (license.licensingModel === "perpetual" || false) {
    const pkgTimestamp = parseInt(base64Decode(releaseInfo5), 10);
    if (Number.isNaN(pkgTimestamp)) {
      throw new Error("MUI: The release information is invalid. Not able to validate license.");
    }
    if (license.expiryTimestamp < pkgTimestamp) {
      return {
        status: LICENSE_STATUS.ExpiredVersion
      };
    }
  } else if (license.licensingModel === "subscription" || license.licensingModel === "annual") {
    if ((/* @__PURE__ */ new Date()).getTime() > license.expiryTimestamp) {
      if (
        // 30 days grace
        (/* @__PURE__ */ new Date()).getTime() < license.expiryTimestamp + 1e3 * 3600 * 24 * 30 || false
      ) {
        return {
          status: LICENSE_STATUS.ExpiredAnnualGrace,
          meta: {
            expiryTimestamp: license.expiryTimestamp,
            licenseKey
          }
        };
      }
      return {
        status: LICENSE_STATUS.ExpiredAnnual,
        meta: {
          expiryTimestamp: license.expiryTimestamp,
          licenseKey
        }
      };
    }
  }
  if (license.scope == null || !LICENSE_SCOPES.includes(license.scope)) {
    console.error("Error checking license. scope not found or invalid!");
    return {
      status: LICENSE_STATUS.Invalid
    };
  }
  if (!acceptedScopes.includes(license.scope)) {
    return {
      status: LICENSE_STATUS.OutOfScope
    };
  }
  return {
    status: LICENSE_STATUS.Valid
  };
}

// node_modules/@mui/x-license-pro/useLicenseVerifier/useLicenseVerifier.js
init_extends();
var React34 = __toESM(require_react());

// node_modules/@mui/x-license-pro/Unstable_LicenseInfoProvider/LicenseInfoContext.js
var React33 = __toESM(require_react());
var LicenseInfoContext_default = React33.createContext({
  key: void 0
});

// node_modules/@mui/x-license-pro/useLicenseVerifier/useLicenseVerifier.js
var sharedLicenseStatuses = {};
function useLicenseVerifier(packageName, releaseInfo5) {
  const {
    key: contextKey
  } = React34.useContext(LicenseInfoContext_default);
  return React34.useMemo(() => {
    const licenseKey = contextKey != null ? contextKey : LicenseInfo.getLicenseKey();
    if (sharedLicenseStatuses[packageName] && sharedLicenseStatuses[packageName].key === licenseKey) {
      return sharedLicenseStatuses[packageName].licenseVerifier;
    }
    const acceptedScopes = packageName.includes("premium") ? ["premium"] : ["pro", "premium"];
    const plan = packageName.includes("premium") ? "Premium" : "Pro";
    const licenseStatus = verifyLicense({
      releaseInfo: releaseInfo5,
      licenseKey,
      acceptedScopes
    });
    sharedLicenseStatuses[packageName] = {
      key: licenseKey,
      licenseVerifier: licenseStatus
    };
    const fullPackageName = `@mui/${packageName}`;
    if (licenseStatus.status === LICENSE_STATUS.Valid) {
    } else if (licenseStatus.status === LICENSE_STATUS.Invalid) {
      showInvalidLicenseKeyError();
    } else if (licenseStatus.status === LICENSE_STATUS.OutOfScope) {
      showLicenseKeyPlanMismatchError();
    } else if (licenseStatus.status === LICENSE_STATUS.NotFound) {
      showMissingLicenseKeyError({
        plan,
        packageName: fullPackageName
      });
    } else if (licenseStatus.status === LICENSE_STATUS.ExpiredAnnualGrace) {
      showExpiredAnnualGraceLicenseKeyError(_extends({
        plan
      }, licenseStatus.meta));
    } else if (licenseStatus.status === LICENSE_STATUS.ExpiredAnnual) {
      showExpiredAnnualLicenseKeyError(_extends({
        plan
      }, licenseStatus.meta));
    } else if (licenseStatus.status === LICENSE_STATUS.ExpiredVersion) {
      showExpiredPackageVersionError({
        packageName: fullPackageName
      });
    } else if (true) {
      throw new Error("missing status handler");
    }
    return licenseStatus;
  }, [packageName, releaseInfo5, contextKey]);
}

// node_modules/@mui/x-license-pro/Watermark/Watermark.js
var React35 = __toESM(require_react());
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
function getLicenseErrorMessage(licenseStatus) {
  switch (licenseStatus) {
    case LICENSE_STATUS.ExpiredAnnualGrace:
    case LICENSE_STATUS.ExpiredAnnual:
      return "MUI X Expired license key";
    case LICENSE_STATUS.ExpiredVersion:
      return "MUI X Expired package version";
    case LICENSE_STATUS.Invalid:
      return "MUI X Invalid license key";
    case LICENSE_STATUS.OutOfScope:
      return "MUI X License key plan mismatch";
    case LICENSE_STATUS.NotFound:
      return "MUI X Missing license key";
    default:
      throw new Error("MUI: Unhandled MUI X license status.");
  }
}
function Watermark(props) {
  const {
    packageName,
    releaseInfo: releaseInfo5
  } = props;
  const licenseStatus = useLicenseVerifier(packageName, releaseInfo5);
  if (licenseStatus.status === LICENSE_STATUS.Valid) {
    return null;
  }
  return (0, import_jsx_runtime24.jsx)("div", {
    style: {
      position: "absolute",
      pointerEvents: "none",
      color: "#8282829e",
      zIndex: 1e5,
      width: "100%",
      textAlign: "center",
      bottom: "50%",
      right: 0,
      letterSpacing: 5,
      fontSize: 24
    },
    children: getLicenseErrorMessage(licenseStatus.status)
  });
}

// node_modules/@mui/x-license-pro/Unstable_LicenseInfoProvider/LicenseInfoProvider.js
var React36 = __toESM(require_react());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());

// node_modules/@mui/x-date-pickers/PickersCalendarHeader/pickersCalendarHeaderClasses.js
init_esm();
var getPickersCalendarHeaderUtilityClass = (slot) => generateUtilityClass("MuiPickersCalendarHeader", slot);
var pickersCalendarHeaderClasses = generateUtilityClasses("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]);

// node_modules/@mui/x-date-pickers/PickersCalendarHeader/PickersCalendarHeader.js
init_objectWithoutPropertiesLoose();
init_extends();
var React38 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/DateCalendar/PickersFadeTransitionGroup.js
var React37 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/DateCalendar/pickersFadeTransitionGroupClasses.js
init_esm();
var getPickersFadeTransitionGroupUtilityClass = (slot) => generateUtilityClass("MuiPickersFadeTransitionGroup", slot);
var pickersFadeTransitionGroupClasses = generateUtilityClasses("MuiPickersFadeTransitionGroup", ["root"]);

// node_modules/@mui/x-date-pickers/DateCalendar/PickersFadeTransitionGroup.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var useUtilityClasses12 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getPickersFadeTransitionGroupUtilityClass, classes);
};
var animationDuration = 500;
var PickersFadeTransitionGroupRoot = styled_default(TransitionGroup_default, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  display: "block",
  position: "relative"
});
function PickersFadeTransitionGroup(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersFadeTransitionGroup"
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
  } = props;
  const classes = useUtilityClasses12(props);
  if (reduceAnimations) {
    return children;
  }
  return (0, import_jsx_runtime26.jsx)(PickersFadeTransitionGroupRoot, {
    className: clsx_default(classes.root, className),
    children: (0, import_jsx_runtime26.jsx)(Fade_default, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: animationDuration,
        enter: animationDuration / 2,
        exit: 0
      },
      children
    }, transKey)
  });
}

// node_modules/@mui/x-date-pickers/PickersCalendarHeader/PickersCalendarHeader.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var _excluded20 = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone"];
var _excluded24 = ["ownerState"];
var useUtilityClasses13 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  };
  return composeClasses(slots, getPickersCalendarHeaderUtilityClass, classes);
};
var PickersCalendarHeaderRoot = styled_default("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  display: "flex",
  alignItems: "center",
  marginTop: 16,
  marginBottom: 8,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 30,
  minHeight: 30
});
var PickersCalendarHeaderLabelContainer = styled_default("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (_, styles) => styles.labelContainer
})(({
  theme
}) => _extends({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, theme.typography.body1, {
  fontWeight: theme.typography.fontWeightMedium
}));
var PickersCalendarHeaderLabel = styled_default("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (_, styles) => styles.label
})({
  marginRight: 6
});
var PickersCalendarHeaderSwitchViewButton = styled_default(IconButton_default, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (_, styles) => styles.switchViewButton
})(({
  ownerState
}) => _extends({
  marginRight: "auto"
}, ownerState.view === "year" && {
  [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
    transform: "rotate(180deg)"
  }
}));
var PickersCalendarHeaderSwitchViewIcon = styled_default(ArrowDropDownIcon, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (_, styles) => styles.switchViewIcon
})(({
  theme
}) => ({
  willChange: "transform",
  transition: theme.transitions.create("transform"),
  transform: "rotate(0deg)"
}));
var PickersCalendarHeader = React38.forwardRef(function PickersCalendarHeader2(inProps, ref) {
  var _slots$switchViewButt, _slots$switchViewIcon;
  const localeText = useLocaleText();
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersCalendarHeader"
  });
  const {
    slots,
    slotProps,
    currentMonth: month,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onMonthChange,
    onViewChange,
    view,
    reduceAnimations,
    views,
    labelId,
    className,
    timezone
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const ownerState = props;
  const classes = useUtilityClasses13(props);
  const SwitchViewButton = (_slots$switchViewButt = slots == null ? void 0 : slots.switchViewButton) != null ? _slots$switchViewButt : PickersCalendarHeaderSwitchViewButton;
  const switchViewButtonProps = useSlotProps({
    elementType: SwitchViewButton,
    externalSlotProps: slotProps == null ? void 0 : slotProps.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": localeText.calendarViewSwitchingButtonAriaLabel(view)
    },
    ownerState,
    className: classes.switchViewButton
  });
  const SwitchViewIcon = (_slots$switchViewIcon = slots == null ? void 0 : slots.switchViewIcon) != null ? _slots$switchViewIcon : PickersCalendarHeaderSwitchViewIcon;
  const _useSlotProps = useSlotProps({
    elementType: SwitchViewIcon,
    externalSlotProps: slotProps == null ? void 0 : slotProps.switchViewIcon,
    ownerState: void 0,
    className: classes.switchViewIcon
  }), switchViewIconProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded24);
  const selectNextMonth = () => onMonthChange(utils.addMonths(month, 1), "left");
  const selectPreviousMonth = () => onMonthChange(utils.addMonths(month, -1), "right");
  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate,
    timezone
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate,
    timezone
  });
  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }
    if (views.length === 2) {
      onViewChange(views.find((el) => el !== view) || views[0]);
    } else {
      const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  };
  if (views.length === 1 && views[0] === "year") {
    return null;
  }
  return (0, import_jsx_runtime28.jsxs)(PickersCalendarHeaderRoot, _extends({}, other, {
    ownerState,
    className: clsx_default(className, classes.root),
    ref,
    children: [(0, import_jsx_runtime28.jsxs)(PickersCalendarHeaderLabelContainer, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState,
      "aria-live": "polite",
      className: classes.labelContainer,
      children: [(0, import_jsx_runtime27.jsx)(PickersFadeTransitionGroup, {
        reduceAnimations,
        transKey: utils.format(month, "monthAndYear"),
        children: (0, import_jsx_runtime27.jsx)(PickersCalendarHeaderLabel, {
          id: labelId,
          ownerState,
          className: classes.label,
          children: utils.format(month, "monthAndYear")
        })
      }), views.length > 1 && !disabled && (0, import_jsx_runtime27.jsx)(SwitchViewButton, _extends({}, switchViewButtonProps, {
        children: (0, import_jsx_runtime27.jsx)(SwitchViewIcon, _extends({}, switchViewIconProps))
      }))]
    }), (0, import_jsx_runtime27.jsx)(Fade_default, {
      in: view === "day",
      children: (0, import_jsx_runtime27.jsx)(PickersArrowSwitcher, {
        slots,
        slotProps,
        onGoToPrevious: selectPreviousMonth,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: localeText.previousMonth,
        onGoToNext: selectNextMonth,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: localeText.nextMonth
      })
    })]
  }));
});
true ? PickersCalendarHeader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types7.default.object,
  /**
   * className applied to the root element.
   */
  className: import_prop_types7.default.string,
  currentMonth: import_prop_types7.default.any.isRequired,
  disabled: import_prop_types7.default.bool,
  disableFuture: import_prop_types7.default.bool,
  disablePast: import_prop_types7.default.bool,
  labelId: import_prop_types7.default.string,
  maxDate: import_prop_types7.default.any.isRequired,
  minDate: import_prop_types7.default.any.isRequired,
  onMonthChange: import_prop_types7.default.func.isRequired,
  onViewChange: import_prop_types7.default.func,
  reduceAnimations: import_prop_types7.default.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types7.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types7.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object]),
  timezone: import_prop_types7.default.string.isRequired,
  view: import_prop_types7.default.oneOf(["day", "month", "year"]).isRequired,
  views: import_prop_types7.default.arrayOf(import_prop_types7.default.oneOf(["day", "month", "year"]).isRequired).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers-pro/internals/utils/releaseInfo.js
init_esm();
var getReleaseInfo = () => {
  const releaseInfo5 = "MTY5MzQzMjgwMDAwMA==";
  if (true) {
    if (releaseInfo5 === "__RELEASE_INFO__") {
      return ponyfillGlobal_default.__MUI_RELEASE_INFO__;
    }
  }
  return releaseInfo5;
};

// node_modules/@mui/x-date-pickers-pro/DateRangeCalendar/dateRangeCalendarClasses.js
init_esm();
var getDateRangeCalendarUtilityClass = (slot) => generateUtilityClass("MuiDateRangeCalendar", slot);
var dateRangeCalendarClasses = generateUtilityClasses("MuiDateRangeCalendar", ["root", "monthContainer", "dayDragging"]);

// node_modules/@mui/x-date-pickers-pro/internals/utils/date-utils.js
var isRangeValid = (utils, range) => {
  return Boolean(range && range[0] && range[1] && !utils.isBefore(range[1], range[0]));
};
var isWithinRange = (utils, day, range) => {
  return isRangeValid(utils, range) && utils.isWithinRange(day, range);
};
var isStartOfRange = (utils, day, range) => {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[0]);
};
var isEndOfRange = (utils, day, range) => {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[1]);
};

// node_modules/@mui/x-date-pickers-pro/internals/utils/date-range-manager.js
function calculateRangeChange({
  utils,
  range,
  newDate: selectedDate,
  rangePosition,
  allowRangeFlip = false
}) {
  const [start, end] = range;
  if (rangePosition === "start") {
    const truthyResult2 = allowRangeFlip ? {
      nextSelection: "start",
      newRange: [end, selectedDate]
    } : {
      nextSelection: "end",
      newRange: [selectedDate, null]
    };
    return Boolean(end) && utils.isAfter(selectedDate, end) ? truthyResult2 : {
      nextSelection: "end",
      newRange: [selectedDate, end]
    };
  }
  const truthyResult = allowRangeFlip ? {
    nextSelection: "end",
    newRange: [selectedDate, start]
  } : {
    nextSelection: "end",
    newRange: [selectedDate, null]
  };
  return Boolean(start) && utils.isBefore(selectedDate, start) ? truthyResult : {
    nextSelection: "start",
    newRange: [start, selectedDate]
  };
}
function calculateRangePreview(options) {
  if (options.newDate == null) {
    return [null, null];
  }
  const [start, end] = options.range;
  const {
    newRange
  } = calculateRangeChange(options);
  if (!start || !end) {
    return newRange;
  }
  const [previewStart, previewEnd] = newRange;
  return options.rangePosition === "end" ? [end, previewEnd] : [previewStart, start];
}

// node_modules/@mui/x-date-pickers-pro/DateRangePickerDay/DateRangePickerDay.js
init_objectWithoutPropertiesLoose();
init_extends();
var React39 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers-pro/DateRangePickerDay/dateRangePickerDayClasses.js
init_esm();
function getDateRangePickerDayUtilityClass(slot) {
  return generateUtilityClass("MuiDateRangePickerDay", slot);
}
var dateRangePickerDayClasses = generateUtilityClasses("MuiDateRangePickerDay", ["root", "rangeIntervalDayHighlight", "rangeIntervalDayHighlightStart", "rangeIntervalDayHighlightEnd", "rangeIntervalPreview", "rangeIntervalDayPreview", "rangeIntervalDayPreviewStart", "rangeIntervalDayPreviewEnd", "outsideCurrentMonth", "startOfMonth", "endOfMonth", "firstVisibleCell", "lastVisibleCell", "hiddenDayFiller", "day", "dayOutsideRangeInterval", "dayInsideRangeInterval", "notSelectedDate"]);

// node_modules/@mui/x-date-pickers-pro/DateRangePickerDay/DateRangePickerDay.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var _excluded21 = ["className", "day", "outsideCurrentMonth", "isEndOfHighlighting", "isEndOfPreviewing", "isHighlighting", "isPreviewing", "isStartOfHighlighting", "isStartOfPreviewing", "selected", "isVisuallySelected", "sx", "draggable", "isFirstVisibleCell", "isLastVisibleCell"];
var releaseInfo = getReleaseInfo();
var useUtilityClasses14 = (ownerState) => {
  const {
    isHighlighting,
    outsideCurrentMonth,
    isStartOfHighlighting,
    isStartOfMonth,
    isEndOfHighlighting,
    isEndOfMonth,
    isPreviewing,
    isStartOfPreviewing,
    isEndOfPreviewing,
    isFirstVisibleCell,
    isLastVisibleCell,
    isHiddenDayFiller,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root", isHighlighting && "rangeIntervalDayHighlight", isStartOfHighlighting && "rangeIntervalDayHighlightStart", isEndOfHighlighting && "rangeIntervalDayHighlightEnd", outsideCurrentMonth && "outsideCurrentMonth", isStartOfMonth && "startOfMonth", isEndOfMonth && "endOfMonth", isFirstVisibleCell && "firstVisibleCell", isLastVisibleCell && "lastVisibleCell", isHiddenDayFiller && "hiddenDayFiller"],
    rangeIntervalPreview: ["rangeIntervalPreview", isPreviewing && "rangeIntervalDayPreview", (isStartOfPreviewing || isStartOfMonth) && "rangeIntervalDayPreviewStart", (isEndOfPreviewing || isEndOfMonth) && "rangeIntervalDayPreviewEnd"],
    day: ["day", !selected && "notSelectedDate", !isHighlighting && "dayOutsideRangeInterval", !selected && isHighlighting && "dayInsideRangeInterval"]
  };
  return composeClasses(slots, getDateRangePickerDayUtilityClass, classes);
};
var endBorderStyle = {
  borderTopRightRadius: "50%",
  borderBottomRightRadius: "50%"
};
var startBorderStyle = {
  borderTopLeftRadius: "50%",
  borderBottomLeftRadius: "50%"
};
var DateRangePickerDayRoot = styled_default("div", {
  name: "MuiDateRangePickerDay",
  slot: "Root",
  overridesResolver: (_, styles) => [{
    [`&.${dateRangePickerDayClasses.rangeIntervalDayHighlight}`]: styles.rangeIntervalDayHighlight
  }, {
    [`&.${dateRangePickerDayClasses.rangeIntervalDayHighlightStart}`]: styles.rangeIntervalDayHighlightStart
  }, {
    [`&.${dateRangePickerDayClasses.rangeIntervalDayHighlightEnd}`]: styles.rangeIntervalDayHighlightEnd
  }, {
    [`&.${dateRangePickerDayClasses.firstVisibleCell}`]: styles.firstVisibleCell
  }, {
    [`&.${dateRangePickerDayClasses.lastVisibleCell}`]: styles.lastVisibleCell
  }, {
    [`&.${dateRangePickerDayClasses.startOfMonth}`]: styles.startOfMonth
  }, {
    [`&.${dateRangePickerDayClasses.endOfMonth}`]: styles.endOfMonth
  }, {
    [`&.${dateRangePickerDayClasses.outsideCurrentMonth}`]: styles.outsideCurrentMonth
  }, {
    [`&.${dateRangePickerDayClasses.hiddenDayFiller}`]: styles.hiddenDayFiller
  }, styles.root]
})(({
  theme,
  ownerState
}) => ownerState.isHiddenDayFiller ? {} : _extends({
  [`&:first-of-type .${dateRangePickerDayClasses.rangeIntervalDayPreview}`]: _extends({}, startBorderStyle, {
    borderLeftColor: (theme.vars || theme).palette.divider
  }),
  [`&:last-of-type .${dateRangePickerDayClasses.rangeIntervalDayPreview}`]: _extends({}, endBorderStyle, {
    borderRightColor: (theme.vars || theme).palette.divider
  })
}, ownerState.isHighlighting && {
  borderRadius: 0,
  color: (theme.vars || theme).palette.primary.contrastText,
  backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
  "&:first-of-type": startBorderStyle,
  "&:last-of-type": endBorderStyle
}, (ownerState.isStartOfHighlighting || ownerState.isFirstVisibleCell) && _extends({}, startBorderStyle, {
  paddingLeft: 0
}), (ownerState.isEndOfHighlighting || ownerState.isLastVisibleCell) && _extends({}, endBorderStyle, {
  paddingRight: 0
})));
DateRangePickerDayRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: import_prop_types8.default.object.isRequired
};
var DateRangePickerDayRangeIntervalPreview = styled_default("div", {
  name: "MuiDateRangePickerDay",
  slot: "RangeIntervalPreview",
  overridesResolver: (_, styles) => [{
    [`&.${dateRangePickerDayClasses.rangeIntervalDayPreview}`]: styles.rangeIntervalDayPreview
  }, {
    [`&.${dateRangePickerDayClasses.rangeIntervalDayPreviewStart}`]: styles.rangeIntervalDayPreviewStart
  }, {
    [`&.${dateRangePickerDayClasses.rangeIntervalDayPreviewEnd}`]: styles.rangeIntervalDayPreviewEnd
  }, styles.rangeIntervalPreview]
})(({
  theme,
  ownerState
}) => _extends({
  // replace default day component margin with transparent border to avoid jumping on preview
  border: "2px solid transparent"
}, ownerState.isPreviewing && !ownerState.isHiddenDayFiller && _extends({
  borderRadius: 0,
  border: `2px dashed ${(theme.vars || theme).palette.divider}`,
  borderLeftColor: "transparent",
  borderRightColor: "transparent"
}, (ownerState.isStartOfPreviewing || ownerState.isFirstVisibleCell) && _extends({
  borderLeftColor: (theme.vars || theme).palette.divider
}, startBorderStyle), (ownerState.isEndOfPreviewing || ownerState.isLastVisibleCell) && _extends({
  borderRightColor: (theme.vars || theme).palette.divider
}, endBorderStyle))));
DateRangePickerDayRangeIntervalPreview.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: import_prop_types8.default.object.isRequired
};
var DateRangePickerDayDay = styled_default(PickersDay2, {
  name: "MuiDateRangePickerDay",
  slot: "Day",
  overridesResolver: (_, styles) => [{
    [`&.${dateRangePickerDayClasses.dayInsideRangeInterval}`]: styles.dayInsideRangeInterval
  }, {
    [`&.${dateRangePickerDayClasses.dayOutsideRangeInterval}`]: styles.dayOutsideRangeInterval
  }, {
    [`&.${dateRangePickerDayClasses.notSelectedDate}`]: styles.notSelectedDate
  }, styles.day]
})(({
  ownerState
}) => _extends({
  // Required to overlap preview border
  transform: "scale(1.1)",
  "& > *": {
    transform: "scale(0.9)"
  }
}, ownerState.draggable && {
  cursor: "grab"
}, ownerState.draggable && {
  touchAction: "none"
}));
var DateRangePickerDayRaw = React39.forwardRef(function DateRangePickerDay(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateRangePickerDay"
  });
  const {
    className,
    day,
    outsideCurrentMonth,
    isHighlighting,
    isPreviewing,
    selected = false,
    isVisuallySelected,
    sx,
    draggable,
    isFirstVisibleCell,
    isLastVisibleCell
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  useLicenseVerifier("x-date-pickers-pro", releaseInfo);
  const utils = useUtils();
  const isEndOfMonth = utils.isSameDay(day, utils.endOfMonth(day));
  const isStartOfMonth = utils.isSameDay(day, utils.startOfMonth(day));
  const shouldRenderHighlight = isHighlighting && !outsideCurrentMonth;
  const shouldRenderPreview = isPreviewing && !outsideCurrentMonth;
  const ownerState = _extends({}, props, {
    selected,
    isStartOfMonth,
    isEndOfMonth,
    draggable,
    isFirstVisibleCell,
    isLastVisibleCell,
    isHiddenDayFiller: outsideCurrentMonth && !other.showDaysOutsideCurrentMonth
  });
  const classes = useUtilityClasses14(ownerState);
  return (0, import_jsx_runtime29.jsx)(DateRangePickerDayRoot, {
    className: clsx_default(classes.root, className),
    ownerState,
    sx,
    children: (0, import_jsx_runtime29.jsx)(DateRangePickerDayRangeIntervalPreview, {
      className: classes.rangeIntervalPreview,
      ownerState,
      children: (0, import_jsx_runtime29.jsx)(DateRangePickerDayDay, _extends({}, other, {
        ref,
        disableMargin: true,
        day,
        selected: isVisuallySelected,
        outsideCurrentMonth,
        className: classes.day,
        ownerState,
        draggable,
        isFirstVisibleCell,
        isLastVisibleCell
      }))
    })
  });
});
true ? DateRangePickerDayRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.shape({
    current: import_prop_types8.default.shape({
      focusVisible: import_prop_types8.default.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: import_prop_types8.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types8.default.object,
  className: import_prop_types8.default.string,
  component: import_prop_types8.default.elementType,
  /**
   * The date to show.
   */
  day: import_prop_types8.default.any.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: import_prop_types8.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types8.default.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: import_prop_types8.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types8.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: import_prop_types8.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: import_prop_types8.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types8.default.string,
  isAnimating: import_prop_types8.default.bool,
  /**
   * Set to `true` if the `day` is the end of a highlighted date range.
   */
  isEndOfHighlighting: import_prop_types8.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is the end of a previewing date range.
   */
  isEndOfPreviewing: import_prop_types8.default.bool.isRequired,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: import_prop_types8.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is in a highlighted date range.
   */
  isHighlighting: import_prop_types8.default.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: import_prop_types8.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is in a preview date range.
   */
  isPreviewing: import_prop_types8.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is the start of a highlighted date range.
   */
  isStartOfHighlighting: import_prop_types8.default.bool.isRequired,
  /**
   * Set to `true` if the `day` is the start of a previewing date range.
   */
  isStartOfPreviewing: import_prop_types8.default.bool.isRequired,
  /**
   * Indicates if the day should be visually selected.
   */
  isVisuallySelected: import_prop_types8.default.bool,
  onDaySelect: import_prop_types8.default.func.isRequired,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types8.default.func,
  onMouseEnter: import_prop_types8.default.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: import_prop_types8.default.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: import_prop_types8.default.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types8.default.bool,
  style: import_prop_types8.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types8.default.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: import_prop_types8.default.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types8.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.shape({
    current: import_prop_types8.default.shape({
      pulsate: import_prop_types8.default.func.isRequired,
      start: import_prop_types8.default.func.isRequired,
      stop: import_prop_types8.default.func.isRequired
    })
  })])
} : void 0;
var DateRangePickerDay2 = React39.memo(DateRangePickerDayRaw);

// node_modules/@mui/x-date-pickers-pro/DateRangeCalendar/useDragRange.js
init_extends();
var React40 = __toESM(require_react());
init_useEventCallback();
var resolveDateFromTarget = (target, utils, timezone) => {
  const timestampString = target.dataset.timestamp;
  if (!timestampString) {
    return null;
  }
  const timestamp = +timestampString;
  return utils.dateWithTimezone(new Date(timestamp).toISOString(), timezone);
};
var isSameAsDraggingDate = (event) => {
  const timestampString = event.target.dataset.timestamp;
  return timestampString === event.dataTransfer.getData("draggingDate");
};
var resolveButtonElement = (element) => {
  if (element) {
    if (element instanceof HTMLButtonElement && !element.disabled) {
      return element;
    }
    if (element.children.length) {
      return resolveButtonElement(element.children[0]);
    }
    return null;
  }
  return element;
};
var resolveElementFromTouch = (event, ignoreTouchTarget) => {
  var _event$changedTouches;
  if (((_event$changedTouches = event.changedTouches) == null ? void 0 : _event$changedTouches.length) === 1 && event.touches.length <= 1) {
    const element = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    const buttonElement = resolveButtonElement(element);
    if (ignoreTouchTarget && buttonElement === event.changedTouches[0].target) {
      return null;
    }
    return buttonElement;
  }
  return null;
};
var useDragRangeEvents = ({
  utils,
  setRangeDragDay,
  setIsDragging,
  isDragging,
  onDatePositionChange,
  onDrop,
  disableDragEditing,
  dateRange,
  timezone
}) => {
  const emptyDragImgRef = React40.useRef(null);
  React40.useEffect(() => {
    emptyDragImgRef.current = document.createElement("img");
    emptyDragImgRef.current.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  }, []);
  const isElementDraggable = (day) => {
    if (day == null) {
      return false;
    }
    const shouldInitDragging = !disableDragEditing && !!dateRange[0] && !!dateRange[1];
    const isSelectedStartDate = isStartOfRange(utils, day, dateRange);
    const isSelectedEndDate = isEndOfRange(utils, day, dateRange);
    return shouldInitDragging && (isSelectedStartDate || isSelectedEndDate);
  };
  const handleDragStart = useEventCallback_default((event) => {
    const newDate = resolveDateFromTarget(event.target, utils, timezone);
    if (!isElementDraggable(newDate)) {
      return;
    }
    event.stopPropagation();
    if (emptyDragImgRef.current) {
      event.dataTransfer.setDragImage(emptyDragImgRef.current, 0, 0);
    }
    setRangeDragDay(newDate);
    event.dataTransfer.effectAllowed = "move";
    setIsDragging(true);
    const buttonDataset = event.target.dataset;
    if (buttonDataset.timestamp) {
      event.dataTransfer.setData("draggingDate", buttonDataset.timestamp);
    }
    if (buttonDataset.position) {
      onDatePositionChange(buttonDataset.position);
    }
  });
  const handleTouchStart = useEventCallback_default((event) => {
    const target = resolveElementFromTouch(event);
    if (!target) {
      return;
    }
    const newDate = resolveDateFromTarget(target, utils, timezone);
    if (!isElementDraggable(newDate)) {
      return;
    }
    setRangeDragDay(newDate);
    setIsDragging(true);
    const button = event.target;
    const buttonDataset = button.dataset;
    if (buttonDataset.position) {
      onDatePositionChange(buttonDataset.position);
    }
  });
  const handleDragEnter = useEventCallback_default((event) => {
    if (!isDragging) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "move";
    setRangeDragDay(resolveDateFromTarget(event.target, utils, timezone));
  });
  const handleTouchMove = useEventCallback_default((event) => {
    const target = resolveElementFromTouch(event);
    if (!isDragging || !target) {
      return;
    }
    const newDate = resolveDateFromTarget(target, utils, timezone);
    if (newDate) {
      setRangeDragDay(newDate);
    }
  });
  const handleDragLeave = useEventCallback_default((event) => {
    if (!isDragging) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
  });
  const handleDragOver = useEventCallback_default((event) => {
    if (!isDragging) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "move";
  });
  const handleTouchEnd = useEventCallback_default((event) => {
    if (!isDragging) {
      return;
    }
    setRangeDragDay(null);
    setIsDragging(false);
    const target = resolveElementFromTouch(event, true);
    if (!target) {
      return;
    }
    target.focus();
    const newDate = resolveDateFromTarget(target, utils, timezone);
    if (newDate) {
      onDrop(newDate);
    }
  });
  const handleDragEnd = useEventCallback_default((event) => {
    if (!isDragging) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    setRangeDragDay(null);
  });
  const handleDrop = useEventCallback_default((event) => {
    if (!isDragging) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    setRangeDragDay(null);
    event.currentTarget.focus();
    if (isSameAsDraggingDate(event)) {
      return;
    }
    const newDate = resolveDateFromTarget(event.target, utils, timezone);
    if (newDate) {
      onDrop(newDate);
    }
  });
  return {
    onDragStart: handleDragStart,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDragEnd: handleDragEnd,
    onDrop: handleDrop,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  };
};
var useDragRange = ({
  disableDragEditing,
  utils,
  onDatePositionChange,
  onDrop,
  dateRange,
  timezone
}) => {
  const [isDragging, setIsDragging] = React40.useState(false);
  const [rangeDragDay, setRangeDragDay] = React40.useState(null);
  const handleRangeDragDayChange = useEventCallback_default((val) => {
    if (!utils.isEqual(val, rangeDragDay)) {
      setRangeDragDay(val);
    }
  });
  const draggingDatePosition = React40.useMemo(() => {
    const [start, end] = dateRange;
    if (rangeDragDay) {
      if (start && utils.isBefore(rangeDragDay, start)) {
        return "start";
      }
      if (end && utils.isAfter(rangeDragDay, end)) {
        return "end";
      }
    }
    return null;
  }, [dateRange, rangeDragDay, utils]);
  const dragRangeEvents = useDragRangeEvents({
    utils,
    onDatePositionChange,
    onDrop,
    setIsDragging,
    isDragging,
    setRangeDragDay: handleRangeDragDayChange,
    disableDragEditing,
    dateRange,
    timezone
  });
  return React40.useMemo(() => _extends({
    isDragging,
    rangeDragDay,
    draggingDatePosition
  }, !disableDragEditing ? dragRangeEvents : {}), [isDragging, rangeDragDay, draggingDatePosition, disableDragEditing, dragRangeEvents]);
};

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useRangePosition.js
var React41 = __toESM(require_react());
init_useControlled();
init_useEventCallback();
var useRangePosition = (props) => {
  var _props$defaultRangePo;
  const singleInputFieldRef = React41.useRef();
  const [rangePosition, setRangePosition] = useControlled({
    name: "useRangePosition",
    state: "rangePosition",
    controlled: props.rangePosition,
    default: (_props$defaultRangePo = props.defaultRangePosition) != null ? _props$defaultRangePo : "start"
  });
  const syncRangePositionWithSingleInputField = (newRangePosition) => {
    if (singleInputFieldRef.current == null) {
      return;
    }
    const sections = singleInputFieldRef.current.getSections();
    const targetActiveSectionIndex = newRangePosition === "start" ? 0 : sections.length / 2;
    singleInputFieldRef.current.setSelectedSections(targetActiveSectionIndex);
  };
  const handleRangePositionChange = useEventCallback_default((newRangePosition) => {
    var _props$onRangePositio;
    setRangePosition(newRangePosition);
    (_props$onRangePositio = props.onRangePositionChange) == null || _props$onRangePositio.call(props, newRangePosition);
    syncRangePositionWithSingleInputField(newRangePosition);
  });
  return {
    rangePosition,
    onRangePositionChange: handleRangePositionChange,
    singleInputFieldRef
  };
};

// node_modules/@mui/x-date-pickers-pro/DateRangeCalendar/DateRangeCalendar.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var _excluded25 = ["value", "defaultValue", "referenceDate", "onChange", "className", "disableFuture", "disablePast", "minDate", "maxDate", "shouldDisableDate", "reduceAnimations", "onMonthChange", "defaultCalendarMonth", "rangePosition", "defaultRangePosition", "onRangePositionChange", "calendars", "currentMonthCalendarPosition", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "disableHighlightToday", "readOnly", "disabled", "showDaysOutsideCurrentMonth", "dayOfWeekFormatter", "disableAutoMonthSwitching", "autoFocus", "fixedWeekNumber", "disableDragEditing", "displayWeekNumber", "timezone"];
var _excluded26 = ["isDragging", "rangeDragDay", "draggingDatePosition"];
var releaseInfo2 = getReleaseInfo();
var DateRangeCalendarRoot = styled_default("div", {
  name: "MuiDateRangeCalendar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({
  display: "flex",
  flexDirection: "row"
});
var DateRangeCalendarMonthContainer = styled_default("div", {
  name: "MuiDateRangeCalendar",
  slot: "Container",
  overridesResolver: (_, styles) => styles.monthContainer
})(({
  theme
}) => ({
  "&:not(:last-of-type)": {
    borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
  }
}));
var DateRangeCalendarArrowSwitcher = styled_default(PickersArrowSwitcher)({
  padding: "16px 16px 8px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});
var DAY_RANGE_SIZE = 40;
var weeksContainerHeight2 = (DAY_RANGE_SIZE + DAY_MARGIN * 2) * 6;
var warnInvalidCurrentMonthCalendarPosition = buildWarning(["The `currentMonthCalendarPosition` prop must be an integer between `1` and the amount of calendars rendered.", "For example if you have 2 calendars rendered, it should be equal to either 1 or 2."]);
var DayCalendarForRange = styled_default(DayCalendar)(({
  theme
}) => ({
  minWidth: 312,
  minHeight: weeksContainerHeight2,
  [`&.${dateRangeCalendarClasses.dayDragging}`]: {
    [`& .${dateRangePickerDayClasses.day}`]: {
      cursor: "grabbing"
    },
    [`& .${dateRangePickerDayClasses.root}:not(.${dateRangePickerDayClasses.rangeIntervalDayHighlightStart}):not(.${dateRangePickerDayClasses.rangeIntervalDayHighlightEnd}) .${dateRangePickerDayClasses.day}:not(.${dateRangePickerDayClasses.notSelectedDate})`]: {
      // we can't override `PickersDay` background color here, because it's styles take precedence
      opacity: 0.6
    }
  },
  [`&:not(.${dateRangeCalendarClasses.dayDragging}) .${dateRangePickerDayClasses.dayOutsideRangeInterval}`]: {
    "@media (pointer: fine)": {
      "&:hover": {
        border: `1px solid ${(theme.vars || theme).palette.grey[500]}`
      }
    }
  }
}));
function useDateRangeCalendarDefaultizedProps(props, name) {
  var _themeProps$renderLoa, _themeProps$reduceAni, _props$loading, _props$disablePast, _props$disableFuture, _themeProps$calendars, _themeProps$disableDr;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const defaultReduceAnimations = useDefaultReduceAnimations();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({}, themeProps, {
    renderLoading: (_themeProps$renderLoa = themeProps.renderLoading) != null ? _themeProps$renderLoa : () => (0, import_jsx_runtime30.jsx)("span", {
      children: "..."
    }),
    reduceAnimations: (_themeProps$reduceAni = themeProps.reduceAnimations) != null ? _themeProps$reduceAni : defaultReduceAnimations,
    loading: (_props$loading = props.loading) != null ? _props$loading : false,
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate),
    calendars: (_themeProps$calendars = themeProps.calendars) != null ? _themeProps$calendars : 2,
    disableDragEditing: (_themeProps$disableDr = themeProps.disableDragEditing) != null ? _themeProps$disableDr : false
  });
}
var useUtilityClasses15 = (ownerState) => {
  const {
    classes,
    isDragging
  } = ownerState;
  const slots = {
    root: ["root"],
    monthContainer: ["monthContainer"],
    dayCalendar: [isDragging && "dayDragging"]
  };
  return composeClasses(slots, getDateRangeCalendarUtilityClass, classes);
};
var DateRangeCalendar = React42.forwardRef(function DateRangeCalendar2(inProps, ref) {
  const props = useDateRangeCalendarDefaultizedProps(inProps, "MuiDateRangeCalendar");
  const shouldHavePreview = useMediaQuery(DEFAULT_DESKTOP_MODE_MEDIA_QUERY, {
    defaultMatches: false
  });
  const {
    value: valueProp,
    defaultValue,
    referenceDate,
    onChange,
    className,
    disableFuture,
    disablePast,
    minDate,
    maxDate,
    shouldDisableDate,
    reduceAnimations,
    onMonthChange,
    defaultCalendarMonth,
    rangePosition: rangePositionProp,
    defaultRangePosition: inDefaultRangePosition,
    onRangePositionChange: inOnRangePositionChange,
    calendars,
    currentMonthCalendarPosition = 1,
    components,
    componentsProps,
    slots: innerSlots,
    slotProps: innerSlotProps,
    loading,
    renderLoading,
    disableHighlightToday,
    readOnly,
    disabled,
    showDaysOutsideCurrentMonth,
    dayOfWeekFormatter,
    disableAutoMonthSwitching,
    autoFocus,
    fixedWeekNumber,
    disableDragEditing,
    displayWeekNumber,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded25);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "DateRangeCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: rangeValueManager
  });
  const utils = useUtils();
  const localeText = useLocaleText();
  const now = useNow(timezone);
  const slots = innerSlots != null ? innerSlots : uncapitalizeObjectKeys(components);
  const slotProps = innerSlotProps != null ? innerSlotProps : componentsProps;
  const {
    rangePosition,
    onRangePositionChange
  } = useRangePosition({
    rangePosition: rangePositionProp,
    defaultRangePosition: inDefaultRangePosition,
    onRangePositionChange: inOnRangePositionChange
  });
  const handleDatePositionChange = useEventCallback_default((position) => {
    if (rangePosition !== position) {
      onRangePositionChange(position);
    }
  });
  const handleSelectedDayChange = useEventCallback_default((newDate, selectionState, allowRangeFlip = false) => {
    const {
      nextSelection,
      newRange
    } = calculateRangeChange({
      newDate,
      utils,
      range: value,
      rangePosition,
      allowRangeFlip
    });
    onRangePositionChange(nextSelection);
    const isFullRangeSelected = rangePosition === "end" && isRangeValid(utils, newRange);
    handleValueChange(newRange, isFullRangeSelected ? "finish" : "partial");
  });
  const handleDrop = useEventCallback_default((newDate) => {
    handleSelectedDayChange(newDate, void 0, true);
  });
  const shouldDisableDragEditing = disableDragEditing || disabled || readOnly;
  const valueDayRange = React42.useMemo(() => [value[0] == null || !utils.isValid(value[0]) ? value[0] : utils.startOfDay(value[0]), value[1] == null || !utils.isValid(value[1]) ? value[1] : utils.endOfDay(value[1])], [value, utils]);
  const _useDragRange = useDragRange({
    disableDragEditing: shouldDisableDragEditing,
    onDrop: handleDrop,
    onDatePositionChange: handleDatePositionChange,
    utils,
    dateRange: valueDayRange,
    timezone
  }), {
    isDragging,
    rangeDragDay,
    draggingDatePosition
  } = _useDragRange, dragEventHandlers = _objectWithoutPropertiesLoose(_useDragRange, _excluded26);
  const ownerState = _extends({}, props, {
    isDragging
  });
  const classes = useUtilityClasses15(ownerState);
  const draggingRange = React42.useMemo(() => {
    if (!valueDayRange[0] || !valueDayRange[1] || !rangeDragDay) {
      return [null, null];
    }
    const newRange = calculateRangeChange({
      utils,
      range: valueDayRange,
      newDate: rangeDragDay,
      rangePosition,
      allowRangeFlip: true
    }).newRange;
    return newRange[0] !== null && newRange[1] !== null ? [utils.startOfDay(newRange[0]), utils.endOfDay(newRange[1])] : newRange;
  }, [rangePosition, rangeDragDay, utils, valueDayRange]);
  const wrappedShouldDisableDate = React42.useMemo(() => {
    if (!shouldDisableDate) {
      return void 0;
    }
    return (dayToTest) => shouldDisableDate(dayToTest, draggingDatePosition || rangePosition);
  }, [shouldDisableDate, rangePosition, draggingDatePosition]);
  const {
    calendarState,
    changeFocusedDay,
    changeMonth,
    handleChangeMonth,
    onMonthSwitchingAnimationEnd
  } = useCalendarState({
    value: value[0] || value[1],
    referenceDate,
    defaultCalendarMonth,
    disableFuture,
    disablePast,
    disableSwitchToMonthOnDayFocus: true,
    maxDate,
    minDate,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate: wrappedShouldDisableDate,
    timezone
  });
  const prevValue = React42.useRef(null);
  React42.useEffect(() => {
    var _prevValue$current, _prevValue$current2;
    const date = rangePosition === "start" ? value[0] : value[1];
    if (!date || !utils.isValid(date)) {
      return;
    }
    const prevDate = rangePosition === "start" ? (_prevValue$current = prevValue.current) == null ? void 0 : _prevValue$current[0] : (_prevValue$current2 = prevValue.current) == null ? void 0 : _prevValue$current2[1];
    prevValue.current = value;
    if (disableAutoMonthSwitching && prevDate && utils.isEqual(prevDate, date)) {
      return;
    }
    const displayingMonthRange = calendars - 1;
    const currentMonthNumber = utils.getMonth(calendarState.currentMonth);
    const requestedMonthNumber = utils.getMonth(date);
    if (!utils.isSameYear(calendarState.currentMonth, date) || requestedMonthNumber < currentMonthNumber || requestedMonthNumber > currentMonthNumber + displayingMonthRange) {
      const newMonth = rangePosition === "start" ? date : (
        // If need to focus end, scroll to the state when "end" is displaying in the last calendar
        utils.addMonths(date, -displayingMonthRange)
      );
      changeMonth(newMonth);
    }
  }, [rangePosition, value]);
  const selectNextMonth = React42.useCallback(() => {
    changeMonth(utils.addMonths(calendarState.currentMonth, 1));
  }, [changeMonth, calendarState.currentMonth, utils]);
  const selectPreviousMonth = React42.useCallback(() => {
    changeMonth(utils.addMonths(calendarState.currentMonth, -1));
  }, [changeMonth, calendarState.currentMonth, utils]);
  const isNextMonthDisabled = useNextMonthDisabled(calendarState.currentMonth, {
    disableFuture,
    maxDate,
    timezone
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(calendarState.currentMonth, {
    disablePast,
    minDate,
    timezone
  });
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled
  };
  const minDateWithDisabled = disabled && value[0] || minDate;
  const maxDateWithDisabled = disabled && value[1] || maxDate;
  const [rangePreviewDay, setRangePreviewDay] = React42.useState(null);
  const CalendarTransitionProps = React42.useMemo(() => ({
    onMouseLeave: () => setRangePreviewDay(null)
  }), []);
  const previewingRange = calculateRangePreview({
    utils,
    range: valueDayRange,
    newDate: rangePreviewDay,
    rangePosition
  });
  const handleDayMouseEnter = useEventCallback_default((event, newPreviewRequest) => {
    if (!isWithinRange(utils, newPreviewRequest, valueDayRange)) {
      setRangePreviewDay(newPreviewRequest);
    } else {
      setRangePreviewDay(null);
    }
  });
  const slotsForDayCalendar = _extends({
    day: DateRangePickerDay2
  }, slots);
  const slotPropsForDayCalendar = _extends({}, slotProps, {
    day: (dayOwnerState) => {
      var _resolveComponentProp;
      const {
        day
      } = dayOwnerState;
      const isSelectedStartDate = isStartOfRange(utils, day, valueDayRange);
      const isSelectedEndDate = isEndOfRange(utils, day, valueDayRange);
      const shouldInitDragging = !shouldDisableDragEditing && valueDayRange[0] && valueDayRange[1];
      const isElementDraggable = shouldInitDragging && (isSelectedStartDate || isSelectedEndDate);
      let datePosition;
      if (isSelectedStartDate) {
        datePosition = "start";
      } else if (isSelectedEndDate) {
        datePosition = "end";
      }
      const isStartOfHighlighting = isDragging ? isStartOfRange(utils, day, draggingRange) : isSelectedStartDate;
      const isEndOfHighlighting = isDragging ? isEndOfRange(utils, day, draggingRange) : isSelectedEndDate;
      return _extends({
        isPreviewing: shouldHavePreview ? isWithinRange(utils, day, previewingRange) : false,
        isStartOfPreviewing: shouldHavePreview ? isStartOfRange(utils, day, previewingRange) : false,
        isEndOfPreviewing: shouldHavePreview ? isEndOfRange(utils, day, previewingRange) : false,
        isHighlighting: isWithinRange(utils, day, isDragging ? draggingRange : valueDayRange),
        isStartOfHighlighting,
        isEndOfHighlighting: isDragging ? isEndOfRange(utils, day, draggingRange) : isSelectedEndDate,
        onMouseEnter: shouldHavePreview ? handleDayMouseEnter : void 0,
        // apply selected styling to the dragging start or end day
        isVisuallySelected: dayOwnerState.selected || isDragging && (isStartOfHighlighting || isEndOfHighlighting),
        "data-position": datePosition
      }, dragEventHandlers, {
        draggable: isElementDraggable ? true : void 0
      }, (_resolveComponentProp = resolveComponentProps(slotProps == null ? void 0 : slotProps.day, dayOwnerState)) != null ? _resolveComponentProp : {});
    }
  });
  const calendarMonths = React42.useMemo(() => Array.from({
    length: calendars
  }).map((_, index) => index), [calendars]);
  const visibleMonths = React42.useMemo(() => {
    if (true) {
      if (currentMonthCalendarPosition > calendars || currentMonthCalendarPosition < 1) {
        warnInvalidCurrentMonthCalendarPosition();
      }
    }
    const firstMonth = utils.addMonths(calendarState.currentMonth, 1 - currentMonthCalendarPosition);
    return Array.from({
      length: calendars
    }).map((_, index) => utils.addMonths(firstMonth, index));
  }, [utils, calendarState.currentMonth, calendars, currentMonthCalendarPosition]);
  const focusedMonth = React42.useMemo(() => {
    var _visibleMonths$find;
    if (!autoFocus) {
      return null;
    }
    if (value[0] != null) {
      return visibleMonths.find((month) => utils.isSameMonth(month, value[0]));
    }
    if (value[1] != null) {
      return visibleMonths.find((month) => utils.isSameMonth(month, value[1]));
    }
    return (_visibleMonths$find = visibleMonths.find((month) => utils.isSameMonth(month, now))) != null ? _visibleMonths$find : visibleMonths[0];
  }, [utils, value, visibleMonths, autoFocus, now]);
  return (0, import_jsx_runtime31.jsxs)(DateRangeCalendarRoot, _extends({
    ref,
    className: clsx_default(className, classes.root),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime30.jsx)(Watermark, {
      packageName: "x-date-pickers-pro",
      releaseInfo: releaseInfo2
    }), calendarMonths.map((month, index) => (0, import_jsx_runtime31.jsxs)(DateRangeCalendarMonthContainer, {
      className: classes.monthContainer,
      children: [calendars === 1 ? (0, import_jsx_runtime30.jsx)(PickersCalendarHeader, {
        views: ["day"],
        view: "day",
        currentMonth: calendarState.currentMonth,
        onMonthChange: (newMonth, direction) => handleChangeMonth({
          newMonth,
          direction
        }),
        minDate: minDateWithDisabled,
        maxDate: maxDateWithDisabled,
        disabled,
        disablePast,
        disableFuture,
        reduceAnimations,
        slots,
        slotProps,
        timezone
      }) : (0, import_jsx_runtime30.jsx)(DateRangeCalendarArrowSwitcher, {
        onGoToPrevious: selectPreviousMonth,
        onGoToNext: selectNextMonth,
        isPreviousHidden: index !== 0,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: localeText.previousMonth,
        isNextHidden: index !== calendars - 1,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: localeText.nextMonth,
        slots,
        slotProps,
        children: utils.format(visibleMonths[month], "monthAndYear")
      }), (0, import_jsx_runtime30.jsx)(DayCalendarForRange, _extends({
        className: classes.dayCalendar
      }, calendarState, baseDateValidationProps, commonViewProps, {
        onMonthSwitchingAnimationEnd,
        onFocusedDayChange: changeFocusedDay,
        reduceAnimations,
        selectedDays: value,
        onSelectedDaysChange: handleSelectedDayChange,
        currentMonth: visibleMonths[month],
        TransitionProps: CalendarTransitionProps,
        shouldDisableDate: wrappedShouldDisableDate,
        showDaysOutsideCurrentMonth: calendars === 1 && showDaysOutsideCurrentMonth,
        dayOfWeekFormatter,
        loading,
        renderLoading,
        slots: slotsForDayCalendar,
        slotProps: slotPropsForDayCalendar,
        autoFocus: month === focusedMonth,
        fixedWeekNumber,
        displayWeekNumber,
        timezone
      }), index)]
    }, month))]
  }));
});
true ? DateRangeCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types9.default.bool,
  /**
   * The number of calendars to render.
   * @default 2
   */
  calendars: import_prop_types9.default.oneOf([1, 2, 3]),
  classes: import_prop_types9.default.object,
  className: import_prop_types9.default.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types9.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types9.default.object,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: import_prop_types9.default.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types9.default.func,
  /**
   * Default calendar month displayed when `value={[null, null]}`.
   */
  defaultCalendarMonth: import_prop_types9.default.any,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: import_prop_types9.default.oneOf(["end", "start"]),
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types9.default.arrayOf(import_prop_types9.default.any),
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: import_prop_types9.default.bool,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types9.default.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: import_prop_types9.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types9.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types9.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types9.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types9.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types9.default.number,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types9.default.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types9.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types9.default.any,
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {DateRange<TDate>} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date range selection is complete.
   */
  onChange: import_prop_types9.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types9.default.func,
  /**
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: import_prop_types9.default.func,
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: import_prop_types9.default.oneOf(["end", "start"]),
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: import_prop_types9.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types9.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: import_prop_types9.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "..."
   */
  renderLoading: import_prop_types9.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types9.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types9.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types9.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types9.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types9.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types9.default.arrayOf(import_prop_types9.default.any)
} : void 0;

// node_modules/@mui/x-date-pickers-pro/dateRangeViewRenderers/dateRangeViewRenderers.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var renderDateRangeViewCalendar = ({
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  reduceAnimations,
  onMonthChange,
  defaultCalendarMonth,
  rangePosition,
  defaultRangePosition,
  onRangePositionChange,
  calendars,
  currentMonthCalendarPosition,
  components,
  componentsProps,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  disableAutoMonthSwitching,
  sx,
  autoFocus,
  fixedWeekNumber,
  disableDragEditing,
  displayWeekNumber,
  timezone
}) => (0, import_jsx_runtime32.jsx)(DateRangeCalendar, {
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  reduceAnimations,
  onMonthChange,
  defaultCalendarMonth,
  rangePosition,
  defaultRangePosition,
  onRangePositionChange,
  calendars,
  currentMonthCalendarPosition,
  components,
  componentsProps,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  disableAutoMonthSwitching,
  sx,
  autoFocus,
  fixedWeekNumber,
  disableDragEditing,
  displayWeekNumber,
  timezone
});

// node_modules/@mui/x-date-pickers-pro/MultiInputDateRangeField/MultiInputDateRangeField.js
init_objectWithoutPropertiesLoose();
init_extends();
var React45 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useMultiInputRangeField/useMultiInputDateRangeField.js
init_extends();
init_useEventCallback();

// node_modules/@mui/x-date-pickers/DateField/DateField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React44 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/DateField/useDateField.js
init_extends();
var useDefaultizedDateField = (props) => {
  var _props$disablePast, _props$disableFuture, _props$format;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : utils.formats.keyboardDate,
    minDate: applyDefaultDate(utils, props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, props.maxDate, defaultDates.maxDate)
  });
};
var useDateField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedDateField(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "date");
  return useField({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateDate,
    valueType: "date"
  });
};

// node_modules/@mui/x-date-pickers/DateField/DateField.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var _excluded27 = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"];
var _excluded28 = ["inputRef"];
var _excluded32 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly"];
var DateField = React44.forwardRef(function DateField2(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateField"
  });
  const {
    components,
    componentsProps,
    slots,
    slotProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded27);
  const ownerState = themeProps;
  const TextField = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField_default;
  const _useSlotProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
    externalForwardedProps: other,
    ownerState
  }), {
    inputRef: externalInputRef
  } = _useSlotProps, textFieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded28);
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const _useDateField = useDateField({
    props: textFieldProps,
    inputRef: externalInputRef
  }), {
    ref: inputRef,
    onPaste,
    onKeyDown,
    inputMode,
    readOnly
  } = _useDateField, fieldProps = _objectWithoutPropertiesLoose(_useDateField, _excluded32);
  return (0, import_jsx_runtime33.jsx)(TextField, _extends({
    ref
  }, fieldProps, {
    InputProps: _extends({}, fieldProps.InputProps, {
      readOnly
    }),
    inputProps: _extends({}, fieldProps.inputProps, {
      inputMode,
      onPaste,
      onKeyDown,
      ref: inputRef
    })
  }));
});
true ? DateField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types10.default.bool,
  className: import_prop_types10.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: import_prop_types10.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types10.default.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types10.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types10.default.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types10.default.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types10.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types10.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types10.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types10.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types10.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types10.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types10.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types10.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types10.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types10.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types10.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types10.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types10.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types10.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.shape({
    current: import_prop_types10.default.any.isRequired
  })]),
  /**
   * The label content.
   */
  label: import_prop_types10.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types10.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types10.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types10.default.any,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types10.default.string,
  onBlur: import_prop_types10.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types10.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types10.default.func,
  onFocus: import_prop_types10.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types10.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types10.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types10.default.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types10.default.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types10.default.number, import_prop_types10.default.shape({
    endIndex: import_prop_types10.default.number.isRequired,
    startIndex: import_prop_types10.default.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types10.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types10.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types10.default.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default `false`
   */
  shouldRespectLeadingZeros: import_prop_types10.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types10.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types10.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types10.default.object,
  style: import_prop_types10.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types10.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types10.default.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types10.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers-pro/SingleInputDateRangeField/useSingleInputDateRangeField.js
init_extends();

// node_modules/@mui/x-date-pickers-pro/internals/utils/validation/validateDateRange.js
init_extends();
init_objectWithoutPropertiesLoose();
var _excluded29 = ["shouldDisableDate"];
var validateDateRange = ({
  props,
  value,
  adapter
}) => {
  const [start, end] = value;
  const {
    shouldDisableDate
  } = props, otherProps = _objectWithoutPropertiesLoose(props, _excluded29);
  const dateValidations = [validateDate({
    adapter,
    value: start,
    props: _extends({}, otherProps, {
      shouldDisableDate: (day) => !!(shouldDisableDate != null && shouldDisableDate(day, "start"))
    })
  }), validateDate({
    adapter,
    value: end,
    props: _extends({}, otherProps, {
      shouldDisableDate: (day) => !!(shouldDisableDate != null && shouldDisableDate(day, "end"))
    })
  })];
  if (dateValidations[0] || dateValidations[1]) {
    return dateValidations;
  }
  if (start === null || end === null) {
    return [null, null];
  }
  if (!isRangeValid(adapter.utils, value)) {
    return ["invalidRange", "invalidRange"];
  }
  return [null, null];
};

// node_modules/@mui/x-date-pickers-pro/SingleInputDateRangeField/useSingleInputDateRangeField.js
var useDefaultizedDateRangeFieldProps = (props) => {
  var _props$disablePast, _props$disableFuture, _props$format;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : utils.formats.keyboardDate,
    minDate: applyDefaultDate(utils, props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, props.maxDate, defaultDates.maxDate)
  });
};
var useSingleInputDateRangeField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedDateRangeFieldProps(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "date");
  return useField({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: rangeValueManager,
    fieldValueManager: rangeFieldValueManager,
    validator: validateDateRange,
    valueType: "date"
  });
};

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useMultiInputRangeField/useMultiInputDateRangeField.js
var useMultiInputDateRangeField = ({
  sharedProps: inSharedProps,
  startTextFieldProps,
  startInputRef,
  unstableStartFieldRef,
  endTextFieldProps,
  endInputRef,
  unstableEndFieldRef
}) => {
  const sharedProps = useDefaultizedDateRangeFieldProps(inSharedProps);
  const adapter = useLocalizationContext();
  const {
    value: valueProp,
    defaultValue,
    format,
    formatDensity,
    shouldRespectLeadingZeros,
    onChange,
    disabled,
    readOnly,
    selectedSections,
    onSelectedSectionsChange,
    timezone: timezoneProp
  } = sharedProps;
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "useMultiInputDateRangeField",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: rangeValueManager
  });
  const buildChangeHandler = (index) => {
    return (newDate, rawContext) => {
      const newDateRange = index === 0 ? [newDate, value[1]] : [value[0], newDate];
      const context = _extends({}, rawContext, {
        validationError: validateDateRange({
          adapter,
          value: newDateRange,
          props: _extends({}, sharedProps, {
            timezone
          })
        })
      });
      handleValueChange(newDateRange, context);
    };
  };
  const handleStartDateChange = useEventCallback_default(buildChangeHandler(0));
  const handleEndDateChange = useEventCallback_default(buildChangeHandler(1));
  const validationError = useValidation(_extends({}, sharedProps, {
    value,
    timezone
  }), validateDateRange, rangeValueManager.isSameError, rangeValueManager.defaultErrorState);
  const startFieldProps = _extends({
    error: !!validationError[0]
  }, startTextFieldProps, {
    disabled,
    readOnly,
    format,
    formatDensity,
    shouldRespectLeadingZeros,
    timezone,
    unstableFieldRef: unstableStartFieldRef,
    value: valueProp === void 0 ? void 0 : valueProp[0],
    defaultValue: defaultValue === void 0 ? void 0 : defaultValue[0],
    onChange: handleStartDateChange,
    selectedSections,
    onSelectedSectionsChange
  });
  const endFieldProps = _extends({
    error: !!validationError[1]
  }, endTextFieldProps, {
    format,
    formatDensity,
    shouldRespectLeadingZeros,
    disabled,
    readOnly,
    timezone,
    unstableFieldRef: unstableEndFieldRef,
    value: valueProp === void 0 ? void 0 : valueProp[1],
    defaultValue: defaultValue === void 0 ? void 0 : defaultValue[1],
    onChange: handleEndDateChange,
    selectedSections,
    onSelectedSectionsChange
  });
  const startDateResponse = useDateField({
    props: startFieldProps,
    inputRef: startInputRef
  });
  const endDateResponse = useDateField({
    props: endFieldProps,
    inputRef: endInputRef
  });
  return {
    startDate: startDateResponse,
    endDate: endDateResponse
  };
};

// node_modules/@mui/x-date-pickers-pro/MultiInputDateRangeField/MultiInputDateRangeField.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var _excluded30 = ["slots", "slotProps", "components", "componentsProps", "disabled", "autoFocus", "unstableStartFieldRef", "unstableEndFieldRef", "className"];
var _excluded210 = ["onKeyDown", "ref", "readOnly", "inputMode"];
var _excluded33 = ["onKeyDown", "ref", "readOnly", "inputMode"];
var multiInputDateRangeFieldClasses = generateUtilityClasses("MuiMultiInputDateRangeField", ["root", "separator"]);
var getMultiInputDateRangeFieldUtilityClass = (slot) => generateUtilityClass("MuiMultiInputDateRangeField", slot);
var useUtilityClasses16 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"]
  };
  return composeClasses(slots, getMultiInputDateRangeFieldUtilityClass, classes);
};
var MultiInputDateRangeFieldRoot = styled_default(React45.forwardRef((props, ref) => (0, import_jsx_runtime34.jsx)(Stack_default, _extends({
  ref,
  spacing: 2,
  direction: "row",
  alignItems: "baseline"
}, props))), {
  name: "MuiMultiInputDateRangeField",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var MultiInputDateRangeFieldSeparator = styled_default((props) => {
  var _props$children;
  return (0, import_jsx_runtime34.jsx)(Typography_default, _extends({}, props, {
    children: (_props$children = props.children) != null ? _props$children : " – "
  }));
}, {
  name: "MuiMultiInputDateRangeField",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({});
var MultiInputDateRangeField = React45.forwardRef(function MultiInputDateRangeField2(inProps, ref) {
  var _slots$root, _slots$textField, _slots$separator, _slotProps$separator;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiMultiInputDateRangeField"
  });
  const {
    internalProps: dateFieldInternalProps,
    forwardedProps
  } = splitFieldInternalAndForwardedProps(themeProps, "date");
  const {
    slots: innerSlots,
    slotProps: innerSlotProps,
    components,
    componentsProps,
    disabled,
    autoFocus,
    unstableStartFieldRef,
    unstableEndFieldRef,
    className
  } = forwardedProps, otherForwardedProps = _objectWithoutPropertiesLoose(forwardedProps, _excluded30);
  const slots = innerSlots != null ? innerSlots : uncapitalizeObjectKeys(components);
  const slotProps = innerSlotProps != null ? innerSlotProps : componentsProps;
  const ownerState = themeProps;
  const classes = useUtilityClasses16(ownerState);
  const Root = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : MultiInputDateRangeFieldRoot;
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps == null ? void 0 : slotProps.root,
    externalForwardedProps: otherForwardedProps,
    additionalProps: {
      ref
    },
    ownerState,
    className: clsx_default(className, classes.root)
  });
  const TextField = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : TextField_default;
  const startTextFieldProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: slotProps == null ? void 0 : slotProps.textField,
    additionalProps: {
      autoFocus
    },
    ownerState: _extends({}, ownerState, {
      position: "start"
    })
  });
  const endTextFieldProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: slotProps == null ? void 0 : slotProps.textField,
    ownerState: _extends({}, ownerState, {
      position: "end"
    })
  });
  const Separator = (_slots$separator = slots == null ? void 0 : slots.separator) != null ? _slots$separator : MultiInputDateRangeFieldSeparator;
  const separatorProps = useSlotProps({
    elementType: Separator,
    externalSlotProps: (_slotProps$separator = slotProps == null ? void 0 : slotProps.separator) != null ? _slotProps$separator : componentsProps == null ? void 0 : componentsProps.separator,
    ownerState,
    className: classes.separator
  });
  const _useMultiInputDateRan = useMultiInputDateRangeField({
    sharedProps: _extends({}, dateFieldInternalProps, {
      disabled
    }),
    startTextFieldProps,
    endTextFieldProps,
    unstableStartFieldRef,
    unstableEndFieldRef,
    startInputRef: startTextFieldProps.inputRef,
    endInputRef: endTextFieldProps.inputRef
  }), {
    startDate: {
      onKeyDown: onStartInputKeyDown,
      ref: startInputRef,
      readOnly: startReadOnly,
      inputMode: startInputMode
    },
    endDate: {
      onKeyDown: onEndInputKeyDown,
      ref: endInputRef,
      readOnly: endReadOnly,
      inputMode: endInputMode
    }
  } = _useMultiInputDateRan, startDateProps = _objectWithoutPropertiesLoose(_useMultiInputDateRan.startDate, _excluded33), endDateProps = _objectWithoutPropertiesLoose(_useMultiInputDateRan.endDate, _excluded210);
  return (0, import_jsx_runtime35.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime34.jsx)(TextField, _extends({
      fullWidth: true
    }, startDateProps, {
      InputProps: _extends({}, startDateProps.InputProps, {
        readOnly: startReadOnly
      }),
      inputProps: _extends({}, startDateProps.inputProps, {
        ref: startInputRef,
        inputMode: startInputMode,
        onKeyDown: onStartInputKeyDown
      })
    })), (0, import_jsx_runtime34.jsx)(Separator, _extends({}, separatorProps)), (0, import_jsx_runtime34.jsx)(TextField, _extends({
      fullWidth: true
    }, endDateProps, {
      InputProps: _extends({}, endDateProps.InputProps, {
        readOnly: endReadOnly
      }),
      inputProps: _extends({}, endDateProps.inputProps, {
        ref: endInputRef,
        readOnly: endReadOnly,
        inputMode: endInputMode,
        onKeyDown: onEndInputKeyDown
      })
    }))]
  }));
});
true ? MultiInputDateRangeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: import_prop_types11.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types11.default.object,
  className: import_prop_types11.default.string,
  component: import_prop_types11.default.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types11.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types11.default.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types11.default.arrayOf(import_prop_types11.default.any),
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types11.default.arrayOf(import_prop_types11.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types11.default.object]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types11.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types11.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types11.default.bool,
  /**
   * Add an element between each child.
   */
  divider: import_prop_types11.default.node,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types11.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types11.default.oneOf(["dense", "spacious"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types11.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types11.default.any,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types11.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types11.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types11.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types11.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types11.default.any,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types11.default.number, import_prop_types11.default.shape({
    endIndex: import_prop_types11.default.number.isRequired,
    startIndex: import_prop_types11.default.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types11.default.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default `false`
   */
  shouldRespectLeadingZeros: import_prop_types11.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types11.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types11.default.object,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string])), import_prop_types11.default.number, import_prop_types11.default.object, import_prop_types11.default.string]),
  style: import_prop_types11.default.object,
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types11.default.string,
  unstableEndFieldRef: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
  unstableStartFieldRef: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: import_prop_types11.default.bool,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types11.default.arrayOf(import_prop_types11.default.any)
} : void 0;

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useDesktopRangePicker/useDesktopRangePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React47 = __toESM(require_react());

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useEnrichedRangePickerFieldProps.js
init_extends();
var React46 = __toESM(require_react());
init_useEventCallback();
init_useForkRef();
var useMultiInputFieldSlotProps = ({
  wrapperVariant,
  open,
  actions,
  readOnly,
  labelId,
  disableOpenPicker,
  onBlur,
  rangePosition,
  onRangePositionChange,
  localeText: inLocaleText,
  pickerSlotProps,
  pickerSlots,
  fieldProps
}) => {
  const localeText = useLocaleText();
  const startRef = React46.useRef(null);
  const endRef = React46.useRef(null);
  React46.useEffect(() => {
    if (!open) {
      return;
    }
    if (rangePosition === "start") {
      var _startRef$current;
      (_startRef$current = startRef.current) == null || _startRef$current.focus();
    } else if (rangePosition === "end") {
      var _endRef$current;
      (_endRef$current = endRef.current) == null || _endRef$current.focus();
    }
  }, [rangePosition, open]);
  const openRangeStartSelection = (event) => {
    event.stopPropagation();
    onRangePositionChange("start");
    if (!readOnly && !disableOpenPicker) {
      actions.onOpen();
    }
  };
  const openRangeEndSelection = (event) => {
    event.stopPropagation();
    onRangePositionChange("end");
    if (!readOnly && !disableOpenPicker) {
      actions.onOpen();
    }
  };
  const handleFocusStart = () => {
    if (open) {
      onRangePositionChange("start");
    }
  };
  const handleFocusEnd = () => {
    if (open) {
      onRangePositionChange("end");
    }
  };
  const slots = _extends({
    textField: pickerSlots == null ? void 0 : pickerSlots.textField,
    root: pickerSlots == null ? void 0 : pickerSlots.fieldRoot,
    separator: pickerSlots == null ? void 0 : pickerSlots.fieldSeparator
  }, fieldProps.slots);
  const slotProps = _extends({}, fieldProps.slotProps, {
    textField: (ownerState) => {
      let inputProps;
      if (ownerState.position === "start") {
        var _inLocaleText$start;
        inputProps = _extends({
          inputRef: startRef,
          label: (_inLocaleText$start = inLocaleText == null ? void 0 : inLocaleText.start) != null ? _inLocaleText$start : localeText.start,
          onKeyDown: onSpaceOrEnter(openRangeStartSelection),
          onFocus: handleFocusStart,
          focused: open ? rangePosition === "start" : void 0
        }, !readOnly && !fieldProps.disabled && {
          onClick: openRangeStartSelection
        }, wrapperVariant === "mobile" && {
          readOnly: true
        });
      } else {
        var _inLocaleText$end;
        inputProps = _extends({
          inputRef: endRef,
          label: (_inLocaleText$end = inLocaleText == null ? void 0 : inLocaleText.end) != null ? _inLocaleText$end : localeText.end,
          onKeyDown: onSpaceOrEnter(openRangeEndSelection),
          onFocus: handleFocusEnd,
          focused: open ? rangePosition === "end" : void 0
        }, !readOnly && !fieldProps.disabled && {
          onClick: openRangeEndSelection
        }, wrapperVariant === "mobile" && {
          readOnly: true
        });
      }
      return _extends({}, labelId != null && {
        id: `${labelId}-${ownerState.position}`
      }, inputProps, resolveComponentProps(pickerSlotProps == null ? void 0 : pickerSlotProps.textField, ownerState));
    },
    root: (ownerState) => {
      const rootProps = {
        onBlur
      };
      return _extends({}, rootProps, resolveComponentProps(pickerSlotProps == null ? void 0 : pickerSlotProps.fieldRoot, ownerState));
    },
    separator: pickerSlotProps == null ? void 0 : pickerSlotProps.fieldSeparator
  });
  const enrichedFieldProps = _extends({}, fieldProps, {
    slots,
    slotProps
  });
  return enrichedFieldProps;
};
var useSingleInputFieldSlotProps = ({
  wrapperVariant,
  open,
  actions,
  readOnly,
  inputRef: inInputRef,
  labelId,
  disableOpenPicker,
  label,
  onBlur,
  rangePosition,
  onRangePositionChange,
  singleInputFieldRef,
  pickerSlots,
  pickerSlotProps,
  fieldProps
}) => {
  const inputRef = React46.useRef(null);
  const handleInputRef = useForkRef(inInputRef, inputRef);
  const handleFieldRef = useForkRef(fieldProps.unstableFieldRef, singleInputFieldRef);
  React46.useEffect(() => {
    var _inputRef$current;
    if (!open) {
      return;
    }
    (_inputRef$current = inputRef.current) == null || _inputRef$current.focus();
  }, [rangePosition, open]);
  const updateRangePosition = () => {
    var _singleInputFieldRef$;
    if (!singleInputFieldRef.current || inputRef.current !== getActiveElement(document)) {
      return;
    }
    const sections = singleInputFieldRef.current.getSections();
    const activeSectionIndex = (_singleInputFieldRef$ = singleInputFieldRef.current) == null ? void 0 : _singleInputFieldRef$.getActiveSectionIndex();
    const domRangePosition = activeSectionIndex == null || activeSectionIndex < sections.length / 2 ? "start" : "end";
    if (domRangePosition != null && domRangePosition !== rangePosition) {
      onRangePositionChange(domRangePosition);
    }
  };
  const handleSelectedSectionsChange = useEventCallback_default((selectedSections) => {
    var _fieldProps$onSelecte;
    setTimeout(updateRangePosition);
    (_fieldProps$onSelecte = fieldProps.onSelectedSectionsChange) == null || _fieldProps$onSelecte.call(fieldProps, selectedSections);
  });
  const openPicker = (event) => {
    event.stopPropagation();
    if (!readOnly && !disableOpenPicker) {
      actions.onOpen();
    }
  };
  const slots = _extends({}, fieldProps.slots, {
    textField: pickerSlots == null ? void 0 : pickerSlots.textField
  });
  const slotProps = _extends({}, fieldProps.slotProps, {
    textField: pickerSlotProps == null ? void 0 : pickerSlotProps.textField
  });
  const enrichedFieldProps = _extends({}, fieldProps, {
    slots,
    slotProps,
    label,
    unstableFieldRef: handleFieldRef,
    inputRef: handleInputRef,
    onKeyDown: onSpaceOrEnter(openPicker, fieldProps.onKeyDown),
    onSelectedSectionsChange: handleSelectedSectionsChange,
    onBlur,
    focused: open
  }, labelId != null && {
    id: labelId
  }, wrapperVariant === "mobile" && {
    readOnly: true
  }, !readOnly && !fieldProps.disabled && {
    onClick: openPicker
  });
  return enrichedFieldProps;
};
var useEnrichedRangePickerFieldProps = (params) => {
  if (true) {
    const fieldTypeRef = React46.useRef(params.fieldType);
    if (params.fieldType !== fieldTypeRef.current) {
      console.error("Should not switch between a multi input field and a single input field on a range picker.");
    }
  }
  if (params.fieldType === "multi-input") {
    return useMultiInputFieldSlotProps(params);
  }
  return useSingleInputFieldSlotProps(params);
};

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useDesktopRangePicker/useDesktopRangePicker.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var _excluded31 = ["props"];
var releaseInfo3 = getReleaseInfo();
var useDesktopRangePicker = (_ref) => {
  var _fieldType, _slots$layout;
  let {
    props
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded31);
  useLicenseVerifier("x-date-pickers-pro", releaseInfo3);
  const {
    slots,
    slotProps,
    className,
    sx,
    format,
    formatDensity,
    timezone,
    label,
    inputRef,
    readOnly,
    disabled,
    autoFocus,
    disableOpenPicker,
    localeText,
    reduceAnimations
  } = props;
  const fieldContainerRef = React47.useRef(null);
  const popperRef = React47.useRef(null);
  const {
    rangePosition,
    onRangePositionChange,
    singleInputFieldRef
  } = useRangePosition(props);
  const {
    open,
    actions,
    layoutProps,
    renderCurrentView,
    shouldRestoreFocus,
    fieldProps: pickerFieldProps
  } = usePicker(_extends({}, pickerParams, {
    props,
    wrapperVariant: "desktop",
    autoFocusView: true,
    additionalViewProps: {
      rangePosition,
      onRangePositionChange
    }
  }));
  const handleBlur = () => {
    executeInTheNextEventLoopTick(() => {
      var _fieldContainerRef$cu, _popperRef$current;
      if ((_fieldContainerRef$cu = fieldContainerRef.current) != null && _fieldContainerRef$cu.contains(getActiveElement(document)) || (_popperRef$current = popperRef.current) != null && _popperRef$current.contains(getActiveElement(document))) {
        return;
      }
      actions.onDismiss();
    });
  };
  const Field = slots.field;
  const fieldType = (_fieldType = Field.fieldType) != null ? _fieldType : "multi-input";
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: slotProps == null ? void 0 : slotProps.field,
    additionalProps: _extends({}, pickerFieldProps, {
      readOnly,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      timezone,
      autoFocus: autoFocus && !props.open,
      ref: fieldContainerRef
    }, fieldType === "single-input" && {
      inputRef
    }),
    ownerState: props
  });
  const enrichedFieldProps = useEnrichedRangePickerFieldProps({
    wrapperVariant: "desktop",
    fieldType,
    open,
    actions,
    readOnly,
    disableOpenPicker,
    label,
    localeText,
    onBlur: handleBlur,
    rangePosition,
    onRangePositionChange,
    singleInputFieldRef,
    pickerSlotProps: slotProps,
    pickerSlots: slots,
    fieldProps
  });
  const slotPropsForLayout = _extends({}, slotProps, {
    toolbar: _extends({}, slotProps == null ? void 0 : slotProps.toolbar, {
      rangePosition,
      onRangePositionChange
    })
  });
  const Layout = (_slots$layout = slots == null ? void 0 : slots.layout) != null ? _slots$layout : PickersLayout;
  const renderPicker = () => (0, import_jsx_runtime37.jsxs)(LocalizationProvider, {
    localeText,
    children: [(0, import_jsx_runtime36.jsx)(Field, _extends({}, enrichedFieldProps)), (0, import_jsx_runtime36.jsx)(PickersPopper, _extends({
      role: "tooltip",
      containerRef: popperRef,
      anchorEl: fieldContainerRef.current,
      onBlur: handleBlur
    }, actions, {
      open,
      slots,
      slotProps,
      shouldRestoreFocus,
      reduceAnimations,
      children: (0, import_jsx_runtime36.jsx)(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps: slotPropsForLayout,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};

// node_modules/@mui/x-date-pickers-pro/DesktopDateRangePicker/DesktopDateRangePicker.js
var DesktopDateRangePicker = React48.forwardRef(function DesktopDateRangePicker2(inProps, ref) {
  var _defaultizedProps$cal, _defaultizedProps$slo2;
  const defaultizedProps = useDateRangePickerDefaultizedProps(inProps, "MuiDesktopDateRangePicker");
  const viewRenderers = _extends({
    day: renderDateRangeViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    calendars: (_defaultizedProps$cal = defaultizedProps.calendars) != null ? _defaultizedProps$cal : 2,
    views: ["day"],
    openTo: "day",
    slots: _extends({
      field: MultiInputDateRangeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: true
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useDesktopRangePicker({
    props,
    valueManager: rangeValueManager,
    valueType: "date",
    validator: validateDateRange
  });
  return renderPicker();
});
DesktopDateRangePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types12.default.bool,
  /**
   * The number of calendars to render on **desktop**.
   * @default 2
   */
  calendars: import_prop_types12.default.oneOf([1, 2, 3]),
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types12.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types12.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types12.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types12.default.object,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: import_prop_types12.default.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types12.default.func,
  /**
   * Default calendar month displayed when `value={[null, null]}`.
   */
  defaultCalendarMonth: import_prop_types12.default.any,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: import_prop_types12.default.oneOf(["end", "start"]),
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types12.default.arrayOf(import_prop_types12.default.any),
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: import_prop_types12.default.bool,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types12.default.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: import_prop_types12.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types12.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types12.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types12.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types12.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types12.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types12.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types12.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types12.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   * Ignored if the field has several inputs.
   */
  inputRef: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.shape({
    current: import_prop_types12.default.object
  })]),
  /**
   * The label content.
   * Ignored if the field has several inputs.
   */
  label: import_prop_types12.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types12.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types12.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types12.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types12.default.any,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types12.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types12.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types12.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types12.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types12.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types12.default.func,
  /**
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: import_prop_types12.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types12.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types12.default.bool,
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: import_prop_types12.default.oneOf(["end", "start"]),
  readOnly: import_prop_types12.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types12.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types12.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "..."
   */
  renderLoading: import_prop_types12.default.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types12.default.number, import_prop_types12.default.shape({
    endIndex: import_prop_types12.default.number.isRequired,
    startIndex: import_prop_types12.default.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types12.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types12.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types12.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types12.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types12.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types12.default.arrayOf(import_prop_types12.default.any),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types12.default.shape({
    day: import_prop_types12.default.func
  })
};

// node_modules/@mui/x-date-pickers-pro/MobileDateRangePicker/MobileDateRangePicker.js
init_extends();
var React50 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useMobileRangePicker/useMobileRangePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React49 = __toESM(require_react());
init_useId();
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var _excluded34 = ["props"];
var releaseInfo4 = getReleaseInfo();
var useMobileRangePicker = (_ref) => {
  var _fieldType, _innerSlotProps$toolb, _innerSlotProps$toolb2, _slots$layout;
  let {
    props
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded34);
  useLicenseVerifier("x-date-pickers-pro", releaseInfo4);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format,
    formatDensity,
    timezone,
    label,
    inputRef,
    readOnly,
    disabled,
    disableOpenPicker,
    localeText
  } = props;
  const {
    rangePosition,
    onRangePositionChange,
    singleInputFieldRef
  } = useRangePosition(props);
  const labelId = useId();
  const contextLocaleText = useLocaleText();
  const {
    open,
    actions,
    layoutProps,
    renderCurrentView,
    fieldProps: pickerFieldProps
  } = usePicker(_extends({}, pickerParams, {
    props,
    wrapperVariant: "mobile",
    autoFocusView: true,
    additionalViewProps: {
      rangePosition,
      onRangePositionChange
    }
  }));
  const Field = slots.field;
  const fieldType = (_fieldType = Field.fieldType) != null ? _fieldType : "multi-input";
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends({}, pickerFieldProps, {
      readOnly: readOnly != null ? readOnly : true,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      timezone
    }, fieldType === "single-input" && {
      inputRef
    }),
    ownerState: props
  });
  const isToolbarHidden = (_innerSlotProps$toolb = innerSlotProps == null || (_innerSlotProps$toolb2 = innerSlotProps.toolbar) == null ? void 0 : _innerSlotProps$toolb2.hidden) != null ? _innerSlotProps$toolb : false;
  const enrichedFieldProps = useEnrichedRangePickerFieldProps({
    wrapperVariant: "mobile",
    fieldType,
    open,
    actions,
    readOnly,
    labelId,
    disableOpenPicker,
    label,
    localeText,
    rangePosition,
    onRangePositionChange,
    singleInputFieldRef,
    pickerSlots: slots,
    pickerSlotProps: innerSlotProps,
    fieldProps
  });
  const slotPropsForLayout = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId,
      rangePosition,
      onRangePositionChange
    })
  });
  const Layout = (_slots$layout = slots == null ? void 0 : slots.layout) != null ? _slots$layout : PickersLayout;
  const finalLocaleText = _extends({}, contextLocaleText, localeText);
  let labelledById = labelId;
  if (isToolbarHidden) {
    const labels = [];
    if (fieldType === "multi-input") {
      if (finalLocaleText.start) {
        labels.push(`${labelId}-start-label`);
      }
      if (finalLocaleText.end) {
        labels.push(`${labelId}-end-label`);
      }
    } else if (label != null) {
      labels.push(`${labelId}-label`);
    }
    labelledById = labels.length > 0 ? labels.join(" ") : void 0;
  }
  const slotProps = _extends({}, innerSlotProps, {
    mobilePaper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.mobilePaper)
  });
  const renderPicker = () => (0, import_jsx_runtime39.jsxs)(LocalizationProvider, {
    localeText,
    children: [(0, import_jsx_runtime38.jsx)(Field, _extends({}, enrichedFieldProps)), (0, import_jsx_runtime38.jsx)(PickersModalDialog, _extends({}, actions, {
      open,
      slots,
      slotProps,
      children: (0, import_jsx_runtime38.jsx)(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps: slotPropsForLayout,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};

// node_modules/@mui/x-date-pickers-pro/MobileDateRangePicker/MobileDateRangePicker.js
var MobileDateRangePicker = React50.forwardRef(function MobileDateRangePicker2(inProps, ref) {
  var _defaultizedProps$slo2;
  const defaultizedProps = useDateRangePickerDefaultizedProps(inProps, "MuiMobileDateRangePicker");
  const viewRenderers = _extends({
    day: renderDateRangeViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    calendars: 1,
    views: ["day"],
    openTo: "day",
    slots: _extends({
      field: MultiInputDateRangeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: false
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobileRangePicker({
    props,
    valueManager: rangeValueManager,
    valueType: "date",
    validator: validateDateRange
  });
  return renderPicker();
});
MobileDateRangePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types13.default.bool,
  /**
   * The number of calendars to render on **desktop**.
   * @default 2
   */
  calendars: import_prop_types13.default.oneOf([1, 2, 3]),
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types13.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types13.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types13.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types13.default.object,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: import_prop_types13.default.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types13.default.func,
  /**
   * Default calendar month displayed when `value={[null, null]}`.
   */
  defaultCalendarMonth: import_prop_types13.default.any,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: import_prop_types13.default.oneOf(["end", "start"]),
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types13.default.arrayOf(import_prop_types13.default.any),
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: import_prop_types13.default.bool,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types13.default.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: import_prop_types13.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types13.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types13.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types13.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types13.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types13.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types13.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types13.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types13.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   * Ignored if the field has several inputs.
   */
  inputRef: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.shape({
    current: import_prop_types13.default.object
  })]),
  /**
   * The label content.
   * Ignored if the field has several inputs.
   */
  label: import_prop_types13.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types13.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types13.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types13.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types13.default.any,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types13.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types13.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types13.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types13.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types13.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types13.default.func,
  /**
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: import_prop_types13.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types13.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types13.default.bool,
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: import_prop_types13.default.oneOf(["end", "start"]),
  readOnly: import_prop_types13.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types13.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types13.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "..."
   */
  renderLoading: import_prop_types13.default.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types13.default.oneOfType([import_prop_types13.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types13.default.number, import_prop_types13.default.shape({
    endIndex: import_prop_types13.default.number.isRequired,
    startIndex: import_prop_types13.default.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types13.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types13.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types13.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types13.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types13.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types13.default.arrayOf(import_prop_types13.default.any),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types13.default.shape({
    day: import_prop_types13.default.func
  })
};

// node_modules/@mui/x-date-pickers-pro/DateRangePicker/DateRangePicker.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var _excluded35 = ["desktopModeMediaQuery"];
var DateRangePicker = React51.forwardRef(function DateRangePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateRangePicker"
  });
  const {
    desktopModeMediaQuery = "@media (pointer: fine)"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded35);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime40.jsx)(DesktopDateRangePicker, _extends({
      ref
    }, other));
  }
  return (0, import_jsx_runtime40.jsx)(MobileDateRangePicker, _extends({
    ref
  }, other));
});
true ? DateRangePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types14.default.bool,
  /**
   * The number of calendars to render on **desktop**.
   * @default 2
   */
  calendars: import_prop_types14.default.oneOf([1, 2, 3]),
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types14.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types14.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types14.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types14.default.object,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: import_prop_types14.default.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types14.default.func,
  /**
   * Default calendar month displayed when `value={[null, null]}`.
   */
  defaultCalendarMonth: import_prop_types14.default.any,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: import_prop_types14.default.oneOf(["end", "start"]),
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types14.default.arrayOf(import_prop_types14.default.any),
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types14.default.string,
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: import_prop_types14.default.bool,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types14.default.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: import_prop_types14.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types14.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types14.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types14.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types14.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types14.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types14.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types14.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types14.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   * Ignored if the field has several inputs.
   */
  inputRef: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.shape({
    current: import_prop_types14.default.object
  })]),
  /**
   * The label content.
   * Ignored if the field has several inputs.
   */
  label: import_prop_types14.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types14.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types14.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types14.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types14.default.any,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types14.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types14.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types14.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types14.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types14.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types14.default.func,
  /**
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: import_prop_types14.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types14.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types14.default.bool,
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: import_prop_types14.default.oneOf(["end", "start"]),
  readOnly: import_prop_types14.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types14.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types14.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "..."
   */
  renderLoading: import_prop_types14.default.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types14.default.oneOfType([import_prop_types14.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types14.default.number, import_prop_types14.default.shape({
    endIndex: import_prop_types14.default.number.isRequired,
    startIndex: import_prop_types14.default.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types14.default.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: import_prop_types14.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types14.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types14.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types14.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types14.default.arrayOf(import_prop_types14.default.any),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types14.default.shape({
    day: import_prop_types14.default.func
  })
} : void 0;

export {
  LicenseInfo,
  MuiPickersAdapterContext,
  LocalizationProvider,
  getPickersLocalization,
  DEFAULT_LOCALE,
  enUS,
  useLocalizationContext,
  useUtils,
  useDefaultDates,
  useLocaleText,
  useNow,
  ArrowDropDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  DateRangeIcon,
  TimeIcon,
  PickersArrowSwitcher,
  applyDefaultViewProps,
  isTimeView,
  isInternalTimeView,
  convertValueToMeridiem,
  createIsAfterIgnoreDatePart,
  resolveTimeFormat,
  useViews,
  useMeridiemMode,
  DAY_SIZE,
  DAY_MARGIN,
  DIALOG_WIDTH,
  VIEW_HEIGHT,
  DIGITAL_CLOCK_VIEW_HEIGHT,
  MULTI_SECTION_CLOCK_SECTION_WIDTH,
  useControlledValueWithTimezone,
  findClosestEnabledDate,
  applyDefaultDate,
  getMonthsInYear,
  mergeDateAndTime,
  getTodayDate,
  formatMeridiem,
  isDatePickerView,
  resolveDateFormat,
  SECTION_TYPE_GRANULARITY,
  singleItemValueManager,
  singleItemFieldValueManager,
  uncapitalizeObjectKeys,
  getPickersDayUtilityClass,
  pickersDayClasses,
  PickersDay2 as PickersDay,
  useValidation,
  arrayIncludes,
  onSpaceOrEnter,
  DEFAULT_DESKTOP_MODE_MEDIA_QUERY,
  useField,
  validateDate,
  extractValidationProps,
  splitFieldInternalAndForwardedProps,
  useDateField,
  DateField,
  validateTime,
  validateDateTime,
  useCalendarState,
  pickersFadeTransitionGroupClasses,
  PickersFadeTransitionGroup,
  pickersSlideTransitionClasses,
  dayPickerClasses,
  DayCalendar,
  pickersCalendarHeaderClasses,
  PickersCalendarHeader,
  useDefaultReduceAnimations,
  PickersToolbar,
  PickersModalDialog,
  PickersPopper,
  PickersToolbarText,
  PickersToolbarButton,
  usePicker,
  pickersLayoutClasses,
  PickersActionBar,
  PickersShortcuts,
  usePickerLayout_default,
  PickersLayoutRoot,
  PickersLayoutContentWrapper,
  PickersLayout,
  useStaticPicker,
  getDateRangePickerDayUtilityClass,
  dateRangePickerDayClasses,
  DateRangePickerDay2 as DateRangePickerDay,
  rangeValueManager,
  rangeFieldValueManager,
  isRangeValid,
  validateDateRange,
  useSingleInputDateRangeField,
  useMultiInputDateRangeField,
  multiInputDateRangeFieldClasses,
  getMultiInputDateRangeFieldUtilityClass,
  MultiInputDateRangeField,
  getDateRangeCalendarUtilityClass,
  dateRangeCalendarClasses,
  useRangePosition,
  DateRangeCalendar,
  getDateRangePickerToolbarUtilityClass,
  dateRangePickerToolbarClasses,
  DateRangePickerToolbar,
  useDateRangePickerDefaultizedProps,
  renderDateRangeViewCalendar,
  DesktopDateRangePicker,
  MobileDateRangePicker,
  DateRangePicker
};
/*! Bundled license information:

@mui/x-license-pro/index.js:
  (**
   * @mui/x-license-pro v6.10.2
   *
   * @license MUI X Commercial
   * This source code is licensed under the commercial license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-RFSVQALK.js.map
