module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define('Review', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      body: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
    });
  
    // sequelize.sync().then(() => {
    //   Review.findAndCountAll()
    //     .then((result) => {
    //       if (!result || result.count === 0) {
    //         Review.create({
    //           product_id: 1,
    //           user_id: 1,
    //           body: 'Sample review body comment!',
    //           rating: 3,
    //         });
    //       }
    //     });
    // }).catch((e) => {
    //   console.log('ERROR SYNCING WITH DB: ', e);
    // });
  
    return Review;
  };
  