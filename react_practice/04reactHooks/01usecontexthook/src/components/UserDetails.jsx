import React from "react";

const UserDetails = ({ user }) => {
  return (
    <>
      <div className="my-4">
        <p className="text-3xl font-bold text-green-500">
          Welcome, <span className="italic underline">{user?.userName}</span>
        </p>
      </div>
      <div className="my-6">
        <p className="my-2">Username : {user?.userName} </p>
        <p className="my-2">Password : {user?.password} </p>
      </div>
    </>
  );
};

export default React.memo(UserDetails);
