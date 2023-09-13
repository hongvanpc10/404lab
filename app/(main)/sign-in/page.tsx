'use client';

import { Error } from '@/apiServices';
import authService from '@/apiServices/auth';
import { SignInDto } from '@/apiServices/auth/interfaces';
import FormError from '@/components/formError';
import Input from '@/components/input';
import pattern from '@/configs/pattern';
import routes from '@/configs/routes';
import useAuth from '@/hooks/useAuth';
import useRestrictedRoute from '@/hooks/useRestrictedRoute';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function SignIn() {
  const searchParams = useSearchParams();

  const { setAuth } = useAuth();

  useRestrictedRoute();

  const {
    handleSubmit,
    formState: { errors },
    setError,
    register,
    setFocus,
  } = useForm<SignInDto>({
    defaultValues: { email: searchParams.get('email') || '' },
  });

  const { mutate } = useMutation(authService.signIn, {
    onSuccess(data) {
      setAuth(data);
      localStorage.setItem('isSignIn', 'true');
    },
    onError(error: AxiosError<Error>) {
      switch (error.response?.data.code) {
        case 1100:
          setError('email', { message: 'Email không tồn tại' });
          setFocus('email');
          break;

        case 1101:
          setError('password', { message: 'Mật khẩu không chính xác' });
          setFocus('password');
          break;

        default:
          break;
      }
    },
  });

  const onSubmit = handleSubmit((data) => mutate(data));

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-4 font-bold">Welcome back!</h1>
      <p className="text-[0.9375rem] text-gray-300 mb-10">
        Hãy đăng nhập để có được quyền lợi của thành viên
      </p>
      <form
        noValidate
        onSubmit={onSubmit}
        className="w-full max-w-md space-y-4"
      >
        <div>
          <Input
            placeholder="Nhập email của bạn"
            autoFocus
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
            })}
          />
          {errors.password?.message && (
            <FormError>{errors.password.message}</FormError>
          )}
        </div>

        <button className="!mt-10 transition hover:bg-emerald-600 py-4 w-full rounded-full text-white bg-emerald-500">
          Đăng nhập
        </button>
      </form>
      <p className="mt-6 text-center text-gray-300">
        Bạn chưa là thành viên?{' '}
        <Link href={routes.signup} className="text-emerald-500 ml-1">
          Đăng kí
        </Link>
      </p>
    </div>
  );
}
