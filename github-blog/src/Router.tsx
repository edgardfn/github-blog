import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { PublicationDetails } from './pages/PublicationDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/publication/:publicationId"
          element={<PublicationDetails />}
        />
      </Route>
    </Routes>
  )
}
