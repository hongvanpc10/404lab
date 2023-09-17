import { Params } from '@/apiServices';

const queryKeys = {
  auth: ['auth'],
  tags: ['tags'],
  blogDetail: (slug: string) => ['blogDetail', slug],
  blogs: (params?: Params) => ['blogs', params],
  blogsByTag: (tag: string, params?: Params) => ['blogsByTag', tag, params],
};

export default queryKeys;
