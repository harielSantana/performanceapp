module.exports = () => {
  const data = {
    friends: [],
  };

  for (let index = 0; index < 500; index++) {
    data.friends.push({
      id: index + 1,
      likes: Math.floor(Math.random() * 3000),
      name: `User${Math.floor(Math.random() * 9999)}`,
    });
  }
  return data;
};
