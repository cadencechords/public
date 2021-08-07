import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
	const [darkThemeOn, setDarkThemeOn] = useState(() => {
		if (typeof window !== "undefined") {
			let isOn = localStorage.getItem("darkThemeOn") === "true";
			if (typeof document !== "undefined") {
				document.body.style.background = isOn ? "#0f0f0f" : "#fafafa";
				if (isOn) {
					let darkThemeElement = document.getElementById("dark-theme");
					darkThemeElement.classList.add("dark");
				}
			}
			return isOn;
		} else {
			if (typeof document !== "undefined") document.body.style.background = "#fafafa";
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
			<div className={` ${darkThemeOn ? "dark" : ""}`} id="dark-theme">
				<ThemeToggle onToggle={handleToggleDarkTheme} darkThemeOn={darkThemeOn} />
				<main className="transition-colors text-black dark:text-white">
					<div>{children}</div>
				</main>
			</div>
		</>
	);
}
