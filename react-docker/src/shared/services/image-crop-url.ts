function getCroppedImageUrl(url: string): string {
  if (url == null) return ''
  // Find media/games, replace it with media/crop/600/400/games
  
  const splitingIndex = url.indexOf("games/")

  const urlStart = url.slice(0, splitingIndex)
  const cropString = "crop/600/400/"
  const urlEnd = url.slice(splitingIndex)

  return urlStart + cropString + urlEnd
}

export default getCroppedImageUrl
