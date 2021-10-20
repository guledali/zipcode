import { routes, navigate } from '@redwoodjs/router'
import Header from 'src/components/Header'
import Error from 'src/components/Error'
import ZipForm from 'src/components/ZipForm'
import { useMutation } from '@redwoodjs/web'

const FIND_PLACE = gql`
  mutation FIND_PLACE_MUTATION($zip: Int!) {
    findPlace(zip: $zip) {
      stateAbbreviation
      latitude
      longitude
      state
      placeName
      __typename
    }
  }
`

const FindPlacePage = () => {
  const [find, { error }] = useMutation(FIND_PLACE, {
    onCompleted: ({ findPlace }) => {
      navigate(
        routes.show({
          placeName: findPlace.placeName,
          longitude: findPlace.longitude,
          state: findPlace.state,
          stateAbbreviation: findPlace.stateAbbreviation,
          latitude: findPlace.latitude,
        })
      )
    },
  })

  const onSubmit = ({ zipCode }) => {
    find({ variables: { zip: parseInt(zipCode) } })
  }

  return (
    <div>
      <Header />

      {error && <Error error={error} />}
      <div className="grid grid-cols-3 gap-2">
        <div />
        <div className="mt-8 mx-auto relative">
          <ZipForm onSubmit={onSubmit} />
        </div>
        <div />
      </div>
    </div>
  )
}

export default FindPlacePage
