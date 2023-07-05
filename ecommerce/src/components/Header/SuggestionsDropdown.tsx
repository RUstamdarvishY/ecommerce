import { Card, CardBody, Text, Menu, MenuItem } from "@chakra-ui/react";
import { SearchResult } from "minisearch";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import useProductQueryStore from "../../productStore";

interface Props {
  result: SearchResult;
}

const SuggestionsDropdown = ({ result }: Props) => {
  const {data: category } = useCategory(result.collection)

  const setProductId = useProductQueryStore((s) => s.setProductId);
  const setCategoryId = useProductQueryStore((s) => s.setCategoryId);

  return (
    <Link to={"/" + category?.slug + "/" + result.id}>
    <Card marginY={1} textAlign='left' onClick={() => {setCategoryId(result.collection), setProductId(result.id)}} as={'menu'}>
    <CardBody>
      <Text>
        {result.title}, {result.wholesale_price}р
        </Text>
    </CardBody>
    </Card>
    </Link>
  );
};

export default SuggestionsDropdown;
