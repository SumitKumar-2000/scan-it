// components/PageWrapper.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const View = ({
  children,
  className,
}: Props) => {
  return (
    <main
      className={cn("w-full min-h-[92svh]", className)}
    >
      {children}
    </main>
  );
};

export default View;
