export const copyText = (text: string) => {
  if (navigator.clipboard) {
    try {
      void navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  if (typeof document.execCommand === 'function') {
    try {
      const input = document.createElement('textarea');
      input.setAttribute('readonly', 'readonly');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      if (document.execCommand('copy')) {
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        document.execCommand('copy');
      }
      document.body.removeChild(input);
    } catch (error) {
      console.log(error);
    }
  }
};
