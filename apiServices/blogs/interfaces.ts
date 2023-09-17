import { Tag } from '../tags/interfaces';
import { User } from '../users/interface';

export interface CreateBlogDto {
  title: string;
  description: string;
  thumb: string;
  content: string;
  tags: string[];
}

export interface Blog {
  title: string;
  description: string;
  thumb: string;
  content: string;
  tags: Tag[];
  author: User;
  createdAt: string;
  slug: string;
}
