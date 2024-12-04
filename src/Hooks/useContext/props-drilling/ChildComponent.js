import GrandChildComponent from "./GandChildComponent";

const ChildComponent = ({ data }) => {
  return (
    <div>
      <GrandChildComponent data={data} />
    </div>
  );
};

export default ChildComponent;
