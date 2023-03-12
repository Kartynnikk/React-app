import Movies from "./components/Movies";
import MovieDescription from "./Pages/MovieDescription";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import { useState } from "react";

const App = () => {
  // const [city, setCity] = useState("1");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="movie-description/:id" element={<MovieDescription />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
