import React, { useState } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css'

function App() {
  const [selectedPage, setPage] = useState("About")

  const renderPage = () => {
    switch (selectedPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />
    }
  };

  return (
    <>
    <Header setPage={setPage} />
      <section className="content">
        {renderPage()}
      </section>
    <Footer />
    </>
  )
}

export default App;
