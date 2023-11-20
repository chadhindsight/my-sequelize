export const baddiesPhotoNames = [
  "jetski.avif",
  "natureTing.avif",
  "sumMore.avif",
  "canyon.avif",
  "sky.avif",
  "person-gray-photo-placeholder-woman-vector-23519845.jpg",
];

export const randomizeBaddie = () => {
  const picToShow = Math.floor(Math.random() * baddiesPhotoNames.length);
  return baddiesPhotoNames[picToShow];
};
