const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config');

class Book extends Model {}

Book.init({
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    isbn: {
        type: DataTypes.STRING,
    },
    pages: {
        type: DataTypes.INTEGER,
    },
    edition: {
        type: DataTypes.INTEGER,
    },
    isPaperBack: {
        type: DataTypes.BOOLEAN,
    },
}, {
    sequelize,
    timestamps: false,
    modelName: 'book',
    freezeTableName: true,
});

module.exports = Book;