// if (window.parent) {
//   console.log("Imported from:", window.parent.location.href);
// } else {
//   console.log("Run directly:", __filename);
// }

const html = document.querySelector('html')
const theme = localStorage.getItem('hs_theme') || 'auto'
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const useDarkMode = theme === 'dark' || (theme === 'auto' && systemPrefersDark)

if (useDarkMode) {
  html.classList.add('dark')
  html.classList.remove('light')
} else {
  html.classList.remove('dark')
  html.classList.add('light')
}

console.log(`Theme: ${useDarkMode ? 'dark' : 'light'}`)
