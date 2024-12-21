export const getAssetPath = (path: string): string => {
  return `${process.env.PUBLIC_URL}${path}`;
}; 