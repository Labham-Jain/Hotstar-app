import React, {createContext, useState} from 'react';
import SERVER_API from '../../api';
import {AuthContextComponentProps, AuthContextProps} from './AuthContext';

export const AuthCtx = createContext<AuthContextProps>({
  state: 'loading',
  login: () => {},
});

const AuthContext = ({children}: AuthContextComponentProps) => {
  const [authState, setAuthState] =
    useState<AuthContextProps['state']>('loading');

  const login: AuthContextProps['login'] = ({
    phoneOrEmail = 'coding.labham@gmail.com',
    password = 'labham1234',
  }) => {
    return new Promise((resolve, reject) => {
      SERVER_API.post('login', JSON.stringify({phoneOrEmail, password}))
        .then(result => {
          setAuthState('authenticated');
          resolve(result.data);
        })
        .catch(error => reject(error.message));
    });
  };

  const values: AuthContextProps = {
    state: authState,
    login,
  };

  return <AuthCtx.Provider value={values}>{children}</AuthCtx.Provider>;
};

export default AuthContext;
