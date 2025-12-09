import Cookies from 'js-cookie'

// if (window.parent) {
//   console.log("Imported from:", window.parent.location.href);
// } else {
//   console.log("Run directly:", __filename);
// }

// --- User Identity Management ---

const fingerprint = async () => {
  const components = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory,
    timezone: new Date().getTimezoneOffset(),
    screen: {
      width: screen.width,
      height: screen.height,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth,
    },
    plugins: Array.from(navigator.plugins)
      .map((p) => p.name)
      .sort()
      .join(','),
    mimeTypes: Array.from(navigator.mimeTypes)
      .map((m) => m.type)
      .sort()
      .join(','),
    sessionStorage: !!window.sessionStorage,
    localStorage: !!window.localStorage,
    indexedDB: !!window.indexedDB,
  }

  // Add canvas fingerprint
  try {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const txt = 'i ❤️ gemini'
    ctx.textBaseline = 'top'
    ctx.font = "14px 'Arial'"
    ctx.textBaseline = 'alphabetic'
    ctx.fillStyle = '#f60'
    ctx.fillRect(125, 1, 62, 20)
    ctx.fillStyle = '#069'
    ctx.fillText(txt, 2, 15)
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)'
    ctx.fillText(txt, 4, 17)
    components.canvas = canvas.toDataURL()
  } catch (_error) {
    // Canvas fingerprinting may be blocked by browser extensions
    components.canvas = ''
  }

  const keys = Object.keys(components).sort()
  const values = keys.map((key) => {
    const value = components[key]
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value)
    }
    return value
  })

  const fingerpintString = values.join('---')
  const encoder = new TextEncoder()
  const data = encoder.encode(fingerpintString)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

const manageUserIdentity = async () => {
  const cookieName = 'user_fingerprint_id'
  const userId = Cookies.get(cookieName)

  if (userId) {
    console.log('Existing user ID found:', userId)
    return userId
  }

  const newUserId = await fingerprint()

  console.log('New user ID generated:', newUserId)
  // Store for 1 year (365 days)
  Cookies.set(cookieName, newUserId, { expires: 365, path: '/' })

  return newUserId
}

// Manage the user identity on page load.
manageUserIdentity()

// --- Theme and UI logic ---

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
console.log('                                                                         ')
console.log('░▒▓████████▓▒░▒▓██████▓▒░░▒▓███████▓▒░░▒▓█▓▒░      ░▒▓██████████████▓▒░  ')
console.log('   ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ')
console.log('   ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ')
console.log('   ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ')
console.log('   ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ')
console.log('   ░▒▓█▓▒░  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ')
console.log('   ░▒▓█▓▒░   ░▒▓██████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ ')
console.log('                                                                         ')
console.log('                                                                         ')
