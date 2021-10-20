import { XCircleIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'

const Error = ({ error }) => {
  return (
    <div className="rounded-md bg-red-50 p-4 w-6/12 mx-auto mt-5">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{error.message}</h3>
        </div>
      </div>
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
}

export default Error
