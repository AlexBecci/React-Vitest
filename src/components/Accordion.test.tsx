import Accordion from "./Accordion.tsx";
import { render, screen, fireEvent } from "@testing-library/react";


describe('Accordion', () => {

    beforeEach(() => {
        render(<Accordion title="Hello">
            <h3>My content</h3>
            <p>Some content</p>

        </Accordion>)
    })

    test('should show title all the time', () => {
        expect(screen.getByText('hola')).toBeDefined()
    })
    test('should not show the content at the start ', () => {
        expect(screen.queryByText(/content/i)).toBeNull()

    })

    test('should show the content white title is clicked', () => {
        const button = screen.getByText(/open/i);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeDefined()
    })

    test('should hide the content white title is clicked', () => {
        const button = screen.getByText(/open/i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/content/i)).toBeNull()
    })

})