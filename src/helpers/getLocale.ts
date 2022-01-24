export function getLocale() {
  if (typeof window !== "undefined") {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
  }
  return 'en'
}