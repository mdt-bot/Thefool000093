# Thahasan · Thefool000093

Static portfolio for **Thahasanul Alam Khan** — offensive-security mindset, secure web engineering, and client-first delivery.

## Files

| File | Role |
|------|------|
| `index.html` | Page structure |
| `styles.css` | Theme and layout |
| `app.js` | Form transmit + nav highlight |
| `favicon.svg` | Tab icon |
| `.nojekyll` | Keeps GitHub Pages from running Jekyll |

All asset links are **relative** (`./styles.css`, `./app.js`) so the site works on GitHub Pages from the repository root.

## GitHub Pages (4 steps)

1. **Create a repo** on GitHub (suggested name: `thefool000093` or `thahasan-portfolio`). Do not commit secrets or private keys.
2. **Upload this folder** to the repo root (or push with git): `index.html`, `styles.css`, `app.js`, `favicon.svg`, `.nojekyll`, and this README.
3. In the repo, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, branch **`main`** (or `master`), folder **`/ (root)`**, then save.
4. Wait one to two minutes. Your site will be at `https://<username>.github.io/<repo-name>/`. A **custom domain** is optional under the same Pages settings.

## Open locally

Double-click `index.html`, or serve the folder if you prefer:

```bash
python -m http.server 5173
```

Then visit `http://localhost:5173`.

## Contact form

There is no backend. **Transmit** copies your message to the clipboard (when allowed) and opens LinkedIn so you can paste and send.
