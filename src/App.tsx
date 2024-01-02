import { Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes";

function App() {

  return (
    <div>
      <h1>Your the man now Diy Dog</h1>

      <Routes>
        <Route path="/" element={<Recipes/>} />
      </Routes>

    </div>
  );
}

export default App;
