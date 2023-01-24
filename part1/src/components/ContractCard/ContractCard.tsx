import RoomLabel from "../RoomLabel/RoomLabel";
import s from "./ContractCard.module.css";
import ProgressLabel from "../ProgressLabel/ProgressLabel";

export default function ContractCard() {
  return (
    <div className={s.cardContainer}>
      <div className={s.cardHeader}>
        <h2 className={s.cardHeader__name}>Billy bob Billy bob Billy bob Billy bob Billy bob</h2>
        <p className={s.cardHeader__id}>ID: MA-P-10006</p>
      </div>
      <div className={s.cardBody}>
        <p className={s.cardBody__address}>249 Bowery, New York, NY 10002, USA</p>
        <div className={s.cardBody__rooms}>
          <RoomLabel>Kitchen</RoomLabel>
          <RoomLabel>Dining</RoomLabel>
          <RoomLabel>Bathroom</RoomLabel>
        </div>
        <div className={s.cardBody__status}>
          <div className={s.cardBody__status_item}>
            <p className={s.cardBody__status_header}>Last updated</p>
            <p className={s.cardBody__status_date}>12.14.2022</p>
          </div>
          <div className={s.cardBody__status_item}>
            <p className={s.cardBody__status_header}>Price</p>
            <p className={s.cardBody__status_price}>12.14.2022</p>
          </div>
          <div className={s.cardBody__status_item}>
            <p className={s.cardBody__status_header}>Stage</p>
            <ProgressLabel status={"cancelled"} />
          </div>
        </div>
      </div>
    </div>
  );
}
