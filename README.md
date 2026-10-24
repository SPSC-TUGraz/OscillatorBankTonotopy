# Tonotopy poster website

A build-free, responsive website for GitHub Pages. No package installation, external fonts or equation CDN required. Equations use native MathML.

## Publish on GitHub Pages

1. Create a public repository (for example `tonotopy-poster`) in your GitHub account, or use an existing website repository.
2. Upload the **contents** of this folder to the repository root: `index.html`, `style.css`, `script.js`, `.nojekyll`, and `assets/`. Keep the asset filenames and directory structure.
3. Open repository **Settings → Pages**.
4. Set **Source → Deploy from a branch**, select **main** and **/ (root)**, then **Save**.
5. GitHub shows the published URL in Pages settings when deployment completes. A project repository is normally served at `https://USERNAME.github.io/REPOSITORY/`; a repository named `USERNAME.github.io` is served at `https://USERNAME.github.io/`.

All site links are relative so either URL structure works. Opening index.html directly also works for previewing the page.

## Add the masking animation

No animation was included in the source attachments. The page therefore labels its animation section as awaiting the simulation video; it does not display synthetic results.

1. Export the actual masking animation to browser-compatible MP4 (H.264 video, yuv420p).
2. Save it as `assets/masking.mp4`.
3. In index.html, replace the contents of `<div class="video-frame" id="animation-slot">…</div>` with:

```html
<video controls playsinline preload="metadata">
  <source src="assets/masking.mp4" type="video/mp4">
  Your browser does not support HTML video.
  <a href="assets/masking.mp4">Download animation</a>
</video>
```

Example conversion from AVI (requires ffmpeg):

```bash
ffmpeg -i masking.avi -c:v libx264 -crf 20 -pix_fmt yuv420p -movflags +faststart -an assets/masking.mp4
```

Add the sweep variable, masker frequency and amplitude convention to the animation caption when these are confirmed from the source simulation.

## Content

- Main download: supplied Delmenhorst tonotopy poster.
- Supporting download: supplied transmission-line-to-oscillator poster.
- Supplementary figure: supplied ampSweep.png (unchanged).
- Enlarged figures: cropped from the supplied tonotopy poster; not independent additional experiments.
- DDE coefficient correspondences: transcribed from the user-supplied equations, including Ψ″(0) in the cubic coefficient.
- Personal information limited to name, institute and email.
- Repository: https://github.com/SPSC-TUGraz/earcillator/tree/main

To add further figures, copy the existing figure block in index.html and add the image to assets/. Use accurate captions from each simulation.
