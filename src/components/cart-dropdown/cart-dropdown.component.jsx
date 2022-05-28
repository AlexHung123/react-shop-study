import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="card-items" />
      <Button>GO TO CHECK</Button>
    </div>
  );
};

export default CardDropdown;
