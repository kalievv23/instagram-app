import {useSelector} from "react-redux";
import {RootState} from "../Store/Types/State";

const UserPage = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  const userName = user ? user.userName : null
  return (
      <center>
        <h1>{userName}</h1>
      </center>
  )
}

export default UserPage