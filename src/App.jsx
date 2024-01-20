import {  Flow, FlowToolbar } from "./components";
import { Header } from "./layouts";
import Drawflow from "./drawflow";

const App = () => {
 
  return (
    <div>
      <Header />
      <div className="flex">
        <FlowToolbar />
        <Flow/>
      </div>
    </div>
  );
};

export default App;
