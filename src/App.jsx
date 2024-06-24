import { Outlet } from "react-router-dom";
import Header from "./components/homepage/Header";
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
