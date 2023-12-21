const dateTime = (date: Date | string) => {
  const dateObj = new Date(date);
  const dateString = dateObj.toLocaleDateString();
  const timeStrArr = dateObj.toLocaleTimeString().split("");
  timeStrArr.splice(timeStrArr.lastIndexOf(":"), 3);

  const timeNoSeconds = timeStrArr.join("");

  return `${dateString} - ${timeNoSeconds}`;
};
export default dateTime;
