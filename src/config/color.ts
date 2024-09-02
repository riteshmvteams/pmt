const violet = {
  light: {
    background: "0 0% 100%",
    foreground: "224 71.4% 4.1%",
    card: "0 0% 100%",
    card_foreground: "224 71.4% 4.1%",
    popover: "0 0% 100%",
    popover_foreground: "224 71.4% 4.1%",
    primary: "262.1 83.3% 57.8%",
    primary_foreground: "210 20% 98%",
    secondary: "220 14.3% 95.9%",
    secondary_foreground: "220.9 39.3% 11%",
    muted: "220 14.3% 95.9%",
    muted_foreground: "220 8.9% 46.1%",
    accent: "220 14.3% 95.9%",
    accent_foreground: "220.9 39.3% 11%",
    destructive: "0 84.2% 60.2%",
    destructive_foreground: "210 20% 98%",
    border: "220 13% 91%",
    input: "220 13% 91%",
    ring: "262.1 83.3% 57.8%",
    radius: "0.5rem",
    chart_1: "12 76% 61%",
    chart_2: "173 58% 39%",
    chart_3: "197 37% 24%",
    chart_4: "43 74% 66%",
    chart_5: "27 87% 67%",
  },
  dark: {
    background: "224 71.4% 4.1%",
    foreground: "210 20% 98%",
    card: "224 71.4% 4.1%",
    card_foreground: "210 20% 98%",
    popover: "224 71.4% 4.1%",
    popover_foreground: "210 20% 98%",
    primary: "263.4 70% 50.4%",
    primary_foreground: "210 20% 98%",
    secondary: "215 27.9% 16.9%",
    secondary_foreground: "210 20% 98%",
    muted: "215 27.9% 16.9%",
    muted_foreground: "217.9 10.6% 64.9%",
    accent: "215 27.9% 16.9%",
    accent_foreground: "210 20% 98%",
    destructive: "0 62.8% 30.6%",
    destructive_foreground: "210 20% 98%",
    border: "215 27.9% 16.9%",
    input: "215 27.9% 16.9%",
    ring: "263.4 70% 50.4%",
    chart_1: "220 70% 50%",
    chart_2: "160 60% 45%",
    chart_3: "30 80% 55%",
    chart_4: "280 65% 60%",
    chart_5: "340 75% 55%",
  },
};

export const primary = {
  light: {
    violet: "262.1 83.3% 57.8%",
    yellow: "47.9 95.8% 53.1%",
    blue: "221.2 83.2% 53.3%",
    green: "142.1 76.2% 36.3%",
    orange: "24.6 95% 53.1%",
    rose: "346.8 77.2% 49.8%",
    red: "0 72.2% 50.6%",
    neutral: "0 0% 9%",
    gray: "220.9 39.3% 11%",
    stone: "24 9.8% 10%",
    slate: "222.2 47.4% 11.2%",
    zinc: "240 5.9% 10%",
  },
  dark: {
    violet: "263.4 70% 50.4%",
    yellow: "47.9 95.8% 53.1%",
    blue: "217.2 91.2% 59.8%",
    green: "142.1 70.6% 45.3%",
    orange: "20.5 90.2% 48.2%",
    rose: "346.8 77.2% 49.8%",
    red: "0 72.2% 50.6%",
    neutral: "0 0% 98%",
    gray: "210 20% 98%",
    stone: "60 9.1% 97.8%",
    slate: "210 40% 98%",
    zinc: "0 0% 98%",
  },
};

export const primaryForground = {
  light: {
    violet: "262.1 83.3% 57.8%",
    yellow: "47.9 95.8% 53.1%",
    blue: "221.2 83.2% 53.3%",
    green: "142.1 76.2% 36.3%",
    orange: "24.6 95% 53.1%",
    rose: "346.8 77.2% 49.8%",
    red: "0 72.2% 50.6%",
    neutral: "0 0% 9%",
    gray: "220.9 39.3% 11%",
    stone: "24 9.8% 10%",
    slate: "222.2 47.4% 11.2%",
    zinc: "240 5.9% 10%",
  },
  dark: {
    violet: "263.4 70% 50.4%",
    yellow: "47.9 95.8% 53.1%",
    blue: "217.2 91.2% 59.8%",
    green: "142.1 70.6% 45.3%",
    orange: "20.5 90.2% 48.2%",
    rose: "346.8 77.2% 49.8%",
    red: "0 72.2% 50.6%",
    neutral: "0 0% 98%",
    gray: "210 20% 98%",
    stone: "60 9.1% 97.8%",
    slate: "210 40% 98%",
    zinc: "0 0% 98%",
  },
};

export const colors = [
  {
    primary: {
      light: violet.light.primary,
      dark: violet.dark.primary,
    },
    primaryForground: {
      light: violet.light.primary_foreground,
      dark: violet.dark.primary_foreground,
    },
    name: "Violet",
  },
  {
    primary: {
      light: primary.light.yellow,
      dark: primary.dark.yellow,
    },
    name: "Yellow",
  },
  {
    primary: {
      light: primary.light.blue,
      dark: primary.dark.blue,
    },
    name: "Blue",
  },
  {
    primary: {
      light: primary.light.green,
      dark: primary.dark.green,
    },
    name: "Green",
  },
  {
    primary: {
      light: primary.light.orange,
      dark: primary.dark.orange,
    },
    name: "Orange",
  },
  {
    primary: {
      light: primary.light.rose,
      dark: primary.dark.rose,
    },
    name: "Rose",
  },
  {
    primary: {
      light: primary.light.red,
      dark: primary.dark.red,
    },
    name: "Red",
  },
  {
    primary: {
      light: primary.light.neutral,
      dark: primary.dark.neutral,
    },
    name: "Neutral",
  },
  {
    primary: {
      light: primary.light.gray,
      dark: primary.dark.gray,
    },
    name: "Gray",
  },
  {
    primary: {
      light: primary.light.stone,
      dark: primary.dark.stone,
    },
    name: "Stone",
  },
  {
    primary: {
      light: primary.light.slate,
      dark: primary.dark.slate,
    },
    name: "Slate",
  },
  {
    primary: {
      light: primary.light.zinc,
      dark: primary.dark.zinc,
    },
    name: "Zinc",
  },
];
