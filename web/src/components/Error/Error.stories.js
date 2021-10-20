import Error from './Error'

export const displayErrorAlert = () => {
  const error = {
    message: 'Could find the place with zipCode of 11111',
  }
  return <Error error={error} />
}

export default { title: 'Components/Error' }
