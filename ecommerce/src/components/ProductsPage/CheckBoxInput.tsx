import { Checkbox, Box, Text, Button } from "@chakra-ui/react";
import useProductQueryStore from "../../productStore";
import filterOptions from "../entities/ProductFilters";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ProductFilters } from "../../services/ApiClient";

const CheckBoxInput = () => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId);
  const setFilters = useProductQueryStore((s) => s.setFilters);

  const [labels, setLabels] = useState<ProductFilters[]>();

  const productOptions = useRef<string[]>([]);

  useEffect(() => {
    const categoryFilter = filterOptions.find(
      (p) => p.id === categoryId
    )?.filters;

    setLabels(categoryFilter);
  }, [categoryId]);

  const handleChange = (o: string, e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      productOptions.current.push(o);
    }
    else if (!e.target.checked) {
      const index = productOptions.current.indexOf(o)
      productOptions.current.splice(index, 1)
    }
  };

  return (
    <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilters(productOptions.current);
        }}>
        {labels?.map((l) => (
          <Box marginY={7} textAlign="left">
            <Text key={l.id}>{l.title}</Text>
            <Box>
              {l.options.map((o, index) => (
                <Checkbox
                  key={index}
                  display="block"
                  onChange={(e) => handleChange(o, e)}
                >
                  {o}
                </Checkbox>
              ))}
            </Box>
          </Box>
        ))}
        <Button type="submit">Фильтровать</Button>
    </form>
  );
};

export default CheckBoxInput;
