const routes = {
  home: '/',
  signup: '/sign-up',
  login: '/sign-in',
  forum: 'https://forum.404lab.site',
  newBlog: '/new-blog',
  blogsByAuthor: (slug: string) => '/author/' + slug,
  account: '/account',
};

export default routes;
