'use client';

import { Error } from '@/apiServices';
import authService from '@/apiServices/auth';
import { SignUpDto } from '@/apiServices/auth/interfaces';
import FormError from '@/components/formError';
import Input from '@/components/input';
import Loader from '@/components/loader';
import pattern from '@/configs/pattern';
import routes from '@/configs/routes';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    setFocus,
  } = useForm<SignUpDto>();

  const { mutate, isLoading } = useMutation(authService.signUp, {
    onSuccess({ email }) {
      router.push(routes.login + '?email=' + email);
    },
    onError(error: AxiosError<Error>) {
      if (error.response?.data.code === 1000) {
        setError('email', { message: 'Email đã tồn tại' });
        setFocus('email');
      }
    },
  });

  const onSubmit = handleSubmit((data) => mutate(data));

  return (
    <div className="flex flex-col items-center">
      {isLoading && <Loader />}

      <h1 className="text-3xl mb-4 font-bold">Đăng kí thành viên 404Lab</h1>
      <p className="text-[0.9375rem] text-gray-300 mb-10">
        200Lab - Chia sẻ kỹ thuật lập trình
      </p>
      <form
        noValidate
        onSubmit={onSubmit}
        className="w-full max-w-md space-y-4"
      >
        <div>
          <Input
            placeholder="Nhập tên của bạn"
            autoFocus
            {...register('name', { required: 'Vui lòng nhập tên của bạn' })}
          />

          {errors.name?.message && <FormError>{errors.name.message}</FormError>}
        </div>

        <div>
          <Input
            placeholder="Nhập email của bạn"
            type="email"
            {...register('email', {
              required: 'Vui lòng nhập email của bạn',
              pattern: {
                value: pattern.email,
                message: 'Email không hợp lệ',
              },
            })}
          />

          {errors.email?.message && (
            <FormError>{errors.email.message}</FormError>
          )}
        </div>

        <div>
          <Input
            placeholder="Nhập mật khẩu của bạn"
            type="password"
            {...register('password', {
              required: 'Vui lòng nhập mật khẩu của bạn',
              pattern: {
                value: pattern.strongPassword,
                message: 'Mật khẩu chưa đủ mạnh',
              },
            })}
          />

          {errors.password?.message && (
            <FormError>{errors.password.message}</FormError>
          )}
        </div>

        <button className="!mt-10 transition hover:bg-emerald-600 py-4 w-full rounded-full text-white bg-emerald-500">
          Đăng kí
        </button>
      </form>
      <p className="mt-6 text-center text-gray-300">
        Bạn đã đăng kí thành viên rồi?{' '}
        <Link href={routes.login} className="text-emerald-500 ml-1">
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
