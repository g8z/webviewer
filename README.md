# webviewer

Minimal **Apryse WebViewer** (PDFTron) proof of concept: load PDFs from the local `files/` folder in the browser.

## What it does

- Webpack + `@pdftron/webviewer` setup
- Sample documents under `files/` (PDF, XOD, Office samples) for annotation, compare, and rendering experiments
- `index.html` entry point with a `#viewer` mount node

## Run locally

```bash
npm install
npx webpack serve
```

Open the dev server URL and point `initialDoc` in `index.html` at a file in `files/`.

## Notes

- Apryse WebViewer requires a valid license for production use. This repo is a **local demo** only.
- Sample PDFs are for testing WebViewer features, not redistribution.

## License

Demo/sample use. Apryse SDK subject to [Apryse terms](https://www.apryse.com/).
