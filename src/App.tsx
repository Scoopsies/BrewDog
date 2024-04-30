import { Routes, Route, Link, useLocation } from "react-router-dom";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Home from "./components/Home";
import Credits from "./components/Credits";




function App() {
  const {pathname} = useLocation()
  const selected = (path : string) => {
    return path === pathname ? 'selected nav' : 'nav' 
  }

  return (
    <div className="app">
      <h1 className="pageTitle">DIY DOG</h1>
      <Routes>
        <Route path="/" element={<Recipes/>}/>
        <Route path="/beer/:id" element={<Recipe />} />
        <Route path="/credits" element={<Credits />}/>
      </Routes>
    </div>
  );
}

export default App;
