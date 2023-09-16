import { requests } from '@/utils/requests';
import { Tag } from './interfaces';

const tagsService = {
  async getAllTags() {
    const res = await requests.get<Tag[]>('/tags');
    return res.data;
  },
};

export default tagsService;
