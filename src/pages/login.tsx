import AuthLogin from '../features/AuthLogin/AuthLogin'
import { withDefaultLayout } from '../HOC/withDefaultLayout'
const Login = () => {
  return (
    <>
      <AuthLogin />
    </>
  )
}

export default withDefaultLayout(Login)
