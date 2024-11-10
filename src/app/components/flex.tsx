import type { PropsWithChildren } from 'react';

/** Элемент с иконкой. */
export function Flex({ className, children }: PropsWithChildren & { className?: string }) {
  return (
    <div className={`flex items-center ${className ?? ''}`}>
      {children}
    </div>
  );
}
