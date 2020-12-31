export function getFileExtension(filename: string) {
  const extensions = filename.split(".");
  return extensions[extensions.length - 1];
}
