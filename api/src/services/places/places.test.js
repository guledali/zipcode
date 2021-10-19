import { findPlace } from './places'

describe('places service', () => {
  it('should find place', async () => {
    const place = await findPlace({ zip: 11862 })
    expect(place.placeName).toEqual('Stockholm')
  })

  it('should throw exception', async () => {
    expect.assertions(1)
    try {
      await findPlace({ zip: 11111 })
    } catch (e) {
      expect(e).not.toBeNull()
    }
  })
})
