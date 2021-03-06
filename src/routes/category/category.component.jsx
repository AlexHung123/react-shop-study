import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../context/categories.context';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  console.log(category);
  const { CategoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(CategoriesMap[category]);

  useEffect(() => {
    setProducts(CategoriesMap[category]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, CategoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
