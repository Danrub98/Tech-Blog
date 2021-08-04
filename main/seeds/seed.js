const sequelize = require('../config/connection');
const { Post, User, } = require('../models');

const userData = require('./userData.json');
const PostData = require('./postData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    return: true
  });

  console.log("---------------User Data Created ---------------------------------")

  await Post.bulkCreate(PostData);

  console.log("---------------Post Data Created ---------------------------------")

  process.exit(0);
};

seedDatabase();
