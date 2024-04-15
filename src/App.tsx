import { Routes, Route, Link, useLocation } from "react-router-dom";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Home from "./components/Home";
import Credits from "./components/Credits";




function App() {
  const {pathname} = useLocation()
  console.log(pathname)
  const selected = (path : string) => {
    return path === pathname ? 'selected nav' : 'nav' 
  }

  return (
    <div className="app">
      <h1 className="pageTitle">DIY DOG</h1>
      {/* <nav>
        <Link className={selected('/')} to='/' >Home</Link>
        <Link className={selected('/recipes')} to='/recipes' >Recipes</Link>
        <Link className={selected('/credits')} to='/credits'>Credits</Link>
      </nav> */}
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<Recipes/>}/>
        <Route path="/beer/:id" element={<Recipe />} />
        <Route path="/credits" element={<Credits />}/>
      </Routes>
    </div>
  );
}

export default App;
