import {
  Button,
  Box,
  Heading,
  Stack,
  Text,
  Image,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const Article = (currentArticle: any) => {
  const article = currentArticle.currentArticle;

  const formattedText = article.article.replace(/\\n/g, "\n");
  return (
    <Stack mt="50px" mb="50px">
      <Image
        src={article.image}
        w="auto"
        alt="Image d'illustration de l'article"
        h="400px"
        objectFit="cover"
        objectPosition="center"
      />
      <IconButton
        aria-label="Search database"
        icon={<ArrowBackIcon />}
        backgroundColor={"#00CC81"}
        borderRadius={"3xl"}
        w="40px"
      />
      <Stack ml="400px" mr="400px" mt="10px">
        <Badge
          ml="1"
          w="100px"
          fontSize="0.8em"
          backgroundColor={"#00CC81"}
          color={"white"}
          borderRadius={"26"}
        >
          <Text textAlign={"center"}> {article.date}</Text>
        </Badge>
        <Heading size="xl">{article.title}</Heading>
        <Box whiteSpace="pre-line">
          <Text dangerouslySetInnerHTML={{ __html: article.article }} />
        </Box>
      </Stack>
    </Stack>
  );
};
