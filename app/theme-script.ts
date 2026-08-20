/**
 * Runs before first paint to apply the stored theme, so there is no flash of
 * the wrong palette. Kept as a string because it must execute synchronously in
 * <head>, ahead of React.
 *
 * Light is the default: dark is applied only when the visitor has explicitly
 * chosen it, so the OS colour-scheme preference is deliberately not consulted.
 */
export const THEME_SCRIPT = `(function(){try{
var d=document.documentElement;
if(localStorage.getItem('theme')==='dark'){d.classList.add('dark')}
if(localStorage.getItem('fontTheme')==='serif'){d.classList.add('theme-serif')}
}catch(e){}})();`;
