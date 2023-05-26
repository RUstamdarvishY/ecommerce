import SliderInput from "./SliderInput";
import CheckBoxInput from './CheckBoxInput';
import filterOptions from "../entities/Options";

const FilterBar = () => {
  

  return (
    <>
      <SliderInput />
      <CheckBoxInput options={filterOptions}/>
    </>
  );
};

export default FilterBar;
