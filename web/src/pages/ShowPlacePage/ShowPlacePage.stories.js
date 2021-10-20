import ShowPlacePage from './ShowPlacePage'

export const ShowPlace = () => {
  const mock = {
    placeName: 'OdenPlan',
    longitude: '17.7833',
    state: 'Stockholm',
    stateAbbreviation: 'AB',
    latitude: '59.25',
  }
  return <ShowPlacePage {...mock} />
}

export default { title: 'Pages/ShowPlacePage' }
