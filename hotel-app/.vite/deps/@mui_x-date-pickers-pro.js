import {
  ArrowDropDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  DAY_MARGIN,
  DAY_SIZE,
  DEFAULT_DESKTOP_MODE_MEDIA_QUERY,
  DEFAULT_LOCALE,
  DIALOG_WIDTH,
  DIGITAL_CLOCK_VIEW_HEIGHT,
  DateField,
  DateRangeCalendar,
  DateRangeIcon,
  DateRangePicker,
  DateRangePickerDay,
  DateRangePickerToolbar,
  DayCalendar,
  DesktopDateRangePicker,
  LicenseInfo,
  LocalizationProvider,
  MULTI_SECTION_CLOCK_SECTION_WIDTH,
  MobileDateRangePicker,
  MuiPickersAdapterContext,
  MultiInputDateRangeField,
  PickersActionBar,
  PickersArrowSwitcher,
  PickersCalendarHeader,
  PickersDay,
  PickersFadeTransitionGroup,
  PickersLayout,
  PickersLayoutContentWrapper,
  PickersLayoutRoot,
  PickersModalDialog,
  PickersPopper,
  PickersShortcuts,
  PickersToolbar,
  PickersToolbarButton,
  PickersToolbarText,
  SECTION_TYPE_GRANULARITY,
  TimeIcon,
  VIEW_HEIGHT,
  applyDefaultDate,
  applyDefaultViewProps,
  arrayIncludes,
  convertValueToMeridiem,
  createIsAfterIgnoreDatePart,
  dateRangeCalendarClasses,
  dateRangePickerDayClasses,
  dateRangePickerToolbarClasses,
  dayPickerClasses,
  enUS,
  extractValidationProps,
  findClosestEnabledDate,
  formatMeridiem,
  getDateRangeCalendarUtilityClass,
  getDateRangePickerDayUtilityClass,
  getDateRangePickerToolbarUtilityClass,
  getMonthsInYear,
  getMultiInputDateRangeFieldUtilityClass,
  getPickersDayUtilityClass,
  getPickersLocalization,
  getTodayDate,
  isDatePickerView,
  isInternalTimeView,
  isRangeValid,
  isTimeView,
  mergeDateAndTime,
  multiInputDateRangeFieldClasses,
  onSpaceOrEnter,
  pickersCalendarHeaderClasses,
  pickersDayClasses,
  pickersFadeTransitionGroupClasses,
  pickersLayoutClasses,
  pickersSlideTransitionClasses,
  rangeFieldValueManager,
  rangeValueManager,
  renderDateRangeViewCalendar,
  resolveDateFormat,
  resolveTimeFormat,
  singleItemFieldValueManager,
  singleItemValueManager,
  splitFieldInternalAndForwardedProps,
  uncapitalizeObjectKeys,
  useCalendarState,
  useControlledValueWithTimezone,
  useDateField,
  useDateRangePickerDefaultizedProps,
  useDefaultDates,
  useDefaultReduceAnimations,
  useField,
  useLocaleText,
  useLocalizationContext,
  useMeridiemMode,
  useMultiInputDateRangeField,
  useNow,
  usePicker,
  usePickerLayout_default,
  useRangePosition,
  useSingleInputDateRangeField,
  useStaticPicker,
  useUtils,
  useValidation,
  useViews,
  validateDate,
  validateDateRange,
  validateDateTime,
  validateTime
} from "./chunk-G6MY3E7H.js";
import "./chunk-BRAU7EQW.js";
import {
  Divider_default,
  InputAdornment_default,
  MenuItem_default,
  Skeleton_default
} from "./chunk-7R67T4A6.js";
import {
  IconButton_default,
  Stack_default,
  useMediaQuery
} from "./chunk-JQVESO3T.js";
import {
  MenuList_default,
  TextField_default
} from "./chunk-6VO74H2Y.js";
import {
  Typography_default
} from "./chunk-Q6UBMOCC.js";
import "./chunk-DU62GJNO.js";
import {
  Tabs_default,
  tabsClasses_default
} from "./chunk-CFGPYWM6.js";
import {
  resolveComponentProps,
  useSlotProps
} from "./chunk-4WNQ7N4V.js";
import "./chunk-GBZSWUUH.js";
import {
  Tab_default
} from "./chunk-JNYFEOVU.js";
import "./chunk-C7V6X7KW.js";
import "./chunk-SHVXDH4H.js";
import "./chunk-OTY6O57J.js";
import "./chunk-3RB76OOP.js";
import "./chunk-W3VT5O72.js";
import {
  useTheme
} from "./chunk-UAWBXST3.js";
import "./chunk-QLP2KJVL.js";
import "./chunk-MY7KZFFI.js";
import "./chunk-4WKJ5MOP.js";
import "./chunk-ZWOLBPRX.js";
import "./chunk-HOMISNKD.js";
import "./chunk-FXQ23N3D.js";
import "./chunk-BRVRQXJT.js";
import {
  styled_default,
  useThemeProps
} from "./chunk-EK4VJMD5.js";
import {
  _objectWithoutPropertiesLoose,
  alpha,
  clsx,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_composeClasses,
  init_esm,
  init_esm2,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  init_useEventCallback,
  init_useForkRef,
  init_useId,
  require_jsx_runtime,
  require_prop_types,
  useControlled,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useId,
  useTheme_default
} from "./chunk-SLLDYY4F.js";
import "./chunk-65A32H2E.js";
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

// node_modules/@mui/x-date-pickers/TimeClock/TimeClock.js
init_extends();
init_objectWithoutPropertiesLoose();
var React6 = __toESM(require_react());
init_clsx();
var import_prop_types = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-date-pickers/internals/components/PickerViewRoot/PickerViewRoot.js
var PickerViewRoot = styled_default("div")({
  overflow: "hidden",
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
});

// node_modules/@mui/x-date-pickers/TimeClock/timeClockClasses.js
init_esm();
function getTimeClockUtilityClass(slot) {
  return generateUtilityClass("MuiTimeClock", slot);
}
var timeClockClasses = generateUtilityClasses("MuiTimeClock", ["root", "arrowSwitcher"]);

// node_modules/@mui/x-date-pickers/TimeClock/Clock.js
init_extends();
var React2 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/TimeClock/ClockPointer.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/TimeClock/shared.js
var CLOCK_WIDTH = 220;
var CLOCK_HOUR_WIDTH = 36;
var clockCenter = {
  x: CLOCK_WIDTH / 2,
  y: CLOCK_WIDTH / 2
};
var baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
var cx = baseClockPoint.x - clockCenter.x;
var cy = baseClockPoint.y - clockCenter.y;
var rad2deg = (rad) => rad * (180 / Math.PI);
var getAngleValue = (step, offsetX, offsetY) => {
  const x = offsetX - clockCenter.x;
  const y = offsetY - clockCenter.y;
  const atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  let deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  const value = Math.floor(deg / step) || 0;
  const delta = x ** 2 + y ** 2;
  const distance = Math.sqrt(delta);
  return {
    value,
    distance
  };
};
var getMinutes = (offsetX, offsetY, step = 1) => {
  const angleStep = step * 6;
  let {
    value
  } = getAngleValue(angleStep, offsetX, offsetY);
  value = value * step % 60;
  return value;
};
var getHours = (offsetX, offsetY, ampm) => {
  const {
    value,
    distance
  } = getAngleValue(30, offsetX, offsetY);
  let hour = value || 12;
  if (!ampm) {
    if (distance < CLOCK_WIDTH / 2 - CLOCK_HOUR_WIDTH) {
      hour += 12;
      hour %= 24;
    }
  } else {
    hour %= 12;
  }
  return hour;
};

// node_modules/@mui/x-date-pickers/TimeClock/clockPointerClasses.js
init_esm();
function getClockPointerUtilityClass(slot) {
  return generateUtilityClass("MuiClockPointer", slot);
}
var clockPointerClasses = generateUtilityClasses("MuiClockPointer", ["root", "thumb"]);

// node_modules/@mui/x-date-pickers/TimeClock/ClockPointer.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "hasSelected", "isInner", "type", "viewValue"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    thumb: ["thumb"]
  };
  return composeClasses(slots, getClockPointerUtilityClass, classes);
};
var ClockPointerRoot = styled_default("div", {
  name: "MuiClockPointer",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({
  width: 2,
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  left: "calc(50% - 1px)",
  bottom: "50%",
  transformOrigin: "center bottom 0px"
}, ownerState.shouldAnimate && {
  transition: theme.transitions.create(["transform", "height"])
}));
var ClockPointerThumb = styled_default("div", {
  name: "MuiClockPointer",
  slot: "Thumb",
  overridesResolver: (_, styles) => styles.thumb
})(({
  theme,
  ownerState
}) => _extends({
  width: 4,
  height: 4,
  backgroundColor: (theme.vars || theme).palette.primary.contrastText,
  borderRadius: "50%",
  position: "absolute",
  top: -21,
  left: `calc(50% - ${CLOCK_HOUR_WIDTH / 2}px)`,
  border: `${(CLOCK_HOUR_WIDTH - 4) / 2}px solid ${(theme.vars || theme).palette.primary.main}`,
  boxSizing: "content-box"
}, ownerState.hasSelected && {
  backgroundColor: (theme.vars || theme).palette.primary.main
}));
function ClockPointer(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockPointer"
  });
  const {
    className,
    isInner,
    type,
    viewValue
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const previousType = React.useRef(type);
  React.useEffect(() => {
    previousType.current = type;
  }, [type]);
  const ownerState = _extends({}, props, {
    shouldAnimate: previousType.current !== type
  });
  const classes = useUtilityClasses(ownerState);
  const getAngleStyle = () => {
    const max = type === "hours" ? 12 : 60;
    let angle = 360 / max * viewValue;
    if (type === "hours" && viewValue > 12) {
      angle -= 360;
    }
    return {
      height: Math.round((isInner ? 0.26 : 0.4) * CLOCK_WIDTH),
      transform: `rotateZ(${angle}deg)`
    };
  };
  return (0, import_jsx_runtime.jsx)(ClockPointerRoot, _extends({
    style: getAngleStyle(),
    className: clsx_default(className, classes.root),
    ownerState
  }, other, {
    children: (0, import_jsx_runtime.jsx)(ClockPointerThumb, {
      ownerState,
      className: classes.thumb
    })
  }));
}

// node_modules/@mui/x-date-pickers/TimeClock/clockClasses.js
init_esm();
function getClockUtilityClass(slot) {
  return generateUtilityClass("MuiClock", slot);
}
var clockClasses = generateUtilityClasses("MuiClock", ["root", "clock", "wrapper", "squareMask", "pin", "amButton", "pmButton"]);

// node_modules/@mui/x-date-pickers/TimeClock/Clock.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var useUtilityClasses2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    clock: ["clock"],
    wrapper: ["wrapper"],
    squareMask: ["squareMask"],
    pin: ["pin"],
    amButton: ["amButton"],
    pmButton: ["pmButton"]
  };
  return composeClasses(slots, getClockUtilityClass, classes);
};
var ClockRoot = styled_default("div", {
  name: "MuiClock",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(2)
}));
var ClockClock = styled_default("div", {
  name: "MuiClock",
  slot: "Clock",
  overridesResolver: (_, styles) => styles.clock
})({
  backgroundColor: "rgba(0,0,0,.07)",
  borderRadius: "50%",
  height: 220,
  width: 220,
  flexShrink: 0,
  position: "relative",
  pointerEvents: "none"
});
var ClockWrapper = styled_default("div", {
  name: "MuiClock",
  slot: "Wrapper",
  overridesResolver: (_, styles) => styles.wrapper
})({
  "&:focus": {
    outline: "none"
  }
});
var ClockSquareMask = styled_default("div", {
  name: "MuiClock",
  slot: "SquareMask",
  overridesResolver: (_, styles) => styles.squareMask
})(({
  ownerState
}) => _extends({
  width: "100%",
  height: "100%",
  position: "absolute",
  pointerEvents: "auto",
  outline: 0,
  // Disable scroll capabilities.
  touchAction: "none",
  userSelect: "none"
}, ownerState.disabled ? {} : {
  "@media (pointer: fine)": {
    cursor: "pointer",
    borderRadius: "50%"
  },
  "&:active": {
    cursor: "move"
  }
}));
var ClockPin = styled_default("div", {
  name: "MuiClock",
  slot: "Pin",
  overridesResolver: (_, styles) => styles.pin
})(({
  theme
}) => ({
  width: 6,
  height: 6,
  borderRadius: "50%",
  backgroundColor: (theme.vars || theme).palette.primary.main,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}));
var ClockAmButton = styled_default(IconButton_default, {
  name: "MuiClock",
  slot: "AmButton",
  overridesResolver: (_, styles) => styles.amButton
})(({
  theme,
  ownerState
}) => _extends({
  zIndex: 1,
  position: "absolute",
  bottom: 8,
  left: 8
}, ownerState.meridiemMode === "am" && {
  backgroundColor: (theme.vars || theme).palette.primary.main,
  color: (theme.vars || theme).palette.primary.contrastText,
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.primary.light
  }
}));
var ClockPmButton = styled_default(IconButton_default, {
  name: "MuiClock",
  slot: "PmButton",
  overridesResolver: (_, styles) => styles.pmButton
})(({
  theme,
  ownerState
}) => _extends({
  zIndex: 1,
  position: "absolute",
  bottom: 8,
  right: 8
}, ownerState.meridiemMode === "pm" && {
  backgroundColor: (theme.vars || theme).palette.primary.main,
  color: (theme.vars || theme).palette.primary.contrastText,
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.primary.light
  }
}));
function Clock(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClock"
  });
  const {
    ampm,
    ampmInClock,
    autoFocus,
    children,
    value,
    handleMeridiemChange,
    isTimeDisabled,
    meridiemMode,
    minutesStep = 1,
    onChange,
    selectedId,
    type,
    viewValue,
    disabled,
    readOnly,
    className
  } = props;
  const ownerState = props;
  const utils = useUtils();
  const localeText = useLocaleText();
  const isMoving = React2.useRef(false);
  const classes = useUtilityClasses2(ownerState);
  const isSelectedTimeDisabled = isTimeDisabled(viewValue, type);
  const isPointerInner = !ampm && type === "hours" && (viewValue < 1 || viewValue > 12);
  const handleValueChange = (newValue, isFinish) => {
    if (disabled || readOnly) {
      return;
    }
    if (isTimeDisabled(newValue, type)) {
      return;
    }
    onChange(newValue, isFinish);
  };
  const setTime = (event, isFinish) => {
    let {
      offsetX,
      offsetY
    } = event;
    if (offsetX === void 0) {
      const rect = event.target.getBoundingClientRect();
      offsetX = event.changedTouches[0].clientX - rect.left;
      offsetY = event.changedTouches[0].clientY - rect.top;
    }
    const newSelectedValue = type === "seconds" || type === "minutes" ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
    handleValueChange(newSelectedValue, isFinish);
  };
  const handleTouchMove = (event) => {
    isMoving.current = true;
    setTime(event, "shallow");
  };
  const handleTouchEnd = (event) => {
    if (isMoving.current) {
      setTime(event, "finish");
      isMoving.current = false;
    }
  };
  const handleMouseMove = (event) => {
    if (event.buttons > 0) {
      setTime(event.nativeEvent, "shallow");
    }
  };
  const handleMouseUp = (event) => {
    if (isMoving.current) {
      isMoving.current = false;
    }
    setTime(event.nativeEvent, "finish");
  };
  const hasSelected = React2.useMemo(() => {
    if (type === "hours") {
      return true;
    }
    return viewValue % 5 === 0;
  }, [type, viewValue]);
  const keyboardControlStep = type === "minutes" ? minutesStep : 1;
  const listboxRef = React2.useRef(null);
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      listboxRef.current.focus();
    }
  }, [autoFocus]);
  const handleKeyDown = (event) => {
    if (isMoving.current) {
      return;
    }
    switch (event.key) {
      case "Home":
        handleValueChange(0, "partial");
        event.preventDefault();
        break;
      case "End":
        handleValueChange(type === "minutes" ? 59 : 23, "partial");
        event.preventDefault();
        break;
      case "ArrowUp":
        handleValueChange(viewValue + keyboardControlStep, "partial");
        event.preventDefault();
        break;
      case "ArrowDown":
        handleValueChange(viewValue - keyboardControlStep, "partial");
        event.preventDefault();
        break;
      default:
    }
  };
  return (0, import_jsx_runtime3.jsxs)(ClockRoot, {
    className: clsx_default(className, classes.root),
    children: [(0, import_jsx_runtime3.jsxs)(ClockClock, {
      className: classes.clock,
      children: [(0, import_jsx_runtime2.jsx)(ClockSquareMask, {
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        ownerState: {
          disabled
        },
        className: classes.squareMask
      }), !isSelectedTimeDisabled && (0, import_jsx_runtime3.jsxs)(React2.Fragment, {
        children: [(0, import_jsx_runtime2.jsx)(ClockPin, {
          className: classes.pin
        }), value != null && (0, import_jsx_runtime2.jsx)(ClockPointer, {
          type,
          viewValue,
          isInner: isPointerInner,
          hasSelected
        })]
      }), (0, import_jsx_runtime2.jsx)(ClockWrapper, {
        "aria-activedescendant": selectedId,
        "aria-label": localeText.clockLabelText(type, value, utils),
        ref: listboxRef,
        role: "listbox",
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        className: classes.wrapper,
        children
      })]
    }), ampm && ampmInClock && (0, import_jsx_runtime3.jsxs)(React2.Fragment, {
      children: [(0, import_jsx_runtime2.jsx)(ClockAmButton, {
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled: disabled || meridiemMode === null,
        ownerState,
        className: classes.amButton,
        children: (0, import_jsx_runtime2.jsx)(Typography_default, {
          variant: "caption",
          children: "AM"
        })
      }), (0, import_jsx_runtime2.jsx)(ClockPmButton, {
        disabled: disabled || meridiemMode === null,
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        ownerState,
        className: classes.pmButton,
        children: (0, import_jsx_runtime2.jsx)(Typography_default, {
          variant: "caption",
          children: "PM"
        })
      })]
    })]
  });
}

// node_modules/@mui/x-date-pickers/TimeClock/ClockNumbers.js
var React4 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/TimeClock/ClockNumber.js
init_objectWithoutPropertiesLoose();
init_extends();
var React3 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/TimeClock/clockNumberClasses.js
init_esm();
function getClockNumberUtilityClass(slot) {
  return generateUtilityClass("MuiClockNumber", slot);
}
var clockNumberClasses = generateUtilityClasses("MuiClockNumber", ["root", "selected", "disabled"]);

