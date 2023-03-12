//import axios from "axios"
import { useState, useEffect, useMemo } from "react"

const podcastsData = Array.from({ length: 100 }, (_, index) => ({
  title: { label: `Podcast ${index + 1}` },
  "im:artist": { label: `Artist ${index + 1}` },
  "im:image": [{ label: `https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png` }],
  summary: { label: `Summary ${index + 1}` },
  id: { label: `Podcast ${index + 1}`, attributes: { "im:id": index + 1 } }
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
      return podcast.title.label.toLowerCase().includes(filtro.toLowerCase()) || podcast["im:artist"].label.toLowerCase().includes(filtro.toLowerCase())
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
          <article key={podcast.id.attributes["im:id"]}>
            <h2>{podcast.title.label}</h2>
            <p>Artist: {podcast["im:artist"].label}</p>
            <img src={podcast["im:image"][0].label} alt={podcast.title.label} />
          </article>
        ))}
      </main>
    </div>
  )
}

export default Principal
