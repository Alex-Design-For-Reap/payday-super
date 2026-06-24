# Deploying This App To GitHub Pages

This project is a static site, so it can be hosted directly with GitHub Pages.

## Important Data Note

Anything published with GitHub Pages can be accessible by URL depending on your repository and organisation settings. The report data is inside `issues-data.js`, so do not publish this to a public repository unless the issue register content is approved for that audience.

## Files Required For The Live Site

GitHub Pages needs these files:

- `index.html`
- `styles.css`
- `app.js`
- `issues-data.js`
- `.nojekyll`

The spreadsheet and refresh script are useful for maintaining the app, but the live site only needs the static files above.

## Option A: GitHub Website / GitHub Desktop

1. Create a new repository in GitHub.
2. Add the required files listed above to the repository root.
3. Commit and push to the `main` branch.
4. In GitHub, open the repository.
5. Go to `Settings` > `Pages`.
6. Under `Build and deployment`, choose `Deploy from a branch`.
7. Select:
   - Branch: `main`
   - Folder: `/ (root)`
8. Save.

GitHub will show the published URL on the same `Pages` settings screen after deployment.

## Option B: Terminal Commands

From this project folder:

```bash
git init
git branch -M main
git add index.html styles.css app.js issues-data.js .nojekyll
git commit -m "Publish issues register app"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Then enable GitHub Pages in `Settings` > `Pages` using:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

## Refreshing The Published Data

When the spreadsheet changes:

1. Save `Issues Register.xlsm`.
2. Run:

```bash
/Users/alexdasilva/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 refresh_data.py
```

3. Commit and push the refreshed `issues-data.js`.

```bash
git add issues-data.js
git commit -m "Refresh issues register data"
git push
```

GitHub Pages will redeploy the updated report after the push.
