//online Users
const c_users = [];

//
function user_joined(socketid, name, room) {
  const active_user = { socketid, name, room };

  c_users.push(active_user);
  console.log(c_users);

  return c_users;
}

console.log("user out", c_users);

// Gets a particular user id to return the current user
function get_Current_User(id) {
  return c_users.find((p_user) => p_user.id === id);
}

// called when the user leaves the chat and its user object deleted from array
function user_Disconnect(id) {
  const index = c_users.findIndex((user) => user.socketid === id);

  //   console.log(c_users[index]);
  //   console.log(id);
  if (index !== -1) {
    const x = c_users.splice(index, 1);
    // console.log(x);
    return x;
  }
}

module.exports = {
  user_joined,
  get_Current_User,
  user_Disconnect,
  c_users,
};
