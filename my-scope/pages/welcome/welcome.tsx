import type { ReactNode } from 'react';

export type WelcomeProps = {
  children?: ReactNode;
};

export function Welcome({ children }: WelcomeProps) {
  return (
    <div>
      {children}
    </div>
  );
}
