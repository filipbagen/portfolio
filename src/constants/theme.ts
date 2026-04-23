/**
 * Design System Tokens
 *
 * Centralized design tokens for consistent styling across the application.
 * Use these semantic color names instead of hardcoded hex values.
 */

export const colors = {
  primary: '#251434',
  'primary-light': '#89236C',
  'primary-dark': '#E0BDFF',
  secondary: '#233989',
  'secondary-light': '#4A5FBA',
  'secondary-dark': '#5A7FFF',
  accent: '#E0BDFF',
  'accent-light': '#F0D7FF',
  'accent-dark': '#C89EEF',
} as const;

/**
 * Usage Guidelines:
 *
 * - primary: Main brand color, use for buttons, important UI elements
 *   - Light mode: #251434 (deep purple)
 *   - Dark mode: #E0BDFF (light purple)
 *
 * - secondary: Complementary color, use for borders, accents
 *   - Used in Experience section borders
 *
 * - accent: Highlight color, use for badges, subtle backgrounds
 *   - Badge backgrounds, hover states
 *
 * Border Radius Scale:
 * - rounded-md: Small elements (buttons, badges)
 * - rounded-xl: Medium cards
 * - rounded-3xl: Large cards, sections
 * - rounded-full: Circular elements (badges, avatars)
 *
 * Spacing Scale (use Tailwind's default):
 * - gap-1.5: Tight spacing (badges)
 * - gap-3: Small spacing
 * - gap-4: Medium spacing (card internal)
 * - gap-6: Large spacing
 * - gap-8: Section spacing
 */
