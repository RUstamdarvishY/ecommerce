import { MenuButton, Button, MenuList, MenuItem, Menu, Text } from "@chakra-ui/react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const CatalogList = () => {
  const categories = [
    {id: 1, name: 'часы'}, 
    {id: 2, name: 'наушники'}, 
    {id: 3, name: 'зарядки'}, 
    {id: 4, name: 'колонки'}, 
    {id: 5, name: 'батарейки'},
]


  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<AiOutlineMenuUnfold />} width='200px'>
        <Text paddingTop='5px'>
          Каталог
          </Text>
      </MenuButton>
      <MenuList>
        {categories.map(category => <MenuItem key={category.id}>{category.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default CatalogList;
