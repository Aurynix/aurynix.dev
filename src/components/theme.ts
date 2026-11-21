// Shared by the <head> script (server) and ThemeToggle (client).

export const THEME_KEY = "theme";
export const DARK_QUERY = "(prefers-color-scheme: dark)";

/**
 * Runs in <head> before the page paints, so there is no flash of the wrong theme:
 * a saved "light"/"dark" choice wins, otherwise the device setting decides.
 * Keep it in sync with applyMode() in ThemeToggle.tsx.
 */
export const themeScript = `(function(){var d=document.documentElement;try{var m=localStorage.getItem("${THEME_KEY}");d.dataset.theme=m==="dark"||(m!=="light"&&matchMedia("${DARK_QUERY}").matches)?"dark":"light"}catch(e){d.dataset.theme="light"}})()`;
