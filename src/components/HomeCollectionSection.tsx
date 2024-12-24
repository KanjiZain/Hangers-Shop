import CollectionSlider from './CollectionSlider';

const HomeCollectionSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-4 py-6 mt-20 text-center">
        <h2 className="text-5xl font-semibold text-black mb-3">HANGERS</h2>
        <p className="text-lg text-gray-700 font-extralight w-[87%]">
          In 1992, Nisar Hangers revolutionized the industry by creating the
          first plastic hanger, and we have continued to innovate ever since.
          Today, Nisar Hangers stands as the global leader in hanger
          manufacturing. Our offerings include plastic hangers designed for
          circular processes, eco-friendly paper-based and wooden hangers for
          those seeking plastic-free solutions, and premium display hangers
          tailored for the world’s most prestigious brands. With rigorous
          quality testing and a presence across six continents, Nisar Hangers is
          dedicated to delivering products that meet the highest standards of
          excellence.
        </p>
      </div>
      <CollectionSlider />
    </div>
  );
};
export default HomeCollectionSection;
