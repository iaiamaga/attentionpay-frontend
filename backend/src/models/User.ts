export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  phone?: string;
  avatar?: string;
  language: 'pt-BR' | 'en';
  twoFactorEnabled: boolean;
  biometricEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDTO {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

export interface UpdateUserDTO {
  name?: string;
  phone?: string;
  avatar?: string;
  language?: 'pt-BR' | 'en';
  twoFactorEnabled?: boolean;
  biometricEnabled?: boolean;
}