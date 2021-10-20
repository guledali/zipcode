// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PlaceLayout from 'src/layouts/PlaceLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PlaceLayout}>
        <Route path="/" page={FindPlacePage} name="index" />
        <Route path="/show-place" page={ShowPlacePage} name="show" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
