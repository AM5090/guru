export interface OrdersTableData {
  id: React.Key;
  title: string;
  brand?: string;
  price: number;
  rating: number;
  sku: string;
  category: string;
}

export interface OrdersTableProps {
  data: OrdersTableData[] | undefined;
  isLoading: boolean;
  refetchData: () => void;
}
