import {ProductItem, ShopBanner} from '../components';
import {products} from '../data/db.ts';

const Shop = () => {
  interface Product {
    id: string;
    image: string;
    title: string;
    subText: string;
  }

  const typedProducts: Product[] = products;

  return (
    <div className="max-w-screen-2xl mx-auto pt-5">
      <ShopBanner />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 pt-5 sm:pt-0">
        {typedProducts.map(product => (
          <ProductItem
            key={product.id}
            image={product.image}
            title={product.title}
            subText={product.subText}
          />
        ))}
      </div>
    </div>
  );
};
export default Shop;
