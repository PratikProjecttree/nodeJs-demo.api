const repository = require('../repositories/lookupRepository');

module.exports = {
  getAll: repository.getAll,
  getById: repository.getById,
  create: repository.create,
  update: repository.update,
  remove: repository.remove
};
