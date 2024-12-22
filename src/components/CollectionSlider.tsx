

import { useState, useEffect, useMemo } from "react";

const CollectionSlider = () => {
	const images = useMemo(
		() => [
			"/src/assets/hanger_bg_1.png",
			"/src/assets/hanger_bg_5.png",
			"/src/assets/hanger_bg_3.png",
			"/src/assets/hanger_bg_4.png",
			"/src/assets/hanger_bg_6.png",
			"/src/assets/hanger_bg_7.png",
			"/src/assets/hanger_bg_2.png",
		],
		[]
	);

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 2000);

		return () => clearInterval(interval);
	}, [images.length]);

	const transformStyle = useMemo(() => {
		return { transform: `translateX(-${(currentIndex * 100) / 5}%)` };
	}, [currentIndex]);

	return (
		<div className="slider-container overflow-hidden w-full h-[100px] sm:h-[400px] mt-20 mb-20">
			<div
				className="slider flex transition-all duration-1000"
				style={transformStyle}
			>
				{images.concat(images.slice(0, 5)).map((image, index) => (
					<div key={index} className="w-[20%] h-full flex-shrink-0">
						<img
							src={image}
							alt={`Item ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);

};

export default CollectionSlider;
