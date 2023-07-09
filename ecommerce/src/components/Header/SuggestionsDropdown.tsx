import { Card, CardBody, HStack, Text, Image } from "@chakra-ui/react";
import { SearchResult } from "minisearch";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import useProductQueryStore from "../../productStore";
import noImage from "../../assets/placeholder-image.png";
import useImage from "../../hooks/useImage";

interface Props {
  result: SearchResult;
}

const SuggestionsDropdown = ({ result }: Props) => {
  const { data: category } = useCategory(result.collection);

  const setProductId = useProductQueryStore((s) => s.setProductId);
  const setCategoryId = useProductQueryStore((s) => s.setCategoryId);

  const image = useImage(result.id);

  return (
    <Link to={"/" + category?.slug + "/" + result.id}>
      <Card
        textAlign="left"
        zIndex={1}
        position="absolute"
        left="-27%"
        width="155%"
        border="2px"
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
        }}
        onClick={() => {
          setCategoryId(result.collection), setProductId(result.id);
        }}
      >
        <CardBody>
          <HStack>
        <Image src={image?.src[0] || noImage} boxSize={8}/>
          <Text>
            {result.title}, {result.wholesale_price}р
          </Text>
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default SuggestionsDropdown;
