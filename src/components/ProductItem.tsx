import { useState } from "react";

const ProductItem = ({ image, title }: { image: string; title: string }) => {
	const [isPressed, setIsPressed] = useState(false);

	const handlePressStart = () => {
		setIsPressed(true);
	};

	const handlePressEnd = () => {
		setIsPressed(false);
	};

	return (
		<div
			className={`bg-gray-50 rounded-lg shadow-2xl p-6 m-5 flex flex-col justify-center transform transition-all duration-300 
        ${isPressed ? "scale-95 shadow-lg" : "scale-100 shadow-2xl" } 
        hover:scale-105 hover:shadow-2xl 
        w-[350px] 1max-w-full mx-auto sm:w-[300px] sm:p-4  sm:m-10`}
			onMouseDown={handlePressStart}
			onMouseUp={handlePressEnd}
			onTouchStart={handlePressStart}
			onTouchEnd={handlePressEnd}
		>
			<img
				src={`${image}`}
				alt="Product"
				className="w-full h-[220px] object-cover object-center mx-auto rounded-lg"
			/>
			<p className="text-black text-2xl font-light text-center mt-4 sm:text-xl">
				{title}
			</p>
		</div>
	);
};

export default ProductItem;
