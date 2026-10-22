# 5 Senses — Together to the Core

A clean WebGL board game for two people sharing a screen, inspired by the supplied handmade board and clay characters. Built with locally bundled Three.js 0.160.1 and browser JavaScript. No image generation service was used.

[Play the game](https://five-senses-together-core.tboy450.chatgpt.site/) · [Play on GitHub Pages](https://tboy450.github.io/five-senses/) · [Preview the original three](https://five-senses-together-core.tboy450.chatgpt.site/ghosts.html) · [Download the reference samples](https://five-senses-together-core.tboy450.chatgpt.site/assets/ghosts/original-three-v003.zip) · [Earlier five-character collection](https://five-senses-together-core.tboy450.chatgpt.site/assets/ghosts/little-misfits-v002.zip)

See [UPDATE_CHECKLIST.md](UPDATE_CHECKLIST.md) for shipped features, next polish, and later solo/AI/online variants. Full gameplay instructions are in [the rulebook](dist/RULES.md).

## Neon art edition v006

The interface now takes its look from the board artwork. A blurred copy of the art sits behind the page. The header carries the painted "5 SENSES" logo over a dripping-paint edge. The sense legend uses the art's own SEE / HEAR / SMELL / TASTE / TOUCH icons, which glow as beacons are restored. Panels use hand-drawn neon strokes and marker lettering. The 3D table sits on a transparent stage with an ink-black base and a neon rim. The d20 has painted swirl faces and bold numerals in the logo's sunset gradient. These derived UI assets (`dist/assets/logo-5senses.webp`, `sense-icons.webp`, `backdrop.jpg`) are crops of `original-board.jpg`.

On landscape desktops and laptops the whole game fits one screen. Phones get a full-width board, controls kept off the art, and a floating shortcut to the current action. Portrait tablets and landscape phones have their own layouts. Text is larger throughout.

## Reference edition v003

The three main characters now follow the supplied cover and real clay figures more closely: tall brown-gray cat ghost, squat blue blob, and wide red-orange ghost. They use oversized cream eyes with irregular dark crescents, simple mouths, and no fangs. These are modeled interpretations rather than exact scans. Individual GLBs and the combined trio are versioned in the asset archives.

The board uses the supplied neon concept artwork as its perimeter, hand-painted-style point tiles, a cyan route, and the original pink/lime/cyan/orange/purple/red point palette. Large numbers are actual snapshot rewards: Safe earns the tile value; Bold earns tile value +10, with a −5 miss penalty. Small numbers mark route positions. D20 movement and cooperative repairs remain the same.

## Little Misfits — character collection v002

Five original cute demonic clay blob ghosts share a handmade family shape and differ in color, proportions, ears/horns, eyes, expression, and personality: Blu (curious blue cat ghost), Ember (coral troublemaker with crooked horns), Moss (sleepy ash-gray guardian), Mallow (shy lilac ghost with a folded ear), and Glim (golden cyclops with a curled horn). The game uses Blu, Ember, and Moss. All five have individual downloadable GLBs and a combined lineup, archived with SHA-256 hashes. These are static digital meshes; the browser provides procedural idle motion. The previous tabletop model is preserved under asset-archives/v001-original.

## Interface and screen fit

Landscape screens 900px and wider fit the scores, board, and action panel into one viewport, with actions beside the board. Phones and portrait screens stack the board, the sense legend, and the actions, and show a floating shortcut to the current action. The camera fits the entire tabletop to the available space and supports orbit, wheel or button zoom, and an overhead view. Full gameplay details are in `dist/RULES.md` and the in-game help.

## Play locally

Run `node server.mjs` from this directory (set `PORT` to use another port), then open http://127.0.0.1:4173 in a normal browser. Serve `dist/` with any static web server. Every push to `main` that changes `dist/` runs the tests and redeploys [the GitHub Pages copy](https://tboy450.github.io/five-senses/) (`.github/workflows/pages.yml`). The game needs no external assets, account, database, network calls, or AI service at runtime. It stores progress and preferences in browser localStorage. WebGL is used for 3D; the text route and numeric roll fallback preserve gameplay if unavailable.

## Contents

- `dist/index.html`, `theme.css`, `app.js`: complete playable interface (`theme.css` is the single site stylesheet; `ghosts.css` adds the ghost studio layout).
- `dist/game.js`: pure two-player rules and state transitions.
- `dist/model.js`: procedural tabletop and clay-style explorer geometry.
- `dist/board.js`: 3D board, d20, camera, lighting, animation.
- `dist/five-senses.glb`: downloadable geometric scene.
- `dist/RULES.md`: complete rules, examples, accessibility, save behavior.
- `tests/game.test.mjs`: state-machine, scoring, d20, repair, and endgame checks.
- `dist/vendor/`: pinned Three.js library and MIT license.

Run `node --test tests/*.test.mjs` for game and model checks, `node export-model.mjs` to regenerate the tabletop GLB, or `node export-ghosts.mjs` to regenerate the five character GLBs and manifest. The supplied GLBs are ready to use. Three.js utility imports are adjusted to use the bundled library. There is no solo, online, or AI mode in this edition.
