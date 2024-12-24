import { useState } from "react";

const ProductItem = ({
	image,
	title,
	subText,
}: {
	image: string;
	title: string;
	subText: string;
}) => {
	const [isPressed, setIsPressed] = useState(false);

	const handlePressStart = () => {
		setIsPressed(true);
	};

	const handlePressEnd = () => {
		setIsPressed(false);
	};

	return (
		<div
			className={`bg-gray-100 rounded-2xl p-5 m-2 flex flex-col justify-center transform transition-all duration-300 
        ${isPressed ? "scale-95 drop-shadow-2xl" : "scale-100 drop-shadow-lg"} 
        hover:scale-105 hover:drop-shadow-xl 
        w-[350px] max-w-full mx-auto sm:w-[340px] sm:p-4 sm:m-5`}
			onMouseDown={handlePressStart}
			onMouseUp={handlePressEnd}
			onTouchStart={handlePressStart}
			onTouchEnd={handlePressEnd}
		>
			<img
				src={`${image}`}
				alt="Product"
				className="w-full h-[200px] object-cover object-center mx-auto rounded-lg"
			/>
			<p className="text-black text-2xl font-light text-center mt-4 sm:text-xl">
				{title}
			</p>
			<p className="text-black text-2xl font-light text-center mt-4 sm:text-xl">
				{subText}
			</p>
		</div>
	);
};

export default ProductItem;
