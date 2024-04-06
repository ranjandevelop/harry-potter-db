import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PotionDetail from "./components/PotionDetail";
import BookDetail from "./components/BookDetail";
import SpellDetail from "./components/SpellDetail";
import MovieDetail from "./components/MovieDetail";
import CharacterDetail from "./components/CharacterDetail";
import Category from "./components/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/potions/:id" element={<PotionDetail />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/spells/:id" element={<SpellDetail />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/:id" element={<Category />} />
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
