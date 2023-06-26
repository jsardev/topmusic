import { Preset, defineConfig } from "unocss";
import presetIcons from "@unocss/preset-icons";
import presetWind, { Theme } from "@unocss/preset-wind";
import presetWebFonts from "@unocss/preset-web-fonts";

const spacing = {
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  24: "24px",
  32: "32px",
  36: "36px",
  42: "42px",
  48: "48px",
  64: "64px",
};

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons() as Preset<Theme>,
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Inter:400,600,700",
      },
    }) as Preset<Theme>,
  ],
  rules: [
    [
      /^size-(\d+)$/,
      ([, size]) => ({
        width: `${size}px`,
        height: `${size}px`,
      }),
    ],
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
      },
      maxWidth: {
        md: "768px",
      },
    },
    breakpoints: {
      md: "768px",
    },
    spacing,
    width: spacing,
    height: spacing,
    maxWidth: spacing,
    maxHeight: spacing,
    colors: {
      primary: {
        500: "#CE7879",
        700: "#BC4749",
      },
    },
    fontFamily: {
      sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont",
    },
    // Based on https://www.modularscale.com/?16&px&1.125
    fontSize: {
      sm: ["0.889rem", "1.5rem"],
      md: ["1rem", "1.5rem"],
      lg: ["1.125em", "1.5rem"],
      "xs-display": ["1.424rem", "1.25rem"],
      "sm-display": ["1.802rem", "1.25rem"],
      "md-display": ["2.027rem", "1.25rem"],
      "lg-display": ["2.887rem", "1.25rem"],
      "xl-display": ["3.653rem", "1.25rem"],
    },
  },
  shortcuts: {
    "text/lg/regular": "text-lg font-normal font-sans",
    "text/lg/bold": "text-lg font-bold font-sans",
    "text/md/regular": "text-md font-normal font-sans",
    "text/md/bold": "text-md font-bold font-sans",
    "text/sm/regular": "text-sm font-normal font-sans",
    "text/sm/bold": "text-sm font-bold font-sans",
    "display/xs/regular": "text-xs-display font-normal font-sans",
    "display/sm/regular": "text-sm-display font-normal font-sans",
    "display/sm/bold": "text-sm-display font-bold font-sans",
    "display/md/regular": "text-md-display font-normal font-sans",
    "display/lg/regular": "text-lg-display font-normal font-sans",
    "display/xl/regular": "text-xl-display font-normal font-sans",
    "display/xl/semibold": "text-xl-display font-semibold font-sans",
    "display/xl/bold": "text-xl-display font-bold font-sans",
  },
});
