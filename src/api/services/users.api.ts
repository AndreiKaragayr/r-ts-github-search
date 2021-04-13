import { instance } from '../api.config.creator';

export const getUsers = async () => {
  const response = await instance.get('users');
  return response.data;
};

export const getUserByName = async (username: string) => {
  const response = await instance.get(`/users/${username}`);
  return response.data;
};

export const getRepoByName = async (username: string) => {
  const response = await instance.get(`/users/${username}/repos`);
  return response.data;
};