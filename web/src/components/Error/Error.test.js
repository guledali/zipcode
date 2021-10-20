import { render, screen } from '@redwoodjs/testing/web'

import Error from './Error'

describe('Error', () => {
  it('should display error message', () => {
    const error = {
      message: 'Could find the place with zipCode of 11111',
    }
    render(<Error error={error} />)

    expect(
      screen.getByText('Could find the place with zipCode of 11111')
    ).toBeInTheDocument()
  })
})
