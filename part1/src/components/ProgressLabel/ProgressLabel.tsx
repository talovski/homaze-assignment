import { ReactNode } from "react";
import s from "./ProgressLabel.module.css";

interface Props {
  status: "In progress" | "Negotiation" | "Done" | "Cancelled";
}

export default function ProgressLabel({ status }: Props) {
  const className =
    status === "In progress"
      ? [s.inProgress]
      : status === "Done"
      ? [s.done]
      : status === "Negotiation"
      ? [s.negotiation]
      : [s.cancelled];

  return <div className={`${s.progressLabel} ${className}`}>{status}</div>;
}
