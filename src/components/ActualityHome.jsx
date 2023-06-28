import {
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Box,
  Button,
  HStack,
  Image,
  Heading,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import actualityBg from "../images/actualityBg.png";
import articles from "../articles/articles.json";

export const ActualityHome = () => {
  const sortedData = articles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const topThreeData = sortedData.slice(0, 3);
  return (
    <Stack
      bgImage={`url(${actualityBg})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      mt="20px"
    >
      <Stack ml="70px" mr="70px" mb="20px">
        <HStack>
          <Text fontSize={"35px"} fontWeight={"600"} margin={"0"}>
            L'actualité de notre planète à ne pas
          </Text>
          <HStack gap={0}>
            <Text
              color={"#00CC81"}
              fontSize={"35px"}
              margin={"0"}
              fontWeight={"600"}
            >
              loop
            </Text>
            <Text fontSize={"35px"} margin={"0"} fontWeight={"600"}>
              er
            </Text>
          </HStack>
        </HStack>
        <Flex justifyContent="space-between">
          {topThreeData.map((article, index) => (
            <Card maxW="sm" key={index} boxShadow="xl">
              <CardBody>
                <Link
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                  href={`/news/${article.id}`}
                >
                  <Image
                    src={article.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                </Link>
                <Stack mt="6" spacing="3">
                  <Text>{article.date}</Text>
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                    href={`/news/${article.id}`}
                  >
                    <Heading size="md">{article.title}</Heading>
                  </Link>
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: article.article.slice(0, 200),
                    }}
                  />
                  <Text m="0px">...</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link href={`/news/${article.id}`}>
                  <Button
                    backgroundColor={"#00CC81"}
                    color={"white"}
                    borderRadius={"26"}
                    _hover={{ backgroundColor: "#78E2BB" }}
                  >
                    Lire la suite
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </Flex>
        <Link
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          href={`/news`}
        >
          <Stack alignItems={"center"} m="30px">
            <Button
              w="20%"
              backgroundColor={"#15797A"}
              color={"white"}
              border="2px"
              borderColor="#FFFFFF"
              borderRadius={"26"}
              _hover={{ backgroundColor: "#429696" }}
            >
              Plus d'actualité
            </Button>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};