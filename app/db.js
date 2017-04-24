import Sequelize from 'sequelize';
import dbConfig from './config/db.json';


const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    timezone: dbConfig.timezone,
    dialect: 'postgres',
    // logging : console.log,
    logging: false,
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

export default sequelize;