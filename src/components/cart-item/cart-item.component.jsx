import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="cart-details">
        <span className="name"></span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
