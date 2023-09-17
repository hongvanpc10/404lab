import { requests } from '@/utils/requests';
import { Blog, CreateBlogDto } from './interfaces';
import { PaginatedData, Params } from '..';
import { Tag } from '../tags/interfaces';

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

  async getBlogs(params?: Params) {
    const res = await requests.get<PaginatedData<Blog>>('/blogs', { params });
    return res.data;
  },

  async getBlogsByTag(tag: string, params?: Params) {
    const res = await requests.get<PaginatedData<Blog, { tag: Tag }>>(
      '/blogs/tag/' + tag,
      { params },
    );
    return res.data;
  },
};

export default blogsService;
