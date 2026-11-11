# Integration notes

The original page-flip2.0.7 browser bundle is unmodified. SOURCE.json records the npm tarball and verified SHA-512 integrity; the MIT license is included.

The yearbook uses one HTML renderer for the lifetime of the page. Pages use a fixed 480×800 coordinate system. The outer cover scales to the shell width and desktop viewport height; the UI pointer conversion maps screen coordinates back to those fixed page coordinates. Below 900px the engine uses a single page, otherwise two pages. Resize updates usePortrait, the fixed book width, update() and turnToPage(). This deliberately avoids destroy/remount: this version's destroy() does not cancel its animation-frame loop.

Mouse interaction stays enabled on the engine. The explicit “Hiệu ứng lật” toggle lets readers disable animations and pointer-driven folds, and remembers that choice on the device. A device-local touch fallback handles horizontal swipes the native250ms touch-delay logic misses. Vertical scrolling and canceled gestures cancel the pending native touch so scrolling does not flip a page.

Recheck resize, portrait backward navigation, mouse corner drag, horizontal touch swipes, vertical scrolling and reduced-motion behavior before upgrading the library. Demo member data remains in yearbook.js.
