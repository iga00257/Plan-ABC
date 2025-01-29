import { breakpoints } from '../props/prop-def.js'

import type { Responsive, Breakpoint } from '../props/prop-def.js'

/**
 *
 * @param obj
 * @returns
 * example:
 * ```ts
 * const obj1 = { sm: '10px', md: '20px' }
 * const obj2 = { size: '10px' }
 * isResponsiveObject(obj1) // true
 * isResponsiveObject(obj2) // false
 * ```
 *
 */

export function isResponsiveObject<Value extends string>(
  obj: Responsive<Value | Omit<string, Value>> | undefined,
): obj is Record<Breakpoint, string> {
  return typeof obj === 'object' && Object.keys(obj).some((key) => (breakpoints as readonly string[]).includes(key))
}
