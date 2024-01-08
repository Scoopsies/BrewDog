import { Routes, Route } from "react-router-dom";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";


function App() {


  return (
    <div className="app">
      <h1 className="pageTitle">DIY Dog</h1>
      <div className="italic">Click any recipe card to view recipe.</div>
      <Routes>
        <Route path="/" element={<Recipes/>}/>
        <Route path="/beer/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
