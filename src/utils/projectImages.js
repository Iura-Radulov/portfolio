const imageContext = require.context('../images', true, /\.png$/);

const imagesByFolder = {};

imageContext.keys().forEach(key => {
  const match = key.match(/^\.\/([^/]+)\/(\d+)\.png$/);
  if (!match) return;

  const [, folder, num] = match;
  if (!imagesByFolder[folder]) imagesByFolder[folder] = [];
  imagesByFolder[folder].push({ num: Number(num), src: imageContext(key) });
});

Object.values(imagesByFolder).forEach(list => list.sort((a, b) => a.num - b.num));

export function getProjectImages(folder) {
  if (!folder || !imagesByFolder[folder]) return [];
  return imagesByFolder[folder].map(item => item.src);
}
