import type { FC } from 'react';

export const centerDecorator = (Story: FC) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
    }}
  >
    <Story />
  </div>
);
