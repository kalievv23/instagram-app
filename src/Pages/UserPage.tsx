import { useSelector } from "react-redux";
import { RootState } from "../Store/Reducers";
import UserProfile from "../Components/UserProfile/UserProfile";

const UserPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return <UserProfile userName={user?.userName ?? ""} />;
};

export default UserPage;
