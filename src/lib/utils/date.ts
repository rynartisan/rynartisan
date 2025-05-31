export function getLastModifiedDate(): string {
  try {
    const raw = typeof __LAST_UPDATED__ !== 'undefined' ? __LAST_UPDATED__ : '';
    const parsed = new Date(raw);

    if (isNaN(parsed.getTime())) return 'Unknown';

    return parsed.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return 'Unknown';
  }
}
