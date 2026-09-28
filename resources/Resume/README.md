# Resume PDF

Edit `resume.html` for content and `styles.css` for layout. Fonts are stored in
`fonts/` with their licenses so rendering does not depend on Google Fonts.

Generate the PDFs locally with Node.js 22:

```sh
npm ci
npx playwright install chromium
npm run build:resume
```

The script reads the HTML with Chromium's print layout and updates both public
download paths:

- `resources/Resume/Juan_Pablo_Urista_Resume.pdf` (embedded resume page)
- `resources/Juan_Pablo_Urista_Resume.pdf` (original download URL)

GitHub Actions rebuilds after changes to the resume HTML, CSS, fonts, renderer,
dependencies, or workflow. Pull requests get a downloadable `resume-pdf`
artifact. Pushes and manual runs also commit the PDFs to their source branch.
PDF-only commits are excluded from the trigger to avoid a rebuild loop.

On the default branch, the workflow explicitly requests a GitHub Pages rebuild
after updating the PDFs. The repository uses Pages publishing from `master`;
the workflow needs Contents and Pages write permissions for these steps.

The current content fits one Letter page. Longer content can flow to subsequent
pages without clipping; review the PDF artifact after substantial edits.
