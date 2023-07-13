import Accordion from "./Accordion.tsx";
import { render,screen } from "@testing-library/react";


describe('Accordion', () => {
    test("should add two numbers", () => {
        render(<Accordion title="Hello">
            <h3>My content</h3>
            <p>Some content</p>

        </Accordion>)
    })

    expect(screen.getByText('Hello')).toBeDefined()
})