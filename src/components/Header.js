import Button from "./Button";
const Header = ({ onAdd, ShowAdd }) => {
  return (
    <header className='header'>
      <h1>To do List </h1>
      <Button
        color={ShowAdd ? "red" : "green"}
        text={ShowAdd ? "Close" : "Add"}
        onAdd={onAdd}
      />
    </header>
  );
};
export default Header;
