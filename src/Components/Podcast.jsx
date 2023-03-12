//import axios from "axios";
//import { useState, useEffect, useMemo } from "react";

const Podcast = ({ podcast }) => {
  return (
    <>
      <section className="contenedor-descripcion">
        <article key={podcast.id.attributes["im:id"]}>
          <img src={podcast["im:image"][0].label} alt="Imagen de podcast" />
          <h2 data-testid="podcast-title">{podcast.title.label}</h2>
          <h3 data-testid="podcast-autor">Artist: {podcast["im:artist"].label}</h3>
          <p data-testid="podcast-descripcion">{podcast.summary.label}</p>
        </article>
      </section>
      <section className="contenedor-episodios"></section>
    </>
  )
}

export default Podcast
