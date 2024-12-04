import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const dataTopass = "Hello from Parent";

  return (
    <div>
      <ChildComponent data={datToPass} />
    </div>
  );
};

export default ParentComponent;
