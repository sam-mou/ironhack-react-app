import './App.css'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import List from './components/List';

function App() {
    return (
    <div>
      <Navbar />
      <Sidebar />
      <List />
      <Footer />
    </div>
    );
}

export default App
