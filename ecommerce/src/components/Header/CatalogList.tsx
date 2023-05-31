import {
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Menu,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import useCategories from "../../hooks/useCategories";

const CatalogList = () => {
  const { data: categories, error, isLoading } = useCategories();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<AiOutlineMenuUnfold />} width="200px">
        <Text paddingTop="5px">Каталог</Text>
      </MenuButton>
      <MenuList>
        {categories.map((category) => (
          <MenuItem key={category.id}>{category.title}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CatalogList;
