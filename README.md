# Robotics from First Principles

A buildless static course site for GitHub Pages. No installation, build command, backend, or API keys are needed.

## Publish on GitHub Pages

1. Create a GitHub repository for the website.
2. Upload the **contents** of this directory to its root (`index.html` must be at the root).
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select your branch (usually `main`), and choose **/(root)**.
5. Save and open the Pages URL once GitHub finishes deploying.

Links are relative, so this works on both a `username.github.io/repository/` URL and a custom domain.

## Add your links and sessions

Edit `assets/content.js`:

- `youtubeChannel`: your channel URL (optional).
- `googleGroup`: your student Google Group URL (optional).
- Each lesson's `youtube`: a full YouTube watch URL or `https://youtu.be/VIDEO_ID`.
- Each lesson's `notes` and `exercise`: replace the local PDF path with a Google Drive sharing link if preferred.
- `date`: a human-readable session date, including the timezone if it includes a time.
- `duration`: available for future use.
- `status`: truthful short label such as `Recording available`.
- `topics`: the key ideas for the lesson.
- `mode`: `position`, `projection`, or `matrix` to open the appropriate Kino operation.

Empty recording links show “Recording not yet linked.” No example videos or fake session dates are published.

Drive permissions are independent of this website. Choose sharing settings appropriate for your students. Keep instructor solutions private unless intentionally publishing them.

To add a lesson, copy an existing lesson object, give it a unique `id`, and associate it with a chapter. The chapter page, sidebar, and previous/next links update automatically. See chapter IDs in the same file.

## Files

- `index.html`: home
- `course.html`: 17-chapter roadmap
- `chapter.html?id=linear-algebra`: chapter and lessons
- `lesson.html?id=projections-dot-products`: a lesson page
- `visualizations.html`: searchable visualization gallery
- `lab.html`: course wrapper for the Kino lab
- `labs/kino.html`: standalone lab with its original controls
- `about.html`: course introduction
- `assets/content.js`: editable content and links
- `assets/site.js`, `assets/style.css`: rendering and presentation
- `assets/logo.svg`, `assets/kino-hero.svg`: editable vector artwork
- `materials/`: course notes and the student-only exercise

The main source visualization outside this website is not modified. The website carries a separate portable copy.

## Preview locally

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`.

## Verify before publishing

Check your YouTube and Drive links, confirm student access to materials, and review lesson dates. Future labs are clearly labeled planned.

The site loads optional Google Fonts; system fonts are used if unavailable. The lab itself has no external runtime dependency.
