import Header from 'src/components/Header'
import Card from 'src/components/Card'
import { Link, routes } from '@redwoodjs/router'

const ShowPlacePage = ({
  placeName,
  longitude,
  state,
  stateAbbreviation,
  latitude,
}) => {
  return (
    <div className="block relative">
      <Header name={placeName} />
      <div className="absolute top-28 w-8/12 mx-auto left-0 right-0 ml-auto mr-auto">
        <Card
          placeName={placeName}
          longitude={longitude}
          state={state}
          stateAbbreviation={stateAbbreviation}
          latitude={latitude}
        />
      </div>
      <Link
        to={routes.index()}
        className="text-xl font-medium text-blue-600 absolute right-2 top-96 mt-64"
      >
        Back to Search →
      </Link>
    </div>
  )
}

export default ShowPlacePage
