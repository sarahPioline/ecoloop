import {
  Stack,
  Text,
  Box,
  Link,
  Image,
  Heading,
  useColorModeValue,
  Badge,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Article } from "../components/article";
import articles from "../articles/articles.json";

export const Blog = () => {
  const { id } = useParams();
  if (id) {
    const currentArticle = articles.find((objet) => objet.id === parseInt(id));
    if (currentArticle) {
      return <Article currentArticle={currentArticle} />;
    } else {
      return <Text>L'article recherché n'existe pas</Text>;
    }
  }

  const sortedData = articles.sort(
    (a: { date: string }, b: { date: string }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Stack mr="70px" ml="70px" mt="40px">
      <Heading size="xl" mb="20px">
        Actualités
      </Heading>
      {sortedData.map((article, index) => (
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          //justifyContent="space-between"
          // bgColor="#F4F4F4"
          borderRadius="lg"
          mb="40px"
          boxShadow="2xl"
        >
          <Box display="flex" flex="1" position="relative" alignItems="center">
            <Box width={{ base: "100%", sm: "85%" }} zIndex="2">
              <Link
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                href={`/news/${article.id}`}
              >
                <Image
                  borderLeftRadius="lg"
                  src={article.image}
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box backgroundSize="20px 20px" opacity="0.4" height="100%" />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
            p="20px"
          >
            <Badge
              ml="1"
              w="100px"
              fontSize="0.8em"
              backgroundColor={"#00CC81"}
              color={"white"}
              borderRadius={"26"}
            >
              <Text textAlign={"center"}> {article.date}</Text>
            </Badge>{" "}
            <Heading marginTop="1">
              <Link
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                href={`/news/${article.id}`}
              >
                {article.title}
              </Link>
            </Heading>
            <Text as="p" marginTop="2" fontSize="lg">
              {article.article.slice(0, 300) + " ..."}
            </Text>
            <Stack alignItems={"end"} mt="20px">
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
            </Stack>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};
