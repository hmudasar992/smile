export const formatDate = (date: Date) => {
  // Use fixed locale and timezone to ensure consistency
  return date.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
