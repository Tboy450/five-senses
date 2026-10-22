# Game update checklist

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

- [ ] Play a complete session with two people and record pacing, clarity, and challenge difficulty.
- [ ] Test on physical iPhone/iPad and Android devices, including touch orbit and landscape mode.
- [ ] Add on-screen zoom controls and a compact mobile action shortcut.
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

- [ ] Check desktop, narrow mobile, and landscape layouts.
- [ ] Run `node --test tests/game.test.mjs tests/models.test.mjs`.
- [ ] Re-export changed 3D assets, verify checksums, and retain the previous archive.
- [ ] Update README, checklist, and release notes.
- [ ] Push matching source to GitHub and Sites, deploy, and verify the public URL.
