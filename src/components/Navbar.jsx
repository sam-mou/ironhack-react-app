import logo from "../logo.png"

function Navbar(){
  return(
  <nav class="navbar">
    <div>
      <img src={logo} alt="image of logo" class="logo"></img>
    </div>
    <div>
      <h1>The Spice is Right</h1>
    </div>
  </nav>
  );
}

export default Navbar;