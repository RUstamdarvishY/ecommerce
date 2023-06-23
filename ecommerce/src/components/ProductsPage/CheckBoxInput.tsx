import { Checkbox, Box } from "@chakra-ui/react";
import useProductQueryStore from "../../store";

interface Options {
  id: number;
  title: string;
  options: string[];
}

interface ProductFilters {
  id: number;
  category: string;
  filters: Options[];
}

interface Props {
  productFilters: ProductFilters[];
}

const CheckBoxInput = ({ productFilters }: Props) => {
  const categoryId = useProductQueryStore((s) => s.ProductQuery.categoryId)

  const categoryFilter = productFilters.find((p) => p.id === categoryId)?.filters 

  return (
    <>
      {categoryFilter?.map((f) => {<Box key={f.id}>{f.options.map(((o) => <Checkbox key={f.id}>{o}</Checkbox>))}</Box>})}
    </>
  );
};

export default CheckBoxInput;
