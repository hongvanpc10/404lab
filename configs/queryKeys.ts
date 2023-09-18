import { Params } from '@/apiServices';

const queryKeys = {
  auth: ['auth'],
  tags: ['tags'],
  blogDetail: (slug: string) => ['blogDetail', slug],
  blogs: (params?: Params) => ['blogs', params],
  blogsByTag: (tag: string, params?: Params) => ['blogsByTag', tag, params],
  blogsByUser: (user: string, params?: Params) => ['blogsByUser', user, params],
  user: (slug: string) => ['user', slug],
};

export default queryKeys;
