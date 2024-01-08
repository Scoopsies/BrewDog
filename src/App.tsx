import { Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";


function App() {


  return (
    <div className="app">
      <h1>Diy Dog</h1>
      <Routes>
        <Route path="/" element={<Recipes/>}/>
        <Route path="/beer/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
