import { useSelector } from "react-redux";
import { RootState } from "../Store/Types/State";
import UserProfile from "../Components/UserProfile/UserProfile";

const UserPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const userName = user ? user.userName : null;
  return <UserProfile />;
};

export default UserPage;
