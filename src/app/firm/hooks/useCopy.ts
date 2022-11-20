import { RefObject } from 'react';

export const useCopy = (ref: RefObject<any>) => {
  let range = document.createRange();

  if (ref.current) {
    range.selectNodeContents(ref.current); // ok
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
    document.execCommand('copy');
    window.getSelection()?.removeAllRanges();
  }
};
