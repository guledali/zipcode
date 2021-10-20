import { render } from '@redwoodjs/testing/web'

import PlaceLayout from './PlaceLayout'

describe('PlaceLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlaceLayout />)
    }).not.toThrow()
  })
})
