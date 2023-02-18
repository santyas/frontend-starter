import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
	it('renders a title', () => {
		render(<Home />)
		expect(screen.getByTestId("title")).toBeInTheDocument()
	})
})