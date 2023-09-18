import {
  createSoftInversion,
  createSolidInversion,
  defaultTheme_default,
  identifier_default
} from "./chunk-R72IT4HO.js";
import {
  createCssVarsProvider,
  deepmerge,
  init_esm,
  init_esm2
} from "./chunk-TIQHJRXJ.js";

// node_modules/@mui/joy/styles/CssVarsProvider.js
init_esm();
init_esm2();
var {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = createCssVarsProvider({
  themeId: identifier_default,
  theme: defaultTheme_default,
  attribute: "data-joy-color-scheme",
  modeStorageKey: "joy-mode",
  colorSchemeStorageKey: "joy-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  },
  resolveTheme: (mergedTheme) => {
    const colorInversionInput = mergedTheme.colorInversion;
    mergedTheme.colorInversion = deepmerge({
      soft: createSoftInversion(mergedTheme),
      solid: createSolidInversion(mergedTheme)
    }, typeof colorInversionInput === "function" ? colorInversionInput(mergedTheme) : colorInversionInput, {
      clone: false
    });
    return mergedTheme;
  }
});

// node_modules/@mui/joy/styles/StyledEngineProvider.js
init_esm2();
//# sourceMappingURL=chunk-VE2O66JP.js.map
