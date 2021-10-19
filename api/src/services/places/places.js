import axios from 'axios'
import { ValidationError } from '@redwoodjs/graphql-server'

export const findPlace = async ({ zip }) => {
  const response = await axios
    .get(`https://api.zippopotam.us/se/${zip}`)
    .catch(() => {
      throw new ValidationError(`Could find the place with zipCode of ${zip}`)
    })

  return {
    placeName: response.data?.places[0]['place name'] || '',
    longitude: response.data?.places[0]['longitude'] || '',
    state: response.data?.places[0]['state'] || '',
    stateAbbreviation: response.data?.places[0]['state abbreviation'] || '',
    latitude: response.data?.places[0]['state abbreviation'] || '',
  }
}
