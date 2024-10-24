import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div class="sidebar">
      <ul>
        <li>
        <button><NavLink to="/">Home</NavLink></button>
        </li>
        <li>
          <button><a href=""><NavLink to="/About">About</NavLink></a></button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;