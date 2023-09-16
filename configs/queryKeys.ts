const queryKeys = {
  auth: ['auth'],
  tags: ['tags'],
  blogDetail: (slug: string) => ['blogDetail', slug],
};

export default queryKeys;
