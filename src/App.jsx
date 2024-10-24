import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import List from "./components/List";
import ListItem from "./components/ListItem";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./components/About";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/ListItem" element={<ListItem />} />
          <Route path="/About" element={<About />} />
          <Route path="/List/:recipeId" element={<ItemDetails />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
}
export default App;
