# 5 Senses — Together to the Core

A clean WebGL board game for two people sharing a screen, inspired by the supplied handmade board and clay characters. Built with locally bundled Three.js 0.160.1 and browser JavaScript. No image generation service was used.

## Play locally

Run `node server.mjs` from this directory, then open http://127.0.0.1:4173 in a normal browser. Serve `dist/` with any static web server. The game needs no external assets, account, database, network calls, or AI service at runtime. It stores progress and preferences in browser localStorage. WebGL is used for 3D; the text route and numeric roll fallback preserve gameplay if unavailable.

## Contents

- `dist/index.html`, `style.css`, `app.js`: complete playable interface.
- `dist/game.js`: pure two-player rules and state transitions.
- `dist/model.js`: procedural tabletop and clay-style explorer geometry.
- `dist/board.js`: 3D board, d20, camera, lighting, animation.
- `dist/five-senses.glb`: downloadable geometric scene.
- `dist/RULES.md`: complete rules, examples, accessibility, save behavior.
- `tests/game.test.mjs`: state-machine, scoring, d20, repair, and endgame checks.
- `dist/vendor/`: pinned Three.js library and MIT license.

Run `node --test tests/game.test.mjs` for game logic checks, or `node export-model.mjs` to regenerate the GLB. The supplied GLB is ready to use. Three.js utility imports are adjusted to use the bundled library. There is no solo, online, or AI mode in this edition.
