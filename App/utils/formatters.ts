export function previewText(text: string, numChars: number) {
  /** Maybe slice some text and append '...' to indicate this has been done. */
  const previewIndicator = '...';
  if (text.length < numChars) {
    return text;
  } else {
    return text.slice(0, numChars - previewIndicator.length) + '...';
  }
}
