import Header from './Header'

// export const generated = () => {
//   return <Header />
// }

export const withoutName = () => {
  return <Header />
}

export const withName = () => {
  return <Header name="Odenplan" />
}

export default { title: 'Components/Header' }
