import Movies from "./components/Movies/Movies";
import AboutMovie from "./AboutMovie";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

const App = () => {
  // const [city, setCity] = useState("1");

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Movies />} />
        <Route path="movie-description/:id" element={<AboutMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
