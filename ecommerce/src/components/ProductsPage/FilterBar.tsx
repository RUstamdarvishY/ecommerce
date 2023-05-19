import SliderInput from "./SliderInput";
import CheckBoxInput from './CheckBoxInput';

const FilterBar = () => {
  const checkBoxOptions = [
    {
      id: 1,
      label: "производитель",
      filter: ["apple", "samsung"],
    },
    {
      id: 2,
      label: "ядра",
      filter: ["2", "4", "6"],
    },
  ];

  return (
    <>
      <SliderInput />
      <CheckBoxInput options={checkBoxOptions}/>
    </>
  );
};

export default FilterBar;
