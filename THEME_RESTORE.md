# Theme restore point

When the user says **"restore old theme"**, they mean the dark cinematic design saved on 2026-11-11 immediately before the ivory light-theme experiment. They do NOT mean the original cyan/purple theme or Git HEAD.

Snapshot: `.theme-backups/dark-cinematic-2026-11-11.zip`
SHA-256: `3B6E2D01A322046F3A1211C7E3B771A3EB59F0CFF73545FB28B5D6C338418036`

The archive includes complete `app/` and `components/` directories, including all six cinematic backgrounds, motion controls, and the first experience role "Junior Full Stack Developer". Public assets and dependencies were unchanged and remain in the repository.

To restore, verify the archive hash, extract it to a temporary folder inside the workspace, and copy the archived files over their matching workspace paths. Review intervening functional changes before replacing files. The current light experiment adds `app/light-theme.css`; the archived layout does not import it, so restoring the archived layout disables the light theme. Do not overwrite this archive or delete unrelated files.
