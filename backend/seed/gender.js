const gender = require("../models/gender");

const genders = [
  { _id: "65a7e20102e12c44f59943da", name: "Male" },
  { _id: "65a7e20102e12c44f59943db", name: "Female" },
];

exports.seedgender = async () => {
  try {
    await gender.insertMany(genders);
    console.log('gender seeded successfully');
  } catch (error) {
    console.log(error);
  }
};
