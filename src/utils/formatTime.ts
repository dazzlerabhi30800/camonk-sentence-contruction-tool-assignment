export const formatTime = (time: number) => {
  if (isNaN(time)) return;
  const minutes = Math.floor(time / 60);
  const remainingTime = time % 60;
  const seconds = remainingTime >= 10 ? remainingTime : `0${remainingTime}`;
  return `${minutes}:${seconds}`;
};
