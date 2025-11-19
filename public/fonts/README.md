Place your Britti Sans webfont files here.

Recommended filenames:

- BrittiSans.woff2
- BrittiSans.woff

If you prefer other formats (ttf, eot), you can add them too and update the @font-face src in `app/globals.css` accordingly.

For best performance, include WOFF2.

Example @font-face (already added to app/globals.css):

@font-face {
font-family: 'Britti Sans';
src: url('/fonts/BrittiSans.woff2') format('woff2'),
url('/fonts/BrittiSans.woff') format('woff');
font-weight: 100 900;
font-style: normal;
font-display: swap;
}
