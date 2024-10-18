import { stylesData } from "../data";

export function getStyles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stylesData);
    }, 500);
  });
}
