import { Checkbox, Box, Text } from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import filterOptions from "../entities/ProductFilters";
import { useEffect, useState } from "react";
import { ProductFilters } from "../../services/ApiClient";

const CheckBoxInput = () => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);

  const [filters, setFilters] = useState<ProductFilters[]>();

  useEffect(() => {
    const categoryFilter = filterOptions.find(
      (p) => p.id === categoryId
    )?.filters;

    setFilters(categoryFilter);
  }, [categoryId]);

  return (
    <Box>
      {filters?.map((f) => (
        <Box marginY={7} textAlign="left">
          <Text key={f.id}>{f.title}</Text>
          <Box>
            {f.options.map((o, index) => (
              <Checkbox key={index} display="block">
                {o}
              </Checkbox>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CheckBoxInput;
