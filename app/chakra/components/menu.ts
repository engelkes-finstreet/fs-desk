import { mode, transparentize } from "@chakra-ui/theme-tools";

const baseStyle = {};

const variants = {
  "ghost-on-accent": (props: any) => ({
    list: {
      bg: "brand.600",
    },
    item: {
      _hover: {
        bg: transparentize("brand.500", 0.67)(props.theme),
      },
      _focus: {
        bg: transparentize("brand.400", 0.67)(props.theme),
      },
    },
  }),
};

export default {
  baseStyle,
  variants,
};
