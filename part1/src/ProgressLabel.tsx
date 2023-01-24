import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  status: "inProgress" | "negotiation" | "done" | "cancelled";
}

export default function ProgressLabel({ children, status = "inProgress" }: Props) {
  return <div className={`progressLabel progressLabel__${status}`}>
    {children}
  </div>
}
