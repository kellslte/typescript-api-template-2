import { CreateUserOptions } from './auth.service';
import { User } from "../models/user.model";

export const getUsers = async () => await User.find();

export const getUserByEmail = async (email: string) =>
  await User.findOne({ email });

export const getUserBySessionToken = async (sessionToken: string) =>
  await User.findOne({ "authentication.sessionToken": sessionToken });

export const getUserById = async (id: string) => await User.findById(id);

export const createUser = async (data: Partial<CreateUserOptions>) => {
  return await User.create({
    email: data.email,
    username: data.username,
    authentication: {
      password: data.password,
    },
  });
};

export const deleteUserById = async (id: string) =>
  await User.findByIdAndDelete({ _id: id });

export const updateUserById = async (id: string, data: Record<string, any>) =>
  await User.findByIdAndUpdate(id, data, { new: true });
