import SocialMediaFooter from "./SocialMediaFooter";

const Footer = () => {
	return (
		<>
			<footer className="w-full mx-auto px-5 max-[400px]:px-3 min-h-screen sm:min-h-full sm:h-[20]">
				<SocialMediaFooter />
				<div className="mt-10 border-t pt-6">
					<div className="flex flex-col items-center text-center">
						<div className="flex items-center justify-center gap-2 mb-2">
							<h2 className="text-3xl font-light max-sm:text-3xl">
								NISAR HANGERS
							</h2>
							<span className="text-xs text-gray-600">Since 1992</span>
						</div>
						<p className="text-xs text-gray-600">All rights reserved ©2024</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
