const{req , res } = require("express")
// const users = [
//   { id: 1, firsName: "Saraa", lastName: "Navcha" },
//   { id: 2, firsName: "Bold", lastName: "Garig" },
// ];
// exports.getUsers = (req, res, next) => {
//   const { firsName , lastName } = req.body
//   res.status(200).json({
//     users: users,
//   });
// };
// exports.createUser = (req, res, next) => {
//   users.push({ id: users.length + 1, ...req.body });
//   res.status(400).json(users);
// };
// exports.getUser = (req, res, next) => {
//   const { id } = req.params;
//   console.log('asd')

//   if (id > users.length) {
//     res.status(400).json({ message: `${req.params.id} id is not exist` });
//   } else {
//     res.status(200).json(users[parseInt(id) - 1]);
//   }
// };
// exports.updateUser = (req, res, next) => {
//   const { id } = req.params;
//   if (id > users.length) {
//     res.status(400).json({ message: `${req.params.id} id is not exist` });
//   } else {
//     res
//       .status(200)
//       .json({ message: `User with ${req.params.id} id is updated` });
//   }
// };

// exports.deleteUser = (req, res, next) => {
//   const { id } = req.params;
//   if (id > users.length) {
//     res.status(400).json({ message: `${req.params.id} id is not exist` });
//   } else {
//     res
//       .status(200)
//       .json({ message: `User with ${req.params.id} id is deleted` });
//   }
// };
const UserModel = require('./model')

exports.createUser = async ( req , res , next ) => {
  console.log(req)
  if (
      !req.body?.firstName ||
      !req.body?.lastName
      // !req.body?.phone ||
      // !req.body?.gender ||
      // !req.body?.email 
  ) {
      res.status(400).json({ message : `Firstname , lastname or email are required.`});
  }
  const createUser = await UserModel.create({...req.body});
  res.status(201).json({message: `New user is created.` , data: createUser });
}
  