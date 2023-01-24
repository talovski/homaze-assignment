import { ReactNode } from "react";
import s from "./ProgressLabel.module.css";

interface Props {
  status: "inProgress" | "negotiation" | "done" | "cancelled";
}

export default function ProgressLabel({ status = "inProgress" }: Props) {
  const text =
    status === "inProgress"
      ? "In progress"
      : status === "done"
      ? "Done"
      : status === "negotiation"
      ? "Negotiation"
      : "Cancelled";

  return <div className={`${s.progressLabel} ${s[status]}`}>{text}</div>;
}
