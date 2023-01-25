import RoomLabel from "../RoomLabel/RoomLabel";
import s from "./ContractCard.module.css";
import ProgressLabel from "../ProgressLabel/ProgressLabel";
import { IContract } from "../../types/contract";

export default function ContractCard({ contract }: { contract: IContract }) {
  const date = new Date(contract.updated_timestmp).toLocaleDateString("en-US").replaceAll("/", ".");
  const currency = contract.totalProject.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={s.cardContainer}>
      <div className={s.cardHeader}>
        {contract.customerName?.length ? (
          <h2 className={s.cardHeader__name}>{contract.customerName}</h2>
        ) : (
          <h2 className={s.cardHeader__untitled}>Untitled</h2>
        )}
        <p className={s.cardHeader__id}>{contract.projectId}</p>
      </div>
      <div className={s.cardBody}>
        <p className={s.cardBody__address}>{contract.address}</p>
        <div className={s.cardBody__rooms}>
          {contract.rooms.map((room) => (
            <RoomLabel key={room.id}>{room.name}</RoomLabel>
          ))}
        </div>
        <div className={s.cardBody__status}>
          <div className={s.cardBody__status_item}>
            <p className={s.cardBody__status_header}>Last updated</p>
            <p className={s.cardBody__status_date}>{date}</p>
          </div>
          <div className={s.cardBody__status_item}>
            <p className={s.cardBody__status_header}>Price</p>
            <p className={s.cardBody__status_price}>{currency}</p>
          </div>
          <div className={s.cardBody__status_item}>
            <p className={s.cardBody__status_header}>Stage</p>
            <div className={s.cardBody__status_state}>
              <ProgressLabel status={contract.projectState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
