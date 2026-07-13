/**
 * Class Name Utility
 * Combines classNames with priority and removes undefined values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((cls) => typeof cls === 'string' && cls.length > 0)
    .join(' ')
}
