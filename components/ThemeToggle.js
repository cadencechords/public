import SunIcon from "@heroicons/react/outline/SunIcon";
import MoonIcon from "@heroicons/react/outline/MoonIcon";

export default function ThemeToggle({ darkThemeOn, onToggle }) {
	return (
		<button
			className={
				`outline-none focus:outline-none rounded-md fixed top-3 right-3 ` +
				` hover:bg-gray-100 focus:bg-gray-100 transition-colors p-1` +
				` dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:bg-gray-800`
			}
			onClick={onToggle}
		>
			{darkThemeOn ? (
				<MoonIcon className="w-6 text-gray-50" />
			) : (
				<SunIcon className="w-6 text-blue-800" />
			)}
		</button>
	);
}
