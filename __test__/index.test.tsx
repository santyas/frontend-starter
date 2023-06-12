import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
	it('renders a title', () => {
		render(<Home />)
		expect(screen.getByTestId("title")).toBeInTheDocument()
	})
})