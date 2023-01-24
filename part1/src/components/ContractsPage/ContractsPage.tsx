import searchIcon from "../../assets/SearchIcon.svg";
import ContractCard from "../ContractCard/ContractCard";
import s from "./ContractsPage.module.css";
import { useGetContractsQuery } from "../../app/api";
import { useState } from "react";

export default function ContractsPage() {
  const { data, error, isLoading } = useGetContractsQuery();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredContracts = data?.length
    ? data.filter((contract) =>
        searchQuery.length >= 2
          ? contract.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contract.address.toLowerCase().includes(searchQuery.toLowerCase())
          : contract
      )
    : null;

  if (error) {
    console.error("error", error);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={s.contractsContainer}>
      <h1 className={s.contractsHeader}>Contracts</h1>
      <div className={s.contractsBody}>
        <div className={s.contractsInput_container}>
          <input
            className={s.contactsInput}
            value={searchQuery}
            name="search"
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search Customer"
          />
          <img src={searchIcon} className={s.contractsInput_icon} alt="Search icon" />
        </div>
        <div className={s.contractsBody_items}>
          {filteredContracts?.length
            ? filteredContracts.map((contract) => (
                <ContractCard key={contract.projectId} contract={contract} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
