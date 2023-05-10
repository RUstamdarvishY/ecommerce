import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Icon
        as={colorMode === "light" ? MdOutlineLightMode : MdOutlineDarkMode}
        boxSize={8}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
