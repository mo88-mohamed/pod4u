// 1. import `extendTheme` function
import { createSystem } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// 3. extend the theme
const Theme = createSystem({ config });

export default Theme;