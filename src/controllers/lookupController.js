// #region Variables 

const response = require('../utils/response');
const message = require('../utils/constants/messages');
const service = require('../services/lookupService');

// #endregion

// #region Methods 

exports.getAll = async (req, res) => {
  const data = await service.getAll();
  response.success(res, data, message.RECORDS_FETCHED);
};

exports.getById = async (req, res) => {
  const data = await service.getById(req.params.uuid);
  if (!data) throw { status: 404, message: message.NOT_FOUND };
  response.success(res, data, message.RECORD_FETCHED);
};

exports.create = async (req, res) => {
  const data = await service.create(req.body);
  response.success(res, data, message.RECORD_CREATED);
};

exports.update = async (req, res) => {
  const data = await service.update(req.params.uuid, req.body);
  if (!data) throw { status: 404, message: message.NOT_FOUND };
  response.success(res, data, message.RECORD_UPDATED);
};

exports.remove = async (req, res) => {
  const data = await service.remove(req.params.uuid);
  if (!data) throw { status: 404, message: message.NOT_FOUND };
  response.success(res, null, message.RECORD_DELETED);
};

// #endregion
