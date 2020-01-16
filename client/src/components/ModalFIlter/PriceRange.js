import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = () => {
  const [value, setValue] = useState({ min: 1, max: 200 });

  return (
    <InputRange
      maxValue={200}
      minValue={0}
      formatLabel={value => `${value} $`}
      value={value}
      onChange={value => setValue(value)}
    />
  );
};

export default PriceRange;
