import type { ReactNode } from 'react';

export type ApolloProviderProps = {
  children?: ReactNode;
};

export function ApolloProvider({ children }: ApolloProviderProps) {
  return (
    <div>
      {children}
    </div>
  );
}
