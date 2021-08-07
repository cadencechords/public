import Loader from "react-loader-spinner";

export default function Button({ onClick, children, loading }) {
	return (
		<button
			onClick={loading ? null : onClick}
			className={
				`bg-blue-500 text-white rounded-md w-full p-2 outline-none` +
				` focus:outline-none focus:bg-blue-600 hover:bg-blue-600 transition-colors font-semibold flex justify-center` +
				` dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-700`
			}
		>
			{loading ? <Loader type="TailSpin" color="white" width={24} height={24} /> : children}
		</button>
	);
}
