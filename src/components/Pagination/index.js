import React from 'react';
import { Pagination } from 'antd';
import './styles.scss';

const Paginate = () => {
    const onChange = (pageNumber) => {
        console.log(pageNumber);
    }
    return (
        <div className="paginate">
            <Pagination 
                pageSize={24}
                defaultCurrent={1} 
                total={200}
                pageSizeOptions={[24]}
                onChange={onChange} 
            />
        </div>        
    );
};

export default Paginate;