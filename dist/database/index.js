"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _AlunoModel = require('../models/AlunoModel'); var _AlunoModel2 = _interopRequireDefault(_AlunoModel);
var _UserModel = require('../models/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);
var _PhotoModel = require('../models/PhotoModel'); var _PhotoModel2 = _interopRequireDefault(_PhotoModel);

const models = [_AlunoModel2.default, _UserModel2.default, _PhotoModel2.default];

const connection = new (0, _sequelize.Sequelize)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
