import { render } from '@redwoodjs/testing/web'

import ShowPlacePage from './ShowPlacePage'

describe('ShowPlacePage', () => {
  it('renders successfully', () => {
    const mock = {
      placeName: 'OdenPlan',
      longitude: '17.7833',
      state: 'Stockholm',
      stateAbbreviation: 'AB',
      latitude: '59.25',
    }
    render(<ShowPlacePage {...mock} />)
  })
})
