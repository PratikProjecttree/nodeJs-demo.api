const userRepository = require('../repositories/userRepository');

const createUserWithRoles = async ({ name, roleIds }) => {
  if (!name || !Array.isArray(roleIds)) {
    throw new Error('Invalid input: name and roleIds are required.');
  }

  // Create user
  const user = await userRepository.createUser({ Name: name });

  // Create related UserRole records
  const userRoles = roleIds.map(roleId => ({
    UserId: user.Id,
    RoleId: roleId,
  }));

  await userRepository.bulkCreateUserRoles(userRoles);

  return { userId: user.Id };
};

const updateUserWithRoles = async ({ userId, name, roleIds }) => {
  if (!userId || !name || !Array.isArray(roleIds)) {
    throw new Error('Invalid input: userId, name, and roleIds are required.');
  }

  const updatedUser = await userRepository.updateUser(userId, { Name: name });
  if (!updatedUser) {
    throw new Error('User not found.');
  }

  // Soft delete old roles
  await userRepository.softDeleteUserRoles(userId);

  // Upsert new roles
  await userRepository.upsertUserRoles(userId, roleIds);

  return { userId };
};

module.exports = {
  createUserWithRoles,
  updateUserWithRoles,
};