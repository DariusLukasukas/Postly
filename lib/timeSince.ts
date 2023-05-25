export function timeSince(date: Date): string {
  const now = new Date();
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)}s`; // Less than a minute: show seconds
  }
  if (secondsPast < 3600) {
    return `${Math.round(secondsPast / 60)}m`; // Less than an hour: show minutes
  }
  if (secondsPast < 86400) {
    return `${Math.round(secondsPast / 3600)}h`; // Less than a day: show hours
  }
  if (secondsPast < 2592000) {
    return `${Math.round(secondsPast / 86400)}d`; // Less than a month: show days
  }
  if (secondsPast < 31536000) {
    return `${Math.round(secondsPast / 2592000)}mo`; // Less than a year: show months
  }
  return `${Math.round(secondsPast / 31536000)}y`; // Over a year: show years
}
