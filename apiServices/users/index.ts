import { requests } from '@/utils/requests';
import { UpdateUserDto, User } from './interface';

const usersService = {
  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
    accessToken: string,
  ) {
    const res = await requests.patch<User>('/users/' + id, updateUserDto, {
      headers: { Authorization: accessToken },
    });
    return res.data;
  },

  async getUserBySlug(slug: string) {
    const res = await requests.get<User>('/users/' + slug);
    return res.data;
  },
};

export default usersService;
