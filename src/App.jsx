import "./App.css";
import Books from "./components/Books";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Characters from "./components/Characters";
import Spells from "./components/Spells";
import Potions from "./components/Potions";
import PotionDetail from "./components/PotionDetail";
import BookDetail from "./components/BookDetail";
import SpellDetail from "./components/SpellDetail";
import MovieDetail from "./components/MovieDetail";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/spells" element={<Spells />} />
            <Route path="/potions" element={<Potions />} />
            <Route path="/potions/:id" element={<PotionDetail />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/spells/:id" element={<SpellDetail />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route />
            <Route />
            <Route />
            {/*  */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
