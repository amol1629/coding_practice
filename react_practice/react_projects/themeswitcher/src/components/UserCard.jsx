const UserCard = ({ user }) => {
  const { username, email, phone, website, address } = user;
  const { street, suite, city, zipcode } = address;

  return (
    <div className="w-full p-4 m-4 text-center bg-gray-100 border border-gray-800 shadow-xl rounded-xl sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h2 className="my-2 text-xl font-bold">{username}</h2>
      <h3 className="mb-2 text-gray-700">{email}</h3>
      <p className="mb-2 text-gray-600">{phone}</p>
      <p className="mb-2 text-blue-600">
        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </p>
      <p className="mb-2 text-gray-600">
        {street}, {suite}, {city}, {zipcode}
      </p>
    </div>
  );
};

export default UserCard;
