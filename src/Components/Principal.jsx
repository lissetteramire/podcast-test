//import axios from "axios"
import { useState, useEffect, useMemo } from "react"

const podcastsData = Array.from({ length: 100 }, (_, index) => ({
  title: { label: `Podcast ${index + 1}` }
}))

const Principal = () => {
  const [podcasts, setPodcasts] = useState([])
  const [filtro, setFiltro] = useState("")

  useEffect(() => {
    //async function obtenerPodcasts() {
    // const resultado = await axios.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
    // const podcasts = resultado.data.feed.entry
    // console.log(podcasts)
    setPodcasts(podcastsData)
  }, [])

  const podcastsFiltrados = useMemo(() => {
    return podcasts.filter(podcast => {
      return podcast.title.label.toLowerCase().includes(filtro.toLowerCase())
    })
  }, [podcasts, filtro])

  return (
    <div>
      <header className="encabezado">
        <h1>Podcaster</h1>
        <hr />
        <div className="contenedor-filtro">
          <label htmlFor="filtro" className="contador">
            {podcastsFiltrados.length}
          </label>
          <input type="text" className="filtro" placeholder="Filter podcasts..." value={filtro} onChange={e => setFiltro(e.target.value)} />
        </div>
      </header>
      <main className="contenedor-podcasts">
        {podcastsFiltrados.map((podcast, index) => (
          <article key={index}>
            <h2>{podcast.title.label}</h2>
          </article>
        ))}
      </main>
    </div>
  )
}

export default Principal
