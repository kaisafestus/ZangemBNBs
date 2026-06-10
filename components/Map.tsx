export default function Map() {
  // Simple embed that does not require an API key. If you provide NEXT_PUBLIC_GOOGLE_MAPS_API_KEY we can switch to the Maps JS API for advanced features.
  const q = encodeURIComponent('Membley Star Heights Ruiru')
  const src = `https://www.google.com/maps?q=${q}&z=14&output=embed`

  return (
    <iframe src={src} width="100%" height="100%" loading="lazy" />
  )
}
