# AIM official media sources

The site uses externally hosted, unmodified visuals from the current official MIAI chair page. They are **not** generated or substituted logos. They remain hosted on the original institution server. 

- AIM official logo: https://miai-cluster.univ-grenoble-alpes.fr/medias/photo/logo-aim_1755785337279-jpg?ID_FICHE=1566303
- Original partner-logo chair presentation poster: https://miai-cluster.univ-grenoble-alpes.fr/medias/photo/aim_1755785671736-png?ID_FICHE=1566303
- Institutional AIM page and licence notice: https://miai-cluster.univ-grenoble-alpes.fr/en/projects/chaires/aim-ai-and-mechanics-for-scale-bridging-in-complex-materials--1834351.kjsp?RH=1781609361883
- MIAI Days 2025 AIM chair presentation video, starting at AIM segment: https://www.youtube.com/watch?v=zSDhmIGKjAk&t=1214s
- Inria TRIPOP 2025 report documenting that video: https://radar.inria.fr/report/2025/tripop/index.html
- Original AIM website (additional videos could not be inventoried automatically): https://project.inria.fr/aimechanics/

## Display and rights

The institution page states CC BY-NC-ND 4.0 for documents unless otherwise stated. The images are displayed unmodified, linked to MIAI and attributed. Check institution-specific permissions for other logos/video assets before redistribution; displaying linked media is different from bundling third-party bytes in this ZIP.

**Online requirement:** The logo and chair poster are linked to MIAI servers. Your live Github Pages site needs internet access to show them. If you want an entirely self-hosted website, download the images from MIAI in your own browser and put them under `images/` and `docs/images/`, then change the referenced URLs in `_project_profile.qmd`, `index.qmd`, `media.qmd` and `docs/*.html` to the new relative paths.

## Add a video from the old AIM site

Open `media.qmd` and paste an additional `<div class="media-video"><iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="Description" loading="lazy" allowfullscreen></iframe></div>`. Replace `VIDEO_ID` with the actual recording ID; do not paste a watch-page link into `src`. Then run `quarto render` to rebuild `docs/`.

If you're not using Quarto, insert the same iframe in `docs/media.html` under the other video.
