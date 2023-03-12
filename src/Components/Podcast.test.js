import { screen, render } from "@testing-library/react"
import Podcast from "./Podcast"

const mockedPodcast = {
  title: { label: `Podcast x` },
  "im:artist": { label: `Artist x` },
  "im:image": [{ label: `https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png` }],
  summary: { label: `Summary x` },
  id: { label: "Podcast x", attributes: { "im:id": 1535809341 } }
}

describe("Tests de vista Podcast - details", () => {
  test("Debe mostrar la imagen del podcast", async () => {
    render(<Podcast podcast={mockedPodcast} />)
    await expect(screen.getByAltText("Imagen de podcast")).toBeInTheDocument()
  })
  test("Debe mostrar el título del podcast", async () => {
    render(<Podcast podcast={mockedPodcast} />)
    await expect(screen.getByTestId("podcast-title")).toBeInTheDocument()
  })
  test("Debe mostrar el autor del podcast", async () => {
    render(<Podcast podcast={mockedPodcast} />)
    await expect(screen.getByTestId("podcast-autor")).toBeInTheDocument()
  })
  test("Debe mostrar la descripción del podcast", async () => {
    render(<Podcast podcast={mockedPodcast} />)
    await expect(screen.getByTestId("podcast-descripcion")).toBeInTheDocument()
  })
})

describe("Tests de vista Podcast - episodes", () => {})
