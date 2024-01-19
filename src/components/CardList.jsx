import React from "react";
import Card from "./Card";
import data from '../data';

export default function CardList() {
  const cards = data.map(item => (
    <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  ));

  return (
    <>
      <section className="cards-list">{cards}</section>
    </>
  );
}
