const Lookup = require('../models/lookup');

const getAll = async () => await Lookup.findAll();
const getById = async (uuid) => await Lookup.findByPk(uuid);
const create = async (data) => await Lookup.create(data);
const update = async (uuid, data) => {
  const item = await Lookup.findByPk(uuid);
  if (!item) return null;
  return await item.update(data);
};
const remove = async (uuid) => {
  const item = await Lookup.findByPk(uuid);
  if (!item) return null;
  await item.destroy();
  return item;
};

module.exports = { getAll, getById, create, update, remove };
