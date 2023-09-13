import authService from '@/apiServices/auth';
import { User } from '@/apiServices/users/interface';
import queryKeys from '@/configs/queryKeys';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function useAuth() {
  const [isSignedIn, setIsSignIn] = useState(false);

  useEffect(() => {
    setIsSignIn(JSON.parse(localStorage.getItem('isSignIn') || 'false'));
  }, []);

  const { data, refetch } = useQuery(queryKeys.auth, authService.refreshToken, {
    enabled: isSignedIn,
  });

  const queryClient = useQueryClient();

  function setAuth(auth: typeof data | null) {
    queryClient.setQueryData(queryKeys.auth, auth === null ? {} : auth);
  }

  function setUser(user: User) {
    queryClient.setQueryData<typeof data>(
      queryKeys.auth,
      (oldData) => oldData && { ...oldData, user },
    );
  }

  return {
    ...data,
    refetch,
    setAuth,
    setUser,
    isSignedIn: data?.user && data.accessToken,
  };
}
