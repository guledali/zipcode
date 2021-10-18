import { render } from '@redwoodjs/testing/web'

import FindPlacePage from './FindPlacePage'

describe('FindPlacePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FindPlacePage />)
    }).not.toThrow()
  })
})
