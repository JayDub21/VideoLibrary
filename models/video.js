// Creating our Video model
module.exports = function (sequelize, DataTypes) {
    var Video = sequelize.define("Video", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        video_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rec_date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        keyword: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Video;
};