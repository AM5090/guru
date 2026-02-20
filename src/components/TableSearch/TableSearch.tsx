import { Input } from "antd";
import type { FC } from "react";
import styles from "./tableSearch.module.scss";
import type { TableSearchProps } from "./types";
import { Search } from "../shared/icons";

const TableSearch: FC<TableSearchProps> = (props) => {
  const { title, className, value, changeValue, clickToSearch } = props;

  return (
    <div className={[styles.tableSearch, className].join(" ")}>
      <h3 className={styles.tableTitle}>{title}</h3>
      <Input
        name="search"
        placeholder=" Найти"
        className={styles.searchInput}
        prefix={
          <Search className={styles.searchButton} onClick={clickToSearch} />
        }
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      />
    </div>
  );
};

export default TableSearch;
