import { usePathname, useRouter } from 'next/navigation';
import useAuth from './useAuth';
import routes from '@/configs/routes';
import { useEffect } from 'react';

export default function useProtectedRoute() {
  const router = useRouter();
  const pathname = usePathname();

  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) {
      router.push(routes.login + '?continue=' + pathname);
    }
  }, [isSignedIn]);
}
