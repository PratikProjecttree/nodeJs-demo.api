const User = require('../models/User');
const Role = require('../models/Role');
const UserRole = require('../models/UserRole');

const createUser = async (userData) => {
    return await User.create(userData);
};

const bulkCreateUserRoles = async (userRoles) => {
    return await UserRole.bulkCreate(userRoles);
};

const getUserById = async (id) => {
    return await User.findByPk(id, {
        include: [UserRole], // eager load roles if needed
    });
};

const updateUser = async (id, updateData) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    return await user.update(updateData);
};

const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return true;
};

// Soft delete existing UserRoles by setting IsActive = false
const softDeleteUserRoles = async (userId) => {
    return await UserRole.update(
        { IsActive: false },
        { where: { UserId: userId, IsActive: true } }
    );
};

// Upsert user roles (reactivate or create)
const upsertUserRoles = async (userId, roleIds) => {
    for (const roleId of roleIds) {
        const [userRole, created] = await UserRole.findOrCreate({
            where: { UserId: userId, RoleId: roleId },
            defaults: { IsActive: true }
        });
        if (!created && !userRole.IsActive) {
            await userRole.update({ IsActive: true });
        }
    }
};

module.exports = {
    createUser,
    bulkCreateUserRoles,
    getUserById,
    updateUser,
    deleteUser,
    softDeleteUserRoles,
    upsertUserRoles,
};