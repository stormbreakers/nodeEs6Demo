import db from '../db';
import Sequelize from 'sequelize';

const About = db.define('about_detail', {
    'about_detail_id': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        validate: {
            isInt: true
        }
    },
    'title': {
        type: Sequelize.STRING
    },
    'excerpt': {
        type: Sequelize.STRING
    },
    'description': {
        type: Sequelize.STRING
    },
    'cover_photo': {
        type: Sequelize.INTEGER
    },
    'sort_order': {
        type: Sequelize.INTEGER,
    },
    'is_deleted': {
        type: Sequelize.BOOLEAN,
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false,
    freezeTableName: true
});

export default About;