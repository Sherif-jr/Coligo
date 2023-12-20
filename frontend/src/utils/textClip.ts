const textClip = (text: string | undefined, chars: number): string => {
  if (text && text.length > chars) {
    return `${text.substring(0, chars)}...`;
  } else if (text && text.length <= chars) {
    return text;
  } else {
    return "";
  }
};
export default textClip;
