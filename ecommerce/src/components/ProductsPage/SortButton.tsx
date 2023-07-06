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
    { value: "date_added", label: "новые" },
    { value: "-wholesale_price", label: "дорогие" },
    { value: "wholesale_price", label: "дешевые" },
  ];

  const sortOrder = useProductQueryStore((s) => s.ProductQuery.ordering);
  const setSortOrder = useProductQueryStore((s) => s.setOrdering);

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
