import productTypes from './products.types';

export const setProducts = (products) => {
    return {
        type: productTypes.SET_PRODUCTS,
        payload: products
    };
}

export const fetchProducts = () => {
    return {
        type: productTypes.FETCH_PRODUCTS
    };
}

export const fetchTotalProduct = () => {
    return {
        type: productTypes.FETCH_PRODUCT_TOTAL        
    };
}

export const setTotalProducts = (total) => {
    return {
        type: productTypes.SET_PRODUCT_TOTAL,
        payload: total
    };
}

export const fetchPaginateProducts = (snapshot, page, limit) => {
    return {
        type: productTypes.FETCH_PAGINATE_PRODUCT,
        payload: {snapshot, page, limit}
    };
}

export const setLoadingProduct = (flag) => {
    return {
        type: productTypes.SET_LOADING,
        payload: flag
    };
}