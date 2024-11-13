import UserModel, { User } from "../models/userModel";

const createUser = async (userData: User) => {
    const user = new UserModel(userData);
    return await user.save();
};

const getAllUsers = async () => {
    return await UserModel.find();
};

export { createUser, getAllUsers } ; 