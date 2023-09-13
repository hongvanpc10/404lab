export enum Role {
  Amin = 'admin',
  User = 'user',
}

export interface User {
  _id: string;
  email: string;
  name: string;
  avatar: string;
  roles: Role[];
  bio: string;
  facebook: string;
  github: string;
  linkedin: string;
  website: string;
}

export interface UpdateUserDto {
  name: string;
  bio: string;
  avatar: string;
  facebook: string;
  github: string;
  linkedin: string;
  website: string;
}
