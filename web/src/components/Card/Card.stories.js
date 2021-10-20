import Card from './Card'

export const placeCard = () => {
  const mock = {
    placeName: 'OdenPlan',
    longitude: '17.7833',
    state: 'Stockholm',
    stateAbbreviation: 'AB',
    latitude: '59.25',
  }
  return <Card {...mock} />
}

export default { title: 'Components/Card' }
