/**
 * Plugin card icon (data URI) for the WorkBuddy XD Pool card.
 *
 * A neutral, dependency-free 24px “pool / droplet stack” glyph kept as an SVG
 * data URI so the browser half never needs an external asset. Three stacked
 * droplet outlines + an encompassing orbit mark read as “rotating accounts";
 * the line and fill colors stay inside the host’s accent family so the icon
 * sits naturally on the dark Plugin configuration surface.
 *
 * @module dsh-workbuddy-xdpool/client/icon
 */

export const POOL_PLUGIN_ICON =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">',
      // host brand accent on dark theme (#5686fe with a dim variant for the orbit)
      '<g fill="none" stroke="#5686fe" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">',
      // three stacked droplet outlines = account pool / rotation
      '<path d="M7 5.5C7 3.6 8.4 2.5 8.4 2.5S9.8 3.6 9.8 5.5A1.4 1.4 0 0 1 7 5.5Z" fill="#5686fe" fill-opacity=".28"/>',
      '<path d="M15 10.5C15 8.6 16.4 7.5 16.4 7.5S17.8 8.6 17.8 10.5a1.4 1.4 0 0 1-2.8 0Z" fill="#5686fe" fill-opacity=".28"/>',
      // encompassing orbit = pool boundary
      '<ellipse cx="12" cy="14.5" rx="5.6" ry="4.4" stroke-dasharray="2 2" stroke-opacity=".55"/>',
      '</g>',
      '</svg>',
    ].join(''),
  )