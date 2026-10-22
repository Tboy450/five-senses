# 5 Senses asset archives

Versioned source-of-truth registry for the project's original 3D assets.

- **v001-original/** preserves the first tabletop scene before the character redesign.
- **v002-little-misfits.zip** contains five individual GLBs, one combined character lineup, a manifest with SHA-256 checksums, and usage notes.
- The same current assets are served from `dist/assets/ghosts/v002/` and the ZIP is downloadable from the live character gallery.
- `catalog.json` identifies each current asset and its trait profile.

The characters share a handmade clay blob ghost style and vary in color, proportions, ears/horns, eyes, expressions, and personality. The static GLB assets have named parts, embedded materials, a base-center pivot, +Y up, and +Z forward. They have no embedded skeletal rig or animation clips. The gallery adds procedural idle motion at runtime.

The user-supplied clay photographs are visual references only and are not redistributed in these archives. No built-in image generator was used. Models are original procedural geometry. Vendored Three.js remains under its included MIT license.
