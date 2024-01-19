import React from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";  // Import CardList component
import data from "./data";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardList data={data} /> {/* Pass the data array as props to CardList */}
    </div>
  );
}
