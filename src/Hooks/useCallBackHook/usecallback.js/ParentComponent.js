import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Heading from "./Heading";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Heading />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;