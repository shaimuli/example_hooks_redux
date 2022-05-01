import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {incrementCounter} from "./store/actions";
function App() {
  const count = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div>Counter is {count}</div>
        <button onClick={()=>{
          dispatch(incrementCounter());
        }}>increnent</button>
      </header>
    </div>
  );
}

export default App;
