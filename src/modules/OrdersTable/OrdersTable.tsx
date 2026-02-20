import { Table } from "../../components/Table";
import { useGetProductsQuery } from "../../store/services/api/products";

const OrdersTable = () => {
  const { data: ordersData, isLoading, refetch } = useGetProductsQuery();

  return (
    <Table
      data={ordersData?.products}
      isLoading={isLoading}
      refetchData={refetch}
    />
  );
};

export default OrdersTable;
