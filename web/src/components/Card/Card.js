import { PaperClipIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'

const Card = ({ placeName, longitude, state, stateAbbreviation, latitude }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden sm:rounded-lg">
      <div className="border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Place name</dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
              {placeName}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Longitude</dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
              {longitude}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">State</dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
              {state}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">
              State Abbreviation
            </dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
              {stateAbbreviation}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">Latitude</dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
              {latitude}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

Card.propTypes = {
  placeName: PropTypes.string,
  longitude: PropTypes.string,
  state: PropTypes.string,
  stateAbbre: PropTypes.string,
  latitude: PropTypes.string,
  name: PropTypes.string,
}

export default Card
