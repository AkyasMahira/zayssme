import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const MatchaText = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <span className={cn("text-matcha", className)}>{children}</span>
  );
};

export default MatchaText;