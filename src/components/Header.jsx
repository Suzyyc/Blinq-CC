import { Text, Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box sx={{ py: 5, borderBottom: "2px solid black" }}>
      <Box sx={{ ml: 6 }}>
        <Text sx={{ textTransform: "uppercase" }}>Brocolli & Co</Text>
      </Box>
    </Box>
  );
};

export default Header;
