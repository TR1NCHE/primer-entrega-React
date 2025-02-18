import "./App.css";
import ResponsiveAppBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
}

export default App;
