# Integration notes

The original page-flip2.0.7 browser bundle is unmodified. SOURCE.json records the npm tarball and verified SHA-512 integrity; the MIT license is included.

The yearbook uses one HTML renderer for the lifetime of the page. Its dimensions are updated through the shared settings object, getUI().setOrientationStyle(), update() and turnToPage(). This deliberately avoids destroy/remount: this version's destroy() does not cancel its animation-frame loop.

Mouse interaction stays enabled on the engine. Reduced-motion users get instant button navigation, no hover-corner animation and no pointer-driven page fold. A device-local touch fallback handles horizontal swipes the native250ms touch-delay logic misses. Vertical scrolling and canceled gestures cancel the pending native touch so scrolling does not flip a page.

Recheck resize, portrait backward navigation, mouse corner drag, horizontal touch swipes, vertical scrolling and reduced-motion behavior before upgrading the library. Demo member data remains in yearbook.js.
