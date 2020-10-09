// const Category = require("../models/category");
// const { errorHandler } = require("../helpers/dbErrorHandler");

// exports.create = (req, res) => {
//   const category = new Category(req.body);

//   category.save((err, date) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Database error",
//       });
//     }
//     res.json({ data });
//   });
// };
