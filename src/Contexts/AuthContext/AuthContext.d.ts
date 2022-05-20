import React from 'react';

export interface UserDetails {
  name: string;
  email: string;
  phone?: string;
}

export interface AuthContextProps {
  state: 'loading' | 'authenticated' | 'unauthenticated';
  login: ({
    phoneOrEmail,
    password,
  }: {
    phoneOrEmail: string;
    password: string;
  }) => void;
}

export interface AuthContextComponentProps {
  children: React.ReactNode;
}
