import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useProductQueryStore from "../../productStore";

const PlatformSelector = () => {
  const sortOrders = [
    { value: "", label: "популярные" },
    { value: "date", label: "новые" },
    { value: "price", label: "дорогие" },
    { value: "-price", label: "дешевые" },
  ];

  const sortOrder = useProductQueryStore((s) => s.ProductQuery.sortOrder);
  const setSortOrder = useProductQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Box textAlign="left" paddingLeft={10}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Сначала {currentSortOrder?.label || "популярные"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => setSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
