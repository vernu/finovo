import Landing from '@features/Landing/Landing'
import { withDefaultLayout } from '@HOC/withDefaultLayout'

const LandingPage = () => (
  <>
    <Landing />
  </>
)

export default withDefaultLayout(LandingPage)
