import { BrowserRouter, Routes, Route } from "react-router";
import Glavna from "./screens/glavna/Glavna";
import Header from "./components/header/Header";
import Lista from "./screens/lista/Lista";
import Prikaz from "./screens/prikaz/Prikaz";
import "./App.css";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Glavna />} />
            <Route path="/nalozi" element={<Lista />} />
            <Route path="/nalog/:id" element={<Prikaz />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
