import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import data from "../utils/data";

const Helpers = () => {
  const dataItems = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Nav />
      <Hero />
      <section className="cards-list">{dataItems}</section>
    </div>
  );
};

export default Helpers;
