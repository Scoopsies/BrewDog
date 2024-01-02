import { Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes";
import Test from "./components/Test";
import Recipe from "./components/Recipe";

function App() {

  

  

  return (
    <div>
      <h1>Your the man now Diy Dog</h1>

      <Routes>
        <Route path="/" element={<Recipes/>} />
        <Route path="/beer/:id" element={<Recipe/>} />
      </Routes>

    </div>
  );
}

export default App;
