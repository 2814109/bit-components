import type { ReactNode } from 'react';

export type CartProps = {
  children?: ReactNode;
};

export function Cart({ children }: CartProps) {
  return (
    <div>
      {children}
    </div>
  );
}
