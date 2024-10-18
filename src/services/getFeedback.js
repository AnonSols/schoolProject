import { feedBackData } from "../data";

export function getFeedback() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(feedBackData);
    }, 500);
  });
}
