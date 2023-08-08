export const textLimit = (text: string, limit: number) => {
  if (text?.length > limit) {
    return `${text.substring(0, limit)}...`;
  } else {
    return text;
  }
};
