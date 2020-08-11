import React from "react";
import { Divider } from "antd";
import "./styles.scss";
import ListProduct from "../../../../components/ListProduct";
import Paginate from "../../../../components/Pagination";

const DailyProduct = (props) => {
  const { listProduct, isLoading } = props;

  return (
    <div className="daily">
      <div className="container">
        <Divider className="daily-title">Tất cả</Divider>
        <div className="daily-product">
          <ListProduct listProduct={listProduct} isLoading={isLoading} />
        </div>
        <Paginate {...props} />
      </div>
    </div>
  );
};

export default DailyProduct;