// node_modules/@mui/x-date-pickers/TimeClock/ClockNumber.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded2 = ["className", "disabled", "index", "inner", "label", "selected"];
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled"]
  };
  return composeClasses(slots, getClockNumberUtilityClass, classes);
};
var ClockNumberRoot = styled_default("span", {
  name: "MuiClockNumber",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root, {
    [`&.${clockNumberClasses.disabled}`]: styles.disabled
  }, {
    [`&.${clockNumberClasses.selected}`]: styles.selected
  }]
})(({
  theme,
  ownerState
}) => _extends({
  height: CLOCK_HOUR_WIDTH,
  width: CLOCK_HOUR_WIDTH,
  position: "absolute",
  left: `calc((100% - ${CLOCK_HOUR_WIDTH}px) / 2)`,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  color: (theme.vars || theme).palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  "&:focused": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  [`&.${clockNumberClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText
  },
  [`&.${clockNumberClasses.disabled}`]: {
    pointerEvents: "none",
    color: (theme.vars || theme).palette.text.disabled
  }
}, ownerState.inner && _extends({}, theme.typography.body2, {
  color: (theme.vars || theme).palette.text.secondary
})));
function ClockNumber(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiClockNumber"
  });
  const {
    className,
    disabled,
    index,
    inner,
    label,
    selected
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const ownerState = props;
  const classes = useUtilityClasses3(ownerState);
  const angle = index % 12 / 12 * Math.PI * 2 - Math.PI / 2;
  const length = (CLOCK_WIDTH - CLOCK_HOUR_WIDTH - 2) / 2 * (inner ? 0.65 : 1);
  const x = Math.round(Math.cos(angle) * length);
  const y = Math.round(Math.sin(angle) * length);
  return (0, import_jsx_runtime4.jsx)(ClockNumberRoot, _extends({
    className: clsx_default(className, classes.root),
    "aria-disabled": disabled ? true : void 0,
    "aria-selected": selected ? true : void 0,
    role: "option",
    style: {
      transform: `translate(${x}px, ${y + (CLOCK_WIDTH - CLOCK_HOUR_WIDTH) / 2}px`
    },
    ownerState
  }, other, {
    children: label
  }));
}

// node_modules/@mui/x-date-pickers/TimeClock/ClockNumbers.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var getHourNumbers = ({
  ampm,
  value,
  getClockNumberText,
  isDisabled,
  selectedId,
  utils
}) => {
  const currentHours = value ? utils.getHours(value) : null;
  const hourNumbers = [];
  const startHour = ampm ? 1 : 0;
  const endHour = ampm ? 12 : 23;
  const isSelected = (hour) => {
    if (currentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }
      return currentHours === hour || currentHours - 12 === hour;
    }
    return currentHours === hour;
  };
  for (let hour = startHour; hour <= endHour; hour += 1) {
    let label = hour.toString();
    if (hour === 0) {
      label = "00";
    }
    const inner = !ampm && (hour === 0 || hour > 12);
    label = utils.formatNumber(label);
    const selected = isSelected(hour);
    hourNumbers.push((0, import_jsx_runtime5.jsx)(ClockNumber, {
      id: selected ? selectedId : void 0,
      index: hour,
      inner,
      selected,
      disabled: isDisabled(hour),
      label,
      "aria-label": getClockNumberText(label)
    }, hour));
  }
  return hourNumbers;
};
var getMinutesNumbers = ({
  utils,
  value,
  isDisabled,
  getClockNumberText,
  selectedId
}) => {
  const f = utils.formatNumber;
  return [[5, f("05")], [10, f("10")], [15, f("15")], [20, f("20")], [25, f("25")], [30, f("30")], [35, f("35")], [40, f("40")], [45, f("45")], [50, f("50")], [55, f("55")], [0, f("00")]].map(([numberValue, label], index) => {
    const selected = numberValue === value;
    return (0, import_jsx_runtime5.jsx)(ClockNumber, {
      label,
      id: selected ? selectedId : void 0,
      index: index + 1,
      inner: false,
      disabled: isDisabled(numberValue),
      selected,
      "aria-label": getClockNumberText(label)
    }, numberValue);
  });
};

// node_modules/@mui/x-date-pickers/internals/hooks/useClockReferenceDate.js
var React5 = __toESM(require_react());
var useClockReferenceDate = ({
  value,
  referenceDate: referenceDateProp,
  utils,
  props,
  timezone
}) => {
  const referenceDate = React5.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      props,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.day,
      timezone,
      getTodayDate: () => getTodayDate(utils, timezone, "date")
    }),
    // We only want to compute the reference date on mount.
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  return value != null ? value : referenceDate;
};

// node_modules/@mui/x-date-pickers/TimeClock/TimeClock.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded3 = ["ampm", "ampmInClock", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "showViewSwitcher", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "timezone"];
var useUtilityClasses4 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    arrowSwitcher: ["arrowSwitcher"]
  };
  return composeClasses(slots, getTimeClockUtilityClass, classes);
};
var TimeClockRoot = styled_default(PickerViewRoot, {
  name: "MuiTimeClock",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column",
  position: "relative"
});
var TimeClockArrowSwitcher = styled_default(PickersArrowSwitcher, {
  name: "MuiTimeClock",
  slot: "ArrowSwitcher",
  overridesResolver: (props, styles) => styles.arrowSwitcher
})({
  position: "absolute",
  right: 12,
  top: 15
});
var TIME_CLOCK_DEFAULT_VIEWS = ["hours", "minutes"];
var TimeClock = React6.forwardRef(function TimeClock2(inProps, ref) {
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimeClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    ampmInClock = false,
    autoFocus,
    components,
    componentsProps,
    slots: innerSlots,
    slotProps: innerSlotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableClock,
    shouldDisableTime,
    showViewSwitcher,
    onChange,
    view: inView,
    views: views13 = TIME_CLOCK_DEFAULT_VIEWS,
    openTo,
    onViewChange,
    focusedView,
    onFocusedViewChange,
    className,
    disabled,
    readOnly,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const slots = innerSlots != null ? innerSlots : uncapitalizeObjectKeys(components);
  const slotProps = innerSlotProps != null ? innerSlotProps : componentsProps;
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "TimeClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const localeText = useLocaleText();
  const now = useNow(timezone);
  const {
    view,
    setView,
    previousView,
    nextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views: views13,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, setValueAndGoToNextView);
  const isTimeDisabled = React6.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views13.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableClock != null && shouldDisableClock(timeValue, viewType)) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(utils.setHours(valueOrReferenceDate, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(utils.setMinutes(valueOrReferenceDate, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(utils.setSeconds(valueOrReferenceDate, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = utils.setHours(valueOrReferenceDate, valueWithMeridiem);
        const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
        const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = utils.setMinutes(valueOrReferenceDate, rawValue);
        const start = utils.setSeconds(dateWithNewMinutes, 0);
        const end = utils.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = utils.setSeconds(valueOrReferenceDate, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableClock, shouldDisableTime, utils, disableFuture, disablePast, now, views13]);
  const selectedId = useId();
  const viewProps = React6.useMemo(() => {
    switch (view) {
      case "hours": {
        const handleHoursChange = (hourValue, isFinish) => {
          const valueWithMeridiem = convertValueToMeridiem(hourValue, meridiemMode, ampm);
          setValueAndGoToNextView(utils.setHours(valueOrReferenceDate, valueWithMeridiem), isFinish);
        };
        return {
          onChange: handleHoursChange,
          viewValue: utils.getHours(valueOrReferenceDate),
          children: getHourNumbers({
            value,
            utils,
            ampm,
            onChange: handleHoursChange,
            getClockNumberText: localeText.hoursClockNumberText,
            isDisabled: (hourValue) => disabled || isTimeDisabled(hourValue, "hours"),
            selectedId
          })
        };
      }
      case "minutes": {
        const minutesValue = utils.getMinutes(valueOrReferenceDate);
        const handleMinutesChange = (minuteValue, isFinish) => {
          setValueAndGoToNextView(utils.setMinutes(valueOrReferenceDate, minuteValue), isFinish);
        };
        return {
          viewValue: minutesValue,
          onChange: handleMinutesChange,
          children: getMinutesNumbers({
            utils,
            value: minutesValue,
            onChange: handleMinutesChange,
            getClockNumberText: localeText.minutesClockNumberText,
            isDisabled: (minuteValue) => disabled || isTimeDisabled(minuteValue, "minutes"),
            selectedId
          })
        };
      }
      case "seconds": {
        const secondsValue = utils.getSeconds(valueOrReferenceDate);
        const handleSecondsChange = (secondValue, isFinish) => {
          setValueAndGoToNextView(utils.setSeconds(valueOrReferenceDate, secondValue), isFinish);
        };
        return {
          viewValue: secondsValue,
          onChange: handleSecondsChange,
          children: getMinutesNumbers({
            utils,
            value: secondsValue,
            onChange: handleSecondsChange,
            getClockNumberText: localeText.secondsClockNumberText,
            isDisabled: (secondValue) => disabled || isTimeDisabled(secondValue, "seconds"),
            selectedId
          })
        };
      }
      default:
        throw new Error("You must provide the type for ClockView");
    }
  }, [view, utils, value, ampm, localeText.hoursClockNumberText, localeText.minutesClockNumberText, localeText.secondsClockNumberText, meridiemMode, setValueAndGoToNextView, valueOrReferenceDate, isTimeDisabled, selectedId, disabled]);
  const ownerState = props;
  const classes = useUtilityClasses4(ownerState);
  return (0, import_jsx_runtime7.jsxs)(TimeClockRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime6.jsx)(Clock, _extends({
      autoFocus: autoFocus != null ? autoFocus : !!focusedView,
      ampmInClock: ampmInClock && views13.includes("hours"),
      value,
      type: view,
      ampm,
      minutesStep,
      isTimeDisabled,
      meridiemMode,
      handleMeridiemChange,
      selectedId,
      disabled,
      readOnly
    }, viewProps)), showViewSwitcher && (0, import_jsx_runtime6.jsx)(TimeClockArrowSwitcher, {
      className: classes.arrowSwitcher,
      slots,
      slotProps,
      onGoToPrevious: () => setView(previousView),
      isPreviousDisabled: !previousView,
      previousLabel: localeText.openPreviousView,
      onGoToNext: () => setView(nextView),
      isNextDisabled: !nextView,
      nextLabel: localeText.openNextView,
      ownerState
    })]
  }));
});
true ? TimeClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: import_prop_types.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  className: import_prop_types.default.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types.default.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types.default.any,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types.default.number,
  /**
   * Callback fired when the value changes.
   * @template TDate, TView
   * @param {TDate | null} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: import_prop_types.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types.default.any,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types.default.func,
  showViewSwitcher: import_prop_types.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Available views.
   */
  views: import_prop_types.default.arrayOf(import_prop_types.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/@mui/x-date-pickers/DigitalClock/DigitalClock.js
init_extends();
init_objectWithoutPropertiesLoose();
var React7 = __toESM(require_react());
init_clsx();
var import_prop_types2 = __toESM(require_prop_types());
init_useEventCallback();
init_composeClasses();
init_useForkRef();

// node_modules/@mui/x-date-pickers/DigitalClock/digitalClockClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiDigitalClock", slot);
}
var digitalClockClasses = generateUtilityClasses("MuiDigitalClock", ["root", "list", "item"]);

// node_modules/@mui/x-date-pickers/DigitalClock/DigitalClock.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded4 = ["ampm", "timeStep", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "onChange", "view", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "views", "skipDisabled", "timezone"];
var useUtilityClasses5 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    list: ["list"],
    item: ["item"]
  };
  return composeClasses(slots, getDigitalClockUtilityClass, classes);
};
var DigitalClockRoot = styled_default(PickerViewRoot, {
  name: "MuiDigitalClock",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => ({
  overflowY: "auto",
  width: "100%",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: ownerState.alreadyRendered ? "smooth" : "auto"
  },
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT
}));
var DigitalClockList = styled_default(MenuList_default, {
  name: "MuiDigitalClock",
  slot: "List",
  overridesResolver: (props, styles) => styles.list
})({
  padding: 0
});
var DigitalClockItem = styled_default(MenuItem_default, {
  name: "MuiDigitalClock",
  slot: "Item",
  overridesResolver: (props, styles) => styles.item
})(({
  theme
}) => ({
  padding: "8px 16px",
  margin: "2px 4px",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
var DigitalClock = React7.forwardRef(function DigitalClock2(inProps, ref) {
  var _ref, _slots$digitalClockIt, _slotProps$digitalClo;
  const utils = useUtils();
  const containerRef = React7.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const props = useThemeProps({
    props: inProps,
    name: "MuiDigitalClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    timeStep = 30,
    autoFocus,
    components,
    componentsProps,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableClock,
    shouldDisableTime,
    onChange,
    view: inView,
    openTo,
    onViewChange,
    focusedView,
    onFocusedViewChange,
    className,
    disabled,
    readOnly,
    views: views13 = ["hours"],
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "DigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const localeText = useLocaleText();
  const now = useNow(timezone);
  const ownerState = React7.useMemo(() => _extends({}, props, {
    alreadyRendered: !!containerRef.current
  }), [props]);
  const classes = useUtilityClasses5(ownerState);
  const ClockItem = (_ref = (_slots$digitalClockIt = slots == null ? void 0 : slots.digitalClockItem) != null ? _slots$digitalClockIt : components == null ? void 0 : components.DigitalClockItem) != null ? _ref : DigitalClockItem;
  const clockItemProps = useSlotProps({
    elementType: ClockItem,
    externalSlotProps: (_slotProps$digitalClo = slotProps == null ? void 0 : slotProps.digitalClockItem) != null ? _slotProps$digitalClo : componentsProps == null ? void 0 : componentsProps.digitalClockItem,
    ownerState: {},
    className: classes.item
  });
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const handleValueChange = useEventCallback_default((newValue) => handleRawValueChange(newValue, "finish"));
  const {
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views: views13,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView,
    onFocusedViewChange
  });
  const handleItemSelect = useEventCallback_default((newValue) => {
    setValueAndGoToNextView(newValue, "finish");
  });
  React7.useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const selectedItem = containerRef.current.querySelector('[role="listbox"] [role="option"][aria-selected="true"]');
    if (!selectedItem) {
      return;
    }
    const offsetTop = selectedItem.offsetTop;
    containerRef.current.scrollTop = offsetTop - 4;
  });
  const isTimeDisabled = React7.useCallback((valueToCheck) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const containsValidTime = () => {
      if (minTime && isAfter(minTime, valueToCheck)) {
        return false;
      }
      if (maxTime && isAfter(valueToCheck, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(valueToCheck, now)) {
        return false;
      }
      if (disablePast && isAfter(now, valueToCheck)) {
        return false;
      }
      return true;
    };
    const isValidValue = () => {
      if (utils.getMinutes(valueToCheck) % minutesStep !== 0) {
        return false;
      }
      if (shouldDisableClock != null && shouldDisableClock(utils.toJsDate(valueToCheck).getTime(), "hours")) {
        return false;
      }
      if (shouldDisableTime) {
        return !shouldDisableTime(valueToCheck, "hours");
      }
      return true;
    };
    return !containsValidTime() || !isValidValue();
  }, [disableIgnoringDatePartForTimeValidation, utils, minTime, maxTime, disableFuture, now, disablePast, minutesStep, shouldDisableClock, shouldDisableTime]);
  const timeOptions = React7.useMemo(() => {
    const startOfDay = utils.startOfDay(valueOrReferenceDate);
    return [startOfDay, ...Array.from({
      length: Math.ceil(24 * 60 / timeStep) - 1
    }, (_, index) => utils.addMinutes(startOfDay, timeStep * (index + 1)))];
  }, [valueOrReferenceDate, timeStep, utils]);
  return (0, import_jsx_runtime8.jsx)(DigitalClockRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: (0, import_jsx_runtime8.jsx)(DigitalClockList, {
      autoFocusItem: autoFocus || !!focusedView,
      role: "listbox",
      "aria-label": localeText.timePickerToolbarTitle,
      className: classes.list,
      children: timeOptions.map((option) => {
        if (skipDisabled && isTimeDisabled(option)) {
          return null;
        }
        const isSelected = utils.isEqual(option, value);
        return (0, import_jsx_runtime8.jsx)(ClockItem, _extends({
          onClick: () => !readOnly && handleItemSelect(option),
          selected: isSelected,
          disabled: disabled || isTimeDisabled(option),
          disableRipple: readOnly,
          role: "option",
          "aria-disabled": readOnly,
          "aria-selected": isSelected
        }, clockItemProps, {
          children: utils.format(option, ampm ? "fullTime12h" : "fullTime24h")
        }), utils.toISO(option));
      })
    })
  }));
});
true ? DigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types2.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types2.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  className: import_prop_types2.default.string,
  /**
   * Overrideable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types2.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types2.default.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types2.default.any,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types2.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types2.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types2.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types2.default.oneOf(["hours"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types2.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types2.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types2.default.number,
  /**
   * Callback fired when the value changes.
   * @template TDate, TView
   * @param {TDate | null} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types2.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types2.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types2.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types2.default.oneOf(["hours"]),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: import_prop_types2.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types2.default.any,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types2.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types2.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types2.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types2.default.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: import_prop_types2.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * The time steps between two time options.
   * For example, if `timeStep = 45`, then the available time options will be `[00:00, 00:45, 01:30, 02:15, 03:00, etc.]`.
   * @default 30
   */
  timeStep: import_prop_types2.default.number,
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types2.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types2.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types2.default.oneOf(["hours"]),
  /**
   * Available views.
   */
  views: import_prop_types2.default.arrayOf(import_prop_types2.default.oneOf(["hours"]))
} : void 0;

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClock.js
init_extends();
init_objectWithoutPropertiesLoose();
var React9 = __toESM(require_react());
init_clsx();
var import_prop_types3 = __toESM(require_prop_types());
init_useEventCallback();
init_composeClasses();

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/multiSectionDigitalClockClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getMultiSectionDigitalClockUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClock", slot);
}
var multiSectionDigitalClockClasses = generateUtilityClasses("MuiMultiSectionDigitalClock", ["root"]);

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClockSection.js
init_extends();
init_objectWithoutPropertiesLoose();
var React8 = __toESM(require_react());
init_clsx();
init_composeClasses();
init_useForkRef();

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/multiSectionDigitalClockSectionClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getMultiSectionDigitalClockSectionUtilityClass(slot) {
  return generateUtilityClass("MuiMultiSectionDigitalClock", slot);
}
var multiSectionDigitalClockSectionClasses = generateUtilityClasses("MuiMultiSectionDigitalClock", ["root", "item"]);

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClockSection.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded5 = ["autoFocus", "onChange", "className", "disabled", "readOnly", "items", "active", "slots", "slotProps", "skipDisabled"];
var useUtilityClasses6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    item: ["item"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockSectionUtilityClass, classes);
};
var MultiSectionDigitalClockSectionRoot = styled_default(MenuList_default, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  maxHeight: DIGITAL_CLOCK_VIEW_HEIGHT,
  width: 56,
  padding: 0,
  overflow: "hidden",
  "@media (prefers-reduced-motion: no-preference)": {
    scrollBehavior: ownerState.alreadyRendered ? "smooth" : "auto"
  },
  "&:hover": {
    overflowY: "auto"
  },
  "&:not(:first-of-type)": {
    borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
  },
  "&:after": {
    display: "block",
    content: '""',
    // subtracting the height of one item, extra margin and borders to make sure the max height is correct
    height: "calc(100% - 40px - 6px)"
  }
}));
var MultiSectionDigitalClockSectionItem = styled_default(MenuItem_default, {
  name: "MuiMultiSectionDigitalClockSection",
  slot: "Item",
  overridesResolver: (_, styles) => styles.item
})(({
  theme
}) => ({
  padding: 8,
  margin: "2px 4px",
  width: MULTI_SECTION_CLOCK_SECTION_WIDTH,
  justifyContent: "center",
  "&:first-of-type": {
    marginTop: 4
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
  },
  "&.Mui-selected": {
    backgroundColor: (theme.vars || theme).palette.primary.main,
    color: (theme.vars || theme).palette.primary.contrastText,
    "&:focus-visible, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
  }
}));
var MultiSectionDigitalClockSection = React8.forwardRef(function MultiSectionDigitalClockSection2(inProps, ref) {
  var _slots$digitalClockSe;
  const containerRef = React8.useRef(null);
  const handleRef = useForkRef(ref, containerRef);
  const previousSelected = React8.useRef(null);
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClockSection"
  });
  const {
    autoFocus,
    onChange,
    className,
    disabled,
    readOnly,
    items,
    active,
    slots,
    slotProps,
    skipDisabled
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = React8.useMemo(() => _extends({}, props, {
    alreadyRendered: !!containerRef.current
  }), [props]);
  const classes = useUtilityClasses6(ownerState);
  const DigitalClockSectionItem = (_slots$digitalClockSe = slots == null ? void 0 : slots.digitalClockSectionItem) != null ? _slots$digitalClockSe : MultiSectionDigitalClockSectionItem;
  React8.useEffect(() => {
    if (containerRef.current === null) {
      return;
    }
    const selectedItem = containerRef.current.querySelector('[role="option"][aria-selected="true"]');
    if (!selectedItem || previousSelected.current === selectedItem) {
      if (previousSelected.current !== selectedItem) {
        previousSelected.current = selectedItem;
      }
      return;
    }
    previousSelected.current = selectedItem;
    if (active && autoFocus) {
      selectedItem.focus();
    }
    const offsetTop = selectedItem.offsetTop;
    containerRef.current.scrollTop = offsetTop - 4;
  });
  return (0, import_jsx_runtime9.jsx)(MultiSectionDigitalClockSectionRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState,
    autoFocusItem: autoFocus && active,
    role: "listbox"
  }, other, {
    children: items.map((option) => {
      var _option$isDisabled, _option$isDisabled2;
      if (skipDisabled && (_option$isDisabled = option.isDisabled) != null && _option$isDisabled.call(option, option.value)) {
        return null;
      }
      const isSelected = option.isSelected(option.value);
      return (0, import_jsx_runtime9.jsx)(DigitalClockSectionItem, _extends({
        onClick: () => !readOnly && onChange(option.value),
        selected: isSelected,
        disabled: disabled || ((_option$isDisabled2 = option.isDisabled) == null ? void 0 : _option$isDisabled2.call(option, option.value)),
        disableRipple: readOnly,
        role: "option",
        "aria-disabled": readOnly,
        "aria-label": option.ariaLabel,
        "aria-selected": isSelected
      }, slotProps == null ? void 0 : slotProps.digitalClockSectionItem, {
        children: option.label
      }), option.label);
    })
  }));
});

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClock.utils.js
var getHourSectionOptions = ({
  now,
  value,
  utils,
  ampm,
  isDisabled,
  resolveAriaLabel,
  timeStep
}) => {
  const currentHours = value ? utils.getHours(value) : null;
  const result = [];
  const isSelected = (hour) => {
    if (currentHours === null) {
      return false;
    }
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }
      return currentHours === hour || currentHours - 12 === hour;
    }
    return currentHours === hour;
  };
  const endHour = ampm ? 11 : 23;
  for (let hour = 0; hour <= endHour; hour += timeStep) {
    let label = utils.format(utils.setHours(now, hour), ampm ? "hours12h" : "hours24h");
    const ariaLabel = resolveAriaLabel(parseInt(label, 10).toString());
    label = utils.formatNumber(label);
    result.push({
      value: hour,
      label,
      isSelected,
      isDisabled,
      ariaLabel
    });
  }
  return result;
};
var getTimeSectionOptions = ({
  value,
  isDisabled,
  timeStep,
  resolveLabel,
  resolveAriaLabel,
  hasValue = true
}) => {
  const isSelected = (timeValue) => {
    if (value === null) {
      return false;
    }
    return hasValue && value === timeValue;
  };
  return [...Array.from({
    length: Math.ceil(60 / timeStep)
  }, (_, index) => {
    const timeValue = timeStep * index;
    return {
      value: timeValue,
      label: resolveLabel(timeValue),
      isDisabled,
      isSelected,
      ariaLabel: resolveAriaLabel(timeValue.toString())
    };
  })];
};

// node_modules/@mui/x-date-pickers/MultiSectionDigitalClock/MultiSectionDigitalClock.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded6 = ["ampm", "timeSteps", "autoFocus", "components", "componentsProps", "slots", "slotProps", "value", "defaultValue", "referenceDate", "disableIgnoringDatePartForTimeValidation", "maxTime", "minTime", "disableFuture", "disablePast", "minutesStep", "shouldDisableClock", "shouldDisableTime", "onChange", "view", "views", "openTo", "onViewChange", "focusedView", "onFocusedViewChange", "className", "disabled", "readOnly", "skipDisabled", "timezone"];
var useUtilityClasses7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMultiSectionDigitalClockUtilityClass, classes);
};
var MultiSectionDigitalClockRoot = styled_default(PickerViewRoot, {
  name: "MuiMultiSectionDigitalClock",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
}));
var MultiSectionDigitalClock = React9.forwardRef(function MultiSectionDigitalClock2(inProps, ref) {
  const utils = useUtils();
  const props = useThemeProps({
    props: inProps,
    name: "MuiMultiSectionDigitalClock"
  });
  const {
    ampm = utils.is12HourCycleInCurrentLocale(),
    timeSteps: inTimeSteps,
    autoFocus,
    components,
    componentsProps,
    slots,
    slotProps,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableIgnoringDatePartForTimeValidation = false,
    maxTime,
    minTime,
    disableFuture,
    disablePast,
    minutesStep = 1,
    shouldDisableClock,
    shouldDisableTime,
    onChange,
    view: inView,
    views: inViews = ["hours", "minutes"],
    openTo,
    onViewChange,
    focusedView: inFocusedView,
    onFocusedViewChange,
    className,
    disabled,
    readOnly,
    skipDisabled = false,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const {
    value,
    handleValueChange: handleRawValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "MultiSectionDigitalClock",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const localeText = useLocaleText();
  const now = useNow(timezone);
  const timeSteps = React9.useMemo(() => _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, inTimeSteps), [inTimeSteps]);
  const valueOrReferenceDate = useClockReferenceDate({
    value,
    referenceDate: referenceDateProp,
    utils,
    props,
    timezone
  });
  const handleValueChange = useEventCallback_default((newValue, selectionState, selectedView) => handleRawValueChange(newValue, selectionState, selectedView));
  const views13 = React9.useMemo(() => {
    if (!ampm || !inViews.includes("hours")) {
      return inViews;
    }
    return inViews.includes("meridiem") ? inViews : [...inViews, "meridiem"];
  }, [ampm, inViews]);
  const {
    view,
    setValueAndGoToView,
    focusedView
  } = useViews({
    view: inView,
    views: views13,
    openTo,
    onViewChange,
    onChange: handleValueChange,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const handleMeridiemValueChange = useEventCallback_default((newValue) => {
    setValueAndGoToView(newValue, null, "meridiem");
  });
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(valueOrReferenceDate, ampm, handleMeridiemValueChange, "finish");
  const isTimeDisabled = React9.useCallback((rawValue, viewType) => {
    const isAfter = createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils);
    const shouldCheckPastEnd = viewType === "hours" || viewType === "minutes" && views13.includes("seconds");
    const containsValidTime = ({
      start,
      end
    }) => {
      if (minTime && isAfter(minTime, end)) {
        return false;
      }
      if (maxTime && isAfter(start, maxTime)) {
        return false;
      }
      if (disableFuture && isAfter(start, now)) {
        return false;
      }
      if (disablePast && isAfter(now, shouldCheckPastEnd ? end : start)) {
        return false;
      }
      return true;
    };
    const isValidValue = (timeValue, step = 1) => {
      if (timeValue % step !== 0) {
        return false;
      }
      if (shouldDisableClock != null && shouldDisableClock(timeValue, viewType)) {
        return false;
      }
      if (shouldDisableTime) {
        switch (viewType) {
          case "hours":
            return !shouldDisableTime(utils.setHours(valueOrReferenceDate, timeValue), "hours");
          case "minutes":
            return !shouldDisableTime(utils.setMinutes(valueOrReferenceDate, timeValue), "minutes");
          case "seconds":
            return !shouldDisableTime(utils.setSeconds(valueOrReferenceDate, timeValue), "seconds");
          default:
            return false;
        }
      }
      return true;
    };
    switch (viewType) {
      case "hours": {
        const valueWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, ampm);
        const dateWithNewHours = utils.setHours(valueOrReferenceDate, valueWithMeridiem);
        const start = utils.setSeconds(utils.setMinutes(dateWithNewHours, 0), 0);
        const end = utils.setSeconds(utils.setMinutes(dateWithNewHours, 59), 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(valueWithMeridiem);
      }
      case "minutes": {
        const dateWithNewMinutes = utils.setMinutes(valueOrReferenceDate, rawValue);
        const start = utils.setSeconds(dateWithNewMinutes, 0);
        const end = utils.setSeconds(dateWithNewMinutes, 59);
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue, minutesStep);
      }
      case "seconds": {
        const dateWithNewSeconds = utils.setSeconds(valueOrReferenceDate, rawValue);
        const start = dateWithNewSeconds;
        const end = dateWithNewSeconds;
        return !containsValidTime({
          start,
          end
        }) || !isValidValue(rawValue);
      }
      default:
        throw new Error("not supported");
    }
  }, [ampm, valueOrReferenceDate, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, minutesStep, shouldDisableClock, shouldDisableTime, utils, disableFuture, disablePast, now, views13]);
  const handleSectionChange = useEventCallback_default((sectionView, newValue) => {
    const viewIndex = views13.indexOf(sectionView);
    const nextView = views13[viewIndex + 1];
    setValueAndGoToView(newValue, nextView, sectionView);
  });
  const buildViewProps = React9.useCallback((viewToBuild) => {
    switch (viewToBuild) {
      case "hours": {
        return {
          onChange: (hours) => {
            const valueWithMeridiem = convertValueToMeridiem(hours, meridiemMode, ampm);
            handleSectionChange("hours", utils.setHours(valueOrReferenceDate, valueWithMeridiem));
          },
          items: getHourSectionOptions({
            now,
            value,
            ampm,
            utils,
            isDisabled: (hours) => disabled || isTimeDisabled(hours, "hours"),
            timeStep: timeSteps.hours,
            resolveAriaLabel: localeText.hoursClockNumberText
          })
        };
      }
      case "minutes": {
        return {
          onChange: (minutes) => {
            handleSectionChange("minutes", utils.setMinutes(valueOrReferenceDate, minutes));
          },
          items: getTimeSectionOptions({
            value: utils.getMinutes(valueOrReferenceDate),
            isDisabled: (minutes) => disabled || isTimeDisabled(minutes, "minutes"),
            resolveLabel: (minutes) => utils.format(utils.setMinutes(now, minutes), "minutes"),
            timeStep: timeSteps.minutes,
            hasValue: !!value,
            resolveAriaLabel: localeText.minutesClockNumberText
          })
        };
      }
      case "seconds": {
        return {
          onChange: (seconds) => {
            handleSectionChange("seconds", utils.setSeconds(valueOrReferenceDate, seconds));
          },
          items: getTimeSectionOptions({
            value: utils.getSeconds(valueOrReferenceDate),
            isDisabled: (seconds) => disabled || isTimeDisabled(seconds, "seconds"),
            resolveLabel: (seconds) => utils.format(utils.setSeconds(now, seconds), "seconds"),
            timeStep: timeSteps.seconds,
            hasValue: !!value,
            resolveAriaLabel: localeText.secondsClockNumberText
          })
        };
      }
      case "meridiem": {
        const amLabel = formatMeridiem(utils, "am");
        const pmLabel = formatMeridiem(utils, "pm");
        return {
          onChange: handleMeridiemChange,
          items: [{
            value: "am",
            label: amLabel,
            isSelected: () => !!value && meridiemMode === "am",
            ariaLabel: amLabel
          }, {
            value: "pm",
            label: pmLabel,
            isSelected: () => !!value && meridiemMode === "pm",
            ariaLabel: pmLabel
          }]
        };
      }
      default:
        throw new Error(`Unknown view: ${viewToBuild} found.`);
    }
  }, [now, value, ampm, utils, timeSteps.hours, timeSteps.minutes, timeSteps.seconds, localeText.hoursClockNumberText, localeText.minutesClockNumberText, localeText.secondsClockNumberText, meridiemMode, handleSectionChange, valueOrReferenceDate, disabled, isTimeDisabled, handleMeridiemChange]);
  const viewTimeOptions = React9.useMemo(() => {
    return views13.reduce((result, currentView) => {
      return _extends({}, result, {
        [currentView]: buildViewProps(currentView)
      });
    }, {});
  }, [views13, buildViewProps]);
  const ownerState = props;
  const classes = useUtilityClasses7(ownerState);
  return (0, import_jsx_runtime10.jsx)(MultiSectionDigitalClockRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState,
    role: "group"
  }, other, {
    children: Object.entries(viewTimeOptions).map(([timeView, viewOptions]) => (0, import_jsx_runtime10.jsx)(MultiSectionDigitalClockSection, {
      items: viewOptions.items,
      onChange: viewOptions.onChange,
      active: view === timeView,
      autoFocus: autoFocus != null ? autoFocus : focusedView === timeView,
      disabled,
      readOnly,
      slots: slots != null ? slots : components,
      slotProps: slotProps != null ? slotProps : componentsProps,
      skipDisabled,
      "aria-label": localeText.selectViewText(timeView)
    }, timeView))
  }));
});
true ? MultiSectionDigitalClock.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types3.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types3.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  className: import_prop_types3.default.string,
  /**
   * Overrideable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types3.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types3.default.object,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types3.default.any,
  /**
   * If `true`, the picker views and text field are disabled.
   * @default false
   */
  disabled: import_prop_types3.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types3.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types3.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types3.default.bool,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types3.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types3.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types3.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types3.default.number,
  /**
   * Callback fired when the value changes.
   * @template TDate, TView
   * @param {TDate | null} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: import_prop_types3.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types3.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types3.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types3.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * If `true`, the picker views and text field are read-only.
   * @default false
   */
  readOnly: import_prop_types3.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid time using the validation props, except callbacks such as `shouldDisableTime`.
   */
  referenceDate: import_prop_types3.default.any,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types3.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types3.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types3.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types3.default.object,
  /**
   * Overrideable component slots.
   * @default {}
   */
  slots: import_prop_types3.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types3.default.shape({
    hours: import_prop_types3.default.number,
    minutes: import_prop_types3.default.number,
    seconds: import_prop_types3.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types3.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types3.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types3.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Available views.
   */
  views: import_prop_types3.default.arrayOf(import_prop_types3.default.oneOf(["hours", "meridiem", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/@mui/x-date-pickers/locales/beBY.js
var views = {
  // maps TimeView to its translation
  hours: "гадзіны",
  minutes: "хвіліны",
  seconds: "секунды",
  meridiem: "мерыдыем"
};
var beBYPickers = {
  // Calendar navigation
  previousMonth: "Папярэдні месяц",
  nextMonth: "Наступны месяц",
  // View navigation
  openPreviousView: "адкрыць папярэдні выгляд",
  openNextView: "адкрыць наступны выгляд",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "гадавы выгляд адкрыты, перайсці да каляндарнага выгляду" : "каляндарны выгляд адкрыты, перайсці да гадавога выгляду",
  // DateRange placeholders
  start: "Пачатак",
  end: "Канец",
  // Action bar
  cancelButtonLabel: "Адмена",
  clearButtonLabel: "Ачысціць",
  okButtonLabel: "OK",
  todayButtonLabel: "Сёння",
  // Toolbar titles
  datePickerToolbarTitle: "Абраць дату",
  dateTimePickerToolbarTitle: "Абраць дату і час",
  timePickerToolbarTitle: "Абраць час",
  dateRangePickerToolbarTitle: "Абраць каляндарны перыяд",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Абярыце ${views[view]}. ${time === null ? "Час не абраны" : `Абраны час ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} гадзін`,
  minutesClockNumberText: (minutes) => `${minutes} хвілін`,
  secondsClockNumberText: (seconds) => `${seconds} секунд`,
  // Digital clock labels
  selectViewText: (view) => `Абярыце ${views[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Нумар тыдня",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Тыдзень ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Абраць дату, абрана дата  ${utils.format(value, "fullDate")}` : "Абраць дату",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Абраць час, абрыны час  ${utils.format(value, "fullTime")}` : "Абраць час",
  // Table labels
  timeTableLabel: "абраць час",
  dateTableLabel: "абраць дату",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var beBY = getPickersLocalization(beBYPickers);

// node_modules/@mui/x-date-pickers/locales/caES.js
var views2 = {
  hours: "les hores",
  minutes: "els minuts",
  seconds: "els segons",
  meridiem: "meridiem"
};
var caESPickers = {
  // Calendar navigation
  previousMonth: "Últim mes",
  nextMonth: "Pròxim mes",
  // View navigation
  openPreviousView: "obrir l'última vista",
  openNextView: "obrir la següent vista",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "la vista de l'any està oberta, canvie a la vista de calendari" : "la vista de calendari està oberta, canvie a la vista de l'any",
  // DateRange placeholders
  start: "Començar",
  end: "Terminar",
  // Action bar
  cancelButtonLabel: "Cancel·lar",
  clearButtonLabel: "Netejar",
  okButtonLabel: "OK",
  todayButtonLabel: "Hui",
  // Toolbar titles
  datePickerToolbarTitle: "Seleccionar data",
  dateTimePickerToolbarTitle: "Seleccionar data i hora",
  timePickerToolbarTitle: "Seleccionar hora",
  dateRangePickerToolbarTitle: "Seleccionar rang de dates",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Seleccione ${views2[view]}. ${time === null ? "Sense temps seleccionat" : `El temps seleccionat és ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} hores`,
  minutesClockNumberText: (minutes) => `${minutes} minuts`,
  secondsClockNumberText: (seconds) => `${seconds} segons`,
  // Digital clock labels
  selectViewText: (view) => `Seleccionar ${views2[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Número de setmana",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Setmana ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Tria la data, la data triada és ${utils.format(value, "fullDate")}` : "Tria la data",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Tria l'hora, l'hora triada és ${utils.format(value, "fullTime")}` : "Tria l'hora",
  // Table labels
  timeTableLabel: "tria la data",
  dateTableLabel: "tria l'hora",
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
var caES = getPickersLocalization(caESPickers);

// node_modules/@mui/x-date-pickers/locales/csCZ.js
var timeViews = {
  hours: "Hodiny",
  minutes: "Minuty",
  seconds: "Sekundy",
  meridiem: "Odpoledne"
};
var csCZPickers = {
  // Calendar navigation
  previousMonth: "Předchozí měsíc",
  nextMonth: "Další měsíc",
  // View navigation
  openPreviousView: "otevřít předchozí zobrazení",
  openNextView: "otevřít další zobrazení",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "roční zobrazení otevřeno, přepněte do zobrazení kalendáře" : "zobrazení kalendáře otevřeno, přepněte do zobrazení roku",
  // DateRange placeholders
  start: "Začátek",
  end: "Konec",
  // Action bar
  cancelButtonLabel: "Zrušit",
  clearButtonLabel: "Vymazat",
  okButtonLabel: "Potvrdit",
  todayButtonLabel: "Dnes",
  // Toolbar titles
  datePickerToolbarTitle: "Vyberte datum",
  dateTimePickerToolbarTitle: "Vyberte datum a čas",
  timePickerToolbarTitle: "Vyberte čas",
  dateRangePickerToolbarTitle: "Vyberete rozmezí dat",
  // Clock labels
  clockLabelText: (view, time, adapter) => {
    var _timeViews$view;
    return `${(_timeViews$view = timeViews[view]) != null ? _timeViews$view : view} vybrány. ${time === null ? "Není vybrán čas" : `Vybraný čas je ${adapter.format(time, "fullTime")}`}`;
  },
  hoursClockNumberText: (hours) => `${hours} hodin`,
  minutesClockNumberText: (minutes) => `${minutes} minut`,
  secondsClockNumberText: (seconds) => `${seconds} sekund`,
  // Digital clock labels
  selectViewText: (view) => `Vyberte ${timeViews[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Týden v roce",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber} týden v roce`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Vyberte datum, vybrané datum je ${utils.format(value, "fullDate")}` : "Vyberte datum",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Vyberte čas, vybraný čas je ${utils.format(value, "fullTime")}` : "Vyberte čas",
  // Table labels
  timeTableLabel: "vyberte čas",
  dateTableLabel: "vyberte datum",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var csCZ = getPickersLocalization(csCZPickers);

// node_modules/@mui/x-date-pickers/locales/deDE.js
var timeViews2 = {
  hours: "Stunden",
  minutes: "Minuten",
  seconds: "Sekunden",
  meridiem: "Meridiem"
};
var deDEPickers = {
  // Calendar navigation
  previousMonth: "Letzter Monat",
  nextMonth: "Nächster Monat",
  // View navigation
  openPreviousView: "Letzte Ansicht öffnen",
  openNextView: "Nächste Ansicht öffnen",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "Jahresansicht ist geöffnet, zur Kalenderansicht wechseln" : "Kalenderansicht ist geöffnet, zur Jahresansicht wechseln",
  // DateRange placeholders
  start: "Beginn",
  end: "Ende",
  // Action bar
  cancelButtonLabel: "Abbrechen",
  clearButtonLabel: "Löschen",
  okButtonLabel: "OK",
  todayButtonLabel: "Heute",
  // Toolbar titles
  datePickerToolbarTitle: "Datum auswählen",
  dateTimePickerToolbarTitle: "Datum & Uhrzeit auswählen",
  timePickerToolbarTitle: "Uhrzeit auswählen",
  dateRangePickerToolbarTitle: "Datumsbereich auswählen",
  // Clock labels
  clockLabelText: (view, time, adapter) => {
    var _timeViews$view;
    return `${(_timeViews$view = timeViews2[view]) != null ? _timeViews$view : view} auswählen. ${time === null ? "Keine Uhrzeit ausgewählt" : `Gewählte Uhrzeit ist ${adapter.format(time, "fullTime")}`}`;
  },
  hoursClockNumberText: (hours) => `${hours} ${timeViews2.hours}`,
  minutesClockNumberText: (minutes) => `${minutes} ${timeViews2.minutes}`,
  secondsClockNumberText: (seconds) => `${seconds}  ${timeViews2.seconds}`,
  // Digital clock labels
  selectViewText: (view) => `${timeViews2[view]} auswählen`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Kalenderwoche",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Woche ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Datum auswählen, gewähltes Datum ist ${utils.format(value, "fullDate")}` : "Datum auswählen",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Uhrzeit auswählen, gewählte Uhrzeit ist ${utils.format(value, "fullTime")}` : "Uhrzeit auswählen",
  // Table labels
  timeTableLabel: "Uhrzeit auswählen",
  dateTableLabel: "Datum auswählen",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "J".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "TT",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var deDE = getPickersLocalization(deDEPickers);

// node_modules/@mui/x-date-pickers/locales/elGR.js
var views3 = {
  hours: "ώρες",
  minutes: "λεπτά",
  seconds: "δευτερόλεπτα",
  meridiem: "μεσημβρία"
};
var elGRPickers = {
  // Calendar navigation
  previousMonth: "Προηγούμενος μήνας",
  nextMonth: "Επόμενος μήνας",
  // View navigation
  openPreviousView: "ανοίγμα προηγούμενης προβολή",
  openNextView: "ανοίγμα επόμενης προβολή",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "η προβολή έτους είναι ανοιχτή, μεταβείτε στην προβολή ημερολογίου" : "η προβολή ημερολογίου είναι ανοιχτή, μεταβείτε στην προβολή έτους",
  // DateRange placeholders
  start: "Αρχή",
  end: "Τέλος",
  // Action bar
  cancelButtonLabel: "Άκυρο",
  clearButtonLabel: "Καθαρισμός",
  okButtonLabel: "OK",
  todayButtonLabel: "Σήμερα",
  // Toolbar titles
  datePickerToolbarTitle: "Επιλέξτε ημερομηνία",
  dateTimePickerToolbarTitle: "Επιλέξτε ημερομηνία και ώρα",
  timePickerToolbarTitle: "Επιλέξτε ώρα",
  dateRangePickerToolbarTitle: "Επιλέξτε εύρος ημερομηνιών",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Επιλέξτε ${views3[view]}. ${time === null ? "Δεν έχει επιλεγεί ώρα" : `Η επιλεγμένη ώρα είναι ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} ώρες`,
  minutesClockNumberText: (minutes) => `${minutes} λεπτά`,
  secondsClockNumberText: (seconds) => `${seconds} δευτερόλεπτα`,
  // Digital clock labels
  selectViewText: (view) => `Επιλέξτε ${views3[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Αριθμός εβδομάδας",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Εβδομάδα ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Επιλέξτε ημερομηνία, η επιλεγμένη ημερομηνία είναι ${utils.format(value, "fullDate")}` : "Επιλέξτε ημερομηνία",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Επιλέξτε ώρα, η επιλεγμένη ώρα είναι ${utils.format(value, "fullTime")}` : "Επιλέξτε ώρα",
  // Table labels
  timeTableLabel: "επιλέξτε ώρα",
  dateTableLabel: "επιλέξτε ημερομηνία",
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
var elGR = getPickersLocalization(elGRPickers);

// node_modules/@mui/x-date-pickers/locales/esES.js
var views4 = {
  hours: "las horas",
  minutes: "los minutos",
  seconds: "los segundos",
  meridiem: "meridiano"
};
var esESPickers = {
  // Calendar navigation
  previousMonth: "Último mes",
  nextMonth: "Próximo mes",
  // View navigation
  openPreviousView: "abrir la última vista",
  openNextView: "abrir la siguiente vista",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "la vista del año está abierta, cambie a la vista de calendario" : "la vista de calendario está abierta, cambie a la vista del año",
  // DateRange placeholders
  start: "Empezar",
  end: "Terminar",
  // Action bar
  cancelButtonLabel: "Cancelar",
  clearButtonLabel: "Limpiar",
  okButtonLabel: "OK",
  todayButtonLabel: "Hoy",
  // Toolbar titles
  datePickerToolbarTitle: "Seleccionar fecha",
  dateTimePickerToolbarTitle: "Seleccionar fecha y hora",
  timePickerToolbarTitle: "Seleccionar hora",
  dateRangePickerToolbarTitle: "Seleccionar rango de fecha",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Seleccione ${views4[view]}. ${time === null ? "Sin tiempo seleccionado" : `El tiempo seleccionado es ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} horas`,
  minutesClockNumberText: (minutes) => `${minutes} minutos`,
  secondsClockNumberText: (seconds) => `${seconds} segundos`,
  // Digital clock labels
  selectViewText: (view) => `Seleccionar ${views4[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Número de semana",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Semana ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Elige la fecha, la fecha elegida es ${utils.format(value, "fullDate")}` : "Elige la fecha",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Elige la hora, la hora elegido es ${utils.format(value, "fullTime")}` : "Elige la hora",
  // Table labels
  timeTableLabel: "elige la fecha",
  dateTableLabel: "elige la hora",
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
var esES = getPickersLocalization(esESPickers);

// node_modules/@mui/x-date-pickers/locales/faIR.js
var timeViews3 = {
  hours: "ساعت ها",
  minutes: "دقیقه ها",
  seconds: "ثانیه ها",
  meridiem: "بعد از ظهر"
};
var faIRPickers = {
  // Calendar navigation
  previousMonth: "ماه گذشته",
  nextMonth: "ماه آینده",
  // View navigation
  openPreviousView: "نمای قبلی",
  openNextView: "نمای بعدی",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "نمای سال باز است، رفتن به نمای تقویم" : "نمای تقویم باز است، رفتن به نمای سال",
  // DateRange placeholders
  start: "شروع",
  end: "پایان",
  // Action bar
  cancelButtonLabel: "لغو",
  clearButtonLabel: "پاک کردن",
  okButtonLabel: "اوکی",
  todayButtonLabel: "امروز",
  // Toolbar titles
  datePickerToolbarTitle: "تاریخ را انتخاب کنید",
  dateTimePickerToolbarTitle: "تاریخ و ساعت را انتخاب کنید",
  timePickerToolbarTitle: "ساعت را انتخاب کنید",
  dateRangePickerToolbarTitle: "محدوده تاریخ را انتخاب کنید",
  // Clock labels
  clockLabelText: (view, time, adapter) => ` را انتخاب کنید ${timeViews3[view]}. ${time === null ? "هیچ ساعتی انتخاب نشده است" : `ساعت انتخاب ${adapter.format(time, "fullTime")} می باشد`}`,
  hoursClockNumberText: (hours) => `${hours} ساعت ها`,
  minutesClockNumberText: (minutes) => `${minutes} دقیقه ها`,
  secondsClockNumberText: (seconds) => `${seconds} ثانیه ها`,
  // Digital clock labels
  selectViewText: (view) => ` را انتخاب کنید ${timeViews3[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "عدد هفته",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `هفته ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `تاریخ را انتخاب کنید، تاریخ انتخاب شده ${utils.format(value, "fullDate")} می باشد` : "تاریخ را انتخاب کنید",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `ساعت را انتخاب کنید، ساعت انتخاب شده ${utils.format(value, "fullTime")} می باشد` : "ساعت را انتخاب کنید",
  // Table labels
  timeTableLabel: "انتخاب تاریخ",
  dateTableLabel: "انتخاب ساعت",
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
var faIR = getPickersLocalization(faIRPickers);

// node_modules/@mui/x-date-pickers/locales/fiFI.js
var views5 = {
  hours: "tunnit",
  minutes: "minuutit",
  seconds: "sekuntit",
  meridiem: "iltapäivä"
};
var fiFIPickers = {
  // Calendar navigation
  previousMonth: "Edellinen kuukausi",
  nextMonth: "Seuraava kuukausi",
  // View navigation
  openPreviousView: "avaa edellinen kuukausi",
  openNextView: "avaa seuraava kuukausi",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "vuosinäkymä on auki, vaihda kalenterinäkymään" : "kalenterinäkymä on auki, vaihda vuosinäkymään",
  // DateRange placeholders
  start: "Alku",
  end: "Loppu",
  // Action bar
  cancelButtonLabel: "Peruuta",
  clearButtonLabel: "Tyhjennä",
  okButtonLabel: "OK",
  todayButtonLabel: "Tänään",
  // Toolbar titles
  datePickerToolbarTitle: "Valitse päivä",
  dateTimePickerToolbarTitle: "Valitse päivä ja aika",
  timePickerToolbarTitle: "Valitse aika",
  dateRangePickerToolbarTitle: "Valitse aikaväli",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Valitse ${views5[view]}. ${time === null ? "Ei aikaa valittuna" : `Valittu aika on ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} tuntia`,
  minutesClockNumberText: (minutes) => `${minutes} minuuttia`,
  secondsClockNumberText: (seconds) => `${seconds} sekunttia`,
  // Digital clock labels
  selectViewText: (view) => `Valitse ${views5[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Viikko",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Viikko ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Valitse päivä, valittu päivä on ${utils.format(value, "fullDate")}` : "Valitse päivä",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Valitse aika, valittu aika on ${utils.format(value, "fullTime")}` : "Valitse aika",
  // Table labels
  timeTableLabel: "valitse aika",
  dateTableLabel: "valitse päivä"
  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',
};
var fiFI = getPickersLocalization(fiFIPickers);

// node_modules/@mui/x-date-pickers/locales/frFR.js
var views6 = {
  hours: "heures",
  minutes: "minutes",
  seconds: "secondes",
  meridiem: "méridien"
};
var frFRPickers = {
  // Calendar navigation
  previousMonth: "Mois précédent",
  nextMonth: "Mois suivant",
  // View navigation
  openPreviousView: "Ouvrir la vue précédente",
  openNextView: "Ouvrir la vue suivante",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "La vue année est ouverte, ouvrir la vue calendrier" : "La vue calendrier est ouverte, ouvrir la vue année",
  // DateRange placeholders
  start: "Début",
  end: "Fin",
  // Action bar
  cancelButtonLabel: "Annuler",
  clearButtonLabel: "Vider",
  okButtonLabel: "OK",
  todayButtonLabel: "Aujourd'hui",
  // Toolbar titles
  datePickerToolbarTitle: "Choisir une date",
  dateTimePickerToolbarTitle: "Choisir la date et l'heure",
  timePickerToolbarTitle: "Choisir l'heure",
  dateRangePickerToolbarTitle: "Choisir la plage de dates",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Choix des ${views6[view]}. ${time === null ? "Aucune heure choisie" : `L'heure choisie est ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} heures`,
  minutesClockNumberText: (minutes) => `${minutes} minutes`,
  secondsClockNumberText: (seconds) => `${seconds} secondes`,
  // Digital clock labels
  selectViewText: (view) => `Choisir ${views6[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Semaine",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Semaine ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choisir la date, la date sélectionnée est ${utils.format(value, "fullDate")}` : "Choisir la date",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Choisir l'heure, l'heure sélectionnée est ${utils.format(value, "fullTime")}` : "Choisir l'heure",
  // Table labels
  timeTableLabel: "choix de l'heure",
  dateTableLabel: "choix de la date",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "JJ",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var frFR = getPickersLocalization(frFRPickers);

// node_modules/@mui/x-date-pickers/locales/heIL.js
var views7 = {
  hours: "שעות",
  minutes: "דקות",
  seconds: "שניות",
  meridiem: "מרידיאם"
};
var heILPickers = {
  // Calendar navigation
  previousMonth: "חודש קודם",
  nextMonth: "חודש הבא",
  // View navigation
  openPreviousView: "תצוגה קודמת",
  openNextView: "תצוגה הבאה",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "תצוגת שנה פתוחה, מעבר לתצוגת לוח שנה" : "תצוגת לוח שנה פתוחה, מעבר לתצוגת שנה",
  // DateRange placeholders
  start: "תחילה",
  end: "סיום",
  // Action bar
  cancelButtonLabel: "ביטול",
  clearButtonLabel: "ניקוי",
  okButtonLabel: "אישור",
  todayButtonLabel: "היום",
  // Toolbar titles
  datePickerToolbarTitle: "בחירת תאריך",
  dateTimePickerToolbarTitle: "בחירת תאריך ושעה",
  timePickerToolbarTitle: "בחירת שעה",
  dateRangePickerToolbarTitle: "בחירת טווח תאריכים",
  // Clock labels
  clockLabelText: (view, time, adapter) => `בחירת ${views7[view]}. ${time === null ? "לא נבחרה שעה" : `השעה הנבחרת היא ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} שעות`,
  minutesClockNumberText: (minutes) => `${minutes} דקות`,
  secondsClockNumberText: (seconds) => `${seconds} שניות`,
  // Digital clock labels
  selectViewText: (view) => `בחירת ${views7[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "שבוע מספר",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `שבוע ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `בחירת תאריך, התאריך שנבחר הוא ${utils.format(value, "fullDate")}` : "בחירת תאריך",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `בחירת שעה, השעה שנבחרה היא ${utils.format(value, "fullTime")}` : "בחירת שעה",
  // Table labels
  timeTableLabel: "בחירת שעה",
  dateTableLabel: "בחירת תאריך",
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
var heIL = getPickersLocalization(heILPickers);

// node_modules/@mui/x-date-pickers/locales/huHU.js
var timeViews4 = {
  hours: "Óra",
  minutes: "Perc",
  seconds: "Másodperc",
  meridiem: "Délután"
};
var huHUPickers = {
  // Calendar navigation
  previousMonth: "Előző hónap",
  nextMonth: "Következő hónap",
  // View navigation
  openPreviousView: "Előző nézet megnyitása",
  openNextView: "Következő nézet megnyitása",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "az évválasztó már nyitva, váltson a naptárnézetre" : "a naptárnézet már nyitva, váltson az évválasztóra",
  // DateRange placeholders
  start: "Kezdő dátum",
  end: "Záró dátum",
  // Action bar
  cancelButtonLabel: "Mégse",
  clearButtonLabel: "Törlés",
  okButtonLabel: "OK",
  todayButtonLabel: "Ma",
  // Toolbar titles
  datePickerToolbarTitle: "Dátum kiválasztása",
  dateTimePickerToolbarTitle: "Dátum és idő kiválasztása",
  timePickerToolbarTitle: "Idő kiválasztása",
  dateRangePickerToolbarTitle: "Dátumhatárok kiválasztása",
  // Clock labels
  clockLabelText: (view, time, adapter) => {
    var _timeViews$view;
    return `${(_timeViews$view = timeViews4[view]) != null ? _timeViews$view : view} kiválasztása. ${time === null ? "Nincs kiválasztva idő" : `A kiválasztott idő ${adapter.format(time, "fullTime")}`}`;
  },
  hoursClockNumberText: (hours) => `${hours} ${timeViews4.hours.toLowerCase()}`,
  minutesClockNumberText: (minutes) => `${minutes} ${timeViews4.minutes.toLowerCase()}`,
  secondsClockNumberText: (seconds) => `${seconds}  ${timeViews4.seconds.toLowerCase()}`,
  // Digital clock labels
  selectViewText: (view) => `${timeViews4[view]} kiválasztása`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Hét",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber}. hét`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Válasszon dátumot, a kiválasztott dátum: ${utils.format(value, "fullDate")}` : "Válasszon dátumot",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Válasszon időt, a kiválasztott idő: ${utils.format(value, "fullTime")}` : "Válasszon időt",
  // Table labels
  timeTableLabel: "válasszon időt",
  dateTableLabel: "válasszon dátumot",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "É".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "HHHH" : "HH",
  fieldDayPlaceholder: () => "NN",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "óó",
  fieldMinutesPlaceholder: () => "pp",
  fieldSecondsPlaceholder: () => "mm",
  fieldMeridiemPlaceholder: () => "dd"
};
var huHU = getPickersLocalization(huHUPickers);

// node_modules/@mui/x-date-pickers/locales/isIS.js
var timeViews5 = {
  hours: "klukkustundir",
  minutes: "mínútur",
  seconds: "sekúndur",
  meridiem: "eftirmiðdagur"
};
var isISPickers = {
  // Calendar navigation
  previousMonth: "Fyrri mánuður",
  nextMonth: "Næsti mánuður",
  // View navigation
  openPreviousView: "opna fyrri skoðun",
  openNextView: "opna næstu skoðun",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "ársskoðun er opin, skipta yfir í dagatalsskoðun" : "dagatalsskoðun er opin, skipta yfir í ársskoðun",
  // DateRange placeholders
  start: "Upphaf",
  end: "Endir",
  // Action bar
  cancelButtonLabel: "Hætta við",
  clearButtonLabel: "Hreinsa",
  okButtonLabel: "OK",
  todayButtonLabel: "Í dag",
  // Toolbar titles
  datePickerToolbarTitle: "Velja dagsetningu",
  dateTimePickerToolbarTitle: "Velja dagsetningu og tíma",
  timePickerToolbarTitle: "Velja tíma",
  dateRangePickerToolbarTitle: "Velja tímabil",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Velja ${timeViews5[view]}. ${time === null ? "Enginn tími valinn" : `Valinn tími er ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} klukkustundir`,
  minutesClockNumberText: (minutes) => `${minutes} mínútur`,
  secondsClockNumberText: (seconds) => `${seconds} sekúndur`,
  // Digital clock labels
  selectViewText: (view) => `Velja ${timeViews5[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Vikunúmer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Vika ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Velja dagsetningu, valin dagsetning er ${utils.format(value, "fullDate")}` : "Velja dagsetningu",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Velja tíma, valinn tími er ${utils.format(value, "fullTime")}` : "Velja tíma",
  // Table labels
  timeTableLabel: "velja tíma",
  dateTableLabel: "velja dagsetningu",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Á".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "kk",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "ee"
};
var isIS = getPickersLocalization(isISPickers);

// node_modules/@mui/x-date-pickers/locales/itIT.js
var views8 = {
  hours: "le ore",
  minutes: "i minuti",
  seconds: "i secondi",
  meridiem: "il meridiano"
};
var itITPickers = {
  // Calendar navigation
  previousMonth: "Mese precedente",
  nextMonth: "Mese successivo",
  // View navigation
  openPreviousView: "apri la vista precedente",
  openNextView: "apri la vista successiva",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "la vista dell'anno è aperta, passare alla vista del calendario" : "la vista dell'calendario è aperta, passare alla vista dell'anno",
  // DateRange placeholders
  start: "Inizio",
  end: "Fine",
  // Action bar
  cancelButtonLabel: "Cancellare",
  clearButtonLabel: "Sgomberare",
  okButtonLabel: "OK",
  todayButtonLabel: "Oggi",
  // Toolbar titles
  datePickerToolbarTitle: "Seleziona data",
  dateTimePickerToolbarTitle: "Seleziona data e orario",
  timePickerToolbarTitle: "Seleziona orario",
  dateRangePickerToolbarTitle: "Seleziona intervallo di date",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Seleziona ${views8[view]}. ${time === null ? "Nessun orario selezionato" : `L'ora selezionata è ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} ore`,
  minutesClockNumberText: (minutes) => `${minutes} minuti`,
  secondsClockNumberText: (seconds) => `${seconds} secondi`,
  // Digital clock labels
  selectViewText: (view) => `Seleziona ${views8[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Numero settimana",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Settimana ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Scegli la data, la data selezionata è ${utils.format(value, "fullDate")}` : "Scegli la data",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Scegli l'ora, l'ora selezionata è ${utils.format(value, "fullTime")}` : "Scegli l'ora",
  // Table labels
  timeTableLabel: "scegli un'ora",
  dateTableLabel: "scegli una data",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "GG",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var itIT = getPickersLocalization(itITPickers);

// node_modules/@mui/x-date-pickers/locales/jaJP.js
var timeViews6 = {
  hours: "時間",
  minutes: "分",
  seconds: "秒",
  meridiem: "メリディム"
};
var jaJPPickers = {
  // Calendar navigation
  previousMonth: "先月",
  nextMonth: "来月",
  // View navigation
  openPreviousView: "前の表示を開く",
  openNextView: "次の表示を開く",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "年選択表示からカレンダー表示に切り替える" : "カレンダー表示から年選択表示に切り替える",
  // DateRange placeholders
  start: "開始",
  end: "終了",
  // Action bar
  cancelButtonLabel: "キャンセル",
  clearButtonLabel: "クリア",
  okButtonLabel: "確定",
  todayButtonLabel: "今日",
  // Toolbar titles
  datePickerToolbarTitle: "日付を選択",
  dateTimePickerToolbarTitle: "日時を選択",
  timePickerToolbarTitle: "時間を選択",
  dateRangePickerToolbarTitle: "日付の範囲を選択",
  // Clock labels
  clockLabelText: (view, time, adapter) => {
    var _timeViews$view;
    return `${(_timeViews$view = timeViews6[view]) != null ? _timeViews$view : view}を選択してください ${time === null ? "時間が選択されていません" : `選択した時間は ${adapter.format(time, "fullTime")} です`}`;
  },
  hoursClockNumberText: (hours) => `${hours} ${timeViews6.hours}`,
  minutesClockNumberText: (minutes) => `${minutes} ${timeViews6.minutes}`,
  secondsClockNumberText: (seconds) => `${seconds} ${timeViews6.seconds}`,
  // Digital clock labels
  selectViewText: (view) => `を選択 ${timeViews6[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "週番号",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber}週目`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `日付を選択してください。選択した日付は ${utils.format(value, "fullDate")} です` : "日付を選択してください",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `時間を選択してください。選択した時間は ${utils.format(value, "fullTime")} です` : "時間を選択してください",
  // Table labels
  timeTableLabel: "時間を選択",
  dateTableLabel: "日付を選択",
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
var jaJP = getPickersLocalization(jaJPPickers);

// node_modules/@mui/x-date-pickers/locales/koKR.js
var views9 = {
  hours: "시간을",
  minutes: "분을",
  seconds: "초를",
  meridiem: "메리디엠"
};
var koKRPickers = {
  // Calendar navigation
  previousMonth: "이전 달",
  nextMonth: "다음 달",
  // View navigation
  openPreviousView: "이전 화면 보기",
  openNextView: "다음 화면 보기",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "연도 선택 화면에서 달력 화면으로 전환하기" : "달력 화면에서 연도 선택 화면으로 전환하기",
  // DateRange placeholders
  start: "시작",
  end: "종료",
  // Action bar
  cancelButtonLabel: "취소",
  clearButtonLabel: "초기화",
  okButtonLabel: "확인",
  todayButtonLabel: "오늘",
  // Toolbar titles
  datePickerToolbarTitle: "날짜 선택하기",
  dateTimePickerToolbarTitle: "날짜 & 시간 선택하기",
  timePickerToolbarTitle: "시간 선택하기",
  dateRangePickerToolbarTitle: "날짜 범위 선택하기",
  // Clock labels
  clockLabelText: (view, time, adapter) => `${views9[view]} 선택하세요. ${time === null ? "시간을 선택하지 않았습니다." : `현재 선택된 시간은 ${adapter.format(time, "fullTime")}입니다.`}`,
  hoursClockNumberText: (hours) => `${hours}시간`,
  minutesClockNumberText: (minutes) => `${minutes}분`,
  secondsClockNumberText: (seconds) => `${seconds}초`,
  // Digital clock labels
  selectViewText: (view) => `${views9[view]} 선택하기`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "주 번호",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber}번째 주`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `날짜를 선택하세요. 현재 선택된 날짜는 ${utils.format(value, "fullDate")}입니다.` : "날짜를 선택하세요",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `시간을 선택하세요. 현재 선택된 시간은 ${utils.format(value, "fullTime")}입니다.` : "시간을 선택하세요",
  // Table labels
  timeTableLabel: "선택한 시간",
  dateTableLabel: "선택한 날짜",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var koKR = getPickersLocalization(koKRPickers);

// node_modules/@mui/x-date-pickers/locales/kzKZ.js
var timeViews7 = {
  hours: "Сағатты",
  minutes: "Минутты",
  seconds: "Секундты",
  meridiem: "Меридием"
};
var kzKZPickers = {
  // Calendar navigation
  previousMonth: "Алдыңғы ай",
  nextMonth: "Келесі ай",
  // View navigation
  openPreviousView: "Алдыңғы көріністі ашу",
  openNextView: "Келесі көріністі ашу",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "жылдық көріністі ашу, күнтізбе көрінісіне ауысу" : "күнтізбе көрінісін ашу, жылдық көрінісіне ауысу",
  // DateRange placeholders
  start: "Бастау",
  end: "Cоңы",
  // Action bar
  cancelButtonLabel: "Бас тарту",
  clearButtonLabel: "Тазарту",
  okButtonLabel: "Ок",
  todayButtonLabel: "Бүгін",
  // Toolbar titles
  datePickerToolbarTitle: "Күнді таңдау",
  dateTimePickerToolbarTitle: "Күн мен уақытты таңдау",
  timePickerToolbarTitle: "Уақытты таңдау",
  dateRangePickerToolbarTitle: "Кезеңді таңдаңыз",
  // Clock labels
  clockLabelText: (view, time, adapter) => `${timeViews7[view]} таңдау. ${time === null ? "Уақыт таңдалмаған" : `Таңдалған уақыт ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} сағат`,
  minutesClockNumberText: (minutes) => `${minutes} минут`,
  secondsClockNumberText: (seconds) => `${seconds} секунд`,
  // Digital clock labels
  selectViewText: (view) => `${timeViews7[view]} таңдау`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Апта нөмірі",
  calendarWeekNumberHeaderText: "№",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Апта ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Күнді таңдаңыз, таңдалған күн ${utils.format(value, "fullDate")}` : "Күнді таңдаңыз",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Уақытты таңдаңыз, таңдалған уақыт ${utils.format(value, "fullTime")}` : "Уақытты таңдаңыз",
  // Table labels
  timeTableLabel: "уақытты таңдау",
  dateTableLabel: "күнді таңдау",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Ж".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "AAAA" : "AA",
  fieldDayPlaceholder: () => "КК",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "сс",
  fieldMinutesPlaceholder: () => "мм",
  fieldSecondsPlaceholder: () => "сс",
  fieldMeridiemPlaceholder: () => "(т|к)"
};
var kzKZ = getPickersLocalization(kzKZPickers);

// node_modules/@mui/x-date-pickers/locales/nbNO.js
var timeViews8 = {
  hours: "timer",
  minutes: "minutter",
  seconds: "sekunder",
  meridiem: "meridiem"
};
var nbNOPickers = {
  // Calendar navigation
  previousMonth: "Forrige måned",
  nextMonth: "Neste måned",
  // View navigation
  openPreviousView: "åpne forrige visning",
  openNextView: "åpne neste visning",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "årsvisning er åpen, bytt til kalendervisning" : "kalendervisning er åpen, bytt til årsvisning",
  // DateRange placeholders
  start: "Start",
  end: "Slutt",
  // Action bar
  cancelButtonLabel: "Avbryt",
  clearButtonLabel: "Fjern",
  okButtonLabel: "OK",
  todayButtonLabel: "I dag",
  // Toolbar titles
  datePickerToolbarTitle: "Velg dato",
  dateTimePickerToolbarTitle: "Velg dato & klokkeslett",
  timePickerToolbarTitle: "Velg klokkeslett",
  dateRangePickerToolbarTitle: "Velg datoperiode",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Velg ${timeViews8[view]}. ${time === null ? "Ingen tid valgt" : `Valgt tid er ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} timer`,
  minutesClockNumberText: (minutes) => `${minutes} minutter`,
  secondsClockNumberText: (seconds) => `${seconds} sekunder`,
  // Digital clock labels
  selectViewText: (view) => `Velg ${timeViews8[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Ukenummer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Uke ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Velg dato, valgt dato er ${utils.format(value, "fullDate")}` : "Velg dato",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Velg tid, valgt tid er ${utils.format(value, "fullTime")}` : "Velg tid",
  // Table labels
  timeTableLabel: "velg tid",
  dateTableLabel: "velg dato",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Å".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "tt",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var nbNO = getPickersLocalization(nbNOPickers);

// node_modules/@mui/x-date-pickers/locales/nlNL.js
var timeViews9 = {
  hours: "uren",
  minutes: "minuten",
  seconds: "seconden",
  meridiem: "meridium"
};
var nlNLPickers = {
  // Calendar navigation
  previousMonth: "Vorige maand",
  nextMonth: "Volgende maand",
  // View navigation
  openPreviousView: "open vorige view",
  openNextView: "open volgende view",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "jaarweergave is geopend, schakel over naar kalenderweergave" : "kalenderweergave is geopend, switch naar jaarweergave",
  // DateRange placeholders
  start: "Start",
  end: "Einde",
  // Action bar
  cancelButtonLabel: "Annuleren",
  clearButtonLabel: "Resetten",
  okButtonLabel: "OK",
  todayButtonLabel: "Vandaag",
  // Toolbar titles
  datePickerToolbarTitle: "Selecteer datum",
  dateTimePickerToolbarTitle: "Selecteer datum & tijd",
  timePickerToolbarTitle: "Selecteer tijd",
  dateRangePickerToolbarTitle: "Selecteer datumbereik",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Selecteer ${timeViews9[view]}. ${time === null ? "Geen tijd geselecteerd" : `Geselecteerde tijd is ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} uren`,
  minutesClockNumberText: (minutes) => `${minutes} minuten`,
  secondsClockNumberText: (seconds) => `${seconds} seconden`,
  // Digital clock labels
  selectViewText: (view) => `Selecteer ${timeViews9[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Weeknummer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Kies datum, geselecteerde datum is ${utils.format(value, "fullDate")}` : "Kies datum",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Kies tijd, geselecteerde tijd is ${utils.format(value, "fullTime")}` : "Kies tijd",
  // Table labels
  timeTableLabel: "kies tijd",
  dateTableLabel: "kies datum",
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
var nlNL = getPickersLocalization(nlNLPickers);

// node_modules/@mui/x-date-pickers/locales/plPL.js
var timeViews10 = {
  hours: "godzin",
  minutes: "minut",
  seconds: "sekund",
  meridiem: "popołudnie"
};
var plPLPickers = {
  // Calendar navigation
  previousMonth: "Poprzedni miesiąc",
  nextMonth: "Następny miesiąc",
  // View navigation
  openPreviousView: "otwórz poprzedni widok",
  openNextView: "otwórz następny widok",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "otwarty jest widok roku, przełącz na widok kalendarza" : "otwarty jest widok kalendarza, przełącz na widok roku",
  // DateRange placeholders
  start: "Początek",
  end: "Koniec",
  // Action bar
  cancelButtonLabel: "Anuluj",
  clearButtonLabel: "Wyczyść",
  okButtonLabel: "Zatwierdź",
  todayButtonLabel: "Dzisiaj",
  // Toolbar titles
  datePickerToolbarTitle: "Wybierz datę",
  dateTimePickerToolbarTitle: "Wybierz datę i czas",
  timePickerToolbarTitle: "Wybierz czas",
  dateRangePickerToolbarTitle: "Wybierz zakres dat",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Wybierz ${timeViews10[view]}. ${time === null ? "Nie wybrano czasu" : `Wybrany czas to ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} godzin`,
  minutesClockNumberText: (minutes) => `${minutes} minut`,
  secondsClockNumberText: (seconds) => `${seconds} sekund`,
  // Digital clock labels
  selectViewText: (view) => `Wybierz ${timeViews10[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Numer tygodnia",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Tydzień ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value != null && utils.isValid(value) ? `Wybierz datę, obecnie wybrana data to ${utils.format(value, "fullDate")}` : "Wybierz datę",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Wybierz czas, obecnie wybrany czas to ${utils.format(value, "fullTime")}` : "Wybierz czas",
  // Table labels
  timeTableLabel: "wybierz czas",
  dateTableLabel: "wybierz datę"
  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',
};
var plPL = getPickersLocalization(plPLPickers);

// node_modules/@mui/x-date-pickers/locales/ptBR.js
var timeViews11 = {
  hours: "horas",
  minutes: "minutos",
  seconds: "segundos",
  meridiem: "meridiano"
};
var ptBRPickers = {
  // Calendar navigation
  previousMonth: "Mês anterior",
  nextMonth: "Próximo mês",
  // View navigation
  openPreviousView: "Abrir próxima seleção",
  openNextView: "Abrir seleção anterior",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "Seleção de ano está aberta, alternando para seleção de calendário" : "Seleção de calendários está aberta, alternando para seleção de ano",
  // DateRange placeholders
  start: "Início",
  end: "Fim",
  // Action bar
  cancelButtonLabel: "Cancelar",
  clearButtonLabel: "Limpar",
  okButtonLabel: "OK",
  todayButtonLabel: "Hoje",
  // Toolbar titles
  datePickerToolbarTitle: "Selecione a data",
  dateTimePickerToolbarTitle: "Selecione data e hora",
  timePickerToolbarTitle: "Selecione a hora",
  dateRangePickerToolbarTitle: "Selecione o intervalo entre datas",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Selecione ${timeViews11[view]}. ${time === null ? "Hora não selecionada" : `Selecionado a hora ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} horas`,
  minutesClockNumberText: (minutes) => `${minutes} minutos`,
  secondsClockNumberText: (seconds) => `${seconds} segundos`,
  // Digital clock labels
  selectViewText: (view) => `Selecione ${timeViews11[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Número da semana",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Semana ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Escolha uma data, data selecionada ${utils.format(value, "fullDate")}` : "Escolha uma data",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Escolha uma hora, hora selecionada ${utils.format(value, "fullTime")}` : "Escolha uma hora",
  // Table labels
  timeTableLabel: "escolha uma hora",
  dateTableLabel: "escolha uma data",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "SSSS" : "SS",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var ptBR = getPickersLocalization(ptBRPickers);

// node_modules/@mui/x-date-pickers/locales/roRO.js
var timeViews12 = {
  hours: "Ore",
  minutes: "Minute",
  seconds: "Secunde",
  meridiem: "Meridiane"
};
var roROPickers = {
  // Calendar navigation
  previousMonth: "Luna anterioară",
  nextMonth: "Luna următoare",
  // View navigation
  openPreviousView: "Deschideți vizualizarea anterioară",
  openNextView: "Deschideți vizualizarea următoare",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "Vizualizarea anuală este deschisă, comutați la vizualizarea calendarului" : "Vizualizarea calendarului este deschisă, comutați la vizualizarea anuală",
  // DateRange placeholders
  start: "Început",
  end: "Sfârșit",
  // Action bar
  cancelButtonLabel: "Anulare",
  clearButtonLabel: "Ștergere",
  okButtonLabel: "OK",
  todayButtonLabel: "Astăzi",
  // Toolbar titles
  datePickerToolbarTitle: "Selectați data",
  dateTimePickerToolbarTitle: "Selectați data și ora",
  timePickerToolbarTitle: "Selectați ora",
  dateRangePickerToolbarTitle: "Selectați intervalul de date",
  // Clock labels
  clockLabelText: (view, time, adapter) => {
    var _timeViews$view;
    return `Selectați ${(_timeViews$view = timeViews12[view]) != null ? _timeViews$view : view}. ${time === null ? "Nicio oră selectată" : `Ora selectată este ${adapter.format(time, "fullTime")}`}`;
  },
  hoursClockNumberText: (hours) => `${hours} ${timeViews12.hours}`,
  minutesClockNumberText: (minutes) => `${minutes} ${timeViews12.minutes}`,
  secondsClockNumberText: (seconds) => `${seconds}  ${timeViews12.seconds}`,
  // Digital clock labels
  selectViewText: (view) => `Selectați ${timeViews12[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Număr săptămână",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Săptămâna ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Selectați data, data selectată este ${utils.format(value, "fullDate")}` : "Selectați data",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Selectați ora, ora selectată este ${utils.format(value, "fullTime")}` : "Selectați ora",
  // Table labels
  timeTableLabel: "Selectați ora",
  dateTableLabel: "Selectați data",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "LLLL" : "LL",
  fieldDayPlaceholder: () => "ZZ",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var roRO = getPickersLocalization(roROPickers);

// node_modules/@mui/x-date-pickers/locales/ruRU.js
var timeViews13 = {
  hours: "часы",
  minutes: "минуты",
  seconds: "секунды",
  meridiem: "меридием"
};
var ruRUPickers = {
  // Calendar navigation
  previousMonth: "Предыдущий месяц",
  nextMonth: "Следующий месяц",
  // View navigation
  openPreviousView: "открыть предыдущий вид",
  openNextView: "открыть следующий вид",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "открыт годовой вид, переключить на календарный вид" : "открыт календарный вид, переключить на годовой вид",
  // DateRange placeholders
  start: "Начало",
  end: "Конец",
  // Action bar
  cancelButtonLabel: "Отмена",
  clearButtonLabel: "Очистить",
  okButtonLabel: "Ок",
  todayButtonLabel: "Сегодня",
  // Toolbar titles
  datePickerToolbarTitle: "Выбрать дату",
  dateTimePickerToolbarTitle: "Выбрать дату и время",
  timePickerToolbarTitle: "Выбрать время",
  dateRangePickerToolbarTitle: "Выбрать период",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Выбрать ${timeViews13[view]}. ${time === null ? "Время не выбрано" : `Выбрано время ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} часов`,
  minutesClockNumberText: (minutes) => `${minutes} минут`,
  secondsClockNumberText: (seconds) => `${seconds} секунд`,
  // Digital clock labels
  selectViewText: (view) => `Выбрать ${timeViews13[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Номер недели",
  calendarWeekNumberHeaderText: "№",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Неделя ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Выберите дату, выбрана дата ${utils.format(value, "fullDate")}` : "Выберите дату",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Выберите время, выбрано время ${utils.format(value, "fullTime")}` : "Выберите время",
  // Table labels
  timeTableLabel: "выбрать время",
  dateTableLabel: "выбрать дату",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Г".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "ММММ" : "ММ",
  fieldDayPlaceholder: () => "ДД",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "чч",
  fieldMinutesPlaceholder: () => "мм",
  fieldSecondsPlaceholder: () => "сс",
  fieldMeridiemPlaceholder: () => "(д|п)п"
};
var ruRU = getPickersLocalization(ruRUPickers);

// node_modules/@mui/x-date-pickers/locales/skSK.js
var timeViews14 = {
  hours: "Hodiny",
  minutes: "Minúty",
  seconds: "Sekundy",
  meridiem: "Popoludnie"
};
var skSKPickers = {
  // Calendar navigation
  previousMonth: "Ďalší mesiac",
  nextMonth: "Predchádzajúci mesiac",
  // View navigation
  openPreviousView: "otvoriť predchádzajúce zobrazenie",
  openNextView: "otvoriť ďalšie zobrazenie",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "ročné zobrazenie otvorené, prepnite do zobrazenia kalendára" : "zobrazenie kalendára otvorené, prepnite do zobrazenia roka",
  // DateRange placeholders
  start: "Začiatok",
  end: "Koniec",
  // Action bar
  cancelButtonLabel: "Zrušiť",
  clearButtonLabel: "Vymazať",
  okButtonLabel: "Potvrdiť",
  todayButtonLabel: "Dnes",
  // Toolbar titles
  datePickerToolbarTitle: "Vyberte dátum",
  dateTimePickerToolbarTitle: "Vyberte dátum a čas",
  timePickerToolbarTitle: "Vyberte čas",
  dateRangePickerToolbarTitle: "Vyberete rozmedzie dátumov",
  // Clock labels
  clockLabelText: (view, time, adapter) => {
    var _timeViews$view;
    return `${(_timeViews$view = timeViews14[view]) != null ? _timeViews$view : view} vybraný. ${time === null ? "Nie je vybraný čas" : `Vybraný čas je ${adapter.format(time, "fullTime")}`}`;
  },
  hoursClockNumberText: (hours) => `${hours} hodín`,
  minutesClockNumberText: (minutes) => `${minutes} minút`,
  secondsClockNumberText: (seconds) => `${seconds} sekúnd`,
  // Digital clock labels
  selectViewText: (view) => `Vyberte ${timeViews14[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Týždeň v roku",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber} týždeň v roku`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Vyberte dátum, vybraný dátum je ${utils.format(value, "fullDate")}` : "Vyberte dátum",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Vyberte čas, vybraný čas je ${utils.format(value, "fullTime")}` : "Vyberte čas",
  // Table labels
  timeTableLabel: "vyberte čas",
  dateTableLabel: "vyberte dátum",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var skSK = getPickersLocalization(skSKPickers);

// node_modules/@mui/x-date-pickers/locales/svSE.js
var timeViews15 = {
  hours: "timmar",
  minutes: "minuter",
  seconds: "sekunder",
  meridiem: "meridiem"
};
var svSEPickers = {
  // Calendar navigation
  previousMonth: "Föregående månad",
  nextMonth: "Nästa månad",
  // View navigation
  openPreviousView: "öppna föregående vy",
  openNextView: "öppna nästa vy",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "årsvyn är öppen, byt till kalendervy" : "kalendervyn är öppen, byt till årsvy",
  // DateRange placeholders
  start: "Start",
  end: "Slut",
  // Action bar
  cancelButtonLabel: "Avbryt",
  clearButtonLabel: "Rensa",
  okButtonLabel: "OK",
  todayButtonLabel: "Idag",
  // Toolbar titles
  datePickerToolbarTitle: "Välj datum",
  dateTimePickerToolbarTitle: "Välj datum & tid",
  timePickerToolbarTitle: "Välj tid",
  dateRangePickerToolbarTitle: "Välj datumintervall",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Välj ${timeViews15[view]}. ${time === null ? "Ingen tid vald" : `Vald tid är ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} timmar`,
  minutesClockNumberText: (minutes) => `${minutes} minuter`,
  secondsClockNumberText: (seconds) => `${seconds} sekunder`,
  // Digital clock labels
  selectViewText: (view) => `Välj ${timeViews15[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Vecka nummer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Vecka ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Välj datum, valt datum är ${utils.format(value, "fullDate")}` : "Välj datum",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Välj tid, vald tid är ${utils.format(value, "fullTime")}` : "Välj tid",
  // Table labels
  timeTableLabel: "välj tid",
  dateTableLabel: "välj datum"
  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',
};
var svSE = getPickersLocalization(svSEPickers);

// node_modules/@mui/x-date-pickers/locales/trTR.js
var timeViews16 = {
  hours: "saat",
  minutes: "dakika",
  seconds: "saniye",
  meridiem: "öğleden sonra"
};
var trTRPickers = {
  // Calendar navigation
  previousMonth: "Önceki ay",
  nextMonth: "Sonraki ay",
  // View navigation
  openPreviousView: "sonraki görünüm",
  openNextView: "önceki görünüm",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "yıl görünümü açık, takvim görünümüne geç" : "takvim görünümü açık, yıl görünümüne geç",
  // DateRange placeholders
  start: "Başlangıç",
  end: "Bitiş",
  // Action bar
  cancelButtonLabel: "iptal",
  clearButtonLabel: "Temizle",
  okButtonLabel: "Tamam",
  todayButtonLabel: "Bugün",
  // Toolbar titles
  datePickerToolbarTitle: "Tarih Seç",
  dateTimePickerToolbarTitle: "Tarih & Saat seç",
  timePickerToolbarTitle: "Saat seç",
  dateRangePickerToolbarTitle: "Tarih aralığı seçin",
  // Clock labels
  clockLabelText: (view, time, adapter) => `${timeViews16[view]} seç.  ${time === null ? "Zaman seçilmedi" : `Seçilen zaman: ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} saat`,
  minutesClockNumberText: (minutes) => `${minutes} dakika`,
  secondsClockNumberText: (seconds) => `${seconds} saniye`,
  // Digital clock labels
  selectViewText: (view) => `Seç ${timeViews16[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Hafta numarası",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Hafta ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Tarih seçin, seçilen tarih: ${utils.format(value, "fullDate")}` : "Tarih seç",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Saat seçin, seçilen saat: ${utils.format(value, "fullTime")}` : "Saat seç",
  // Table labels
  timeTableLabel: "saat seç",
  dateTableLabel: "tarih seç",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "AAA" : "AA",
  fieldDayPlaceholder: () => "GG",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "HHH" : "HH",
  fieldHoursPlaceholder: () => "ss",
  fieldMinutesPlaceholder: () => "dd",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
};
var trTR = getPickersLocalization(trTRPickers);

// node_modules/@mui/x-date-pickers/locales/ukUA.js
var timeViews17 = {
  hours: "годин",
  minutes: "хвилин",
  seconds: "секунд",
  meridiem: "Південь"
};
var ukUAPickers = {
  // Calendar navigation
  previousMonth: "Попередній місяць",
  nextMonth: "Наступний місяць",
  // View navigation
  openPreviousView: "відкрити попередній вигляд",
  openNextView: "відкрити наступний вигляд",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "річний вигляд відкрито, перейти до календарного вигляду" : "календарний вигляд відкрито, перейти до річного вигляду",
  // DateRange placeholders
  start: "Початок",
  end: "Кінець",
  // Action bar
  cancelButtonLabel: "Відміна",
  clearButtonLabel: "Очистити",
  okButtonLabel: "OK",
  todayButtonLabel: "Сьогодні",
  // Toolbar titles
  datePickerToolbarTitle: "Вибрати дату",
  dateTimePickerToolbarTitle: "Вибрати дату і час",
  timePickerToolbarTitle: "Вибрати час",
  dateRangePickerToolbarTitle: "Вибрати календарний період",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Вибрати ${timeViews17[view]}. ${time === null ? "Час не вибраний" : `Вибрано час ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} годин`,
  minutesClockNumberText: (minutes) => `${minutes} хвилин`,
  secondsClockNumberText: (seconds) => `${seconds} секунд`,
  // Digital clock labels
  selectViewText: (view) => `Вибрати ${timeViews17[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Номер тижня",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Тиждень ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Оберіть дату, обрана дата  ${utils.format(value, "fullDate")}` : "Оберіть дату",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Оберіть час, обраний час  ${utils.format(value, "fullTime")}` : "Оберіть час",
  // Table labels
  timeTableLabel: "оберіть час",
  dateTableLabel: "оберіть дату",
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
var ukUA = getPickersLocalization(ukUAPickers);

// node_modules/@mui/x-date-pickers/locales/urPK.js
var timeViews18 = {
  hours: "گھنٹے",
  minutes: "منٹ",
  seconds: "سیکنڈ",
  meridiem: "میریڈیم"
};
var urPKPickers = {
  // Calendar navigation
  previousMonth: "پچھلا مہینہ",
  nextMonth: "اگلا مہینہ",
  // View navigation
  openPreviousView: "پچھلا ویو کھولیں",
  openNextView: "اگلا ویو کھولیں",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "سال والا ویو کھلا ہے۔ کیلنڈر والا ویو کھولیں" : "کیلنڈر والا ویو کھلا ہے۔ سال والا ویو کھولیں",
  // DateRange placeholders
  start: "شروع",
  end: "ختم",
  // Action bar
  cancelButtonLabel: "کینسل",
  clearButtonLabel: "کلئیر",
  okButtonLabel: "اوکے",
  todayButtonLabel: "آج",
  // Toolbar titles
  datePickerToolbarTitle: "تاریخ منتخب کریں",
  dateTimePickerToolbarTitle: "تاریخ اور وقت منتخب کریں",
  timePickerToolbarTitle: "وقت منتخب کریں",
  dateRangePickerToolbarTitle: "تاریخوں کی رینج منتخب کریں",
  // Clock labels
  clockLabelText: (view, time, adapter) => `${timeViews18[view]} منتخب کریں ${time === null ? "کوئی وقت منتخب نہیں" : `منتخب وقت ہے ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} گھنٹے`,
  minutesClockNumberText: (minutes) => `${minutes} منٹ`,
  secondsClockNumberText: (seconds) => `${seconds} سیکنڈ`,
  // Digital clock labels
  selectViewText: (view) => `${timeViews18[view]} منتخب کریں`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "ہفتہ نمبر",
  calendarWeekNumberHeaderText: "نمبر",
  calendarWeekNumberAriaLabelText: (weekNumber) => `ہفتہ ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `تاریخ منتخب کریں، منتخب شدہ تاریخ ہے ${utils.format(value, "fullDate")}` : "تاریخ منتخب کریں",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `وقت منتخب کریں، منتخب شدہ وقت ہے ${utils.format(value, "fullTime")}` : "وقت منتخب کریں",
  // Table labels
  timeTableLabel: "وقت منتخب کریں",
  dateTableLabel: "تاریخ منتخب کریں"
  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',
};
var urPK = getPickersLocalization(urPKPickers);

// node_modules/@mui/x-date-pickers/locales/viVN.js
var views10 = {
  hours: "giờ",
  minutes: "phút",
  seconds: "giây",
  meridiem: "buổi"
};
var viVNPickers = {
  // Calendar navigation
  previousMonth: "Tháng trước",
  nextMonth: "Tháng sau",
  // View navigation
  openPreviousView: "mở xem trước",
  openNextView: "mở xem sau",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "đang mở xem năm, chuyển sang xem lịch" : "đang mở xem lịch, chuyển sang xem năm",
  // DateRange placeholders
  start: "Bắt đầu",
  end: "Kết thúc",
  // Action bar
  cancelButtonLabel: "Hủy",
  clearButtonLabel: "Xóa",
  okButtonLabel: "OK",
  todayButtonLabel: "Hôm nay",
  // Toolbar titles
  datePickerToolbarTitle: "Chọn ngày",
  dateTimePickerToolbarTitle: "Chọn ngày và giờ",
  timePickerToolbarTitle: "Chọn giờ",
  dateRangePickerToolbarTitle: "Chọn khoảng ngày",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Chọn ${views10[view]}. ${time === null ? "Không có giờ được chọn" : `Giờ được chọn là ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} giờ`,
  minutesClockNumberText: (minutes) => `${minutes} phút`,
  secondsClockNumberText: (seconds) => `${seconds} giây`,
  // Digital clock labels
  selectViewText: (view) => `Chọn ${views10[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Số tuần",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Tuần ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Chọn ngày, ngày đã chọn là ${utils.format(value, "fullDate")}` : "Chọn ngày",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Chọn giờ, giờ đã chọn là ${utils.format(value, "fullTime")}` : "Chọn giờ",
  // Table labels
  timeTableLabel: "chọn giờ",
  dateTableLabel: "chọn ngày",
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
var viVN = getPickersLocalization(viVNPickers);

// node_modules/@mui/x-date-pickers/locales/zhCN.js
var views11 = {
  hours: "小时",
  minutes: "分钟",
  seconds: "秒",
  meridiem: "子午线"
};
var zhCNPickers = {
  // Calendar navigation
  previousMonth: "上个月",
  nextMonth: "下个月",
  // View navigation
  openPreviousView: "前一个视图",
  openNextView: "下一个视图",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "年视图已打开，切换为日历视图" : "日历视图已打开，切换为年视图",
  // DateRange placeholders
  start: "开始",
  end: "结束",
  // Action bar
  cancelButtonLabel: "取消",
  clearButtonLabel: "清除",
  okButtonLabel: "确认",
  todayButtonLabel: "今天",
  // Toolbar titles
  datePickerToolbarTitle: "选择日期",
  dateTimePickerToolbarTitle: "选择日期和时间",
  timePickerToolbarTitle: "选择时间",
  dateRangePickerToolbarTitle: "选择时间范围",
  // Clock labels
  clockLabelText: (view, time, adapter) => `选择 ${views11[view]}. ${time === null ? "未选择时间" : `已选择${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours}小时`,
  minutesClockNumberText: (minutes) => `${minutes}分钟`,
  secondsClockNumberText: (seconds) => `${seconds}秒`,
  // Digital clock labels
  selectViewText: (view) => `选择 ${views11[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "周数",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `第${weekNumber}周`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `选择日期，已选择${utils.format(value, "fullDate")}` : "选择日期",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `选择时间，已选择${utils.format(value, "fullTime")}` : "选择时间",
  // Table labels
  timeTableLabel: "选择时间",
  dateTableLabel: "选择日期",
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
var zhCN = getPickersLocalization(zhCNPickers);

// node_modules/@mui/x-date-pickers/locales/zhHK.js
var views12 = {
  hours: "小時",
  minutes: "分鐘",
  seconds: "秒",
  meridiem: "子午線"
};
var zhHKPickers = {
  // Calendar navigation
  previousMonth: "上個月",
  nextMonth: "下個月",
  // View navigation
  openPreviousView: "前一個檢視表",
  openNextView: "下一個檢視表",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "年份檢視表已打開，切換以檢視日曆" : "日曆檢視表已打開，切換以檢視年份",
  // DateRange placeholders
  start: "開始",
  end: "結束",
  // Action bar
  cancelButtonLabel: "取消",
  clearButtonLabel: "清除",
  okButtonLabel: "確認",
  todayButtonLabel: "今日",
  // Toolbar titles
  datePickerToolbarTitle: "選擇日期",
  dateTimePickerToolbarTitle: "選擇日期和時間",
  timePickerToolbarTitle: "選擇時間",
  dateRangePickerToolbarTitle: "選擇時間範圍",
  // Clock labels
  clockLabelText: (view, time, adapter) => `選擇 ${views12[view]}. ${time === null ? "未選擇時間" : `已選擇${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours}小時`,
  minutesClockNumberText: (minutes) => `${minutes}分鐘`,
  secondsClockNumberText: (seconds) => `${seconds}秒`,
  // Digital clock labels
  selectViewText: (view) => `選擇 ${views12[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "週數",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `第${weekNumber}週`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `選擇日期，已選擇${utils.format(value, "fullDate")}` : "選擇日期",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `選擇時間，已選擇${utils.format(value, "fullTime")}` : "選擇時間",
  // Table labels
  timeTableLabel: "選擇時間",
  dateTableLabel: "選擇日期",
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
var zhHK = getPickersLocalization(zhHKPickers);

// node_modules/@mui/x-date-pickers/TimeField/TimeField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React10 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/TimeField/useTimeField.js
init_extends();
var useDefaultizedTimeField = (props) => {
  var _props$ampm, _props$disablePast, _props$disableFuture, _props$format;
  const utils = useUtils();
  const ampm = (_props$ampm = props.ampm) != null ? _props$ampm : utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h;
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : defaultFormat
  });
};
var useTimeField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedTimeField(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "time");
  return useField({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateTime,
    valueType: "time"
  });
};

// node_modules/@mui/x-date-pickers/TimeField/TimeField.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded7 = ["slots", "slotProps", "components", "componentsProps", "InputProps", "inputProps"];
var _excluded22 = ["inputRef"];
var _excluded32 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly"];
var TimeField = React10.forwardRef(function TimeField2(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTimeField"
  });
  const {
    slots,
    slotProps,
    components,
    componentsProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded7);
  const ownerState = themeProps;
  const TextField = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField_default;
  const _useSlotProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
    externalForwardedProps: other,
    ownerState
  }), {
    inputRef: externalInputRef
  } = _useSlotProps, textFieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded22);
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const _useTimeField = useTimeField({
    props: textFieldProps,
    inputRef: externalInputRef
  }), {
    ref: inputRef,
    onPaste,
    onKeyDown,
    inputMode,
    readOnly
  } = _useTimeField, fieldProps = _objectWithoutPropertiesLoose(_useTimeField, _excluded32);
  return (0, import_jsx_runtime11.jsx)(TextField, _extends({
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
true ? TimeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types4.default.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types4.default.bool,
  className: import_prop_types4.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: import_prop_types4.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types4.default.elementType,
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
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types4.default.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types4.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types4.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types4.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types4.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types4.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types4.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types4.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types4.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types4.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types4.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types4.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types4.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types4.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types4.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types4.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.shape({
    current: import_prop_types4.default.any.isRequired
  })]),
  /**
   * The label content.
   */
  label: import_prop_types4.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types4.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types4.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types4.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types4.default.number,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types4.default.string,
  onBlur: import_prop_types4.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types4.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types4.default.func,
  onFocus: import_prop_types4.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types4.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types4.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types4.default.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types4.default.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types4.default.number, import_prop_types4.default.shape({
    endIndex: import_prop_types4.default.number.isRequired,
    startIndex: import_prop_types4.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types4.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types4.default.func,
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
  shouldRespectLeadingZeros: import_prop_types4.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types4.default.oneOf(["medium", "small"]),
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
  style: import_prop_types4.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types4.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types4.default.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types4.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers/DateTimeField/DateTimeField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React11 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/DateTimeField/useDateTimeField.js
init_extends();
var useDefaultizedDateTimeField = (props) => {
  var _props$ampm, _props$disablePast, _props$disableFuture, _props$format, _props$minDateTime, _props$maxDateTime, _props$minDateTime2, _props$maxDateTime2;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const ampm = (_props$ampm = props.ampm) != null ? _props$ampm : utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h;
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : defaultFormat,
    disableIgnoringDatePartForTimeValidation: Boolean(props.minDateTime || props.maxDateTime),
    minDate: applyDefaultDate(utils, (_props$minDateTime = props.minDateTime) != null ? _props$minDateTime : props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, (_props$maxDateTime = props.maxDateTime) != null ? _props$maxDateTime : props.maxDate, defaultDates.maxDate),
    minTime: (_props$minDateTime2 = props.minDateTime) != null ? _props$minDateTime2 : props.minTime,
    maxTime: (_props$maxDateTime2 = props.maxDateTime) != null ? _props$maxDateTime2 : props.maxTime
  });
};
var useDateTimeField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedDateTimeField(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "date-time");
  return useField({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateDateTime,
    valueType: "date-time"
  });
};

// node_modules/@mui/x-date-pickers/DateTimeField/DateTimeField.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded8 = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"];
var _excluded23 = ["inputRef"];
var _excluded33 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly"];
var DateTimeField = React11.forwardRef(function DateTimeField2(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiDateTimeField"
  });
  const {
    components,
    componentsProps,
    slots,
    slotProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded8);
  const ownerState = themeProps;
  const TextField = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField_default;
  const _useSlotProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
    externalForwardedProps: other,
    ownerState
  }), {
    inputRef: externalInputRef
  } = _useSlotProps, textFieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded23);
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const _useDateTimeField = useDateTimeField({
    props: textFieldProps,
    inputRef: externalInputRef
  }), {
    ref: inputRef,
    onPaste,
    onKeyDown,
    inputMode,
    readOnly
  } = _useDateTimeField, fieldProps = _objectWithoutPropertiesLoose(_useDateTimeField, _excluded33);
  return (0, import_jsx_runtime12.jsx)(TextField, _extends({
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
true ? DateTimeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types5.default.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types5.default.bool,
  className: import_prop_types5.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: import_prop_types5.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types5.default.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types5.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types5.default.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types5.default.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types5.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types5.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types5.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types5.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types5.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types5.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types5.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types5.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types5.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types5.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types5.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types5.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types5.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types5.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types5.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.shape({
    current: import_prop_types5.default.any.isRequired
  })]),
  /**
   * The label content.
   */
  label: import_prop_types5.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types5.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types5.default.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types5.default.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types5.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types5.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types5.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types5.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types5.default.number,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types5.default.string,
  onBlur: import_prop_types5.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types5.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types5.default.func,
  onFocus: import_prop_types5.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types5.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types5.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types5.default.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types5.default.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types5.default.number, import_prop_types5.default.shape({
    endIndex: import_prop_types5.default.number.isRequired,
    startIndex: import_prop_types5.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types5.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types5.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types5.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types5.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types5.default.func,
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
  shouldRespectLeadingZeros: import_prop_types5.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types5.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types5.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types5.default.object,
  style: import_prop_types5.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types5.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types5.default.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types5.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers/DateCalendar/DateCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React16 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/MonthCalendar/MonthCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React13 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
init_clsx();
init_esm2();
init_esm();

// node_modules/@mui/x-date-pickers/MonthCalendar/PickersMonth.js
init_objectWithoutPropertiesLoose();
init_extends();
var React12 = __toESM(require_react());
init_esm();

// node_modules/@mui/x-date-pickers/MonthCalendar/pickersMonthClasses.js
init_esm();
function getPickersMonthUtilityClass(slot) {
  return generateUtilityClass("MuiPickersMonth", slot);
}
var pickersMonthClasses = generateUtilityClasses("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]);

// node_modules/@mui/x-date-pickers/MonthCalendar/PickersMonth.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded9 = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "monthsPerRow"];
var useUtilityClasses8 = (ownerState) => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    monthButton: ["monthButton", disabled && "disabled", selected && "selected"]
  };
  return composeClasses(slots, getPickersMonthUtilityClass, classes);
};
var PickersMonthRoot = styled_default("div", {
  name: "MuiPickersMonth",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root]
})(({
  ownerState
}) => ({
  flexBasis: ownerState.monthsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
var PickersMonthButton = styled_default("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (_, styles) => [styles.monthButton, {
    [`&.${pickersMonthClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersMonthClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${pickersMonthClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersMonthClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
var PickersMonth = React12.memo(function PickersMonth2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersMonth"
  });
  const {
    autoFocus,
    children,
    disabled,
    value,
    tabIndex,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    "aria-current": ariaCurrent
    // We don't want to forward this prop to the root element
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const ref = React12.useRef(null);
  const classes = useUtilityClasses8(props);
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      var _ref$current;
      (_ref$current = ref.current) == null || _ref$current.focus();
    }
  }, [autoFocus]);
  return (0, import_jsx_runtime13.jsx)(PickersMonthRoot, _extends({
    className: classes.root,
    ownerState: props
  }, other, {
    children: (0, import_jsx_runtime13.jsx)(PickersMonthButton, {
      ref,
      disabled,
      type: "button",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value),
      className: classes.monthButton,
      ownerState: props,
      children
    })
  }));
});

// node_modules/@mui/x-date-pickers/MonthCalendar/monthCalendarClasses.js
init_esm();
function getMonthCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiMonthCalendar", slot);
}
var monthCalendarClasses = generateUtilityClasses("MuiMonthCalendar", ["root"]);

// node_modules/@mui/x-date-pickers/MonthCalendar/MonthCalendar.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded10 = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone"];
var useUtilityClasses9 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({
    disableFuture: false,
    disablePast: false
  }, themeProps, {
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
var MonthCalendarRoot = styled_default("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: 320
});
var MonthCalendar = React13.forwardRef(function MonthCalendar2(inProps, ref) {
  const props = useMonthCalendarDefaultizedProps(inProps, "MuiMonthCalendar");
  const {
    className,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    shouldDisableMonth,
    readOnly,
    disableHighlightToday,
    autoFocus = false,
    onMonthFocus,
    hasFocus,
    onFocusedViewChange,
    monthsPerRow = 3,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "MonthCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const theme = useTheme_default();
  const utils = useUtils();
  const referenceDate = React13.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const ownerState = props;
  const classes = useUtilityClasses9(ownerState);
  const todayMonth = React13.useMemo(() => utils.getMonth(now), [utils, now]);
  const selectedMonth = React13.useMemo(() => {
    if (value != null) {
      return utils.getMonth(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getMonth(referenceDate);
  }, [value, utils, disableHighlightToday, referenceDate]);
  const [focusedMonth, setFocusedMonth] = React13.useState(() => selectedMonth || todayMonth);
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus != null ? autoFocus : false
  });
  const changeHasFocus = useEventCallback_default((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isMonthDisabled = React13.useCallback((dateToValidate) => {
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    const monthToValidate = utils.startOfMonth(dateToValidate);
    if (utils.isBefore(monthToValidate, firstEnabledMonth)) {
      return true;
    }
    if (utils.isAfter(monthToValidate, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(monthToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, utils]);
  const handleMonthSelection = useEventCallback_default((event, month) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setMonth(value != null ? value : referenceDate, month);
    handleValueChange(newDate);
  });
  const focusMonth = useEventCallback_default((month) => {
    if (!isMonthDisabled(utils.setMonth(value != null ? value : referenceDate, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  React13.useEffect(() => {
    setFocusedMonth((prevFocusedMonth) => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
  }, [selectedMonth]);
  const handleKeyDown = useEventCallback_default((event, month) => {
    const monthsInYear = 12;
    const monthsInRow = 3;
    switch (event.key) {
      case "ArrowUp":
        focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusMonth((monthsInYear + month + (theme.direction === "ltr" ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
      case "ArrowRight":
        focusMonth((monthsInYear + month + (theme.direction === "ltr" ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleMonthFocus = useEventCallback_default((event, month) => {
    focusMonth(month);
  });
  const handleMonthBlur = useEventCallback_default((event, month) => {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return (0, import_jsx_runtime14.jsx)(MonthCalendarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: getMonthsInYear(utils, value != null ? value : referenceDate).map((month) => {
      const monthNumber = utils.getMonth(month);
      const monthText = utils.format(month, "monthShort");
      const isSelected = monthNumber === selectedMonth;
      const isDisabled = disabled || isMonthDisabled(month);
      return (0, import_jsx_runtime14.jsx)(PickersMonth, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": todayMonth === monthNumber ? "date" : void 0,
        monthsPerRow,
        children: monthText
      }, monthText);
    })
  }));
});
true ? MonthCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: import_prop_types6.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types6.default.object,
  /**
   * className applied to the root element.
   */
  className: import_prop_types6.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types6.default.any,
  /**
   * If `true` picker is disabled
   */
  disabled: import_prop_types6.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types6.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types6.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types6.default.bool,
  hasFocus: import_prop_types6.default.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types6.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types6.default.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types6.default.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: import_prop_types6.default.func,
  onFocusedViewChange: import_prop_types6.default.func,
  onMonthFocus: import_prop_types6.default.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: import_prop_types6.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: import_prop_types6.default.any,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types6.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types6.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types6.default.any
} : void 0;

// node_modules/@mui/x-date-pickers/YearCalendar/YearCalendar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React15 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
init_clsx();
init_esm2();
init_esm();

// node_modules/@mui/x-date-pickers/YearCalendar/PickersYear.js
init_objectWithoutPropertiesLoose();
init_extends();
var React14 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/YearCalendar/pickersYearClasses.js
init_esm();
function getPickersYearUtilityClass(slot) {
  return generateUtilityClass("MuiPickersYear", slot);
}
var pickersYearClasses = generateUtilityClasses("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]);

// node_modules/@mui/x-date-pickers/YearCalendar/PickersYear.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded11 = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"];
var useUtilityClasses10 = (ownerState) => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    yearButton: ["yearButton", disabled && "disabled", selected && "selected"]
  };
  return composeClasses(slots, getPickersYearUtilityClass, classes);
};
var PickersYearRoot = styled_default("div", {
  name: "MuiPickersYear",
  slot: "Root",
  overridesResolver: (_, styles) => [styles.root]
})(({
  ownerState
}) => ({
  flexBasis: ownerState.yearsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
var PickersYearButton = styled_default("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (_, styles) => [styles.yearButton, {
    [`&.${pickersYearClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersYearClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => _extends({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.action.active, theme.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${pickersYearClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersYearClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));
var PickersYear = React14.memo(function PickersYear2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPickersYear"
  });
  const {
    autoFocus,
    className,
    children,
    disabled,
    value,
    tabIndex,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    "aria-current": ariaCurrent
    // We don't want to forward this prop to the root element
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const ref = React14.useRef(null);
  const classes = useUtilityClasses10(props);
  React14.useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  return (0, import_jsx_runtime15.jsx)(PickersYearRoot, _extends({
    className: clsx_default(classes.root, className),
    ownerState: props
  }, other, {
    children: (0, import_jsx_runtime15.jsx)(PickersYearButton, {
      ref,
      disabled,
      type: "button",
      tabIndex: disabled ? -1 : tabIndex,
      "aria-current": ariaCurrent,
      onClick: (event) => onClick(event, value),
      onKeyDown: (event) => onKeyDown(event, value),
      onFocus: (event) => onFocus(event, value),
      onBlur: (event) => onBlur(event, value),
      className: classes.yearButton,
      ownerState: props,
      children
    })
  }));
});

// node_modules/@mui/x-date-pickers/YearCalendar/yearCalendarClasses.js
init_esm();
function getYearCalendarUtilityClass(slot) {
  return generateUtilityClass("MuiYearCalendar", slot);
}
var yearCalendarClasses = generateUtilityClasses("MuiYearCalendar", ["root"]);

// node_modules/@mui/x-date-pickers/YearCalendar/YearCalendar.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var _excluded12 = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone"];
var useUtilityClasses11 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
var YearCalendarRoot = styled_default("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "100%",
  padding: "0 4px",
  width: 320,
  maxHeight: 304,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative"
});
var YearCalendar = React15.forwardRef(function YearCalendar2(inProps, ref) {
  const props = useYearCalendarDefaultizedProps(inProps, "MuiYearCalendar");
  const {
    autoFocus,
    className,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disabled,
    disableFuture,
    disablePast,
    maxDate,
    minDate,
    onChange,
    readOnly,
    shouldDisableYear,
    disableHighlightToday,
    onYearFocus,
    hasFocus,
    onFocusedViewChange,
    yearsPerRow = 3,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "YearCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const theme = useTheme_default();
  const utils = useUtils();
  const referenceDate = React15.useMemo(
    () => singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      props,
      timezone,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  );
  const ownerState = props;
  const classes = useUtilityClasses11(ownerState);
  const todayYear = React15.useMemo(() => utils.getYear(now), [utils, now]);
  const selectedYear = React15.useMemo(() => {
    if (value != null) {
      return utils.getYear(value);
    }
    if (disableHighlightToday) {
      return null;
    }
    return utils.getYear(referenceDate);
  }, [value, utils, disableHighlightToday, referenceDate]);
  const [focusedYear, setFocusedYear] = React15.useState(() => selectedYear || todayYear);
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: hasFocus,
    default: autoFocus != null ? autoFocus : false
  });
  const changeHasFocus = useEventCallback_default((newHasFocus) => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isYearDisabled = React15.useCallback((dateToValidate) => {
    if (disablePast && utils.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && utils.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (!shouldDisableYear) {
      return false;
    }
    const yearToValidate = utils.startOfYear(dateToValidate);
    return shouldDisableYear(yearToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, utils]);
  const handleYearSelection = useEventCallback_default((event, year) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setYear(value != null ? value : referenceDate, year);
    handleValueChange(newDate);
  });
  const focusYear = useEventCallback_default((year) => {
    if (!isYearDisabled(utils.setYear(value != null ? value : referenceDate, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus == null || onYearFocus(year);
    }
  });
  React15.useEffect(() => {
    setFocusedYear((prevFocusedYear) => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
  }, [selectedYear]);
  const handleKeyDown = useEventCallback_default((event, year) => {
    switch (event.key) {
      case "ArrowUp":
        focusYear(year - yearsPerRow);
        event.preventDefault();
        break;
      case "ArrowDown":
        focusYear(year + yearsPerRow);
        event.preventDefault();
        break;
      case "ArrowLeft":
        focusYear(year + (theme.direction === "ltr" ? -1 : 1));
        event.preventDefault();
        break;
      case "ArrowRight":
        focusYear(year + (theme.direction === "ltr" ? 1 : -1));
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleYearFocus = useEventCallback_default((event, year) => {
    focusYear(year);
  });
  const handleYearBlur = useEventCallback_default((event, year) => {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  const scrollerRef = React15.useRef(null);
  const handleRef = useForkRef(ref, scrollerRef);
  React15.useEffect(() => {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }
    const offsetHeight = tabbableButton.offsetHeight;
    const offsetTop = tabbableButton.offsetTop;
    const clientHeight = scrollerRef.current.clientHeight;
    const scrollTop = scrollerRef.current.scrollTop;
    const elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  return (0, import_jsx_runtime16.jsx)(YearCalendarRoot, _extends({
    ref: handleRef,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: utils.getYearRange(minDate, maxDate).map((year) => {
      const yearNumber = utils.getYear(year);
      const isSelected = yearNumber === selectedYear;
      const isDisabled = disabled || isYearDisabled(year);
      return (0, import_jsx_runtime16.jsx)(PickersYear, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? "date" : void 0,
        yearsPerRow,
        children: utils.format(year, "year")
      }, utils.format(year, "year"));
    })
  }));
});
true ? YearCalendar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: import_prop_types7.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types7.default.object,
  /**
   * className applied to the root element.
   */
  className: import_prop_types7.default.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types7.default.any,
  /**
   * If `true` picker is disabled
   */
  disabled: import_prop_types7.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types7.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types7.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types7.default.bool,
  hasFocus: import_prop_types7.default.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types7.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types7.default.any,
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: import_prop_types7.default.func,
  onFocusedViewChange: import_prop_types7.default.func,
  onYearFocus: import_prop_types7.default.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: import_prop_types7.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: import_prop_types7.default.any,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types7.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types7.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types7.default.any,
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types7.default.oneOf([3, 4])
} : void 0;

// node_modules/@mui/x-date-pickers/DateCalendar/dateCalendarClasses.js
init_esm();
var getDateCalendarUtilityClass = (slot) => generateUtilityClass("MuiDateCalendar", slot);
var dateCalendarClasses = generateUtilityClasses("MuiDateCalendar", ["root", "viewTransitionContainer"]);

// node_modules/@mui/x-date-pickers/DateCalendar/DateCalendar.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded13 = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow", "timezone"];
var useUtilityClasses12 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  };
  return composeClasses(slots, getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
  var _themeProps$loading, _themeProps$disablePa, _themeProps$disableFu, _themeProps$openTo, _themeProps$views, _themeProps$reduceAni, _themeProps$renderLoa;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const defaultReduceAnimations = useDefaultReduceAnimations();
  const themeProps = useThemeProps({
    props,
    name
  });
  return _extends({}, themeProps, {
    loading: (_themeProps$loading = themeProps.loading) != null ? _themeProps$loading : false,
    disablePast: (_themeProps$disablePa = themeProps.disablePast) != null ? _themeProps$disablePa : false,
    disableFuture: (_themeProps$disableFu = themeProps.disableFuture) != null ? _themeProps$disableFu : false,
    openTo: (_themeProps$openTo = themeProps.openTo) != null ? _themeProps$openTo : "day",
    views: (_themeProps$views = themeProps.views) != null ? _themeProps$views : ["year", "day"],
    reduceAnimations: (_themeProps$reduceAni = themeProps.reduceAnimations) != null ? _themeProps$reduceAni : defaultReduceAnimations,
    renderLoading: (_themeProps$renderLoa = themeProps.renderLoading) != null ? _themeProps$renderLoa : () => (0, import_jsx_runtime17.jsx)("span", {
      children: "..."
    }),
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
var DateCalendarRoot = styled_default(PickerViewRoot, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column"
});
var DateCalendarViewTransitionContainer = styled_default(PickersFadeTransitionGroup, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (props, styles) => styles.viewTransitionContainer
})({});
var DateCalendar = React16.forwardRef(function DateCalendar2(inProps, ref) {
  var _ref, _slots$calendarHeader, _slotProps$calendarHe;
  const utils = useUtils();
  const id = useId();
  const props = useDateCalendarDefaultizedProps(inProps, "MuiDateCalendar");
  const {
    autoFocus,
    onViewChange,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    defaultCalendarMonth,
    onChange,
    onYearChange,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    view: inView,
    views: views13,
    openTo,
    className,
    disabled,
    readOnly,
    minDate,
    maxDate,
    disableHighlightToday,
    focusedView: inFocusedView,
    onFocusedViewChange,
    showDaysOutsideCurrentMonth,
    fixedWeekNumber,
    dayOfWeekFormatter,
    components,
    componentsProps,
    slots,
    slotProps,
    loading,
    renderLoading,
    displayWeekNumber,
    yearsPerRow,
    monthsPerRow,
    timezone: timezoneProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: "DateCalendar",
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    onChange,
    valueManager: singleItemValueManager
  });
  const {
    view,
    setView,
    focusedView,
    setFocusedView,
    goToNextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views: views13,
    openTo,
    onChange: handleValueChange,
    onViewChange,
    autoFocus,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const {
    referenceDate,
    calendarState,
    changeFocusedDay,
    changeMonth,
    handleChangeMonth,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  } = useCalendarState({
    value,
    defaultCalendarMonth,
    referenceDate: referenceDateProp,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture,
    timezone
  });
  const minDateWithDisabled = disabled && value || minDate;
  const maxDateWithDisabled = disabled && value || maxDate;
  const gridLabelId = `${id}-grid-label`;
  const hasFocus = focusedView !== null;
  const CalendarHeader = (_ref = (_slots$calendarHeader = slots == null ? void 0 : slots.calendarHeader) != null ? _slots$calendarHeader : components == null ? void 0 : components.CalendarHeader) != null ? _ref : PickersCalendarHeader;
  const calendarHeaderProps = useSlotProps({
    elementType: CalendarHeader,
    externalSlotProps: (_slotProps$calendarHe = slotProps == null ? void 0 : slotProps.calendarHeader) != null ? _slotProps$calendarHe : componentsProps == null ? void 0 : componentsProps.calendarHeader,
    additionalProps: {
      views: views13,
      view,
      currentMonth: calendarState.currentMonth,
      onViewChange: setView,
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
      timezone,
      labelId: gridLabelId,
      slots,
      slotProps
    },
    ownerState: props
  });
  const handleDateMonthChange = useEventCallback_default((newDate) => {
    const startOfMonth = utils.startOfMonth(newDate);
    const endOfMonth = utils.endOfMonth(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
      maxDate: utils.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      onMonthChange == null || onMonthChange(startOfMonth);
    } else {
      goToNextView();
      changeMonth(startOfMonth);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleDateYearChange = useEventCallback_default((newDate) => {
    const startOfYear = utils.startOfYear(newDate);
    const endOfYear = utils.endOfYear(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfYear) ? startOfYear : minDate,
      maxDate: utils.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, "finish");
      onYearChange == null || onYearChange(closestEnabledDate);
    } else {
      goToNextView();
      changeMonth(startOfYear);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleSelectedDayChange = useEventCallback_default((day) => {
    if (day) {
      return handleValueChange(mergeDateAndTime(utils, day, value != null ? value : referenceDate), "finish");
    }
    return handleValueChange(day, "finish");
  });
  React16.useEffect(() => {
    if (value != null && utils.isValid(value)) {
      changeMonth(value);
    }
  }, [value]);
  const ownerState = props;
  const classes = useUtilityClasses12(ownerState);
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled,
    timezone
  };
  const prevOpenViewRef = React16.useRef(view);
  React16.useEffect(() => {
    if (prevOpenViewRef.current === view) {
      return;
    }
    if (focusedView === prevOpenViewRef.current) {
      setFocusedView(view, true);
    }
    prevOpenViewRef.current = view;
  }, [focusedView, setFocusedView, view]);
  const selectedDays = React16.useMemo(() => [value], [value]);
  return (0, import_jsx_runtime18.jsxs)(DateCalendarRoot, _extends({
    ref,
    className: clsx_default(classes.root, className),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime17.jsx)(CalendarHeader, _extends({}, calendarHeaderProps)), (0, import_jsx_runtime17.jsx)(DateCalendarViewTransitionContainer, {
      reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view,
      ownerState,
      children: (0, import_jsx_runtime18.jsxs)("div", {
        children: [view === "year" && (0, import_jsx_runtime17.jsx)(YearCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          value,
          onChange: handleDateYearChange,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("year", isViewFocused),
          yearsPerRow,
          referenceDate
        })), view === "month" && (0, import_jsx_runtime17.jsx)(MonthCalendar, _extends({}, baseDateValidationProps, commonViewProps, {
          hasFocus,
          className,
          value,
          onChange: handleDateMonthChange,
          shouldDisableMonth,
          onFocusedViewChange: (isViewFocused) => setFocusedView("month", isViewFocused),
          monthsPerRow,
          referenceDate
        })), view === "day" && (0, import_jsx_runtime17.jsx)(DayCalendar, _extends({}, calendarState, baseDateValidationProps, commonViewProps, {
          onMonthSwitchingAnimationEnd,
          onFocusedDayChange: changeFocusedDay,
          reduceAnimations,
          selectedDays,
          onSelectedDaysChange: handleSelectedDayChange,
          shouldDisableDate,
          shouldDisableMonth,
          shouldDisableYear,
          hasFocus,
          onFocusedViewChange: (isViewFocused) => setFocusedView("day", isViewFocused),
          gridLabelId,
          showDaysOutsideCurrentMonth,
          fixedWeekNumber,
          dayOfWeekFormatter,
          displayWeekNumber,
          components,
          componentsProps,
          slots,
          slotProps,
          loading,
          renderLoading
        }))]
      })
    })]
  }));
});
true ? DateCalendar.propTypes = {
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
  autoFocus: import_prop_types8.default.bool,
  classes: import_prop_types8.default.object,
  className: import_prop_types8.default.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types8.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types8.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types8.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: import_prop_types8.default.any,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types8.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types8.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types8.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types8.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types8.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types8.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types8.default.number,
  /**
   * Controlled focused view.
   */
  focusedView: import_prop_types8.default.oneOf(["day", "month", "year"]),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types8.default.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types8.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types8.default.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types8.default.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate | null} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   */
  onChange: import_prop_types8.default.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: import_prop_types8.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types8.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types8.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types8.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types8.default.oneOf(["day", "month", "year"]),
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: import_prop_types8.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types8.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: import_prop_types8.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types8.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types8.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types8.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types8.default.func,
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
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types8.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types8.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types8.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types8.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types8.default.oneOf(["day", "month", "year"]),
  /**
   * Available views.
   */
  views: import_prop_types8.default.arrayOf(import_prop_types8.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types8.default.oneOf([3, 4])
} : void 0;

// node_modules/@mui/x-date-pickers/DayCalendarSkeleton/DayCalendarSkeleton.js
init_objectWithoutPropertiesLoose();
init_extends();
var React17 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers/DayCalendarSkeleton/dayCalendarSkeletonClasses.js
init_esm();
var getDayCalendarSkeletonUtilityClass = (slot) => generateUtilityClass("MuiDayCalendarSkeleton", slot);
var dayCalendarSkeletonClasses = generateUtilityClasses("MuiDayCalendarSkeleton", ["root", "week", "daySkeleton"]);

// node_modules/@mui/x-date-pickers/DayCalendarSkeleton/DayCalendarSkeleton.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded14 = ["className"];
var useUtilityClasses13 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    week: ["week"],
    daySkeleton: ["daySkeleton"]
  };
  return composeClasses(slots, getDayCalendarSkeletonUtilityClass, classes);
};
var DayCalendarSkeletonRoot = styled_default("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  alignSelf: "start"
});
var DayCalendarSkeletonWeek = styled_default("div", {
  name: "MuiDayCalendarSkeleton",
  slot: "Week",
  overridesResolver: (props, styles) => styles.week
})({
  margin: `${DAY_MARGIN}px 0`,
  display: "flex",
  justifyContent: "center"
});
var DayCalendarSkeletonDay = styled_default(Skeleton_default, {
  name: "MuiDayCalendarSkeleton",
  slot: "DaySkeleton",
  overridesResolver: (props, styles) => styles.daySkeleton
})(({
  ownerState
}) => _extends({
  margin: `0 ${DAY_MARGIN}px`
}, ownerState.day === 0 && {
  visibility: "hidden"
}));
DayCalendarSkeletonDay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: import_prop_types9.default.shape({
    day: import_prop_types9.default.number.isRequired
  }).isRequired
};
var monthMap = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];
function DayCalendarSkeleton(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDayCalendarSkeleton"
  });
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const classes = useUtilityClasses13(other);
  return (0, import_jsx_runtime19.jsx)(DayCalendarSkeletonRoot, _extends({
    className: clsx_default(classes.root, className)
  }, other, {
    children: monthMap.map((week, index) => (0, import_jsx_runtime19.jsx)(DayCalendarSkeletonWeek, {
      className: classes.week,
      children: week.map((day, index2) => (0, import_jsx_runtime19.jsx)(DayCalendarSkeletonDay, {
        variant: "circular",
        width: DAY_SIZE,
        height: DAY_SIZE,
        className: classes.daySkeleton,
        ownerState: {
          day
        }
      }, index2))
    }, index))
  }));
}
true ? DayCalendarSkeleton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types9.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object])
} : void 0;

// node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React25 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.js
init_extends();
var React22 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/DatePicker/shared.js
init_extends();
var React19 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/DatePicker/DatePickerToolbar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React18 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-date-pickers/DatePicker/datePickerToolbarClasses.js
init_esm();
function getDatePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDatePickerToolbar", slot);
}
var datePickerToolbarClasses = generateUtilityClasses("MuiDatePickerToolbar", ["root", "title"]);

// node_modules/@mui/x-date-pickers/DatePicker/DatePickerToolbar.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var _excluded15 = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views"];
var useUtilityClasses14 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    title: ["title"]
  };
  return composeClasses(slots, getDatePickerToolbarUtilityClass, classes);
};
var DatePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})({});
var DatePickerToolbarTitle = styled_default(Typography_default, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (_, styles) => styles.title
})(({
  ownerState
}) => _extends({}, ownerState.isLandscape && {
  margin: "auto 16px auto auto"
}));
var DatePickerToolbar = React18.forwardRef(function DatePickerToolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePickerToolbar"
  });
  const {
    value,
    isLandscape,
    toolbarFormat,
    toolbarPlaceholder = "––",
    views: views13
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const utils = useUtils();
  const localeText = useLocaleText();
  const classes = useUtilityClasses14(props);
  const dateText = React18.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    const formatFromViews = resolveDateFormat(utils, {
      format: toolbarFormat,
      views: views13
    }, true);
    return utils.formatByString(value, formatFromViews);
  }, [value, toolbarFormat, toolbarPlaceholder, utils, views13]);
  const ownerState = props;
  return (0, import_jsx_runtime20.jsx)(DatePickerToolbarRoot, _extends({
    ref,
    toolbarTitle: localeText.datePickerToolbarTitle,
    isLandscape,
    className: classes.root
  }, other, {
    children: (0, import_jsx_runtime20.jsx)(DatePickerToolbarTitle, {
      variant: "h4",
      align: isLandscape ? "left" : "center",
      ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});
true ? DatePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types10.default.object,
  /**
   * className applied to the root component.
   */
  className: import_prop_types10.default.string,
  disabled: import_prop_types10.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types10.default.bool,
  isLandscape: import_prop_types10.default.bool.isRequired,
  onChange: import_prop_types10.default.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: import_prop_types10.default.func.isRequired,
  readOnly: import_prop_types10.default.bool,
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
  titleId: import_prop_types10.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types10.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types10.default.node,
  value: import_prop_types10.default.any,
  /**
   * Currently visible picker view.
   */
  view: import_prop_types10.default.oneOf(["day", "month", "year"]).isRequired,
  views: import_prop_types10.default.arrayOf(import_prop_types10.default.oneOf(["day", "month", "year"]).isRequired).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/DatePicker/shared.js
function useDatePickerDefaultizedProps(props, name) {
  var _themeProps$slots, _themeProps$disableFu, _themeProps$disablePa, _themeProps$slotProps;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  const localeText = React19.useMemo(() => {
    var _themeProps$localeTex;
    if (((_themeProps$localeTex = themeProps.localeText) == null ? void 0 : _themeProps$localeTex.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      datePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const slots = (_themeProps$slots = themeProps.slots) != null ? _themeProps$slots : uncapitalizeObjectKeys(themeProps.components);
  return _extends({}, themeProps, {
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    disableFuture: (_themeProps$disableFu = themeProps.disableFuture) != null ? _themeProps$disableFu : false,
    disablePast: (_themeProps$disablePa = themeProps.disablePast) != null ? _themeProps$disablePa : false,
    minDate: applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate),
    slots: _extends({
      toolbar: DatePickerToolbar
    }, slots),
    slotProps: (_themeProps$slotProps = themeProps.slotProps) != null ? _themeProps$slotProps : themeProps.componentsProps
  });
}

// node_modules/@mui/x-date-pickers/internals/hooks/useDesktopPicker/useDesktopPicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React20 = __toESM(require_react());
init_useForkRef();
init_useId();
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var _excluded16 = ["props", "getOpenDialogAriaText"];
var _excluded24 = ["ownerState"];
var _excluded34 = ["ownerState"];
var useDesktopPicker = (_ref) => {
  var _innerSlotProps$toolb, _innerSlotProps$toolb2, _slots$inputAdornment, _slots$openPickerButt, _slots$layout;
  let {
    props,
    getOpenDialogAriaText
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded16);
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
    autoFocus,
    localeText,
    reduceAnimations
  } = props;
  const utils = useUtils();
  const internalInputRef = React20.useRef(null);
  const containerRef = React20.useRef(null);
  const labelId = useId();
  const isToolbarHidden = (_innerSlotProps$toolb = innerSlotProps == null || (_innerSlotProps$toolb2 = innerSlotProps.toolbar) == null ? void 0 : _innerSlotProps$toolb2.hidden) != null ? _innerSlotProps$toolb : false;
  const {
    open,
    actions,
    hasUIView,
    layoutProps,
    renderCurrentView,
    shouldRestoreFocus,
    fieldProps: pickerFieldProps
  } = usePicker(_extends({}, pickerParams, {
    props,
    inputRef: internalInputRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: "desktop"
  }));
  const InputAdornment = (_slots$inputAdornment = slots.inputAdornment) != null ? _slots$inputAdornment : InputAdornment_default;
  const _useSlotProps = useSlotProps({
    elementType: InputAdornment,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: props
  }), inputAdornmentProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded24);
  const OpenPickerButton = (_slots$openPickerButt = slots.openPickerButton) != null ? _slots$openPickerButt : IconButton_default;
  const _useSlotProps2 = useSlotProps({
    elementType: OpenPickerButton,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.openPickerButton,
    additionalProps: {
      disabled: disabled || readOnly,
      onClick: open ? actions.onClose : actions.onOpen,
      "aria-label": getOpenDialogAriaText(pickerFieldProps.value, utils),
      edge: inputAdornmentProps.position
    },
    ownerState: props
  }), openPickerButtonProps = _objectWithoutPropertiesLoose(_useSlotProps2, _excluded34);
  const OpenPickerIcon = slots.openPickerIcon;
  const Field = slots.field;
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, {
      readOnly,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      timezone,
      label,
      autoFocus: autoFocus && !props.open,
      focused: open ? true : void 0
    }),
    ownerState: props
  });
  if (hasUIView) {
    fieldProps.InputProps = _extends({}, fieldProps.InputProps, {
      ref: containerRef,
      [`${inputAdornmentProps.position}Adornment`]: (0, import_jsx_runtime21.jsx)(InputAdornment, _extends({}, inputAdornmentProps, {
        children: (0, import_jsx_runtime21.jsx)(OpenPickerButton, _extends({}, openPickerButtonProps, {
          children: (0, import_jsx_runtime21.jsx)(OpenPickerIcon, _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.openPickerIcon))
        }))
      }))
    });
  }
  const slotsForField = _extends({
    textField: slots.textField
  }, fieldProps.slots);
  const Layout = (_slots$layout = slots.layout) != null ? _slots$layout : PickersLayout;
  const handleInputRef = useForkRef(internalInputRef, fieldProps.inputRef, inputRef);
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId
    }),
    popper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.popper)
  });
  const renderPicker = () => (0, import_jsx_runtime22.jsxs)(LocalizationProvider, {
    localeText,
    children: [(0, import_jsx_runtime21.jsx)(Field, _extends({}, fieldProps, {
      slots: slotsForField,
      slotProps,
      inputRef: handleInputRef
    })), (0, import_jsx_runtime21.jsx)(PickersPopper, _extends({
      role: "dialog",
      placement: "bottom-start",
      anchorEl: containerRef.current
    }, actions, {
      open,
      slots,
      slotProps,
      shouldRestoreFocus,
      reduceAnimations,
      children: (0, import_jsx_runtime21.jsx)(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};

// node_modules/@mui/x-date-pickers/dateViewRenderers/dateViewRenderers.js
var React21 = __toESM(require_react());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var renderDateViewCalendar = ({
  view,
  onViewChange,
  views: views13,
  focusedView,
  onFocusedViewChange,
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
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  defaultCalendarMonth,
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
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
}) => (0, import_jsx_runtime23.jsx)(DateCalendar, {
  view,
  onViewChange,
  views: views13.filter(isDatePickerView),
  focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
  onFocusedViewChange,
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
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  defaultCalendarMonth,
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
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
});

// node_modules/@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.js
var DesktopDatePicker = React22.forwardRef(function DesktopDatePicker2(inProps, ref) {
  var _defaultizedProps$yea, _defaultizedProps$slo2, _props$localeText$ope, _props$localeText;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiDesktopDatePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(utils, defaultizedProps, false),
    yearsPerRow: (_defaultizedProps$yea = defaultizedProps.yearsPerRow) != null ? _defaultizedProps$yea : 4,
    slots: _extends({
      openPickerIcon: CalendarIcon,
      field: DateField
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
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    getOpenDialogAriaText: (_props$localeText$ope = (_props$localeText = props.localeText) == null ? void 0 : _props$localeText.openDatePickerDialogue) != null ? _props$localeText$ope : localeText.openDatePickerDialogue,
    validator: validateDate
  });
  return renderPicker();
});
DesktopDatePicker.propTypes = {
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
  autoFocus: import_prop_types11.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types11.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types11.default.bool,
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
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types11.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: import_prop_types11.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types11.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types11.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types11.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types11.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types11.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types11.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types11.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types11.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types11.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types11.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.shape({
    current: import_prop_types11.default.object
  })]),
  /**
   * The label content.
   */
  label: import_prop_types11.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types11.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types11.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types11.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types11.default.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types11.default.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types11.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types11.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types11.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types11.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types11.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types11.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types11.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types11.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types11.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types11.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types11.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types11.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types11.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types11.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types11.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types11.default.func,
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
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types11.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types11.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types11.default.func,
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
  showDaysOutsideCurrentMonth: import_prop_types11.default.bool,
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
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
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types11.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types11.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types11.default.shape({
    day: import_prop_types11.default.func,
    month: import_prop_types11.default.func,
    year: import_prop_types11.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types11.default.arrayOf(import_prop_types11.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: import_prop_types11.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/MobileDatePicker/MobileDatePicker.js
init_extends();
var React24 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/internals/hooks/useMobilePicker/useMobilePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React23 = __toESM(require_react());
init_useForkRef();
init_useId();
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var _excluded17 = ["props", "getOpenDialogAriaText"];
var useMobilePicker = (_ref) => {
  var _innerSlotProps$toolb, _innerSlotProps$toolb2, _slots$layout;
  let {
    props,
    getOpenDialogAriaText
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded17);
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
    localeText
  } = props;
  const utils = useUtils();
  const internalInputRef = React23.useRef(null);
  const labelId = useId();
  const isToolbarHidden = (_innerSlotProps$toolb = innerSlotProps == null || (_innerSlotProps$toolb2 = innerSlotProps.toolbar) == null ? void 0 : _innerSlotProps$toolb2.hidden) != null ? _innerSlotProps$toolb : false;
  const {
    open,
    actions,
    layoutProps,
    renderCurrentView,
    fieldProps: pickerFieldProps
  } = usePicker(_extends({}, pickerParams, {
    props,
    inputRef: internalInputRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: "mobile"
  }));
  const Field = slots.field;
  const fieldProps = useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps == null ? void 0 : innerSlotProps.field,
    additionalProps: _extends({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, !(disabled || readOnly) && {
      onClick: actions.onOpen,
      onKeyDown: onSpaceOrEnter(actions.onOpen)
    }, {
      readOnly: readOnly != null ? readOnly : true,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      timezone,
      label
    }),
    ownerState: props
  });
  fieldProps.inputProps = _extends({}, fieldProps.inputProps, {
    "aria-label": getOpenDialogAriaText(pickerFieldProps.value, utils)
  });
  const slotsForField = _extends({
    textField: slots.textField
  }, fieldProps.slots);
  const Layout = (_slots$layout = slots.layout) != null ? _slots$layout : PickersLayout;
  const handleInputRef = useForkRef(internalInputRef, fieldProps.inputRef, inputRef);
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = void 0;
    }
  }
  const slotProps = _extends({}, innerSlotProps, {
    toolbar: _extends({}, innerSlotProps == null ? void 0 : innerSlotProps.toolbar, {
      titleId: labelId
    }),
    mobilePaper: _extends({
      "aria-labelledby": labelledById
    }, innerSlotProps == null ? void 0 : innerSlotProps.mobilePaper)
  });
  const renderPicker = () => (0, import_jsx_runtime25.jsxs)(LocalizationProvider, {
    localeText,
    children: [(0, import_jsx_runtime24.jsx)(Field, _extends({}, fieldProps, {
      slots: slotsForField,
      slotProps,
      inputRef: handleInputRef
    })), (0, import_jsx_runtime24.jsx)(PickersModalDialog, _extends({}, actions, {
      open,
      slots,
      slotProps,
      children: (0, import_jsx_runtime24.jsx)(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};

// node_modules/@mui/x-date-pickers/MobileDatePicker/MobileDatePicker.js
var MobileDatePicker = React24.forwardRef(function MobileDatePicker2(inProps, ref) {
  var _defaultizedProps$slo2, _props$localeText$ope, _props$localeText;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiMobileDatePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(utils, defaultizedProps, false),
    slots: _extends({
      field: DateField
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
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    getOpenDialogAriaText: (_props$localeText$ope = (_props$localeText = props.localeText) == null ? void 0 : _props$localeText.openDatePickerDialogue) != null ? _props$localeText$ope : localeText.openDatePickerDialogue,
    validator: validateDate
  });
  return renderPicker();
});
MobileDatePicker.propTypes = {
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
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types12.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: import_prop_types12.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types12.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types12.default.bool,
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
   */
  inputRef: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.shape({
    current: import_prop_types12.default.object
  })]),
  /**
   * The label content.
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
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types12.default.oneOf([3, 4]),
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
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types12.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types12.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types12.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types12.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types12.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types12.default.oneOf(["landscape", "portrait"]),
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
   * @default () => <span data-mui-test="loading-progress">...</span>
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
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types12.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types12.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types12.default.func,
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
  value: import_prop_types12.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types12.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types12.default.shape({
    day: import_prop_types12.default.func,
    month: import_prop_types12.default.func,
    year: import_prop_types12.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types12.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var _excluded18 = ["desktopModeMediaQuery"];
var DatePicker = React25.forwardRef(function DatePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDatePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime26.jsx)(DesktopDatePicker, _extends({
      ref
    }, other));
  }
  return (0, import_jsx_runtime26.jsx)(MobileDatePicker, _extends({
    ref
  }, other));
});
true ? DatePicker.propTypes = {
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
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types13.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: import_prop_types13.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types13.default.any,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types13.default.string,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types13.default.bool,
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
   */
  inputRef: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.shape({
    current: import_prop_types13.default.object
  })]),
  /**
   * The label content.
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
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types13.default.oneOf([3, 4]),
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
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types13.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types13.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types13.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types13.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types13.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types13.default.oneOf(["landscape", "portrait"]),
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
   * @default () => <span data-mui-test="loading-progress">...</span>
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
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types13.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types13.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types13.default.func,
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
  value: import_prop_types13.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types13.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types13.default.shape({
    day: import_prop_types13.default.func,
    month: import_prop_types13.default.func,
    year: import_prop_types13.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types13.default.arrayOf(import_prop_types13.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: import_prop_types13.default.oneOf([3, 4])
} : void 0;

// node_modules/@mui/x-date-pickers/StaticDatePicker/StaticDatePicker.js
init_extends();
var React26 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
var StaticDatePicker = React26.forwardRef(function StaticDatePicker2(inProps, ref) {
  var _defaultizedProps$dis, _defaultizedProps$yea, _defaultizedProps$slo;
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, "MuiStaticDatePicker");
  const displayStaticWrapperAs = (_defaultizedProps$dis = defaultizedProps.displayStaticWrapperAs) != null ? _defaultizedProps$dis : "mobile";
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    displayStaticWrapperAs,
    yearsPerRow: (_defaultizedProps$yea = defaultizedProps.yearsPerRow) != null ? _defaultizedProps$yea : displayStaticWrapperAs === "mobile" ? 3 : 4,
    slotProps: _extends({}, defaultizedProps.slotProps, {
      toolbar: _extends({
        hidden: displayStaticWrapperAs === "desktop"
      }, (_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.toolbar)
    })
  });
  const {
    renderPicker
  } = useStaticPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date",
    validator: validateDate,
    ref
  });
  return renderPicker();
});
StaticDatePicker.propTypes = {
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
   * Class name applied to the root element.
   */
  className: import_prop_types14.default.string,
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
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types14.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: import_prop_types14.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types14.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types14.default.bool,
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
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types14.default.bool,
  /**
   * Force static wrapper inner components to be rendered in mobile or desktop mode.
   * @default "mobile"
   */
  displayStaticWrapperAs: import_prop_types14.default.oneOf(["desktop", "mobile"]),
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
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types14.default.oneOf([3, 4]),
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
   * Callback fired when component requests to be closed.
   * Can be fired when selecting (by default on `desktop` mode) or clearing a value.
   * @deprecated Please avoid using as it will be removed in next major version.
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
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types14.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types14.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types14.default.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types14.default.oneOf(["landscape", "portrait"]),
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
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types14.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types14.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types14.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types14.default.func,
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
  value: import_prop_types14.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types14.default.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types14.default.shape({
    day: import_prop_types14.default.func,
    month: import_prop_types14.default.func,
    year: import_prop_types14.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types14.default.arrayOf(import_prop_types14.default.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types14.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/TimePicker/TimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React32 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/DesktopTimePicker/DesktopTimePicker.js
init_extends();
var React30 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/TimePicker/shared.js
init_extends();
var React28 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/TimePicker/TimePickerToolbar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React27 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-date-pickers/TimePicker/timePickerToolbarClasses.js
init_esm();
function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiTimePickerToolbar", slot);
}
var timePickerToolbarClasses = generateUtilityClasses("MuiTimePickerToolbar", ["root", "separator", "hourMinuteLabel", "hourMinuteLabelLandscape", "hourMinuteLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);

// node_modules/@mui/x-date-pickers/TimePicker/TimePickerToolbar.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var _excluded19 = ["ampm", "ampmInClock", "value", "isLandscape", "onChange", "view", "onViewChange", "views", "disabled", "readOnly"];
var useUtilityClasses15 = (ownerState) => {
  const {
    theme,
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"],
    hourMinuteLabel: ["hourMinuteLabel", isLandscape && "hourMinuteLabelLandscape", theme.direction === "rtl" && "hourMinuteLabelReverse"],
    ampmSelection: ["ampmSelection", isLandscape && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getTimePickerToolbarUtilityClass, classes);
};
var TimePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var TimePickerToolbarSeparator = styled_default(PickersToolbarText, {
  name: "MuiTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  outline: 0,
  margin: "0 4px 0 2px",
  cursor: "default"
});
var TimePickerToolbarHourMinuteLabel = styled_default("div", {
  name: "MuiTimePickerToolbar",
  slot: "HourMinuteLabel",
  overridesResolver: (props, styles) => [{
    [`&.${timePickerToolbarClasses.hourMinuteLabelLandscape}`]: styles.hourMinuteLabelLandscape,
    [`&.${timePickerToolbarClasses.hourMinuteLabelReverse}`]: styles.hourMinuteLabelReverse
  }, styles.hourMinuteLabel]
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end"
}, ownerState.isLandscape && {
  marginTop: "auto"
}, theme.direction === "rtl" && {
  flexDirection: "row-reverse"
}));
TimePickerToolbarHourMinuteLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types15.default.elementType,
  ownerState: import_prop_types15.default.object.isRequired,
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object])
};
var TimePickerToolbarAmPmSelection = styled_default("div", {
  name: "MuiTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles) => [{
    [`.${timePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${timePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})(({
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: "4px 0 auto",
  flexDirection: "row",
  justifyContent: "space-around",
  flexBasis: "100%"
}, {
  [`& .${timePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  }
}));
TimePickerToolbarAmPmSelection.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types15.default.elementType,
  ownerState: import_prop_types15.default.object.isRequired,
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object])
};
function TimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    value,
    isLandscape,
    onChange,
    view,
    onViewChange,
    views: views13,
    disabled,
    readOnly
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
  const utils = useUtils();
  const localeText = useLocaleText();
  const theme = useTheme();
  const showAmPmControl = Boolean(ampm && !ampmInClock && views13.includes("hours"));
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, onChange);
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const ownerState = props;
  const classes = useUtilityClasses15(_extends({}, ownerState, {
    theme
  }));
  const separator = (0, import_jsx_runtime27.jsx)(TimePickerToolbarSeparator, {
    tabIndex: -1,
    value: ":",
    variant: "h3",
    selected: false,
    className: classes.separator
  });
  return (0, import_jsx_runtime28.jsxs)(TimePickerToolbarRoot, _extends({
    landscapeDirection: "row",
    toolbarTitle: localeText.timePickerToolbarTitle,
    isLandscape,
    ownerState,
    className: classes.root
  }, other, {
    children: [(0, import_jsx_runtime28.jsxs)(TimePickerToolbarHourMinuteLabel, {
      className: classes.hourMinuteLabel,
      ownerState,
      children: [arrayIncludes(views13, "hours") && (0, import_jsx_runtime27.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => onViewChange("hours"),
        selected: view === "hours",
        value: value ? formatHours(value) : "--"
      }), arrayIncludes(views13, ["hours", "minutes"]) && separator, arrayIncludes(views13, "minutes") && (0, import_jsx_runtime27.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "h3",
        onClick: () => onViewChange("minutes"),
        selected: view === "minutes",
        value: value ? utils.format(value, "minutes") : "--"
      }), arrayIncludes(views13, ["minutes", "seconds"]) && separator, arrayIncludes(views13, "seconds") && (0, import_jsx_runtime27.jsx)(PickersToolbarButton, {
        variant: "h3",
        onClick: () => onViewChange("seconds"),
        selected: view === "seconds",
        value: value ? utils.format(value, "seconds") : "--"
      })]
    }), showAmPmControl && (0, import_jsx_runtime28.jsxs)(TimePickerToolbarAmPmSelection, {
      className: classes.ampmSelection,
      ownerState,
      children: [(0, import_jsx_runtime27.jsx)(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "am",
        typographyClassName: classes.ampmLabel,
        value: formatMeridiem(utils, "am"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
        disabled
      }), (0, import_jsx_runtime27.jsx)(PickersToolbarButton, {
        disableRipple: true,
        variant: "subtitle2",
        selected: meridiemMode === "pm",
        typographyClassName: classes.ampmLabel,
        value: formatMeridiem(utils, "pm"),
        onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
        disabled
      })]
    })]
  }));
}
true ? TimePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ampm: import_prop_types15.default.bool,
  ampmInClock: import_prop_types15.default.bool,
  classes: import_prop_types15.default.object,
  /**
   * className applied to the root component.
   */
  className: import_prop_types15.default.string,
  disabled: import_prop_types15.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types15.default.bool,
  isLandscape: import_prop_types15.default.bool.isRequired,
  onChange: import_prop_types15.default.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: import_prop_types15.default.func.isRequired,
  readOnly: import_prop_types15.default.bool,
  titleId: import_prop_types15.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types15.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types15.default.node,
  value: import_prop_types15.default.any,
  /**
   * Currently visible picker view.
   */
  view: import_prop_types15.default.oneOf(["hours", "meridiem", "minutes", "seconds"]).isRequired,
  views: import_prop_types15.default.arrayOf(import_prop_types15.default.oneOf(["hours", "meridiem", "minutes", "seconds"]).isRequired).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/TimePicker/shared.js
function useTimePickerDefaultizedProps(props, name) {
  var _themeProps$ampm, _themeProps$slots, _themeProps$slotProps, _themeProps$disableFu, _themeProps$disablePa;
  const utils = useUtils();
  const themeProps = useThemeProps({
    props,
    name
  });
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
  const localeText = React28.useMemo(() => {
    var _themeProps$localeTex;
    if (((_themeProps$localeTex = themeProps.localeText) == null ? void 0 : _themeProps$localeTex.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      timePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const slots = (_themeProps$slots = themeProps.slots) != null ? _themeProps$slots : uncapitalizeObjectKeys(themeProps.components);
  const slotProps = (_themeProps$slotProps = themeProps.slotProps) != null ? _themeProps$slotProps : themeProps.componentsProps;
  return _extends({}, themeProps, {
    ampm,
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["hours", "minutes"],
    defaultOpenTo: "hours"
  }), {
    disableFuture: (_themeProps$disableFu = themeProps.disableFuture) != null ? _themeProps$disableFu : false,
    disablePast: (_themeProps$disablePa = themeProps.disablePast) != null ? _themeProps$disablePa : false,
    slots: _extends({
      toolbar: TimePickerToolbar
    }, slots),
    slotProps: _extends({}, slotProps, {
      toolbar: _extends({
        ampm,
        ampmInClock: themeProps.ampmInClock
      }, slotProps == null ? void 0 : slotProps.toolbar)
    })
  });
}

// node_modules/@mui/x-date-pickers/timeViewRenderers/timeViewRenderers.js
var React29 = __toESM(require_react());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var renderTimeViewClock = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views: views13,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  ampmInClock,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
}) => (0, import_jsx_runtime29.jsx)(TimeClock, {
  view,
  onViewChange,
  focusedView: focusedView && isTimeView(focusedView) ? focusedView : null,
  onFocusedViewChange,
  views: views13.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  ampmInClock,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  showViewSwitcher,
  disableIgnoringDatePartForTimeValidation,
  timezone
});
var renderDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views: views13,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => (0, import_jsx_runtime29.jsx)(DigitalClock, {
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views: views13.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeStep: timeSteps == null ? void 0 : timeSteps.minutes,
  skipDisabled,
  timezone
});
var renderMultiSectionDigitalClockTimeView = ({
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views: views13,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
}) => (0, import_jsx_runtime29.jsx)(MultiSectionDigitalClock, {
  view,
  onViewChange,
  focusedView,
  onFocusedViewChange,
  views: views13.filter(isTimeView),
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minTime,
  maxTime,
  shouldDisableTime,
  shouldDisableClock,
  minutesStep,
  ampm,
  components,
  componentsProps,
  slots,
  slotProps,
  readOnly,
  disabled,
  sx,
  autoFocus,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timezone
});

// node_modules/@mui/x-date-pickers/DesktopTimePicker/DesktopTimePicker.js
var DesktopTimePicker = React30.forwardRef(function DesktopTimePicker2(inProps, ref) {
  var _defaultizedProps$thr, _defaultizedProps$amp, _viewRenderers$hours, _defaultizedProps$slo2, _defaultizedProps$slo3, _props$localeText$ope, _props$localeText;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, "MuiDesktopTimePicker");
  const thresholdToRenderTimeInASingleColumn = (_defaultizedProps$thr = defaultizedProps.thresholdToRenderTimeInASingleColumn) != null ? _defaultizedProps$thr : 24;
  const timeSteps = _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, defaultizedProps.timeSteps);
  const shouldRenderTimeInASingleColumn = 24 * 60 / (timeSteps.hours * timeSteps.minutes) <= thresholdToRenderTimeInASingleColumn;
  const renderTimeView = shouldRenderTimeInASingleColumn ? renderDigitalClockTimeView : renderMultiSectionDigitalClockTimeView;
  const viewRenderers = _extends({
    hours: renderTimeView,
    minutes: renderTimeView,
    seconds: renderTimeView,
    meridiem: renderTimeView
  }, defaultizedProps.viewRenderers);
  const ampmInClock = (_defaultizedProps$amp = defaultizedProps.ampmInClock) != null ? _defaultizedProps$amp : true;
  const actionBarActions = shouldRenderTimeInASingleColumn ? [] : ["accept"];
  const shouldHoursRendererContainMeridiemView = ((_viewRenderers$hours = viewRenderers.hours) == null ? void 0 : _viewRenderers$hours.name) === renderMultiSectionDigitalClockTimeView.name;
  const views13 = defaultizedProps.ampm && shouldHoursRendererContainMeridiemView ? [...defaultizedProps.views, "meridiem"] : defaultizedProps.views;
  const props = _extends({}, defaultizedProps, {
    ampmInClock,
    timeSteps,
    viewRenderers,
    format: resolveTimeFormat(utils, defaultizedProps),
    // Setting only `hours` time view in case of single column time picker
    // Allows for easy view lifecycle management
    views: shouldRenderTimeInASingleColumn ? ["hours"] : views13,
    slots: _extends({
      field: TimeField,
      openPickerIcon: ClockIcon
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: true,
        ampmInClock
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar),
      actionBar: _extends({
        actions: actionBarActions
      }, (_defaultizedProps$slo3 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo3.actionBar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "time",
    getOpenDialogAriaText: (_props$localeText$ope = (_props$localeText = props.localeText) == null ? void 0 : _props$localeText.openTimePickerDialogue) != null ? _props$localeText$ope : localeText.openTimePickerDialogue,
    validator: validateTime
  });
  return renderPicker();
});
DesktopTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types16.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types16.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types16.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types16.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types16.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types16.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types16.default.object,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types16.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types16.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types16.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types16.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types16.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types16.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types16.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types16.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.shape({
    current: import_prop_types16.default.object
  })]),
  /**
   * The label content.
   */
  label: import_prop_types16.default.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types16.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types16.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types16.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types16.default.number,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types16.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types16.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types16.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types16.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types16.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types16.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types16.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types16.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types16.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types16.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types16.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types16.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types16.default.any,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types16.default.number, import_prop_types16.default.shape({
    endIndex: import_prop_types16.default.number.isRequired,
    startIndex: import_prop_types16.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types16.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types16.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types16.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types16.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types16.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: import_prop_types16.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types16.default.shape({
    hours: import_prop_types16.default.number,
    minutes: import_prop_types16.default.number,
    seconds: import_prop_types16.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types16.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types16.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types16.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types16.default.shape({
    hours: import_prop_types16.default.func,
    meridiem: import_prop_types16.default.func,
    minutes: import_prop_types16.default.func,
    seconds: import_prop_types16.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types16.default.arrayOf(import_prop_types16.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
};

// node_modules/@mui/x-date-pickers/MobileTimePicker/MobileTimePicker.js
init_extends();
var React31 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());
var MobileTimePicker = React31.forwardRef(function MobileTimePicker2(inProps, ref) {
  var _defaultizedProps$amp, _defaultizedProps$slo2, _props$localeText$ope, _props$localeText;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, "MuiMobileTimePicker");
  const viewRenderers = _extends({
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const ampmInClock = (_defaultizedProps$amp = defaultizedProps.ampmInClock) != null ? _defaultizedProps$amp : false;
  const props = _extends({}, defaultizedProps, {
    ampmInClock,
    viewRenderers,
    format: resolveTimeFormat(utils, defaultizedProps),
    slots: _extends({
      field: TimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "time",
    getOpenDialogAriaText: (_props$localeText$ope = (_props$localeText = props.localeText) == null ? void 0 : _props$localeText.openTimePickerDialogue) != null ? _props$localeText$ope : localeText.openTimePickerDialogue,
    validator: validateTime
  });
  return renderPicker();
});
MobileTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types17.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types17.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types17.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types17.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types17.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types17.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types17.default.object,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types17.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types17.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types17.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types17.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types17.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types17.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types17.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types17.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.shape({
    current: import_prop_types17.default.object
  })]),
  /**
   * The label content.
   */
  label: import_prop_types17.default.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types17.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types17.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types17.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types17.default.number,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types17.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types17.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types17.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types17.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types17.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types17.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types17.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types17.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types17.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types17.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types17.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types17.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types17.default.any,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types17.default.number, import_prop_types17.default.shape({
    endIndex: import_prop_types17.default.number.isRequired,
    startIndex: import_prop_types17.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types17.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types17.default.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types17.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types17.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types17.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types17.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types17.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types17.default.shape({
    hours: import_prop_types17.default.func,
    minutes: import_prop_types17.default.func,
    seconds: import_prop_types17.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types17.default.arrayOf(import_prop_types17.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
};

// node_modules/@mui/x-date-pickers/TimePicker/TimePicker.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var _excluded20 = ["desktopModeMediaQuery"];
var TimePicker = React32.forwardRef(function TimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTimePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime30.jsx)(DesktopTimePicker, _extends({
      ref
    }, other));
  }
  return (0, import_jsx_runtime30.jsx)(MobileTimePicker, _extends({
    ref
  }, other));
});
true ? TimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types18.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types18.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types18.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types18.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types18.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types18.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types18.default.object,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types18.default.any,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types18.default.string,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types18.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types18.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types18.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types18.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types18.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types18.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types18.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.shape({
    current: import_prop_types18.default.object
  })]),
  /**
   * The label content.
   */
  label: import_prop_types18.default.node,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types18.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types18.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types18.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types18.default.number,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types18.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types18.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types18.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types18.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types18.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types18.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types18.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types18.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types18.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types18.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types18.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types18.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types18.default.any,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types18.default.number, import_prop_types18.default.shape({
    endIndex: import_prop_types18.default.number.isRequired,
    startIndex: import_prop_types18.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types18.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types18.default.func,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types18.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types18.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types18.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object, import_prop_types18.default.bool])), import_prop_types18.default.func, import_prop_types18.default.object]),
  /**
   * Amount of time options below or at which the single column time renderer is used.
   * @default 24
   */
  thresholdToRenderTimeInASingleColumn: import_prop_types18.default.number,
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types18.default.shape({
    hours: import_prop_types18.default.number,
    minutes: import_prop_types18.default.number,
    seconds: import_prop_types18.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types18.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types18.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types18.default.oneOf(["hours", "meridiem", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types18.default.shape({
    hours: import_prop_types18.default.func,
    meridiem: import_prop_types18.default.func,
    minutes: import_prop_types18.default.func,
    seconds: import_prop_types18.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types18.default.arrayOf(import_prop_types18.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
} : void 0;

// node_modules/@mui/x-date-pickers/StaticTimePicker/StaticTimePicker.js
init_extends();
var React33 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
var StaticTimePicker = React33.forwardRef(function StaticTimePicker2(inProps, ref) {
  var _defaultizedProps$dis, _defaultizedProps$amp, _defaultizedProps$slo;
  const defaultizedProps = useTimePickerDefaultizedProps(inProps, "MuiStaticTimePicker");
  const displayStaticWrapperAs = (_defaultizedProps$dis = defaultizedProps.displayStaticWrapperAs) != null ? _defaultizedProps$dis : "mobile";
  const ampmInClock = (_defaultizedProps$amp = defaultizedProps.ampmInClock) != null ? _defaultizedProps$amp : displayStaticWrapperAs === "desktop";
  const viewRenderers = _extends({
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    displayStaticWrapperAs,
    ampmInClock,
    slotProps: _extends({}, defaultizedProps.slotProps, {
      toolbar: _extends({
        hidden: displayStaticWrapperAs === "desktop",
        ampmInClock
      }, (_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.toolbar)
    })
  });
  const {
    renderPicker
  } = useStaticPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "time",
    validator: validateTime,
    ref
  });
  return renderPicker();
});
StaticTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types19.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types19.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types19.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types19.default.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types19.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types19.default.object,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types19.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types19.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types19.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types19.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types19.default.bool,
  /**
   * Force static wrapper inner components to be rendered in mobile or desktop mode.
   * @default "mobile"
   */
  displayStaticWrapperAs: import_prop_types19.default.oneOf(["desktop", "mobile"]),
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types19.default.object,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types19.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types19.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types19.default.number,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types19.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types19.default.func,
  /**
   * Callback fired when component requests to be closed.
   * Can be fired when selecting (by default on `desktop` mode) or clearing a value.
   * @deprecated Please avoid using as it will be removed in next major version.
   */
  onClose: import_prop_types19.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types19.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types19.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types19.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types19.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types19.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types19.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types19.default.any,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types19.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types19.default.func,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types19.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types19.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object, import_prop_types19.default.bool])), import_prop_types19.default.func, import_prop_types19.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types19.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types19.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types19.default.oneOf(["hours", "minutes", "seconds"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types19.default.shape({
    hours: import_prop_types19.default.func,
    minutes: import_prop_types19.default.func,
    seconds: import_prop_types19.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types19.default.arrayOf(import_prop_types19.default.oneOf(["hours", "minutes", "seconds"]).isRequired)
};

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React40 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/DesktopDateTimePicker/DesktopDateTimePicker.js
init_extends();
var React38 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers/DateTimePicker/shared.js
init_extends();
var React36 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerTabs.js
var React34 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-date-pickers/DateTimePicker/dateTimePickerTabsClasses.js
init_esm();
function getDateTimePickerTabsUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerTabs", slot);
}
var dateTimePickerTabsClasses = generateUtilityClasses("MuiDateTimePickerTabs", ["root"]);

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerTabs.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var viewToTab = (view) => {
  if (isDatePickerView(view)) {
    return "date";
  }
  return "time";
};
var tabToView = (tab) => {
  if (tab === "date") {
    return "day";
  }
  return "hours";
};
var useUtilityClasses16 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDateTimePickerTabsUtilityClass, classes);
};
var DateTimePickerTabsRoot = styled_default(Tabs_default, {
  name: "MuiDateTimePickerTabs",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  boxShadow: `0 -1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
  "&:last-child": {
    boxShadow: `0 1px 0 0 inset ${(theme.vars || theme).palette.divider}`,
    [`& .${tabsClasses_default.indicator}`]: {
      bottom: "auto",
      top: 0
    }
  }
}));
var DateTimePickerTabs = function DateTimePickerTabs2(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerTabs"
  });
  const {
    dateIcon = (0, import_jsx_runtime31.jsx)(DateRangeIcon, {}),
    onViewChange,
    timeIcon = (0, import_jsx_runtime31.jsx)(TimeIcon, {}),
    view,
    hidden = typeof window === "undefined" || window.innerHeight < 667
  } = props;
  const localeText = useLocaleText();
  const classes = useUtilityClasses16(props);
  const handleChange = (event, value) => {
    onViewChange(tabToView(value));
  };
  if (hidden) {
    return null;
  }
  return (0, import_jsx_runtime32.jsxs)(DateTimePickerTabsRoot, {
    ownerState: props,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    className: classes.root,
    children: [(0, import_jsx_runtime31.jsx)(Tab_default, {
      value: "date",
      "aria-label": localeText.dateTableLabel,
      icon: (0, import_jsx_runtime31.jsx)(React34.Fragment, {
        children: dateIcon
      })
    }), (0, import_jsx_runtime31.jsx)(Tab_default, {
      value: "time",
      "aria-label": localeText.timeTableLabel,
      icon: (0, import_jsx_runtime31.jsx)(React34.Fragment, {
        children: timeIcon
      })
    })]
  });
};
true ? DateTimePickerTabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types20.default.object,
  /**
   * Date tab icon.
   * @default DateRange
   */
  dateIcon: import_prop_types20.default.node,
  /**
   * Toggles visibility of the tabs allowing view switching.
   * @default `window.innerHeight < 667` for `DesktopDateTimePicker` and `MobileDateTimePicker`, `displayStaticWrapperAs === 'desktop'` for `StaticDateTimePicker`
   */
  hidden: import_prop_types20.default.bool,
  /**
   * Callback called when a tab is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: import_prop_types20.default.func.isRequired,
  /**
   * Time tab icon.
   * @default Time
   */
  timeIcon: import_prop_types20.default.node,
  /**
   * Currently visible picker view.
   */
  view: import_prop_types20.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerToolbar.js
init_objectWithoutPropertiesLoose();
init_extends();
var React35 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-date-pickers/DateTimePicker/dateTimePickerToolbarClasses.js
init_esm();
function getDateTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiDateTimePickerToolbar", slot);
}
var dateTimePickerToolbarClasses = generateUtilityClasses("MuiDateTimePickerToolbar", ["root", "dateContainer", "timeContainer", "timeDigitsContainer", "separator", "timeLabelReverse", "ampmSelection", "ampmLandscape", "ampmLabel"]);

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePickerToolbar.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var _excluded21 = ["ampm", "ampmInClock", "value", "onChange", "view", "isLandscape", "onViewChange", "toolbarFormat", "toolbarPlaceholder", "views", "disabled", "readOnly", "toolbarVariant"];
var useUtilityClasses17 = (ownerState) => {
  const {
    classes,
    theme,
    isLandscape
  } = ownerState;
  const slots = {
    root: ["root"],
    dateContainer: ["dateContainer"],
    timeContainer: ["timeContainer", theme.direction === "rtl" && "timeLabelReverse"],
    timeDigitsContainer: ["timeDigitsContainer", theme.direction === "rtl" && "timeLabelReverse"],
    separator: ["separator"],
    ampmSelection: ["ampmSelection", isLandscape && "ampmLandscape"],
    ampmLabel: ["ampmLabel"]
  };
  return composeClasses(slots, getDateTimePickerToolbarUtilityClass, classes);
};
var DateTimePickerToolbarRoot = styled_default(PickersToolbar, {
  name: "MuiDateTimePickerToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  paddingLeft: ownerState.toolbarVariant === "desktop" && !ownerState.isLandscape ? 24 : 16,
  paddingRight: ownerState.toolbarVariant === "desktop" && !ownerState.isLandscape ? 0 : 16,
  borderBottom: ownerState.toolbarVariant === "desktop" ? `1px solid ${(theme.vars || theme).palette.divider}` : void 0,
  borderRight: ownerState.toolbarVariant === "desktop" && ownerState.isLandscape ? `1px solid ${(theme.vars || theme).palette.divider}` : void 0,
  justifyContent: "space-around",
  position: "relative"
}));
DateTimePickerToolbarRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types21.default.elementType,
  classes: import_prop_types21.default.object,
  className: import_prop_types21.default.string,
  isLandscape: import_prop_types21.default.bool.isRequired,
  isMobileKeyboardViewOpen: import_prop_types21.default.bool,
  landscapeDirection: import_prop_types21.default.oneOf(["column", "row"]),
  ownerState: import_prop_types21.default.object.isRequired,
  sx: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object, import_prop_types21.default.bool])), import_prop_types21.default.func, import_prop_types21.default.object]),
  toggleMobileKeyboardView: import_prop_types21.default.func,
  toolbarTitle: import_prop_types21.default.node,
  viewType: import_prop_types21.default.oneOf(["date", "time"])
};
var DateTimePickerToolbarDateContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "DateContainer",
  overridesResolver: (props, styles) => styles.dateContainer
})({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
});
var DateTimePickerToolbarTimeContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeContainer",
  overridesResolver: (props, styles) => styles.timeContainer
})(({
  theme,
  ownerState
}) => {
  const direction = ownerState.isLandscape && ownerState.toolbarVariant !== "desktop" ? "column" : "row";
  return _extends({
    display: "flex",
    flexDirection: direction
  }, ownerState.toolbarVariant === "desktop" && _extends({}, !ownerState.isLandscape && {
    gap: 9,
    marginRight: 4,
    alignSelf: "flex-end"
  }), theme.direction === "rtl" && {
    flexDirection: `${direction}-reverse`
  });
});
var DateTimePickerToolbarTimeDigitsContainer = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "TimeDigitsContainer",
  overridesResolver: (props, styles) => styles.timeDigitsContainer
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex"
}, ownerState.toolbarVariant === "desktop" && {
  gap: 1.5
}, theme.direction === "rtl" && {
  flexDirection: "row-reverse"
}));
DateTimePickerToolbarTimeContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: import_prop_types21.default.elementType,
  ownerState: import_prop_types21.default.object.isRequired,
  sx: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object, import_prop_types21.default.bool])), import_prop_types21.default.func, import_prop_types21.default.object])
};
var DateTimePickerToolbarSeparator = styled_default(PickersToolbarText, {
  name: "MuiDateTimePickerToolbar",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})(({
  ownerState
}) => ({
  margin: ownerState.toolbarVariant === "desktop" ? 0 : "0 4px 0 2px",
  cursor: "default"
}));
var DateTimePickerToolbarAmPmSelection = styled_default("div", {
  name: "MuiDateTimePickerToolbar",
  slot: "AmPmSelection",
  overridesResolver: (props, styles) => [{
    [`.${dateTimePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${dateTimePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})(({
  ownerState
}) => _extends({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: "4px 0 auto",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%"
}, {
  [`& .${dateTimePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  }
}));
function DateTimePickerToolbar(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePickerToolbar"
  });
  const {
    ampm,
    ampmInClock,
    value,
    onChange,
    view,
    isLandscape,
    onViewChange,
    toolbarFormat,
    toolbarPlaceholder = "––",
    views: views13,
    disabled,
    readOnly,
    toolbarVariant = "mobile"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const ownerState = props;
  const utils = useUtils();
  const {
    meridiemMode,
    handleMeridiemChange
  } = useMeridiemMode(value, ampm, onChange);
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const isDesktop = toolbarVariant === "desktop";
  const localeText = useLocaleText();
  const theme = useTheme();
  const classes = useUtilityClasses17(_extends({}, ownerState, {
    theme
  }));
  const formatHours = (time) => ampm ? utils.format(time, "hours12h") : utils.format(time, "hours24h");
  const dateText = React35.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils.formatByString(value, toolbarFormat);
    }
    return utils.format(value, "shortDate");
  }, [value, toolbarFormat, toolbarPlaceholder, utils]);
  return (0, import_jsx_runtime34.jsxs)(DateTimePickerToolbarRoot, _extends({
    toolbarTitle: localeText.dateTimePickerToolbarTitle,
    isLandscape,
    className: classes.root
  }, other, {
    ownerState,
    children: [(0, import_jsx_runtime34.jsxs)(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState,
      children: [views13.includes("year") && (0, import_jsx_runtime33.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => onViewChange("year"),
        selected: view === "year",
        value: value ? utils.format(value, "year") : "–"
      }), views13.includes("day") && (0, import_jsx_runtime33.jsx)(PickersToolbarButton, {
        tabIndex: -1,
        variant: isDesktop ? "h5" : "h4",
        onClick: () => onViewChange("day"),
        selected: view === "day",
        value: dateText
      })]
    }), (0, import_jsx_runtime34.jsxs)(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState,
      children: [(0, import_jsx_runtime34.jsxs)(DateTimePickerToolbarTimeDigitsContainer, {
        className: classes.timeDigitsContainer,
        ownerState,
        children: [views13.includes("hours") && (0, import_jsx_runtime33.jsx)(PickersToolbarButton, {
          variant: isDesktop ? "h5" : "h3",
          width: isDesktop && !isLandscape ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
          onClick: () => onViewChange("hours"),
          selected: view === "hours",
          value: value ? formatHours(value) : "--"
        }), views13.includes("minutes") && (0, import_jsx_runtime34.jsxs)(React35.Fragment, {
          children: [(0, import_jsx_runtime33.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? "h5" : "h3",
            value: ":",
            className: classes.separator,
            ownerState
          }), (0, import_jsx_runtime33.jsx)(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && !isLandscape ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => onViewChange("minutes"),
            selected: view === "minutes",
            value: value ? utils.format(value, "minutes") : "--"
          })]
        }), views13.includes("seconds") && (0, import_jsx_runtime34.jsxs)(React35.Fragment, {
          children: [(0, import_jsx_runtime33.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? "h5" : "h3",
            value: ":",
            className: classes.separator,
            ownerState
          }), (0, import_jsx_runtime33.jsx)(PickersToolbarButton, {
            variant: isDesktop ? "h5" : "h3",
            width: isDesktop && !isLandscape ? MULTI_SECTION_CLOCK_SECTION_WIDTH : void 0,
            onClick: () => onViewChange("seconds"),
            selected: view === "seconds",
            value: value ? utils.format(value, "seconds") : "--"
          })]
        })]
      }), showAmPmControl && !isDesktop && (0, import_jsx_runtime34.jsxs)(DateTimePickerToolbarAmPmSelection, {
        className: classes.ampmSelection,
        ownerState,
        children: [(0, import_jsx_runtime33.jsx)(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === "am",
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(utils, "am"),
          onClick: readOnly ? void 0 : () => handleMeridiemChange("am"),
          disabled
        }), (0, import_jsx_runtime33.jsx)(PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === "pm",
          typographyClassName: classes.ampmLabel,
          value: formatMeridiem(utils, "pm"),
          onClick: readOnly ? void 0 : () => handleMeridiemChange("pm"),
          disabled
        })]
      }), ampm && isDesktop && (0, import_jsx_runtime33.jsx)(PickersToolbarButton, {
        variant: "h5",
        onClick: () => onViewChange("meridiem"),
        selected: view === "meridiem",
        value: value && meridiemMode ? formatMeridiem(utils, meridiemMode) : "--",
        width: MULTI_SECTION_CLOCK_SECTION_WIDTH
      })]
    })]
  }));
}
true ? DateTimePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ampm: import_prop_types21.default.bool,
  ampmInClock: import_prop_types21.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types21.default.object,
  /**
   * className applied to the root component.
   */
  className: import_prop_types21.default.string,
  disabled: import_prop_types21.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: import_prop_types21.default.bool,
  isLandscape: import_prop_types21.default.bool.isRequired,
  onChange: import_prop_types21.default.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: import_prop_types21.default.func.isRequired,
  readOnly: import_prop_types21.default.bool,
  titleId: import_prop_types21.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: import_prop_types21.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: import_prop_types21.default.node,
  toolbarVariant: import_prop_types21.default.oneOf(["desktop", "mobile"]),
  value: import_prop_types21.default.any,
  /**
   * Currently visible picker view.
   */
  view: import_prop_types21.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired,
  views: import_prop_types21.default.arrayOf(import_prop_types21.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired
} : void 0;

// node_modules/@mui/x-date-pickers/DateTimePicker/shared.js
function useDateTimePickerDefaultizedProps(props, name) {
  var _themeProps$ampm, _themeProps$slots, _themeProps$slotProps, _themeProps$orientati, _themeProps$disableIg, _themeProps$disableFu, _themeProps$disablePa, _themeProps$minDateTi, _themeProps$maxDateTi, _themeProps$minDateTi2, _themeProps$maxDateTi2;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const themeProps = useThemeProps({
    props,
    name
  });
  const ampm = (_themeProps$ampm = themeProps.ampm) != null ? _themeProps$ampm : utils.is12HourCycleInCurrentLocale();
  const localeText = React36.useMemo(() => {
    var _themeProps$localeTex;
    if (((_themeProps$localeTex = themeProps.localeText) == null ? void 0 : _themeProps$localeTex.toolbarTitle) == null) {
      return themeProps.localeText;
    }
    return _extends({}, themeProps.localeText, {
      dateTimePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  const slots = (_themeProps$slots = themeProps.slots) != null ? _themeProps$slots : uncapitalizeObjectKeys(themeProps.components);
  const slotProps = (_themeProps$slotProps = themeProps.slotProps) != null ? _themeProps$slotProps : themeProps.componentsProps;
  return _extends({}, themeProps, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ["year", "day", "hours", "minutes"],
    defaultOpenTo: "day"
  }), {
    ampm,
    localeText,
    orientation: (_themeProps$orientati = themeProps.orientation) != null ? _themeProps$orientati : "portrait",
    // TODO: Remove from public API
    disableIgnoringDatePartForTimeValidation: (_themeProps$disableIg = themeProps.disableIgnoringDatePartForTimeValidation) != null ? _themeProps$disableIg : Boolean(themeProps.minDateTime || themeProps.maxDateTime || // allow time clock to correctly check time validity: https://github.com/mui/mui-x/issues/8520
    themeProps.disablePast || themeProps.disableFuture),
    disableFuture: (_themeProps$disableFu = themeProps.disableFuture) != null ? _themeProps$disableFu : false,
    disablePast: (_themeProps$disablePa = themeProps.disablePast) != null ? _themeProps$disablePa : false,
    minDate: applyDefaultDate(utils, (_themeProps$minDateTi = themeProps.minDateTime) != null ? _themeProps$minDateTi : themeProps.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, (_themeProps$maxDateTi = themeProps.maxDateTime) != null ? _themeProps$maxDateTi : themeProps.maxDate, defaultDates.maxDate),
    minTime: (_themeProps$minDateTi2 = themeProps.minDateTime) != null ? _themeProps$minDateTi2 : themeProps.minTime,
    maxTime: (_themeProps$maxDateTi2 = themeProps.maxDateTime) != null ? _themeProps$maxDateTi2 : themeProps.maxTime,
    slots: _extends({
      toolbar: DateTimePickerToolbar,
      tabs: DateTimePickerTabs
    }, slots),
    slotProps: _extends({}, slotProps, {
      toolbar: _extends({
        ampm
      }, slotProps == null ? void 0 : slotProps.toolbar)
    })
  });
}

// node_modules/@mui/x-date-pickers/dateTimeViewRenderers/dateTimeViewRenderers.js
init_extends();
var React37 = __toESM(require_react());

// node_modules/@mui/x-date-pickers/internals/components/DateTimeViewWrapper/DateTimeViewWrapper.js
var DateTimeViewWrapper = styled_default("div")({
  display: "flex",
  margin: "0 auto"
});

// node_modules/@mui/x-date-pickers/dateTimeViewRenderers/dateTimeViewRenderers.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var renderDesktopDateTimeView = ({
  view,
  onViewChange,
  views: views13,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  minTime,
  maxDate,
  maxTime,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  shouldDisableTime,
  shouldDisableClock,
  reduceAnimations,
  minutesStep,
  ampm,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsPerRow,
  defaultCalendarMonth,
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
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone,
  disableIgnoringDatePartForTimeValidation,
  timeSteps,
  skipDisabled,
  timeViewsCount
}) => {
  var _resolveComponentProp, _slotProps$actionBar;
  const isActionBarVisible = !!((_resolveComponentProp = resolveComponentProps((_slotProps$actionBar = slotProps == null ? void 0 : slotProps.actionBar) != null ? _slotProps$actionBar : componentsProps == null ? void 0 : componentsProps.actionBar, {})) != null && (_resolveComponentProp = _resolveComponentProp.actions) != null && _resolveComponentProp.length);
  return (0, import_jsx_runtime36.jsxs)(React37.Fragment, {
    children: [(0, import_jsx_runtime36.jsxs)(DateTimeViewWrapper, {
      children: [(0, import_jsx_runtime35.jsx)(DateCalendar, {
        view: isDatePickerView(view) ? view : "day",
        onViewChange,
        views: views13.filter(isDatePickerView),
        focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
        onFocusedViewChange,
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
        shouldDisableMonth,
        shouldDisableYear,
        reduceAnimations,
        onMonthChange,
        monthsPerRow,
        onYearChange,
        yearsPerRow,
        defaultCalendarMonth,
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
        sx,
        autoFocus,
        fixedWeekNumber,
        displayWeekNumber,
        timezone
      }), timeViewsCount > 0 && (0, import_jsx_runtime36.jsxs)(React37.Fragment, {
        children: [(0, import_jsx_runtime35.jsx)(Divider_default, {
          orientation: "vertical"
        }), (0, import_jsx_runtime35.jsx)(MultiSectionDigitalClock, {
          view: isInternalTimeView(view) ? view : "hours",
          onViewChange,
          focusedView: focusedView && isInternalTimeView(focusedView) ? focusedView : null,
          onFocusedViewChange,
          views: views13.filter(isInternalTimeView),
          value,
          defaultValue,
          referenceDate,
          onChange,
          className,
          classes,
          disableFuture,
          disablePast,
          minTime,
          maxTime,
          shouldDisableTime,
          shouldDisableClock,
          minutesStep,
          ampm,
          components,
          componentsProps,
          slots,
          slotProps,
          readOnly,
          disabled,
          sx: _extends({
            borderBottom: 0,
            width: "auto",
            [`.${multiSectionDigitalClockSectionClasses.root}`]: {
              maxHeight: "100%"
            }
          }, Array.isArray(sx) ? sx : [sx]),
          autoFocus,
          disableIgnoringDatePartForTimeValidation,
          timeSteps,
          skipDisabled,
          timezone
        })]
      })]
    }), isActionBarVisible && (0, import_jsx_runtime35.jsx)(Divider_default, {})]
  });
};

// node_modules/@mui/x-date-pickers/internals/utils/date-time-utils.js
init_extends();
init_objectWithoutPropertiesLoose();
var _excluded25 = ["views", "format"];
var resolveDateTimeFormat = (utils, _ref) => {
  let {
    views: views13,
    format
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded25);
  if (format) {
    return format;
  }
  const dateViews = [];
  const timeViews19 = [];
  views13.forEach((view) => {
    if (isTimeView(view)) {
      timeViews19.push(view);
    } else {
      dateViews.push(view);
    }
  });
  if (timeViews19.length === 0) {
    return resolveDateFormat(utils, _extends({
      views: dateViews
    }, other), false);
  }
  if (dateViews.length === 0) {
    return resolveTimeFormat(utils, _extends({
      views: timeViews19
    }, other));
  }
  const timeFormat = resolveTimeFormat(utils, _extends({
    views: timeViews19
  }, other));
  const dateFormat = resolveDateFormat(utils, _extends({
    views: dateViews
  }, other), false);
  return `${dateFormat} ${timeFormat}`;
};

// node_modules/@mui/x-date-pickers/DesktopDateTimePicker/DesktopDateTimePicker.js
var DesktopDateTimePicker = React38.forwardRef(function DesktopDateTimePicker2(inProps, ref) {
  var _defaultizedProps$amp, _defaultizedProps$yea, _defaultizedProps$slo2, _defaultizedProps$slo3, _defaultizedProps$slo4, _props$localeText$ope, _props$localeText;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiDesktopDateTimePicker");
  const timeSteps = _extends({
    hours: 1,
    minutes: 5,
    seconds: 5
  }, defaultizedProps.timeSteps);
  const shouldUseNewRenderer = !defaultizedProps.viewRenderers || Object.keys(defaultizedProps.viewRenderers).length === 0;
  const viewRenderers = (
    // we can only ensure the expected two-column layout if none of the renderers are overridden
    shouldUseNewRenderer ? {
      day: renderDesktopDateTimeView,
      month: renderDesktopDateTimeView,
      year: renderDesktopDateTimeView,
      hours: renderDesktopDateTimeView,
      minutes: renderDesktopDateTimeView,
      seconds: renderDesktopDateTimeView,
      meridiem: renderDesktopDateTimeView
    } : _extends({
      day: renderDateViewCalendar,
      month: renderDateViewCalendar,
      year: renderDateViewCalendar,
      hours: null,
      minutes: null,
      seconds: null,
      meridiem: null
    }, defaultizedProps.viewRenderers)
  );
  const ampmInClock = (_defaultizedProps$amp = defaultizedProps.ampmInClock) != null ? _defaultizedProps$amp : true;
  const actionBarActions = shouldUseNewRenderer ? ["accept"] : [];
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(utils, defaultizedProps),
    views: defaultizedProps.ampm ? [...defaultizedProps.views, "meridiem"] : defaultizedProps.views,
    yearsPerRow: (_defaultizedProps$yea = defaultizedProps.yearsPerRow) != null ? _defaultizedProps$yea : 4,
    ampmInClock,
    timeSteps,
    slots: _extends({
      field: DateTimeField,
      openPickerIcon: CalendarIcon
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: true,
        ampmInClock,
        toolbarVariant: shouldUseNewRenderer ? "desktop" : "mobile"
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar),
      tabs: _extends({
        hidden: true
      }, (_defaultizedProps$slo3 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo3.tabs),
      actionBar: _extends({
        actions: actionBarActions
      }, (_defaultizedProps$slo4 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo4.actionBar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    getOpenDialogAriaText: (_props$localeText$ope = (_props$localeText = props.localeText) == null ? void 0 : _props$localeText.openDatePickerDialogue) != null ? _props$localeText$ope : localeText.openDatePickerDialogue,
    validator: validateDateTime
  });
  return renderPicker();
});
DesktopDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types22.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types22.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types22.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types22.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types22.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types22.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types22.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types22.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: import_prop_types22.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types22.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types22.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types22.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types22.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types22.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types22.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types22.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types22.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types22.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types22.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types22.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.shape({
    current: import_prop_types22.default.object
  })]),
  /**
   * The label content.
   */
  label: import_prop_types22.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types22.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types22.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types22.default.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types22.default.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types22.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types22.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types22.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types22.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types22.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types22.default.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types22.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types22.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types22.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types22.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types22.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types22.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types22.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types22.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types22.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types22.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types22.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types22.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types22.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types22.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types22.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types22.default.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types22.default.oneOfType([import_prop_types22.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types22.default.number, import_prop_types22.default.shape({
    endIndex: import_prop_types22.default.number.isRequired,
    startIndex: import_prop_types22.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types22.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types22.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types22.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types22.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types22.default.func,
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
  showDaysOutsideCurrentMonth: import_prop_types22.default.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types22.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types22.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types22.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types22.default.oneOfType([import_prop_types22.default.arrayOf(import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object, import_prop_types22.default.bool])), import_prop_types22.default.func, import_prop_types22.default.object]),
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types22.default.shape({
    hours: import_prop_types22.default.number,
    minutes: import_prop_types22.default.number,
    seconds: import_prop_types22.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types22.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types22.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types22.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types22.default.shape({
    day: import_prop_types22.default.func,
    hours: import_prop_types22.default.func,
    meridiem: import_prop_types22.default.func,
    minutes: import_prop_types22.default.func,
    month: import_prop_types22.default.func,
    seconds: import_prop_types22.default.func,
    year: import_prop_types22.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types22.default.arrayOf(import_prop_types22.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: import_prop_types22.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/MobileDateTimePicker/MobileDateTimePicker.js
init_extends();
var React39 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
var MobileDateTimePicker = React39.forwardRef(function MobileDateTimePicker2(inProps, ref) {
  var _defaultizedProps$amp, _defaultizedProps$slo2, _defaultizedProps$slo3, _props$localeText$ope, _props$localeText;
  const localeText = useLocaleText();
  const utils = useUtils();
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiMobileDateTimePicker");
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const ampmInClock = (_defaultizedProps$amp = defaultizedProps.ampmInClock) != null ? _defaultizedProps$amp : false;
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateTimeFormat(utils, defaultizedProps),
    ampmInClock,
    slots: _extends({
      field: DateTimeField
    }, defaultizedProps.slots),
    slotProps: _extends({}, defaultizedProps.slotProps, {
      field: (ownerState) => {
        var _defaultizedProps$slo;
        return _extends({}, resolveComponentProps((_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.field, ownerState), extractValidationProps(defaultizedProps), {
          ref
        });
      },
      toolbar: _extends({
        hidden: false,
        ampmInClock
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar),
      tabs: _extends({
        hidden: false
      }, (_defaultizedProps$slo3 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo3.tabs)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    getOpenDialogAriaText: (_props$localeText$ope = (_props$localeText = props.localeText) == null ? void 0 : _props$localeText.openDatePickerDialogue) != null ? _props$localeText$ope : localeText.openDatePickerDialogue,
    validator: validateDateTime
  });
  return renderPicker();
});
MobileDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types23.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types23.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types23.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types23.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types23.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types23.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types23.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types23.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: import_prop_types23.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types23.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types23.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types23.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types23.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types23.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types23.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types23.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types23.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types23.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types23.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types23.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.shape({
    current: import_prop_types23.default.object
  })]),
  /**
   * The label content.
   */
  label: import_prop_types23.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types23.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types23.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types23.default.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types23.default.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types23.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types23.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types23.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types23.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types23.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types23.default.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types23.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types23.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types23.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types23.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types23.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types23.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types23.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types23.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types23.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types23.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types23.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types23.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types23.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types23.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types23.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types23.default.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types23.default.oneOfType([import_prop_types23.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types23.default.number, import_prop_types23.default.shape({
    endIndex: import_prop_types23.default.number.isRequired,
    startIndex: import_prop_types23.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types23.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types23.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types23.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types23.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types23.default.func,
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
  showDaysOutsideCurrentMonth: import_prop_types23.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types23.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types23.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object, import_prop_types23.default.bool])), import_prop_types23.default.func, import_prop_types23.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types23.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types23.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types23.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types23.default.shape({
    day: import_prop_types23.default.func,
    hours: import_prop_types23.default.func,
    minutes: import_prop_types23.default.func,
    month: import_prop_types23.default.func,
    seconds: import_prop_types23.default.func,
    year: import_prop_types23.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types23.default.arrayOf(import_prop_types23.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types23.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers/DateTimePicker/DateTimePicker.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var _excluded26 = ["desktopModeMediaQuery"];
var DateTimePicker = React40.forwardRef(function DateTimePicker2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDateTimePicker"
  });
  const {
    desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded26);
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return (0, import_jsx_runtime37.jsx)(DesktopDateTimePicker, _extends({
      ref
    }, other));
  }
  return (0, import_jsx_runtime37.jsx)(MobileDateTimePicker, _extends({
    ref
  }, other));
});
true ? DateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types24.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types24.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types24.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types24.default.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: import_prop_types24.default.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types24.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types24.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types24.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: import_prop_types24.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types24.default.any,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: import_prop_types24.default.string,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types24.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types24.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types24.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types24.default.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: import_prop_types24.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types24.default.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types24.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types24.default.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: import_prop_types24.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types24.default.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.shape({
    current: import_prop_types24.default.object
  })]),
  /**
   * The label content.
   */
  label: import_prop_types24.default.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types24.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types24.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types24.default.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types24.default.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types24.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types24.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types24.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types24.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types24.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types24.default.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types24.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types24.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: import_prop_types24.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types24.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types24.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: import_prop_types24.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types24.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types24.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types24.default.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: import_prop_types24.default.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types24.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types24.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types24.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types24.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types24.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types24.default.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types24.default.oneOfType([import_prop_types24.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types24.default.number, import_prop_types24.default.shape({
    endIndex: import_prop_types24.default.number.isRequired,
    startIndex: import_prop_types24.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types24.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types24.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types24.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types24.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types24.default.func,
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
  showDaysOutsideCurrentMonth: import_prop_types24.default.bool,
  /**
   * If `true`, disabled digital clock items will not be rendered.
   * @default false
   */
  skipDisabled: import_prop_types24.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types24.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types24.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types24.default.oneOfType([import_prop_types24.default.arrayOf(import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object, import_prop_types24.default.bool])), import_prop_types24.default.func, import_prop_types24.default.object]),
  /**
   * The time steps between two time unit options.
   * For example, if `timeStep.minutes = 8`, then the available minute options will be `[0, 8, 16, 24, 32, 40, 48, 56]`.
   * When single column time renderer is used, only `timeStep.minutes` will be used.
   * @default{ hours: 1, minutes: 5, seconds: 5 }
   */
  timeSteps: import_prop_types24.default.shape({
    hours: import_prop_types24.default.number,
    minutes: import_prop_types24.default.number,
    seconds: import_prop_types24.default.number
  }),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types24.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types24.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types24.default.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types24.default.shape({
    day: import_prop_types24.default.func,
    hours: import_prop_types24.default.func,
    meridiem: import_prop_types24.default.func,
    minutes: import_prop_types24.default.func,
    month: import_prop_types24.default.func,
    seconds: import_prop_types24.default.func,
    year: import_prop_types24.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types24.default.arrayOf(import_prop_types24.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: import_prop_types24.default.oneOf([3, 4])
} : void 0;

// node_modules/@mui/x-date-pickers/StaticDateTimePicker/StaticDateTimePicker.js
init_extends();
var React41 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
var StaticDateTimePicker = React41.forwardRef(function StaticDateTimePicker2(inProps, ref) {
  var _defaultizedProps$dis, _defaultizedProps$amp, _defaultizedProps$yea, _defaultizedProps$slo, _defaultizedProps$slo2;
  const defaultizedProps = useDateTimePickerDefaultizedProps(inProps, "MuiStaticDateTimePicker");
  const displayStaticWrapperAs = (_defaultizedProps$dis = defaultizedProps.displayStaticWrapperAs) != null ? _defaultizedProps$dis : "mobile";
  const ampmInClock = (_defaultizedProps$amp = defaultizedProps.ampmInClock) != null ? _defaultizedProps$amp : displayStaticWrapperAs === "desktop";
  const viewRenderers = _extends({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar,
    hours: renderTimeViewClock,
    minutes: renderTimeViewClock,
    seconds: renderTimeViewClock
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    displayStaticWrapperAs,
    ampmInClock,
    yearsPerRow: (_defaultizedProps$yea = defaultizedProps.yearsPerRow) != null ? _defaultizedProps$yea : displayStaticWrapperAs === "mobile" ? 3 : 4,
    slotProps: _extends({}, defaultizedProps.slotProps, {
      tabs: _extends({
        hidden: displayStaticWrapperAs === "desktop"
      }, (_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.tabs),
      toolbar: _extends({
        hidden: displayStaticWrapperAs === "desktop",
        ampmInClock
      }, (_defaultizedProps$slo2 = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo2.toolbar)
    })
  });
  const {
    renderPicker
  } = useStaticPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: "date-time",
    validator: validateDateTime,
    ref
  });
  return renderPicker();
});
StaticDateTimePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types25.default.bool,
  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default true on desktop, false on mobile
   */
  ampmInClock: import_prop_types25.default.bool,
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: import_prop_types25.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types25.default.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types25.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types25.default.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types25.default.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   */
  defaultCalendarMonth: import_prop_types25.default.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types25.default.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types25.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types25.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types25.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types25.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types25.default.bool,
  /**
   * Force static wrapper inner components to be rendered in mobile or desktop mode.
   * @default "mobile"
   */
  displayStaticWrapperAs: import_prop_types25.default.oneOf(["desktop", "mobile"]),
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types25.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types25.default.number,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types25.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types25.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types25.default.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types25.default.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types25.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types25.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types25.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types25.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types25.default.number,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: import_prop_types25.default.oneOf([3, 4]),
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types25.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types25.default.func,
  /**
   * Callback fired when component requests to be closed.
   * Can be fired when selecting (by default on `desktop` mode) or clearing a value.
   * @deprecated Please avoid using as it will be removed in next major version.
   */
  onClose: import_prop_types25.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types25.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types25.default.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: import_prop_types25.default.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: import_prop_types25.default.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: import_prop_types25.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: import_prop_types25.default.oneOf(["landscape", "portrait"]),
  readOnly: import_prop_types25.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types25.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types25.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: import_prop_types25.default.func,
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types25.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: import_prop_types25.default.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: import_prop_types25.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types25.default.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: import_prop_types25.default.func,
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
  showDaysOutsideCurrentMonth: import_prop_types25.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types25.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types25.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types25.default.oneOfType([import_prop_types25.default.arrayOf(import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object, import_prop_types25.default.bool])), import_prop_types25.default.func, import_prop_types25.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types25.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types25.default.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: import_prop_types25.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types25.default.shape({
    day: import_prop_types25.default.func,
    hours: import_prop_types25.default.func,
    minutes: import_prop_types25.default.func,
    month: import_prop_types25.default.func,
    seconds: import_prop_types25.default.func,
    year: import_prop_types25.default.func
  }),
  /**
   * Available views.
   */
  views: import_prop_types25.default.arrayOf(import_prop_types25.default.oneOf(["day", "hours", "minutes", "month", "seconds", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: import_prop_types25.default.oneOf([3, 4])
};

// node_modules/@mui/x-date-pickers-pro/MultiInputTimeRangeField/MultiInputTimeRangeField.js
init_objectWithoutPropertiesLoose();
init_extends();
var React42 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useMultiInputRangeField/useMultiInputTimeRangeField.js
init_extends();
init_useEventCallback();

// node_modules/@mui/x-date-pickers-pro/internals/utils/validation/validateTimeRange.js
var validateTimeRange = ({
  props,
  value,
  adapter
}) => {
  const [start, end] = value;
  const dateTimeValidations = [validateTime({
    adapter,
    value: start,
    props
  }), validateTime({
    adapter,
    value: end,
    props
  })];
  if (dateTimeValidations[0] || dateTimeValidations[1]) {
    return dateTimeValidations;
  }
  if (start === null || end === null) {
    return [null, null];
  }
  if (!isRangeValid(adapter.utils, value)) {
    return ["invalidRange", "invalidRange"];
  }
  return [null, null];
};

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useMultiInputRangeField/useMultiInputTimeRangeField.js
var useDefaultizedTimeRangeFieldProps = (props) => {
  var _props$ampm, _props$disablePast, _props$disableFuture, _props$format;
  const utils = useUtils();
  const ampm = (_props$ampm = props.ampm) != null ? _props$ampm : utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h;
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : defaultFormat
  });
};
var useMultiInputTimeRangeField = ({
  sharedProps: inSharedProps,
  startTextFieldProps,
  startInputRef,
  unstableStartFieldRef,
  endTextFieldProps,
  endInputRef,
  unstableEndFieldRef
}) => {
  const sharedProps = useDefaultizedTimeRangeFieldProps(inSharedProps);
  const adapter = useLocalizationContext();
  const {
    value: valueProp,
    defaultValue,
    format,
    shouldRespectLeadingZeros,
    timezone: timezoneProp,
    onChange,
    disabled,
    readOnly
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
        validationError: validateTimeRange({
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
  }), validateTimeRange, rangeValueManager.isSameError, rangeValueManager.defaultErrorState);
  const startFieldProps = _extends({
    error: !!validationError[0]
  }, startTextFieldProps, {
    format,
    shouldRespectLeadingZeros,
    disabled,
    readOnly,
    timezone,
    unstableFieldRef: unstableStartFieldRef,
    value: valueProp === void 0 ? void 0 : valueProp[0],
    defaultValue: defaultValue === void 0 ? void 0 : defaultValue[0],
    onChange: handleStartDateChange
  });
  const endFieldProps = _extends({
    error: !!validationError[1]
  }, endTextFieldProps, {
    format,
    shouldRespectLeadingZeros,
    disabled,
    readOnly,
    timezone,
    unstableFieldRef: unstableEndFieldRef,
    value: valueProp === void 0 ? void 0 : valueProp[1],
    defaultValue: defaultValue === void 0 ? void 0 : defaultValue[1],
    onChange: handleEndDateChange
  });
  const startDateResponse = useTimeField({
    props: startFieldProps,
    inputRef: startInputRef
  });
  const endDateResponse = useTimeField({
    props: endFieldProps,
    inputRef: endInputRef
  });
  return {
    startDate: startDateResponse,
    endDate: endDateResponse
  };
};

// node_modules/@mui/x-date-pickers-pro/MultiInputTimeRangeField/MultiInputTimeRangeField.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var _excluded27 = ["slots", "slotProps", "components", "componentsProps", "disabled", "autoFocus", "unstableStartFieldRef", "unstableEndFieldRef", "className"];
var _excluded28 = ["onKeyDown", "ref", "readOnly", "inputMode"];
var _excluded35 = ["onKeyDown", "ref", "readOnly", "inputMode"];
var multiInputTimeRangeFieldClasses = generateUtilityClasses("MuiMultiInputTimeRangeField", ["root", "separator"]);
var getMultiInputTimeRangeFieldUtilityClass = (slot) => generateUtilityClass("MuiMultiInputTimeRangeField", slot);
var useUtilityClasses18 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"]
  };
  return composeClasses(slots, getMultiInputTimeRangeFieldUtilityClass, classes);
};
var MultiInputTimeRangeFieldRoot = styled_default(React42.forwardRef((props, ref) => (0, import_jsx_runtime38.jsx)(Stack_default, _extends({
  ref,
  spacing: 2,
  direction: "row",
  alignItems: "baseline"
}, props))), {
  name: "MuiMultiInputTimeRangeField",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var MultiInputTimeRangeFieldSeparator = styled_default((props) => {
  var _props$children;
  return (0, import_jsx_runtime38.jsx)(Typography_default, _extends({}, props, {
    children: (_props$children = props.children) != null ? _props$children : " – "
  }));
}, {
  name: "MuiMultiInputTimeRangeField",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({});
var MultiInputTimeRangeField = React42.forwardRef(function MultiInputTimeRangeField2(inProps, ref) {
  var _slots$root, _slots$textField, _slots$separator;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiMultiInputTimeRangeField"
  });
  const {
    internalProps: timeFieldInternalProps,
    forwardedProps
  } = splitFieldInternalAndForwardedProps(themeProps, "time");
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
  } = forwardedProps, otherForwardedProps = _objectWithoutPropertiesLoose(forwardedProps, _excluded27);
  const slots = innerSlots != null ? innerSlots : uncapitalizeObjectKeys(components);
  const slotProps = innerSlotProps != null ? innerSlotProps : componentsProps;
  const ownerState = themeProps;
  const classes = useUtilityClasses18(ownerState);
  const Root = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : MultiInputTimeRangeFieldRoot;
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps == null ? void 0 : slotProps.root,
    externalForwardedProps: otherForwardedProps,
    additionalProps: {
      ref
    },
    ownerState,
    className: clsx(className, classes.root)
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
  const Separator = (_slots$separator = slots == null ? void 0 : slots.separator) != null ? _slots$separator : MultiInputTimeRangeFieldSeparator;
  const separatorProps = useSlotProps({
    elementType: Separator,
    externalSlotProps: slotProps == null ? void 0 : slotProps.separator,
    ownerState,
    className: classes.separator
  });
  const _useMultiInputTimeRan = useMultiInputTimeRangeField({
    sharedProps: _extends({}, timeFieldInternalProps, {
      disabled
    }),
    startTextFieldProps,
    endTextFieldProps,
    startInputRef: startTextFieldProps.inputRef,
    unstableStartFieldRef,
    endInputRef: endTextFieldProps.inputRef,
    unstableEndFieldRef
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
  } = _useMultiInputTimeRan, startDateProps = _objectWithoutPropertiesLoose(_useMultiInputTimeRan.startDate, _excluded35), endDateProps = _objectWithoutPropertiesLoose(_useMultiInputTimeRan.endDate, _excluded28);
  return (0, import_jsx_runtime39.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime38.jsx)(TextField, _extends({
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
    })), (0, import_jsx_runtime38.jsx)(Separator, _extends({}, separatorProps)), (0, import_jsx_runtime38.jsx)(TextField, _extends({
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
true ? MultiInputTimeRangeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types26.default.bool,
  autoFocus: import_prop_types26.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types26.default.object,
  className: import_prop_types26.default.string,
  component: import_prop_types26.default.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types26.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types26.default.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types26.default.arrayOf(import_prop_types26.default.any),
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: import_prop_types26.default.oneOfType([import_prop_types26.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types26.default.arrayOf(import_prop_types26.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types26.default.object]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types26.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types26.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types26.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types26.default.bool,
  /**
   * Add an element between each child.
   */
  divider: import_prop_types26.default.node,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types26.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types26.default.oneOf(["dense", "spacious"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types26.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types26.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types26.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types26.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types26.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types26.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types26.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types26.default.any,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types26.default.oneOfType([import_prop_types26.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types26.default.number, import_prop_types26.default.shape({
    endIndex: import_prop_types26.default.number.isRequired,
    startIndex: import_prop_types26.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types26.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types26.default.func,
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
  shouldRespectLeadingZeros: import_prop_types26.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types26.default.object,
  /**
   * Overridable slots.
   * @default {}
   */
  slots: import_prop_types26.default.object,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: import_prop_types26.default.oneOfType([import_prop_types26.default.arrayOf(import_prop_types26.default.oneOfType([import_prop_types26.default.number, import_prop_types26.default.string])), import_prop_types26.default.number, import_prop_types26.default.object, import_prop_types26.default.string]),
  style: import_prop_types26.default.object,
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types26.default.oneOfType([import_prop_types26.default.arrayOf(import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object, import_prop_types26.default.bool])), import_prop_types26.default.func, import_prop_types26.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types26.default.string,
  unstableEndFieldRef: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object]),
  unstableStartFieldRef: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: import_prop_types26.default.bool,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types26.default.arrayOf(import_prop_types26.default.any)
} : void 0;

// node_modules/@mui/x-date-pickers-pro/MultiInputDateTimeRangeField/MultiInputDateTimeRangeField.js
init_objectWithoutPropertiesLoose();
init_extends();
var React43 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useMultiInputRangeField/useMultiInputDateTimeRangeField.js
init_extends();
init_useEventCallback();

// node_modules/@mui/x-date-pickers-pro/internals/utils/validation/validateDateTimeRange.js
init_extends();
init_objectWithoutPropertiesLoose();
var _excluded29 = ["shouldDisableDate"];
var validateDateTimeRange = ({
  props,
  value,
  adapter
}) => {
  const [start, end] = value;
  const {
    shouldDisableDate
  } = props, otherProps = _objectWithoutPropertiesLoose(props, _excluded29);
  const dateTimeValidations = [validateDateTime({
    adapter,
    value: start,
    props: _extends({}, otherProps, {
      shouldDisableDate: (day) => !!(shouldDisableDate != null && shouldDisableDate(day, "start"))
    })
  }), validateDateTime({
    adapter,
    value: end,
    props: _extends({}, otherProps, {
      shouldDisableDate: (day) => !!(shouldDisableDate != null && shouldDisableDate(day, "end"))
    })
  })];
  if (dateTimeValidations[0] || dateTimeValidations[1]) {
    return dateTimeValidations;
  }
  if (start === null || end === null) {
    return [null, null];
  }
  if (!isRangeValid(adapter.utils, value)) {
    return ["invalidRange", "invalidRange"];
  }
  return [null, null];
};

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useMultiInputRangeField/useMultiInputDateTimeRangeField.js
var useDefaultizedDateTimeRangeFieldProps = (props) => {
  var _props$ampm, _props$disablePast, _props$disableFuture, _props$format, _props$minDateTime, _props$maxDateTime, _props$minDateTime2, _props$maxDateTime2;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const ampm = (_props$ampm = props.ampm) != null ? _props$ampm : utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h;
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : defaultFormat,
    minDate: applyDefaultDate(utils, (_props$minDateTime = props.minDateTime) != null ? _props$minDateTime : props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, (_props$maxDateTime = props.maxDateTime) != null ? _props$maxDateTime : props.maxDate, defaultDates.maxDate),
    minTime: (_props$minDateTime2 = props.minDateTime) != null ? _props$minDateTime2 : props.minTime,
    maxTime: (_props$maxDateTime2 = props.maxDateTime) != null ? _props$maxDateTime2 : props.maxTime,
    disableIgnoringDatePartForTimeValidation: Boolean(props.minDateTime || props.maxDateTime)
  });
};
var useMultiInputDateTimeRangeField = ({
  sharedProps: inSharedProps,
  startTextFieldProps,
  startInputRef,
  unstableStartFieldRef,
  endTextFieldProps,
  endInputRef,
  unstableEndFieldRef
}) => {
  const sharedProps = useDefaultizedDateTimeRangeFieldProps(inSharedProps);
  const adapter = useLocalizationContext();
  const {
    value: valueProp,
    defaultValue,
    format,
    shouldRespectLeadingZeros,
    timezone: timezoneProp,
    onChange,
    disabled,
    readOnly
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
        validationError: validateDateTimeRange({
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
  }), validateDateTimeRange, rangeValueManager.isSameError, rangeValueManager.defaultErrorState);
  const startFieldProps = _extends({
    error: !!validationError[0]
  }, startTextFieldProps, {
    format,
    shouldRespectLeadingZeros,
    disabled,
    readOnly,
    timezone,
    unstableFieldRef: unstableStartFieldRef,
    value: valueProp === void 0 ? void 0 : valueProp[0],
    defaultValue: defaultValue === void 0 ? void 0 : defaultValue[0],
    onChange: handleStartDateChange
  });
  const endFieldProps = _extends({
    error: !!validationError[1]
  }, endTextFieldProps, {
    format,
    shouldRespectLeadingZeros,
    disabled,
    readOnly,
    timezone,
    unstableFieldRef: unstableEndFieldRef,
    value: valueProp === void 0 ? void 0 : valueProp[1],
    defaultValue: defaultValue === void 0 ? void 0 : defaultValue[1],
    onChange: handleEndDateChange
  });
  const startDateResponse = useDateTimeField({
    props: startFieldProps,
    inputRef: startInputRef
  });
  const endDateResponse = useDateTimeField({
    props: endFieldProps,
    inputRef: endInputRef
  });
  return {
    startDate: startDateResponse,
    endDate: endDateResponse
  };
};

// node_modules/@mui/x-date-pickers-pro/MultiInputDateTimeRangeField/MultiInputDateTimeRangeField.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var _excluded30 = ["slots", "slotProps", "components", "componentsProps", "disabled", "autoFocus", "unstableStartFieldRef", "unstableEndFieldRef", "className"];
var _excluded210 = ["onKeyDown", "ref", "readOnly", "inputMode"];
var _excluded36 = ["onKeyDown", "ref", "readOnly", "inputMode"];
var multiInputDateTimeRangeFieldClasses = generateUtilityClasses("MuiMultiInputDateTimeRangeField", ["root", "separator"]);
var getMultiInputDateTimeRangeFieldUtilityClass = (slot) => generateUtilityClass("MuiMultiInputDateTimeRangeField", slot);
var useUtilityClasses19 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    separator: ["separator"]
  };
  return composeClasses(slots, getMultiInputDateTimeRangeFieldUtilityClass, classes);
};
var MultiInputDateTimeRangeFieldRoot = styled_default(React43.forwardRef((props, ref) => (0, import_jsx_runtime40.jsx)(Stack_default, _extends({
  ref,
  spacing: 2,
  direction: "row",
  alignItems: "baseline"
}, props))), {
  name: "MuiMultiInputDateTimeRangeField",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var MultiInputDateTimeRangeFieldSeparator = styled_default((props) => {
  var _props$children;
  return (0, import_jsx_runtime40.jsx)(Typography_default, _extends({}, props, {
    children: (_props$children = props.children) != null ? _props$children : " – "
  }));
}, {
  name: "MuiMultiInputDateTimeRangeField",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({});
var MultiInputDateTimeRangeField = React43.forwardRef(function MultiInputDateTimeRangeField2(inProps, ref) {
  var _slots$root, _slots$textField, _slots$separator;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiMultiInputDateTimeRangeField"
  });
  const {
    internalProps: dateTimeFieldInternalProps,
    forwardedProps
  } = splitFieldInternalAndForwardedProps(themeProps, "date-time");
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
  const classes = useUtilityClasses19(ownerState);
  const Root = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : MultiInputDateTimeRangeFieldRoot;
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
  const Separator = (_slots$separator = slots == null ? void 0 : slots.separator) != null ? _slots$separator : MultiInputDateTimeRangeFieldSeparator;
  const separatorProps = useSlotProps({
    elementType: Separator,
    externalSlotProps: slotProps == null ? void 0 : slotProps.separator,
    ownerState,
    className: classes.separator
  });
  const _useMultiInputDateTim = useMultiInputDateTimeRangeField({
    sharedProps: _extends({}, dateTimeFieldInternalProps, {
      disabled
    }),
    startTextFieldProps,
    endTextFieldProps,
    startInputRef: startTextFieldProps.inputRef,
    unstableStartFieldRef,
    endInputRef: endTextFieldProps.inputRef,
    unstableEndFieldRef
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
  } = _useMultiInputDateTim, startDateProps = _objectWithoutPropertiesLoose(_useMultiInputDateTim.startDate, _excluded36), endDateProps = _objectWithoutPropertiesLoose(_useMultiInputDateTim.endDate, _excluded210);
  return (0, import_jsx_runtime41.jsxs)(Root, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime40.jsx)(TextField, _extends({
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
    })), (0, import_jsx_runtime40.jsx)(Separator, _extends({}, separatorProps)), (0, import_jsx_runtime40.jsx)(TextField, _extends({
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
true ? MultiInputDateTimeRangeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types27.default.bool,
  autoFocus: import_prop_types27.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types27.default.object,
  className: import_prop_types27.default.string,
  component: import_prop_types27.default.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types27.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types27.default.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types27.default.arrayOf(import_prop_types27.default.any),
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: import_prop_types27.default.oneOfType([import_prop_types27.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types27.default.arrayOf(import_prop_types27.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types27.default.object]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types27.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types27.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types27.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types27.default.bool,
  /**
   * Add an element between each child.
   */
  divider: import_prop_types27.default.node,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types27.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types27.default.oneOf(["dense", "spacious"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types27.default.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types27.default.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types27.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types27.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types27.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types27.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types27.default.number,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types27.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types27.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types27.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types27.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types27.default.any,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types27.default.oneOfType([import_prop_types27.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types27.default.number, import_prop_types27.default.shape({
    endIndex: import_prop_types27.default.number.isRequired,
    startIndex: import_prop_types27.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types27.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types27.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types27.default.func,
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
  shouldRespectLeadingZeros: import_prop_types27.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types27.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types27.default.object,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: import_prop_types27.default.oneOfType([import_prop_types27.default.arrayOf(import_prop_types27.default.oneOfType([import_prop_types27.default.number, import_prop_types27.default.string])), import_prop_types27.default.number, import_prop_types27.default.object, import_prop_types27.default.string]),
  style: import_prop_types27.default.object,
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types27.default.oneOfType([import_prop_types27.default.arrayOf(import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object, import_prop_types27.default.bool])), import_prop_types27.default.func, import_prop_types27.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types27.default.string,
  unstableEndFieldRef: import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object]),
  unstableStartFieldRef: import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: import_prop_types27.default.bool,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types27.default.arrayOf(import_prop_types27.default.any)
} : void 0;

// node_modules/@mui/x-date-pickers-pro/SingleInputDateRangeField/SingleInputDateRangeField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React44 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var _excluded31 = ["slots", "slotProps", "components", "componentsProps", "InputProps", "inputProps"];
var _excluded211 = ["inputRef"];
var _excluded37 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly"];
var SingleInputDateRangeField = React44.forwardRef(function SingleInputDateRangeField2(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiSingleInputDateRangeField"
  });
  const {
    slots,
    slotProps,
    components,
    componentsProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded31);
  const ownerState = themeProps;
  const TextField = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField_default;
  const _useSlotProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
    externalForwardedProps: other,
    ownerState
  }), {
    inputRef: externalInputRef
  } = _useSlotProps, textFieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded211);
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const _useSingleInputDateRa = useSingleInputDateRangeField({
    props: textFieldProps,
    inputRef: externalInputRef
  }), {
    ref: inputRef,
    onPaste,
    onKeyDown,
    inputMode,
    readOnly
  } = _useSingleInputDateRa, fieldProps = _objectWithoutPropertiesLoose(_useSingleInputDateRa, _excluded37);
  return (0, import_jsx_runtime42.jsx)(TextField, _extends({
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
SingleInputDateRangeField.fieldType = "single-input";
true ? SingleInputDateRangeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types28.default.bool,
  className: import_prop_types28.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: import_prop_types28.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types28.default.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types28.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types28.default.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types28.default.arrayOf(import_prop_types28.default.any),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types28.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types28.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types28.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types28.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types28.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types28.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types28.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types28.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types28.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types28.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types28.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types28.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types28.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types28.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.shape({
    current: import_prop_types28.default.any.isRequired
  })]),
  /**
   * The label content.
   */
  label: import_prop_types28.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types28.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types28.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types28.default.any,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types28.default.string,
  onBlur: import_prop_types28.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types28.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types28.default.func,
  onFocus: import_prop_types28.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types28.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types28.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types28.default.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types28.default.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types28.default.oneOfType([import_prop_types28.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types28.default.number, import_prop_types28.default.shape({
    endIndex: import_prop_types28.default.number.isRequired,
    startIndex: import_prop_types28.default.number.isRequired
  })]),
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types28.default.func,
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
  shouldRespectLeadingZeros: import_prop_types28.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types28.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types28.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types28.default.object,
  style: import_prop_types28.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types28.default.oneOfType([import_prop_types28.default.arrayOf(import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object, import_prop_types28.default.bool])), import_prop_types28.default.func, import_prop_types28.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types28.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types28.default.arrayOf(import_prop_types28.default.any),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types28.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers-pro/SingleInputTimeRangeField/SingleInputTimeRangeField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React45 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers-pro/SingleInputTimeRangeField/useSingleInputTimeRangeField.js
init_extends();
var useDefaultizedTimeRangeFieldProps2 = (props) => {
  var _props$ampm, _props$disablePast, _props$disableFuture, _props$format;
  const utils = useUtils();
  const ampm = (_props$ampm = props.ampm) != null ? _props$ampm : utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h;
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : defaultFormat
  });
};
var useSingleInputTimeRangeField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedTimeRangeFieldProps2(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "time");
  return useField({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: rangeValueManager,
    fieldValueManager: rangeFieldValueManager,
    validator: validateTimeRange,
    valueType: "time"
  });
};

// node_modules/@mui/x-date-pickers-pro/SingleInputTimeRangeField/SingleInputTimeRangeField.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var _excluded38 = ["slots", "slotProps", "components", "componentsProps", "InputProps", "inputProps"];
var _excluded212 = ["inputRef"];
var _excluded39 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly"];
var SingleInputTimeRangeField = React45.forwardRef(function SingleInputTimeRangeField2(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiSingleInputTimeRangeField"
  });
  const {
    slots,
    slotProps,
    components,
    componentsProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded38);
  const ownerState = themeProps;
  const TextField = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField_default;
  const _useSlotProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
    externalForwardedProps: other,
    ownerState
  }), {
    inputRef: externalInputRef
  } = _useSlotProps, textFieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded212);
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const _useSingleInputTimeRa = useSingleInputTimeRangeField({
    props: textFieldProps,
    inputRef: externalInputRef
  }), {
    ref: inputRef,
    onPaste,
    onKeyDown,
    inputMode,
    readOnly
  } = _useSingleInputTimeRa, fieldProps = _objectWithoutPropertiesLoose(_useSingleInputTimeRa, _excluded39);
  return (0, import_jsx_runtime43.jsx)(TextField, _extends({
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
SingleInputTimeRangeField.fieldType = "single-input";
true ? SingleInputTimeRangeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types29.default.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types29.default.bool,
  className: import_prop_types29.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: import_prop_types29.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types29.default.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types29.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types29.default.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types29.default.arrayOf(import_prop_types29.default.any),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types29.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types29.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types29.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types29.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types29.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types29.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types29.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types29.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types29.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types29.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types29.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types29.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types29.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types29.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types29.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.shape({
    current: import_prop_types29.default.any.isRequired
  })]),
  /**
   * The label content.
   */
  label: import_prop_types29.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types29.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types29.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types29.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types29.default.number,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types29.default.string,
  onBlur: import_prop_types29.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types29.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types29.default.func,
  onFocus: import_prop_types29.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types29.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types29.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types29.default.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types29.default.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types29.default.oneOfType([import_prop_types29.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types29.default.number, import_prop_types29.default.shape({
    endIndex: import_prop_types29.default.number.isRequired,
    startIndex: import_prop_types29.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types29.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types29.default.func,
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
  shouldRespectLeadingZeros: import_prop_types29.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types29.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types29.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types29.default.object,
  style: import_prop_types29.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types29.default.oneOfType([import_prop_types29.default.arrayOf(import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object, import_prop_types29.default.bool])), import_prop_types29.default.func, import_prop_types29.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types29.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types29.default.arrayOf(import_prop_types29.default.any),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types29.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers-pro/SingleInputDateTimeRangeField/SingleInputDateTimeRangeField.js
init_extends();
init_objectWithoutPropertiesLoose();
var React46 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers-pro/SingleInputDateTimeRangeField/useSingleInputDateTimeRangeField.js
init_extends();
var useDefaultizedTimeRangeFieldProps3 = (props) => {
  var _props$ampm, _props$disablePast, _props$disableFuture, _props$format, _props$minDateTime, _props$maxDateTime, _props$minDateTime2, _props$maxDateTime2;
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const ampm = (_props$ampm = props.ampm) != null ? _props$ampm : utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h;
  return _extends({}, props, {
    disablePast: (_props$disablePast = props.disablePast) != null ? _props$disablePast : false,
    disableFuture: (_props$disableFuture = props.disableFuture) != null ? _props$disableFuture : false,
    format: (_props$format = props.format) != null ? _props$format : defaultFormat,
    minDate: applyDefaultDate(utils, (_props$minDateTime = props.minDateTime) != null ? _props$minDateTime : props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, (_props$maxDateTime = props.maxDateTime) != null ? _props$maxDateTime : props.maxDate, defaultDates.maxDate),
    minTime: (_props$minDateTime2 = props.minDateTime) != null ? _props$minDateTime2 : props.minTime,
    maxTime: (_props$maxDateTime2 = props.maxDateTime) != null ? _props$maxDateTime2 : props.maxTime,
    disableIgnoringDatePartForTimeValidation: Boolean(props.minDateTime || props.maxDateTime)
  });
};
var useSingleInputDateTimeRangeField = ({
  props: inProps,
  inputRef
}) => {
  const props = useDefaultizedTimeRangeFieldProps3(inProps);
  const {
    forwardedProps,
    internalProps
  } = splitFieldInternalAndForwardedProps(props, "date-time");
  return useField({
    inputRef,
    forwardedProps,
    internalProps,
    valueManager: rangeValueManager,
    fieldValueManager: rangeFieldValueManager,
    validator: validateDateTimeRange,
    valueType: "date-time"
  });
};

// node_modules/@mui/x-date-pickers-pro/SingleInputDateTimeRangeField/SingleInputDateTimeRangeField.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var _excluded40 = ["slots", "slotProps", "components", "componentsProps", "InputProps", "inputProps"];
var _excluded213 = ["inputRef"];
var _excluded310 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly"];
var SingleInputDateTimeRangeField = React46.forwardRef(function SingleInputDateTimeRangeField2(inProps, ref) {
  var _ref, _slots$textField, _slotProps$textField;
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiSingleInputDateTimeRangeField"
  });
  const {
    slots,
    slotProps,
    components,
    componentsProps,
    InputProps,
    inputProps
  } = themeProps, other = _objectWithoutPropertiesLoose(themeProps, _excluded40);
  const ownerState = themeProps;
  const TextField = (_ref = (_slots$textField = slots == null ? void 0 : slots.textField) != null ? _slots$textField : components == null ? void 0 : components.TextField) != null ? _ref : TextField_default;
  const _useSlotProps = useSlotProps({
    elementType: TextField,
    externalSlotProps: (_slotProps$textField = slotProps == null ? void 0 : slotProps.textField) != null ? _slotProps$textField : componentsProps == null ? void 0 : componentsProps.textField,
    externalForwardedProps: other,
    ownerState
  }), {
    inputRef: externalInputRef
  } = _useSlotProps, textFieldProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded213);
  textFieldProps.inputProps = _extends({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = _extends({}, InputProps, textFieldProps.InputProps);
  const _useSingleInputDateTi = useSingleInputDateTimeRangeField({
    props: textFieldProps,
    inputRef: externalInputRef
  }), {
    ref: inputRef,
    onPaste,
    onKeyDown,
    inputMode,
    readOnly
  } = _useSingleInputDateTi, fieldProps = _objectWithoutPropertiesLoose(_useSingleInputDateTi, _excluded310);
  return (0, import_jsx_runtime44.jsx)(TextField, _extends({
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
SingleInputDateTimeRangeField.fieldType = "single-input";
true ? SingleInputDateTimeRangeField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * 12h/24h view for hour selection clock.
   * @default `utils.is12HourCycleInCurrentLocale()`
   */
  ampm: import_prop_types30.default.bool,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: import_prop_types30.default.bool,
  className: import_prop_types30.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: import_prop_types30.default.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: import_prop_types30.default.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types30.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types30.default.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types30.default.arrayOf(import_prop_types30.default.any),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types30.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types30.default.bool,
  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: import_prop_types30.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types30.default.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: import_prop_types30.default.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: import_prop_types30.default.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: import_prop_types30.default.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: import_prop_types30.default.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types30.default.bool,
  /**
   * The helper text content.
   */
  helperText: import_prop_types30.default.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: import_prop_types30.default.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: import_prop_types30.default.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: import_prop_types30.default.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: import_prop_types30.default.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: import_prop_types30.default.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.shape({
    current: import_prop_types30.default.any.isRequired
  })]),
  /**
   * The label content.
   */
  label: import_prop_types30.default.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: import_prop_types30.default.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types30.default.any,
  /**
   * Maximal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
   */
  maxDateTime: import_prop_types30.default.any,
  /**
   * Maximal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  maxTime: import_prop_types30.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types30.default.any,
  /**
   * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
   */
  minDateTime: import_prop_types30.default.any,
  /**
   * Minimal selectable time.
   * The date part of the object will be ignored unless `props.disableIgnoringDatePartForTimeValidation === true`.
   */
  minTime: import_prop_types30.default.any,
  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: import_prop_types30.default.number,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types30.default.string,
  onBlur: import_prop_types30.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types30.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types30.default.func,
  onFocus: import_prop_types30.default.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: import_prop_types30.default.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: import_prop_types30.default.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: import_prop_types30.default.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: import_prop_types30.default.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: import_prop_types30.default.oneOfType([import_prop_types30.default.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), import_prop_types30.default.number, import_prop_types30.default.shape({
    endIndex: import_prop_types30.default.number.isRequired,
    startIndex: import_prop_types30.default.number.isRequired
  })]),
  /**
   * Disable specific clock time.
   * @param {number} clockValue The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   * @deprecated Consider using `shouldDisableTime`.
   */
  shouldDisableClock: import_prop_types30.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types30.default.func,
  /**
   * Disable specific time.
   * @template TDate
   * @param {TDate} value The value to check.
   * @param {TimeView} view The clock type of the timeValue.
   * @returns {boolean} If `true` the time will be disabled.
   */
  shouldDisableTime: import_prop_types30.default.func,
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
  shouldRespectLeadingZeros: import_prop_types30.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types30.default.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types30.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types30.default.object,
  style: import_prop_types30.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types30.default.oneOfType([import_prop_types30.default.arrayOf(import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object, import_prop_types30.default.bool])), import_prop_types30.default.func, import_prop_types30.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types30.default.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types30.default.arrayOf(import_prop_types30.default.any),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types30.default.oneOf(["filled", "outlined", "standard"])
} : void 0;

// node_modules/@mui/x-date-pickers-pro/StaticDateRangePicker/StaticDateRangePicker.js
init_extends();
var React48 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());

// node_modules/@mui/x-date-pickers-pro/internals/hooks/useStaticRangePicker/useStaticRangePicker.js
init_extends();
init_objectWithoutPropertiesLoose();
var React47 = __toESM(require_react());
init_clsx();
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var _excluded41 = ["props", "ref"];
var PickerStaticLayout = styled_default(PickersLayout)(({
  theme
}) => ({
  overflow: "hidden",
  minWidth: DIALOG_WIDTH,
  backgroundColor: (theme.vars || theme).palette.background.paper
}));
var useStaticRangePicker = (_ref) => {
  var _slots$layout;
  let {
    props,
    ref
  } = _ref, pickerParams = _objectWithoutPropertiesLoose(_ref, _excluded41);
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
    rangePosition,
    onRangePositionChange
  } = useRangePosition(props);
  const {
    layoutProps,
    renderCurrentView
  } = usePicker(_extends({}, pickerParams, {
    props,
    autoFocusView: autoFocus != null ? autoFocus : false,
    additionalViewProps: {
      rangePosition,
      onRangePositionChange
    },
    wrapperVariant: displayStaticWrapperAs
  }));
  const Layout = (_slots$layout = slots == null ? void 0 : slots.layout) != null ? _slots$layout : PickerStaticLayout;
  const slotPropsForLayout = _extends({}, slotProps, {
    toolbar: _extends({}, slotProps == null ? void 0 : slotProps.toolbar, {
      rangePosition,
      onRangePositionChange
    })
  });
  const renderPicker = () => {
    var _slotProps$layout, _slotProps$layout2, _slotProps$layout3;
    return (0, import_jsx_runtime45.jsx)(LocalizationProvider, {
      localeText,
      children: (0, import_jsx_runtime45.jsx)(Layout, _extends({}, layoutProps, slotProps == null ? void 0 : slotProps.layout, {
        slots,
        slotProps: slotPropsForLayout,
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

// node_modules/@mui/x-date-pickers-pro/StaticDateRangePicker/StaticDateRangePicker.js
var StaticDateRangePicker = React48.forwardRef(function StaticDateRangePicker2(inProps, ref) {
  var _defaultizedProps$dis, _defaultizedProps$cal, _defaultizedProps$slo;
  const defaultizedProps = useDateRangePickerDefaultizedProps(inProps, "MuiStaticDateRangePicker");
  const displayStaticWrapperAs = (_defaultizedProps$dis = defaultizedProps.displayStaticWrapperAs) != null ? _defaultizedProps$dis : "mobile";
  const viewRenderers = _extends({
    day: renderDateRangeViewCalendar
  }, defaultizedProps.viewRenderers);
  const props = _extends({}, defaultizedProps, {
    viewRenderers,
    displayStaticWrapperAs,
    views: ["day"],
    openTo: "day",
    calendars: (_defaultizedProps$cal = defaultizedProps.calendars) != null ? _defaultizedProps$cal : displayStaticWrapperAs === "mobile" ? 1 : 2,
    slotProps: _extends({}, defaultizedProps.slotProps, {
      toolbar: _extends({
        hidden: displayStaticWrapperAs === "desktop"
      }, (_defaultizedProps$slo = defaultizedProps.slotProps) == null ? void 0 : _defaultizedProps$slo.toolbar)
    })
  });
  const {
    renderPicker
  } = useStaticRangePicker({
    props,
    valueManager: rangeValueManager,
    valueType: "date",
    validator: validateDateRange,
    ref
  });
  return renderPicker();
});
StaticDateRangePicker.propTypes = {
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
  autoFocus: import_prop_types31.default.bool,
  /**
   * The number of calendars to render.
   * @default 2
   */
  calendars: import_prop_types31.default.oneOf([1, 2, 3]),
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types31.default.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: import_prop_types31.default.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: import_prop_types31.default.object,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: import_prop_types31.default.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter's method `getWeekdays`.
   * @returns {string} The name to display.
   * @default (day) => day.charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: import_prop_types31.default.func,
  /**
   * Default calendar month displayed when `value={[null, null]}`.
   */
  defaultCalendarMonth: import_prop_types31.default.any,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: import_prop_types31.default.oneOf(["end", "start"]),
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: import_prop_types31.default.arrayOf(import_prop_types31.default.any),
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: import_prop_types31.default.bool,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: import_prop_types31.default.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: import_prop_types31.default.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: import_prop_types31.default.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: import_prop_types31.default.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: import_prop_types31.default.bool,
  /**
   * Force static wrapper inner components to be rendered in mobile or desktop mode.
   * @default "mobile"
   */
  displayStaticWrapperAs: import_prop_types31.default.oneOf(["desktop", "mobile"]),
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: import_prop_types31.default.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: import_prop_types31.default.number,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: import_prop_types31.default.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: import_prop_types31.default.object,
  /**
   * Maximal selectable date.
   */
  maxDate: import_prop_types31.default.any,
  /**
   * Minimal selectable date.
   */
  minDate: import_prop_types31.default.any,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: import_prop_types31.default.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: import_prop_types31.default.func,
  /**
   * Callback fired when component requests to be closed.
   * Can be fired when selecting (by default on `desktop` mode) or clearing a value.
   * @deprecated Please avoid using as it will be removed in next major version.
   */
  onClose: import_prop_types31.default.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: import_prop_types31.default.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: import_prop_types31.default.func,
  /**
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: import_prop_types31.default.func,
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: import_prop_types31.default.oneOf(["end", "start"]),
  readOnly: import_prop_types31.default.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: import_prop_types31.default.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: import_prop_types31.default.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "..."
   */
  renderLoading: import_prop_types31.default.func,
  /**
   * Disable specific date.
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: import_prop_types31.default.func,
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
  showDaysOutsideCurrentMonth: import_prop_types31.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types31.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types31.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types31.default.oneOfType([import_prop_types31.default.arrayOf(import_prop_types31.default.oneOfType([import_prop_types31.default.func, import_prop_types31.default.object, import_prop_types31.default.bool])), import_prop_types31.default.func, import_prop_types31.default.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: import_prop_types31.default.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: import_prop_types31.default.arrayOf(import_prop_types31.default.any),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: import_prop_types31.default.shape({
    day: import_prop_types31.default.func
  })
};
export {
  ArrowDropDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  DEFAULT_DESKTOP_MODE_MEDIA_QUERY,
  DEFAULT_LOCALE,
  DateCalendar,
  DateField,
  DatePicker,
  DatePickerToolbar,
  DateRangeCalendar,
  DateRangeIcon,
  DateRangePicker,
  DateRangePickerDay,
  DateRangePickerToolbar,
  DateTimeField,
  DateTimePicker,
  DateTimePickerTabs,
  DateTimePickerToolbar,
  DayCalendarSkeleton,
  DesktopDatePicker,
  DesktopDateRangePicker,
  DesktopDateTimePicker,
  DesktopTimePicker,
  DigitalClock,
  LicenseInfo,
  LocalizationProvider,
  MobileDatePicker,
  MobileDateRangePicker,
  MobileDateTimePicker,
  MobileTimePicker,
  MonthCalendar,
  MuiPickersAdapterContext,
  MultiInputDateRangeField,
  MultiInputDateTimeRangeField,
  MultiInputTimeRangeField,
  MultiSectionDigitalClock,
  PickersActionBar,
  PickersCalendarHeader,
  PickersDay,
  PickersLayout,
  PickersLayoutContentWrapper,
  PickersLayoutRoot,
  PickersShortcuts,
  SingleInputDateRangeField,
  SingleInputDateTimeRangeField,
  SingleInputTimeRangeField,
  StaticDatePicker,
  StaticDateRangePicker,
  StaticDateTimePicker,
  StaticTimePicker,
  TimeClock,
  TimeField,
  TimeIcon,
  TimePicker,
  TimePickerToolbar,
  YearCalendar,
  beBY,
  caES,
  clockClasses,
  clockNumberClasses,
  clockPointerClasses,
  csCZ,
  dateCalendarClasses,
  datePickerToolbarClasses,
  dateRangeCalendarClasses,
  dateRangePickerDayClasses,
  dateRangePickerToolbarClasses,
  dateTimePickerTabsClasses,
  dateTimePickerToolbarClasses,
  dayCalendarSkeletonClasses,
  dayPickerClasses,
  deDE,
  digitalClockClasses,
  elGR,
  enUS,
  esES,
  faIR,
  fiFI,
  frFR,
  getDateCalendarUtilityClass,
  getDateRangeCalendarUtilityClass,
  getDateRangePickerDayUtilityClass,
  getDateRangePickerToolbarUtilityClass,
  getDayCalendarSkeletonUtilityClass,
  getDigitalClockUtilityClass,
  getMonthCalendarUtilityClass,
  getMultiInputDateRangeFieldUtilityClass,
  getMultiInputDateTimeRangeFieldUtilityClass,
  getMultiInputTimeRangeFieldUtilityClass,
  getMultiSectionDigitalClockUtilityClass,
  getPickersDayUtilityClass,
  getTimeClockUtilityClass,
  getYearCalendarUtilityClass,
  heIL,
  huHU,
  isIS,
  itIT,
  jaJP,
  koKR,
  kzKZ,
  monthCalendarClasses,
  multiInputDateRangeFieldClasses,
  multiInputDateTimeRangeFieldClasses,
  multiInputTimeRangeFieldClasses,
  multiSectionDigitalClockClasses,
  multiSectionDigitalClockSectionClasses,
  nbNO,
  nlNL,
  pickersCalendarHeaderClasses,
  pickersDayClasses,
  pickersFadeTransitionGroupClasses,
  pickersLayoutClasses,
  pickersMonthClasses,
  pickersSlideTransitionClasses,
  pickersYearClasses,
  plPL,
  ptBR,
  renderDateRangeViewCalendar,
  renderDateViewCalendar,
  renderDigitalClockTimeView,
  renderMultiSectionDigitalClockTimeView,
  renderTimeViewClock,
  roRO,
  ruRU,
  skSK,
  svSE,
  timeClockClasses,
  timePickerToolbarClasses,
  trTR,
  ukUA,
  useDateField as unstable_useDateField,
  useDateTimeField as unstable_useDateTimeField,
  useMultiInputDateRangeField as unstable_useMultiInputDateRangeField,
  useMultiInputDateTimeRangeField as unstable_useMultiInputDateTimeRangeField,
  useMultiInputTimeRangeField as unstable_useMultiInputTimeRangeField,
  useSingleInputDateRangeField as unstable_useSingleInputDateRangeField,
  useSingleInputDateTimeRangeField as unstable_useSingleInputDateTimeRangeField,
  useSingleInputTimeRangeField as unstable_useSingleInputTimeRangeField,
  useTimeField as unstable_useTimeField,
  urPK,
  usePickerLayout_default as usePickerLayout,
  viVN,
  yearCalendarClasses,
  zhCN,
  zhHK
};
/*! Bundled license information:

@mui/x-date-pickers/index.js:
  (**
   * @mui/x-date-pickers v6.12.1
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/x-date-pickers-pro/index.js:
  (**
   * @mui/x-date-pickers-pro v6.12.1
   *
   * @license MUI X Commercial
   * This source code is licensed under the commercial license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@mui_x-date-pickers-pro.js.map
