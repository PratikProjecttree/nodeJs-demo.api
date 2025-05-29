// #region Variables 

const userService = require('../services/userService');
const response = require('../utils/response');
const message = require('../utils/constants/messages');

// #endregion

// #region Methods 

exports.createUserWithRoles = async (req, res) => {
  const data = await userService.createUserWithRoles(req.body);
  response.success(res, data, message.RECORD_CREATED);
};

exports.updateUserWithRoles = async (req, res) => {
  const userId = req.params.id;  // get userId from URL like /users/:id
  const { name, roleIds } = req.body;

  if (!userId || !name || !Array.isArray(roleIds)) {
    return res.status(400).json({ message: 'Invalid input: userId, name, and roleIds are required.' });
  }

  const data = await userService.updateUserWithRoles({ userId, name, roleIds });
  response.success(res, data, message.RECORD_UPDATED);
};

// #endregion