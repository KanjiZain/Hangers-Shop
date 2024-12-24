import { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

const SubscriptionBox = () => {
	const [loading, setLoading] = useState(false);
	const emailInputRef = useRef<HTMLInputElement | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(() => {
			setLoading(false);

			if (emailInputRef.current) {
				emailInputRef.current.value = "";
			}

			toast.success("Subscribed! Enjoy ✨");
		}, 5000);
	};

	return (
		<div>
			<Toaster position="top-center" reverseOrder={true} />

			<div className="bg-gray-100 border border-gray-300 rounded-md w-[90%] p-6 max-w-5xl mx-auto text-center shadow-md mt-10 sm:mt-10">
				<h3 className="text-2xl font-semibold text-black mb-4">BE THE FIRST</h3>
				<p className="text-base text-gray-700 mb-6">
					New arrivals. Exclusive previews. First access to sales. Subscribe Now
				</p>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 items-center"
				>
					<input
						ref={emailInputRef}
						type="email"
						placeholder="Enter your email address"
						className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
						required
					/>
					<button
						type="submit"
						className={`w-full max-w-md py-2 rounded-md transition-all duration-300 ${
							loading
								? "bg-gray-400 text-gray-700 cursor-not-allowed"
								: "bg-black text-white hover:bg-gray-800"
						}`}
						disabled={loading}
					>
						{loading ? "Loading..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SubscriptionBox;
