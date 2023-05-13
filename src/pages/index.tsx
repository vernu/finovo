import HeroSection from '../components/landing/HeroSection'
import { withDefaultLayout } from '../HOC/withDefaultLayout'
const LandingPage = () => {
  return (
    <>
      <HeroSection />
    </>
  )
}

export default withDefaultLayout(LandingPage)
