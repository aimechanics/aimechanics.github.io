# AIM — Artificial Intelligence and Mechanics

A Quarto research-project website based on the **structure and styling** of [Filippo Masi's public Quarto template](https://github.com/filippo-masi/filippo-masi.github.io). The original project information comes from the [AIM Inria website](https://project.inria.fr/aimechanics/), the [official MIAI chair page](https://miai-cluster.univ-grenoble-alpes.fr/en/projects/chaires/aim-ai-and-mechanics-for-scale-bridging-in-complex-materials--1834351.kjsp) and [Inria's TRIPOP report](https://radar.inria.fr/report/2025/tripop/index.html).

The original Inria project website blocks automated retrieval. This package therefore includes verified official descriptions but does not claim to be a comprehensive migration of every item on that website. Review team details, current opportunities and official logos before publishing.

## What's included

- `index.qmd`, `research.qmd`, `team.qmd`, `publications.qmd`, `activities.qmd`, `media.qmd`, `join-us.qmd`, `contact.qmd` — editable Quarto pages.
- `_quarto.yml` — Quarto configuration, navbar and footer.
- `_project_profile.qmd`, `assets/css/academic-pages.scss`, `includes/profile-script.html` — adapted version of the academic two-column profile template.
- `docs/` — a **ready-to-publish, prebuilt static HTML version** (no Quarto required to view or upload).
- **Official AIM logo and chair poster** are displayed from the MIAI Cluster source site, preserving the original artwork and institutional partner marks; see `MEDIA-SOURCES.md` for source URLs and licence/hosting notes.
- **MIAI Days 2025 video** is embedded in `media.qmd` and `docs/media.html`, beginning at the AIM presentation. The verified recording is referenced in the Inria TRIPOP 2025 annual report.
- `images/aim-mark.svg` is a legacy placeholder retained in the source for reference only; it is not used on the site.

## Preview immediately

Open `docs/index.html` in a browser. All links inside the site use relative paths and work for project-based GitHub Pages repositories.

For example, run `python -m http.server 8000 --directory docs` and visit `http://localhost:8000`.

## Publish as a *second* GitHub Pages site

1. Create a **new public repository**, e.g. `aim`, under the GitHub account that hosts the existing site. It will be separate from `filippo-masi.github.io`.
2. Upload the contents of this folder to the new repository (not the parent folder).
3. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, choose `main`, and select `/docs` as the folder.
4. The website will be served at `https://<username>.github.io/aim/` if the repository is called `aim`.

### Editing the site in Quarto

Install [Quarto](https://quarto.org/docs/get-started/), then from the repository root run:

```bash
quarto preview
quarto render
```

`quarto render` outputs to `docs/`. Commit the modified `.qmd` files and regenerated `docs/` files to publish updates. The prebuilt pages were generated to match the layout, but Quarto itself may produce small differences in spacing due to its HTML wrapper.

**Content and routes:** Each page's `.qmd` source mirrors the matching `docs/*.html` page. When making future edits, edit the `.qmd` file and re-render with Quarto; don't edit `docs/` manually.

**Site URL:** Once a repository name and URL are chosen, edit the commented `site-url` and `repo-url` entries in `_quarto.yml` if canonical URLs are desired.

## Review before public launch

- Confirm any new personnel or changes in affiliation and project outputs.
- Confirm vacancy status from the project's official opportunities page; no unverified open positions are shown here.
- Confirm that the externally hosted official AIM logo and chair presentation images are loading. They are served by MIAI; see `MEDIA-SOURCES.md`. The partner logos are retained together in the official chair visual.
- Add any additional AIM-specific videos from the original Inria site after checking their actual URLs; this site currently embeds the independently verified MIAI Days 2025 presentation.
- Check the funding acknowledgement and date range against the current grant text.
- Optionally redirect visitors from the previous Inria AIM page to the new site.

## Media and attribution

This edition preserves the official AIM logo, the original chair-presentation graphic with partner logos, and an authentic AIM presentation video. All three are linked/embedded from their original publishers (not recreated). See `MEDIA-SOURCES.md` for specific URLs, licensing and instructions for adding local copies or more videos.

## Attribution

Layout closely follows the publicly available [Filippo Masi Quarto personal website template](https://github.com/filippo-masi/filippo-masi.github.io), adapted for project use. Selected publication details, institutional affiliations, research aims and grant attribution are based on the official sources above. Links and bibliographic metadata should be periodically verified.
