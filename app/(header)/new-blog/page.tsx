'use client';

import blogsService from '@/apiServices/blogs';
import { CreateBlogDto } from '@/apiServices/blogs/interfaces';
import tagsService from '@/apiServices/tags';
import { Tag } from '@/apiServices/tags/interfaces';
import Checkbox from '@/components/checkbox';
import FormError from '@/components/formError';
import Image from '@/components/image';
import Input from '@/components/input';
import MultipleSelect from '@/components/multipleSelect';
import TextEditor from '@/components/textEditor';
import Textarea from '@/components/textarea';
import queryKeys from '@/configs/queryKeys';
import routes from '@/configs/routes';
import useAuth from '@/hooks/useAuth';
import useProtectedRoute from '@/hooks/useProtectedRoute';
import uploadImage from '@/utils/uploadImage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewBlog() {
  const [imageType, setImageType] = useState(0);
  const [blogTags, setBlogTags] = useState<string[]>([]);
  const [thumbFile, setThumbFile] = useState<File>();
  const [content, setContent] = useState('');

  useProtectedRoute();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<CreateBlogDto>();

  const { data: tags } = useQuery(queryKeys.tags, tagsService.getAllTags);

  const { accessToken } = useAuth();

  const router = useRouter();

  const { mutate } = useMutation(
    (dto: CreateBlogDto) => blogsService.createBlog(dto, `${accessToken}`),
    {
      onSuccess({ slug }) {
        router.push(routes.blogDetail(slug));
      },
    },
  );

  const onSubmit = handleSubmit(async ({ title, description, thumb }) => {
    let isValid = true;

    if (blogTags.length === 0) {
      setError('tags', { message: 'Vui lòng chọn tag cho bài viết' });
      isValid = false;
    }

    if (!imageType && !thumbFile) {
      setError('thumb', {
        message: 'Vui lòng nhập ảnh thumbnail cho bài viết',
      });
      isValid = false;
    }

    if (content === '<p></p>') {
      setError('content', {
        message: 'Vui lòng nhập nội dung bài viết',
      });
      isValid = false;
    }

    if (isValid) {
      if (!imageType && thumbFile) {
        thumb = await uploadImage(thumbFile);
      }

      mutate({ title, description, thumb, content, tags: blogTags });
    }
  });

  return (
    <div className="flex flex-col items-center mx-auto max-w-5xl">
      <h1 className="text-3xl mb-4 font-bold">Tạo bài viết mới trên 404Lab</h1>
      <p className="text-[0.9375rem] text-gray-300 mb-10">
        Chia sẻ ý tưởng, kiến thức, kinh nghiệm của bạn cho mọi người
      </p>

      <form noValidate onSubmit={onSubmit} className="w-full space-y-10">
        <div>
          <label className="text-lg mb-2 inline-block">Tiêu đề</label>
          <Input
            placeholder="Nhập tiêu đề bài viết"
            autoFocus
            {...register('title', {
              required: 'Vui lòng nhập tiêu đề bài viết',
            })}
          />
          {errors.title?.message && (
            <FormError>{errors.title.message}</FormError>
          )}
        </div>

        <div>
          <label className="text-lg mb-2 inline-block">
            Mô tả
            <small className="text-gray-400 ml-1 text-sm">(Optional)</small>
          </label>
          <Textarea rows={4} placeholder="Nhập mô tả bài viết" />
        </div>

        {tags && (
          <div>
            <label className="text-lg mb-2 inline-block">Tag</label>

            <MultipleSelect
              options={tags.map((tag) => ({ label: tag.name, value: tag }))}
              placeholder="Chọn tag cho bài viết"
              onChange={(values: Tag[]) => {
                setBlogTags(values.map((value) => value._id));
                clearErrors('tags');
              }}
            />

            {errors.tags?.message && (
              <FormError>{errors.tags.message}</FormError>
            )}
          </div>
        )}

        <div>
          <div className="flex items-center mb-6">
            <label className="text-lg inline-block">Hình ảnh</label>
            <div className="flex items-center ml-10 text-gray-400 text-sm">
              <Checkbox
                value={0}
                name="imageType"
                checked={!imageType}
                onChange={() => {
                  setImageType(0);
                  clearErrors('thumb');
                }}
              />
              <span className="ml-2 mr-4">Tải lên</span>
              <Checkbox
                value={1}
                name="imageType"
                checked={imageType === 1}
                onChange={() => {
                  setImageType(1);
                  clearErrors('thumb');
                }}
              />
              <span className="ml-2">Url</span>
            </div>
          </div>

          {imageType ? (
            <div>
              <div className="flex">
                <Input
                  type="url"
                  autoFocus
                  placeholder="Nhập url hình ảnh thumbnail"
                  {...register('thumb', {
                    required: 'Vui lòng nhập url thumbnail bài viết',
                  })}
                />

                <button
                  type="button"
                  className="text-emerald-500 whitespace-nowrap py-2 px-4"
                >
                  Load
                </button>
              </div>

              {errors.thumb?.message && (
                <FormError>{errors.thumb.message}</FormError>
              )}
            </div>
          ) : (
            <>
              <input
                type="file"
                hidden
                id="thumbnail"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setThumbFile(e.target.files[0]);
                    clearErrors('thumb');
                  }
                }}
              />

              <label
                htmlFor="thumbnail"
                className="py-2 px-6 rounded-sm cursor-pointer bg-emerald-500"
              >
                Tải lên
              </label>

              {errors.thumb?.message && (
                <FormError className="!ml-0 !mt-6">
                  {errors.thumb.message}
                </FormError>
              )}

              {thumbFile && (
                <div className="max-w-lg">
                  <Image
                    alt=""
                    src={URL.createObjectURL(thumbFile)}
                    className="aspect-w-16 mt-6 aspect-h-9"
                  />
                </div>
              )}
            </>
          )}
        </div>

        <div>
          <label className="text-lg mb-2 inline-block">Nội dung</label>
          <TextEditor onChange={setContent} />

          {errors.content?.message && (
            <FormError className="!ml-0 !mt-4">
              {errors.content.message}
            </FormError>
          )}
        </div>

        <div className="flex justify-end !mt-14">
          <button className="px-8 py-3 rounded-sm transition hover:bg-emerald-600 bg-emerald-500">
            Đăng bài viết
          </button>
        </div>
      </form>
    </div>
  );
}
