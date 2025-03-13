const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "jackets" },
  { _id: "65a7e24602e12c44f599442d", name: "shirts" },
  { _id: "65a7e24602e12c44f599442e", name: "t-shirts" },
  { _id: "65a7e24602e12c44f599442f", name: "jeans" },
  { _id: "65a7e24602e12c44f5994430", name: "tops" },
  { _id: "65a7e24602e12c44f5994431", name: "bottoms" },
];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
