import { render, screen } from '@redwoodjs/testing/web'

import Card from './Card'

describe('Card', () => {
  it('renders successfully', () => {
    const CardMock = {
      placeName: 'OdenPlan',
      longitude: '17.7833',
      state: 'Stockholm',
      stateAbbreviation: 'AB',
      latitude: '59.25',
    }

    render(<Card {...CardMock} />)

    expect(screen.queryByText('OdenPlan')).toBeInTheDocument()
  })
})
