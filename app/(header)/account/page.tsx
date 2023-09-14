'use client';

import usersService from '@/apiServices/users';
import { UpdateUserDto } from '@/apiServices/users/interface';
import FormError from '@/components/formError';
import Image from '@/components/image';
import Input from '@/components/input';
import Loader from '@/components/loader';
import useAuth from '@/hooks/useAuth';
import useProtectedRoute from '@/hooks/useProtectedRoute';
import uploadImage from '@/utils/uploadImage';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Account() {
  const { user, accessToken, setUser } = useAuth();

  const [avatarFile, setAvatarFile] = useState<File>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUserDto>();

  useProtectedRoute();

  useEffect(() => {
    if (user) {
      reset({
        avatar: user?.avatar,
        bio: user?.bio,
        facebook: user?.facebook,
        linkedin: user?.linkedin,
        website: user?.website,
        github: user?.github,
        name: user?.name,
      });
    }
  }, [user, reset]);

  const { mutate, isLoading } = useMutation(
    (data: UpdateUserDto) =>
      usersService.updateUser(`${user?._id}`, data, `${accessToken}`),
    {
      onSuccess(user) {
        setUser(user);
      },
    },
  );

  const handleChangeAvatar: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    if (avatarFile) {
      const uploadedAvatar = await uploadImage(avatarFile);
      mutate({ ...data, avatar: uploadedAvatar });
    }

    mutate(data);
  });

  return (
    user && (
      <form
        onSubmit={onSubmit}
        noValidate
        className="grid grid-cols-12 max-w-5xl mx-auto gap-10"
      >
        {isLoading && <Loader />}

        <div className="col-span-4">
          <div className="bg-gray-900">
            <div className="relative">
              <Image
                alt=""
                src={avatarFile ? URL.createObjectURL(avatarFile) : user.avatar}
                className="w-full aspect-w-16 aspect-h-12"
              />

              <input
                hidden
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleChangeAvatar}
              />
              <label
                htmlFor="avatar"
                className="absolute cursor-pointer bottom-4 transition hover:bg-gray-900/60 right-4 flex items-center justify-center rounded-full w-10 h-10 bg-gray-900/50 text-white"
              >
                <i className="ri-image-edit-line ri-lg"></i>
              </label>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{user?.name}</h2>

              <p className="text-gray-300 mt-4">{user?.bio}</p>

              <div className="text-gray-400 mt-4">
                <span>Follow me:</span>
                <div className="flex items-center space-x-2 ml-3">
                  {user?.facebook && (
                    <Link
                      target="_blank"
                      href={user?.facebook}
                      className="transition hover:text-emerald-500 text-lg"
                    >
                      <i className="ri-facebook-circle-fill"></i>
                    </Link>
                  )}
                  {user?.linkedin && (
                    <Link
                      target="_blank"
                      href={user?.linkedin}
                      className="transition hover:text-emerald-500 text-lg"
                    >
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                  )}
                  {user?.github && (
                    <Link
                      target="_blank"
                      href={user?.github}
                      className="transition hover:text-emerald-500 text-lg"
                    >
                      <i className="ri-github-fill"></i>
                    </Link>
                  )}
                  {user?.website && (
                    <Link
                      target="_blank"
                      href={user?.website}
                      className="transition hover:text-emerald-500 text-lg"
                    >
                      <i className="ri-earth-fill"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          <div className="space-y-6">
            <div>
              <label className="text-lg mb-2 inline-block">Tên hiển thị</label>
              <Input
                placeholder="Nhập tên hiển thị của bạn"
                {...register('name', {
                  required: 'Tên hiển thị không được để trống',
                })}
              />
              {errors.name?.message && (
                <FormError>{errors.name.message}</FormError>
              )}
            </div>
            <div>
              <label className="text-lg mb-2 inline-block">Giới thiệu</label>
              <Input
                placeholder="Nhập phần giới thiệu của bạn"
                {...register('bio')}
              />
            </div>
            <div>
              <label className="text-lg mb-2 inline-block">Liên kết</label>
              <div className="space-y-3">
                <Input
                  placeholder="Nhập url Facebook của bạn"
                  {...register('facebook')}
                />
                <Input
                  placeholder="Nhập url website của bạn"
                  {...register('website')}
                />
                <Input
                  placeholder="Nhập url Github của bạn"
                  {...register('github')}
                />
                <Input
                  placeholder="Nhập url Linkedin của bạn"
                  {...register('linkedin')}
                />
              </div>
            </div>

            <div className="flex justify-end !mt-10 mr-4 rounded-sm">
              <button
                className={`py-3 px-8 bg-emerald-500 transition hover:bg-emerald-600 text-white`}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  );
}
