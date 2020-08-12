import React, { useEffect, useState } from "react";
import DailyProduct from "./components/DailyProduct";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTotalProduct,
  fetchPaginateProducts,
  setLoadingProduct,
} from "../../redux/Products/products.actions";

const DailyDiscoverContainer = () => {
  const totalProduct = useSelector((state) => state.product.total);
  const products = useSelector((state) => state.product.listProducts);
  const loading = useSelector((state) => state.product.isLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(24);
  const [filters, setFilters] = useState({
    limit: 24,
    page: 1,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTotalProduct());
  }, []);

  useEffect(() => {
    const { limit, page } = filters;
    //const startAt = page*perPage - perPage;

    dispatch(fetchPaginateProducts(products, page, limit));
  }, [filters]);

  const handlePageChange = (pageNum) => {
    dispatch(setLoadingProduct(true));
    setFilters({
      ...filters,
      page: pageNum,
    });
  };

  return (
    <div className="dailypage">
      <DailyProduct
        currentPage={currentPage}
        itemPerPage={perPage}
        total={totalProduct}
        listProduct={products}
        onPageChange={handlePageChange}
        isLoading={loading}
      />
    </div>
  );
};

export default DailyDiscoverContainer;
