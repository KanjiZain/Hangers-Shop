
import { ProductItem, ShopBanner } from "../components";


const Shop = () => {

const products = [
	{
		id: "1",
		image: "/src/assets/hanger_bg_1.png",
		title: "Classic White Shirt",
		category: "Men's Clothing",
		price: 49.99,
	},
	{
		id: "2",
		image: "/src/assets/hanger_bg_5.png",
		title: "Elegant Evening Dress",
		category: "Women's Clothing",
		price: 129.99,
	},
	{
		id: "3",
		image: "/src/assets/hanger_bg_3.png",
		title: "Sports Running Shoes",
		category: "Footwear",
		price: 89.99,
	},
	{
		id: "4",
		image: "/src/assets/hanger_bg_4.png",
		title: "Leather Handbag",
		category: "Accessories",
		price: 199.99,
	},
	{
		id: "5",
		image: "/src/assets/hanger_bg_6.png",
		title: "Kids' Winter Jacket",
		category: "Kids' Wear",
		price: 69.99,
	},
	{
		id: "6",
		image: "/src/assets/hanger_bg_7.png",
		title: "Denim Jeans",
		category: "Men's Clothing",
		price: 59.99,
	},
	{
		id: "7",
		image: "/src/assets/hanger_bg_2.png",
		title: "Summer Hat",
		category: "Accessories",
		price: 29.99,
	},
	{
		id: "5",
		image: "/src/assets/hanger_bg_6.png",
		title: "Kids' Winter Jacket",
		category: "Kids' Wear",
		price: 69.99,
	},
];



  return (
		<div className="max-w-screen-2xl mx-auto pt-5">
			<ShopBanner />
			<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 pt-10">
				{products.map((product) => (
					<ProductItem
						key={product.id}
						image={product.image}
						title={product.title}
					/>
				))}
			</div>
		</div>
	);
};
export default Shop;
