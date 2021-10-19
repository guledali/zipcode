export const schema = gql`
  type Place {
    placeName: String
    longitude: String
    state: String
    stateAbbreviation: String
    latitude: String
  }

  type Mutation {
    findPlace(zip: Int!): Place @skipAuth
  }
`
