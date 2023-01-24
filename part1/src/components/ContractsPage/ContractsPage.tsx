import searchIcon from "../../assets/SearchIcon.svg";
import ContractCard from "../ContractCard/ContractCard";
import s from "./ContractsPage.module.css";

export default function ContractsPage() {
  return (
    <div className={s.contractsContainer}>
      <h1 className={s.contractsHeader}>Contracts</h1>
      <div className={s.contractsBody}>
        <div className={s.contractsInput_container}>
          <input className={s.contactsInput} placeholder="Search Customer" />
          <img src={searchIcon} className={s.contractsInput_icon} alt="Search icon" />
        </div>
        <div className={s.contractsBody_items}>
          <ContractCard />
          <ContractCard />
          <ContractCard />
          <ContractCard />
          <ContractCard />
        </div>
      </div>
    </div>
  );
}
