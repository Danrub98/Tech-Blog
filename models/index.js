const User = require ('./user')
const Post = require('./post')

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});





// User.belongsToMany(Products, {
//     through: {
//         model: Inventory,
//         foreignKey: 'user_id'
//     }
// })

// Products.belongsToMany(User, {
//     through: {
//         model: Inventory,
//         foreignKey: 'user_id'
//     }
// })



module.exports = { User, Post };
