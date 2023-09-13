import routes from '@/configs/routes';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuth from './useAuth';
import { useEffect } from 'react';

export default function useRestrictedRoute() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.push(searchParams.get('continue') || routes.home);
    }
  }, [isSignedIn]);
}
