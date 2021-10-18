import { render, screen } from '@redwoodjs/testing/web'

import Header from './Header'

describe('Header', () => {
  it('renders header without name', () => {
    render(<Header />)

    expect(screen.getByText('Find your place!')).toBeInTheDocument()
  })

  it('renders header with name', () => {
    render(<Header name="Odenplan" />)

    expect(screen.getByText('Odenplan')).toBeInTheDocument()
  })
})
