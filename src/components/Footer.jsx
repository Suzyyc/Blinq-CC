import { Text, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box sx={{ borderTop: "2px solid black", textAlign: "center", py: 3 }}>
      <Box>
        <Text>
          Made with{" "}
          <a
            href="https://i.pinimg.com/originals/9c/b0/34/9cb034a34404affcae8b3f7b06a31ddc.gif"
            target="_blank"
          >
            🥦{" "}
          </a>{" "}
          in Melbourne
        </Text>
        <Text>© 2022 Broccoli & Co. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
