import PropTypes from 'prop-types'

const Header = ({ name = '' }) => {
  const hasName = () => {
    return name && name.length > 1
  }

  const hasNoName = () => {
    return name.length === 0
  }

  return (
    <div className="bg-blue-500 py-12">
      {hasName() && (
        <div>
          <h1 className="text-white text-center text-4xl font-medium">
            Your place <span className="font-extrabold text-white">{name}</span>{' '}
          </h1>
        </div>
      )}

      {hasNoName() && (
        <div>
          <h1 className="text-white text-center text-4xl font-medium">
            Find your place!
          </h1>
        </div>
      )}
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string,
}

export default Header
