import { render, screen } from "@testing-library/react"
import Principal from "./Principal"

describe("Tests de vista Principal", () => {
  test("Debe mostrar el titulo", () => {
    render(<Principal />)
    expect(screen.getByText("Podcaster")).toBeInTheDocument()
  })
})
