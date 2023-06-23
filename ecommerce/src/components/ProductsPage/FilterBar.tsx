import SliderInput from "./SliderInput";
import CheckBoxInput from "./CheckBoxInput";
import filterOptions from "../entities/ProductFilters";

const FilterBar = () => {
  return (
    <>
      <SliderInput />
      <CheckBoxInput productFilters={filterOptions} />
    </>
  );
};

export default FilterBar;
