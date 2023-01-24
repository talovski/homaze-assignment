import { ReactNode } from "react";
import s from './RoomLabel.module.css';
export default function RoomLabel({ children }: { children: ReactNode }) {
  return <div className={s.roomLabel}>{children}</div>;
}
