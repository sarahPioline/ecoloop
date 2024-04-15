import { Box, Flex, Link, Stack } from "@chakra-ui/react";
import { ReactComponent as Logo } from "../logo.svg";

export default function Menu() {
  const linkColor = "gray.600";
  const linkHoverColor = "gray.800";

  return (
    <Box ml="70px" mr="70px" mt="30px" mb="20px">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Stack>
          <Link href={`/`}>
            <Box>
              <Logo />
            </Box>
          </Link>
        </Stack>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Link
              p={2}
              href={`/`}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              Accueil
            </Link>
            <Link
              p={2}
              href={`/news`}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              Actualités
            </Link>
            <Link
              p={2}
              href={`/calculator`}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              Calculateur
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
