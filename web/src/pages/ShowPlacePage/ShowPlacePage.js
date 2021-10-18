import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ShowPlacePage = () => {
  return (
    <>
      <MetaTags
        title="ShowPlace"
        // description="ShowPlace description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>ShowPlacePage</h1>
      <p>
        Find me in <code>./web/src/pages/ShowPlacePage/ShowPlacePage.js</code>
      </p>
      <p>
        My default route is named <code>showPlace</code>, link to me with `
        <Link to={routes.showPlace()}>ShowPlace</Link>`
      </p>
    </>
  )
}

export default ShowPlacePage
