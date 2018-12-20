const getUser = (id, callback) => {
  const user = {
    id: id,
    name: "Vikram"
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(2, userObject => {
  console.log(userObject);
});
