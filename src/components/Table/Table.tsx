import { useEffect, useState, type FC } from "react";
import { Button, Table as TableUI, type TableProps } from "antd";
import { columns } from "./settings";
import { ArrowsClockwise, PlusCircle } from "../shared/icons";
import type { OrdersTableData, OrdersTableProps } from "./type";
import styles from "./table.module.scss";
import "./table.ant.scss";
import CaretLeft from "../shared/icons/CaretLeft";
import CaretRight from "../shared/icons/CarrentRight";
import { useGetProductsQuery } from "../../store/services/api/products";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

const Table: FC<OrdersTableProps> = (props) => {
  const { data } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { data: ordersData, isLoading } = useGetProductsQuery();

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<OrdersTableData> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.titleWrapper}>
        <h4>Все товары</h4>
        <div className={styles.buttons}>
          <Button type="default">
            <ArrowsClockwise />
          </Button>
          <Button type="primary">
            <PlusCircle />
            <span>Добавить</span>
          </Button>
        </div>
      </div>
      <TableUI<OrdersTableData>
        className={"orderTable"}
        rowKey={"id"}
        rowSelection={rowSelection}
        columns={columns}
        // dataSource={data}
        dataSource={ordersData?.products}
        loading={isLoading}
        pagination={{
          pageSize: 20,
          itemRender: (_, type, originalElement) => {
            if (type === "prev") {
              return (
                <button className="customTableArrow">
                  <CaretLeft />
                </button>
              );
            }

            if (type === "next") {
              return (
                <button className="customTableArrow">
                  <CaretRight />
                </button>
              );
            }
            return originalElement;
          },
          showTotal: (total, range) => (
            <>
              <div className="rowCounts">
                Показано{" "}
                <span className="accentInfo">{`${range[0]}-${range[1]}`}</span>{" "}
                из <span className="accentInfo">{`${total}`}</span>
              </div>
              <div></div>
            </>
          ),
        }}
      />
    </div>
  );
};

export default Table;
