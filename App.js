import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { Category } from "./components/category";
import { Recipe } from "./components/recipe";

function NoMatch() {
  let location = useLocation();

  return(
    <div>
      <h1>Oops..we don't found anything about your search..</h1>
      <h3>Sorry, an unexpected error has occurred.</h3>
      <h3>Doesn't exist: {location.pathname}</h3>
    </div>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="*" element={<NoMatch />}></Route>
            <Route path="/" element={<Home />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="about/" element={<About />} />
            <Route path="category/:name" element={<Category />} />
            <Route path="meal/:id" element={<Recipe />}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
