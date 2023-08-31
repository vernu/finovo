import AuthRegister from '@features/AuthRegister/AuthRegister'
import { withDefaultLayout } from '@HOC/withDefaultLayout'
const Register = () => {
  return (
    <>
      <AuthRegister />
    </>
  )
}

export default withDefaultLayout(Register)
