export async function urlToFile(url: string, filename: string): Promise<File> {
  const response = await fetch(url);
  const blob = await response.blob();
  // Try to get the extension from the url, fallback to .jpg
  const ext = url.split(".").pop()?.split("?")[0] || "jpg";
  const mimeType = blob.type || `image/${ext}`;
  return new File([blob], filename, { type: mimeType });
}
