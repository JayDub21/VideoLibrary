/*
  */// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Wuphf" model that matches up with DB
var Wuphf = sequelize.define("wuphf", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Wuphf.sync();

// Makes the Wuphf Model available for other files (will also create a table)
module.exports = Wuphf;


module.exports = function(sequelize, DataTypes) {
  var Wuphf = sequelize.define("wuphf", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Wuphf.associate = function(models) {
    // We're saying that a Wuphf should belong to an Author
    // A Wuphf can't be created without an Author due to the foreign key constraint
    Wuphf.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Wuphf;
};
