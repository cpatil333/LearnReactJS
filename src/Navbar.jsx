function Navbar(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1> {props.links}</h1>
    </div>
  );
}

export default Navbar;
