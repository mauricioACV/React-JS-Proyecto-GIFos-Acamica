import { useContext } from "react";
import { AppContext } from "./Context/ContextProvider";
import GiphySearchBar from "./Components/GiphySearchBar";
import GridResult from "./Components/GridResult";
import Header from "./Components/Header";
import "./styles.css";

export default function App() {
  const { gifCategory } = useContext(AppContext);
  return (
    <div className="App">
      <Header />
      <GiphySearchBar />
      <GridResult key={gifCategory} gifCategory={gifCategory} />
    </div>
  );
}
