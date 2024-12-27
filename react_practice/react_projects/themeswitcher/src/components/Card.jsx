import React from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import UserCard from "./UserCard";

const Card = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetchUsers("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center p-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Card;
