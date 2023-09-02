const routes = {
	home: '/',
	signup: '/signup',
	login: '/login',
	forum: 'https://forum.404lab.site',
	newBlog: '/new-blog',
	blogsByAuthor: (slug: string) => '/author/' + slug ,
}

export default routes
