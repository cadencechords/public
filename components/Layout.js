import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
	const [darkThemeOn, setDarkThemeOn] = useState(() => {
		if (typeof window !== "undefined") {
			let isOn = localStorage.getItem("darkThemeOn") === "true";
			if (isOn) {
				document.body.style.background = "#0f0f0f";
			}
			return isOn;
		} else {
			return false;
		}
	});

	const handleToggleDarkTheme = () => {
		setDarkThemeOn((isCurrentlyOn) => {
			if (typeof window !== "undefined") {
				localStorage.setItem("darkThemeOn", !isCurrentlyOn);
			}

			document.body.style.background = !isCurrentlyOn ? "#0f0f0f" : "#fafafa";

			return !isCurrentlyOn;
		});
	};

	return (
		<>
			<div className={` ${darkThemeOn ? "dark" : ""}`}>
				<ThemeToggle onToggle={handleToggleDarkTheme} darkThemeOn={darkThemeOn} />
				<main className="transition-colors text-black dark:text-white">
					<div>{children}</div>
				</main>
			</div>
		</>
	);
}
