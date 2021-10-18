import { render } from '@redwoodjs/testing/web'

import ShowPlacePage from './ShowPlacePage'

describe('ShowPlacePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShowPlacePage />)
    }).not.toThrow()
  })
})
