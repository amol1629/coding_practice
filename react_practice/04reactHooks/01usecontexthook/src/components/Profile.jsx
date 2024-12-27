import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserDetails from "./UserDetails";

const Profile = () => {
  const { user } = useContext(UserContext);

  console.log("User contextValue : ", user);

  return (
    <div className="w-1/2 p-4 mx-auto my-8 border shadow-xl rounded-xl bg-cyan-50">
      {user ? (
        <UserDetails user={user} />
      ) : (
        <p className="text-xl font-medium text-red-500 text-center">
          No user present.
        </p>
      )}
    </div>
  );
};

export default Profile;
