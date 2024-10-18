import { galleryData } from "../data";

export function getGallery() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(galleryData), 500);
  });
}
