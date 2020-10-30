module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('Category', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  
    // Seed categories
    // const categories = require('../seeders/categories');
    // sequelize.sync().then(() => {
    //   Category.findAndCountAll()
    //     .then((result) => {
    //       if (!result || result.count === 0) {
    //         for (let i = 0; i < categories.length; i++) {
    //           Category.create({
    //             name: categories[i].name,
    //           });
    //         }
    //       }
    //     });
    // }).catch((e) => {
    //   console.log('ERROR SYNCING WITH DB: ', e);
    // });
  
    return Category;
  };
  