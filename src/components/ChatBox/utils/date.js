/**
 * Pretty print time
 * @param {string | Date} timestamp Either a date object or EPOCH timestamp
 * @return {string}
 */
export const time = timestamp => {
  const options = {
    hour: "numeric",
    minute: "numeric",
  }
  const dateFormatter = new Intl.DateTimeFormat("en-US", options)
  return dateFormatter
    .format(timestamp)
    .replace(/(AM|PM)/, "")
    .trim()
}

/**
 * Pretty print dates
 * @param {string | Date} timestamp Either a date object or EPOCH timestamp
 * @return {string}
 */
export const day = timestamp => {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  }
  const dateFormatter = new Intl.DateTimeFormat("en-US", options)
  const today = dateFormatter.format(Date.now())
  const formattedDate = dateFormatter.format(timestamp)
  return formattedDate === today ? "today" : formattedDate
}

export default { day, time }
