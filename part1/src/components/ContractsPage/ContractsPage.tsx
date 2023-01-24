import searchIcon from "../../assets/SearchIcon.svg";
import ContractCard from "../ContractCard/ContractCard";
import s from "./ContractsPage.module.css";
import { useEffect, useState } from "react";
import { IContract } from "../../types/contract";

async function fetchContracts(): Promise<IContract[]> {
  const res = await fetch("https://homaze-assignment.free.beeceptor.com/");
  return res.json();
}

export default function ContractsPage() {
  const [contracts, setContracts] = useState<IContract[]>([]);
  useEffect(() => {
    const get = async () => {
      const res = await fetchContracts();
      setContracts(res);
    };
    get().catch(err => console.log('err', err));
    // fetchContracts().catch((err) => console.log("err", err));
  }, []);

  return (
    <div className={s.contractsContainer}>
      <h1 className={s.contractsHeader}>Contracts</h1>
      <div className={s.contractsBody}>
        <div className={s.contractsInput_container}>
          <input className={s.contactsInput} placeholder="Search Customer" />
          <img src={searchIcon} className={s.contractsInput_icon} alt="Search icon" />
        </div>
        <div className={s.contractsBody_items}>
          {contracts.map((contract) => (
            <ContractCard key={contract.id} contract={contract} />
          ))}
        </div>
      </div>
    </div>
  );
}
