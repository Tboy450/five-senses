# Handoff (for ChatGPT / Codex)

Repo: https://github.com/Tboy450/five-senses (branch main). GitHub Pages copy: https://tboy450.github.io/five-senses/ (auto-deploys on push via .github/workflows/pages.yml).

## Done (this session, v006–v007)
- Screen-fit layout + neon art theme (dist/theme.css is the only site stylesheet; style.css removed).
- Tumbling d20, hopping ghosts, celebrations, optional WebAudio sounds (dist/board.js, dist/app.js).
- Board pieces = v002 Little Misfits (makeMisfit in dist/model.js): Blu 1 fang, Ember horns + 2 fangs, sleepy Moss. Scoreboard avatars rendered from the models.
- Ghosts page: switch between Little Misfits (default) and v003 reference sculpts; roster chips show rendered portraits. Last-minute change, only syntax-checked, NOT browser-tested.
- Memory challenge: click guard against double-click skipping the cards, shuffled-buttons note, answer reveal.

## To do next
1. Republish the chatgpt.site link: use ../senses-v006-deploy.tar.gz (or senses-game/dist with .openai/hosting.json). It still serves v005.
2. Browser-test ghosts.html (both sets, phone width).
3. User request: a little more detailed artwork on the non-number tiles (5 sense beacons, START, HOME). Tile art: paintedTile() in dist/paint.js and icon() in dist/model.js.
4. Rest of UPDATE_CHECKLIST.md (pinch zoom, character select, web font, neon ghost-studio stage).

Run tests: node --test tests/game.test.mjs tests/models.test.mjs. Local server: PORT=4180 node server.mjs.
