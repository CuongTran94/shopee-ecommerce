import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import './styles.scss';

const Paginate = (props) => {
    const { total, currentPage, itemPerPage, onPageChange } = props;
    const onChange = (pageNumber) => {
        onPageChange(pageNumber);
    };
    
    return (
        <div className="paginate">
            {!total ? null : <Pagination 
                pageSize={itemPerPage}
                defaultCurrent={currentPage} 
                total={total}
                pageSizeOptions={[itemPerPage]}
                onChange={onChange} 
            />}
        </div>        
    );
};

Paginate.propTypes = {
    total: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    itemPerPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Paginate;