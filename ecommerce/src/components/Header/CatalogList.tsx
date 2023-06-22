import {
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Menu,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import useCategories from "../../hooks/useCategories";
import useProductQueryStore from "../../store";
import { Link } from "react-router-dom";

const CatalogList = () => {
  const setCategoryId = useProductQueryStore((s) => s.setCategoryId);

  const { data: categories, error } = useCategories();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<AiOutlineMenuUnfold />} width="200px">
        <Text paddingTop="5px">Каталог</Text>
      </MenuButton>
      <MenuList>
        {categories?.map((category) => (
          <Link to={category.slug}>
            <MenuItem
              as="a"
              key={category.id}
              onClick={() => setCategoryId(category.id)}
            >
              {category.title}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CatalogList;
