import { useEffect, useMemo, useState } from "react";
import { Table } from "../../components/Table";
import { TableSearch } from "../../components/TableSearch";
import {
  useGetProductsQuery,
  useLazySearchProductsQuery,
} from "../../store/services/api/products";
import styles from "./ordersTable.module.scss";
import { useDebounce } from "../../hooks/useDebouns";

const OrdersTable = () => {
  const { data: ordersData, isLoading, refetch } = useGetProductsQuery();
  const [trigger, { data: searchData }] = useLazySearchProductsQuery();

  const [search, setSearch] = useState<string>("");

  const debounceSearch = useDebounce(search, 600);

  const tableData = useMemo(
    () =>
      searchData && searchData?.products?.length > 0
        ? searchData?.products
        : ordersData?.products,
    [ordersData, searchData]
  );

  useEffect(() => {
    if (debounceSearch.trim()) {
      trigger({ querySearch: debounceSearch });
    }
  }, [debounceSearch, trigger]);

  return (
    <>
      <TableSearch
        value={search}
        changeValue={setSearch}
        clickToSearch={() => trigger({ querySearch: debounceSearch.trim() })}
        title="Товары"
        className={styles.tableHeader}
      />
      <Table data={tableData} isLoading={isLoading} refetchData={refetch} />
    </>
  );
};

export default OrdersTable;
