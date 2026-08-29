let users = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@gmail.com",
    role: "Customer"
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@gmail.com",
    role: "Service Provider"
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    role: "Customer"
  }
];

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

module.exports = {
  getUsers,
  getUserById
};