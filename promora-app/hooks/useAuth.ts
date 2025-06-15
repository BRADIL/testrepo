import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const signIn = (email: string, password: string) => {
    // TODO: integrate auth provider
    setUser({ email });
  };
  const signOut = () => setUser(null);
  return { user, signIn, signOut };
};
