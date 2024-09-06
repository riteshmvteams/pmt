export const formatDate = (date: Date | string, withTime = true) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const optionsWithTime: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return new Date(date).toLocaleDateString(
    "en-US",
    withTime ? optionsWithTime : options
  );
};

export const formatDateWithWeekday = (date: Date | string, withTime = true) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
  };

  const optionsWithTime: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return new Date(date).toLocaleDateString(
    "en-US",
    withTime ? optionsWithTime : options
  );
};

export const trimText = (text: string, maxLength: number) => {
  return text?.length > maxLength ? `${text?.slice(0, maxLength)}...` : text;
};
