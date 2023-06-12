import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold font-signature">Hello</h1> */}
      <NavBar />
      <Home />

      <SocialLinks />
    </div>
  );
}

export default App;
