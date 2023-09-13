import { requests } from '@/utils/requests';
import { SignInDto, SignUpDto } from './interfaces';
import { User } from '../users/interface';

const authService = {
  async signUp(signUpDto: SignUpDto) {
    const res = await requests.post<{ email: string }>(
      '/auth/sign-up',
      signUpDto,
    );
    return res.data;
  },

  async signIn(signInDto: SignInDto) {
    const res = await requests.post<{ accessToken: string; user: User }>(
      '/auth/sign-in',
      signInDto,
    );
    return res.data;
  },

  async refreshToken() {
    const res = await requests.get<{ accessToken: string; user: User }>(
      '/auth/refresh-token',
    );
    return res.data;
  },

  async signOut() {
    await requests.get('/auth/sign-out');
  },
};

export default authService;
