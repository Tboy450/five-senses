# Game update checklist

## Priority — screen fit & neon art theme (v006)

- [x] Desktop/laptop landscape: header, scores, board, and d20 panel fit one screen with no page scroll; the side panel scrolls on its own if needed.
- [x] Board fills its stage: tighter camera framing, a centred target, and a sense legend that sits beside the board instead of on top of it.
- [x] Mid-width desktops (900–1199px): the legend moves to a strip under the board.
- [x] Phones: full-width board, view buttons in a band above the art, and the legend under the board.
- [x] Phones: a floating "↓ Roll the d20"-style shortcut that jumps to the current action.
- [x] Landscape phones: board left, scores and actions right, controls kept off the board.
- [x] Portrait tablets and stretched portrait windows use the stacked layout instead of a squeezed desktop grid.
- [x] Larger type throughout: no text below ~11px; scores, headings, and buttons sized up.
- [x] Theme sampled from the board art: blurred art backdrop, the painted "5 SENSES" logo, the art's own SEE/HEAR/SMELL/TASTE/TOUCH icons, dripping-paint header edge, neon hand-drawn panel strokes, and marker lettering.
- [x] Board caption and overlays made nearly transparent.
- [x] 3D table: transparent stage, ink-black base with a neon rim, and the artwork frame at full brightness.
- [x] d20: painted swirl pattern on the faces and bold graffiti numerals in the logo's sunset gradient.
- [x] Board-tile styling for the roll map, reward badges, and memory cards; repair-code halves coloured per player.
- [x] Recall question shows numbered slots with the asked card highlighted, and 5-card sets lay out as a clear 3 + 2 grid.
- [x] On-screen zoom in/out buttons.
- [x] GitHub Pages copy at https://tboy450.github.io/five-senses/, redeployed by a workflow on every push to `main`.

## Shipped

- [x] Two-human, shared-screen d20 game with saved progress.
- [x] Competitive scores and cooperative sense beacons.
- [x] Original neon concept artwork, hand-painted-style numbers, irregular tile placement, and cyan route.
- [x] Three closer reference clay models: brown-gray, blue, and red-orange.
- [x] Individual GLBs, combined scenes, rendered sample preview, and versioned asset archives.
- [x] Public game site, public GitHub source, and downloadable GitHub releases.
- [x] Dark neon interface, bright controls, and themed 3D d20.
- [x] Responsive desktop/mobile layout and automatic board framing.
- [x] Gameplay documentation in the README and downloadable rulebook.
- [x] Automated game-state and model-integrity checks.

## Next polish

- [x] Safe/Bold answers always marked wrong: a double-click or double-tap on Safe/Bold landed on the newly drawn "hide the cards" button and skipped the cards, and the shuffled answer buttons then read like the card order. Fixed with a brief click guard on new screens, a "buttons are shuffled" note, and a result screen that reveals the real order.
- [ ] Confirm on the device where the Safe/Bold issue was seen.
- [ ] Play a complete session with two people and record pacing, clarity, and challenge difficulty.
- [ ] Test on physical iPhone/iPad and Android devices, including touch orbit and landscape mode.
- [ ] Add pinch-to-zoom on touch screens.
- [ ] Bundle a matching marker/graffiti web font so lettering looks the same on every device (it currently uses system marker fonts: Segoe Print, Marker Felt, Chalkboard).
- [ ] Restyle the ghost studio's light "clay room" stage to match the neon theme.
- [ ] Add player character selection and keep the chosen model with the saved game.
- [ ] Refine clay surfaces, eye shapes, and animation from feedback on the three samples.
- [ ] Add gentle claymation idle, hop, celebration, and repair animations.
- [ ] Improve d20 roll easing and optional sound effects.
- [ ] Expand the challenge deck while preserving accessible screen-based alternatives.
- [ ] Add undo/recovery for accidental inputs and clearer resume feedback.
- [ ] Capture a full session for additional end-to-end browser coverage.

## Later variants — not in this release

- [ ] Solo mode.
- [ ] Optional AI opponent.
- [ ] Online multiplayer with shared sessions.

## Each release

- [ ] Check desktop (1280×720, 1440×900, 1920×1080), mid-width (1024×768), narrow mobile (375×812), landscape phone (844×390), and portrait tablet (820×1180) layouts.
- [ ] Run `node --test tests/game.test.mjs tests/models.test.mjs`.
- [ ] Re-export changed 3D assets, verify checksums, and retain the previous archive.
- [ ] Update README, checklist, and release notes.
- [ ] Push matching source to GitHub (auto-deploys GitHub Pages) and republish the chatgpt.site link from Codex; verify both public URLs.
