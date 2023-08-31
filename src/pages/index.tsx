import Landing from '@features/Landing/Landing'
import { withDefaultLayout } from '@HOC/withDefaultLayout'
import { useGetCurrentUserQuery } from '@lib/graphql/generated/graphql'
import { removeAccessToken, removeCurrentUser } from '@utils/localStorageUtils'

const LandingPage = () => {
  const currentUserQuery = useGetCurrentUserQuery()
  if (currentUserQuery.error) {
    removeCurrentUser()
    removeAccessToken()
  }
  return (
    <>
      <Landing />
    </>
  )
}

export default withDefaultLayout(LandingPage)
