const { Text, Box } = require("@chakra-ui/react");

const Footer = () => {
  return (
    <Box sx={{ borderTop: "2px solid black", textAlign: "center" }}>
      <Box>
        <Text>Made with 🥦 in Melbourne</Text>
        <Text>© 2022 Brocolli & Co. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
