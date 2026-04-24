import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./ReduxToolkit/components/Counter";
import { changeName } from "./ReduxToolkit/features/counter/counterSlice";
import Users from "./ReduxToolkit/components/Users";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Counter);
  console.log(state);

  return (
    <div>
      <Counter />
      <input
        type="text"
        placeholder="Enter name..."
        className="border mt-5"
        onChange={(e) => dispatch(changeName(e.target.value))}
      />
      <Users />
    </div>
  );
}

export default App;
