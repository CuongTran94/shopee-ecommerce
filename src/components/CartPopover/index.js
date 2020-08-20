import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCart, deleteItem } from '../../redux/Cart/cart.actions';
import columns from './columns';
import {
  BottomCart,
  StyleTable,
  CartButton,
  Container
} from './styles/ComponentCart';

const CartPopover = props => {
  const { currentUser = {}, products = {}, fetchCart, deleteItem } = props;

  useEffect(() => {
    if (currentUser.id !== undefined) {
      fetchCart(currentUser.id);
    }
  }, [currentUser]);

  const data = products.map(product => {
    return {
      key: product.pro_id,
      pro: {
        name: product.pro_name,
        image: product.pro_avatar
      },

      action: {
        price: product.pro_price,
        quantity: product.pro_quantity,
        onDelete: () => deleteItem(product.pro_id)
      }
    };
  });

  return (
    <Container>
      <StyleTable pagination={false} columns={columns()} dataSource={data} />
      <BottomCart>
        <Link to="/cart">
          <CartButton>Xem giỏ hàng</CartButton>
        </Link>
      </BottomCart>
    </Container>
  );
};

CartPopover.propTypes = {
  products: PropTypes.array,
  currentUser: PropTypes.object,
  fetchCart: PropTypes.func,
  deleteItem: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser || {},
    products: state.cart.products || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCart: userID => dispatch(fetchCart(userID)),
    deleteItem: userID => dispatch(deleteItem(userID))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartPopover);
