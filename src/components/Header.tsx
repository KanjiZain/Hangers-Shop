import { Link } from "react-router-dom";
import logo from "../assets/BG/BG_LOGO.png";

const Header = () => {
	return (
		<>
			<header
				className="max-w-screen-2xl flex flex-col bg-black-900 py-4 px-2 mx-auto max-sm:px-5 max-[400px]:px-3"
				style={{
					height: "150px", // you can adjust this if needed
				}}
			>
				<hr className="border-t-2 border-black w-[97%] mx-auto mb-1 mt-5" />

				<div className="flex flex-col sm:flex-row items-center justify-between w-full px-5 mb-5">
					<Link to="/">
						<img
							src={logo}
							alt="Nisar Hangers Logo"
							style={{ maxWidth: "16rem" }}
						/>
					</Link>

				
				</div>
			</header>
		</>
	);
};

export default Header;
