import { requests } from '@/utils/requests';
import { Blog, CreateBlogDto } from './interfaces';

const blogsService = {
  async createBlog(createBlogDto: CreateBlogDto, accessToken: string) {
    const res = await requests.post<{ slug: string }>('/blogs', createBlogDto, {
      headers: { Authorization: accessToken },
    });
    return res.data;
  },

  async getBlogDetail(slug: string) {
    const res = await requests.get<Blog>('/blogs/' + slug);
    return res.data;
  },
};

export default blogsService;
