// props => properties =>data one component to another component

/* Passing Data => parent component to child component
Immutable => 
Syntax =-> html attributes  */

/* const App = () => {
  return <Greeting name="waseem" />;
};

const Greeting = (props) => {
  return <div>Hello, {props.name}</div>;
}; */

/* const App = () => {
  const items = ["Apple", "Banana", "Orange"];

  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

const ListItem = (props) => {
  return <div>{props.item}</div>;
}; */

const ParentComponent = () => {
  const person = "Prajwal";
  const age = 22;

  return <ChildComponent name={person} age={age} />;
};

const ChildComponent = (props) => {
  //   props.age = 66;
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
    </div>
  );
};

export default ParentComponent;
