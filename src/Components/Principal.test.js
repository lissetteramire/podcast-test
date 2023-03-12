import { render, screen } from "@testing-library/react"
import Principal from "./Principal"

describe("Tests de vista Principal", () => {
  test("Debe mostrar el titulo", () => {
    render(<Principal />)
    expect(screen.getByText("Podcaster")).toBeInTheDocument()
  })
  test("Debe mostrar una etiqueta de filtro con los 100 podcasts iniciales", async () => {
    render(<Principal />)
    await expect(screen.getByText("100")).toBeInTheDocument()
  })
  test("Debe mostrar input de filtro", () => {
    render(<Principal />)
    expect(screen.getByPlaceholderText("Filter podcasts...")).toBeInTheDocument()
  })
  test("Debe mostrar el listado de los podcasts", async () => {
    render(<Principal />)
    const podcasts = screen.getAllByRole("article")
    await expect(podcasts.length).toBe(100)
  })
})
