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
import { useNavigate } from "react-router-dom";

export const Article = (currentArticle: any) => {
  const article = currentArticle.currentArticle;
  const navigate = useNavigate();

  return (
    <Stack mt="50px" mb="50px">
      <Stack position="absolute" top="200px" ml="70px">
        <IconButton
          aria-label="Search database"
          icon={<ArrowBackIcon />}
          backgroundColor={"#00CC81"}
          borderRadius="100%"
          fontSize={"3xl"}
          w="70px"
          onClick={() => navigate(-1)}
          h="70px"
        />
      </Stack>
      <Image
        src={article.image}
        w="auto"
        alt="Image d'illustration de l'article"
        h="400px"
        objectFit="cover"
        objectPosition="center"
      ></Image>

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
