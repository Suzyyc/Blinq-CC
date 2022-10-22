import { Text, Box, Switch, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      sx={{
        py: 5,
        borderBottom: "2px solid black",
        display: "flex",
        justifyContent: "space-between",
        px: 5,
        alignItems: "center",
      }}
    >
      <Text sx={{ textTransform: "uppercase" }}>Broccoli & Co</Text>
      <Box
        sx={{
          display: "flex",
          gap: "3px",
          alignItems: "center",
          fontSize: "22px",
        }}
      >
        🌑
        <Switch onChange={toggleColorMode} isChecked={colorMode === "light"} />
        ☀️
      </Box>
    </Box>
  );
};

export default Header;
