#!/bin/bash
# Render docs/resume/resume.html -> public/resume.pdf (the site's "Download CV" file).
#
# The original resume.pdf came out of LibreOffice Writer and its .odt source was
# never committed, so resume.html is now the source of truth. It reproduces the
# original layout: US Letter, 63pt side margins, Carlito (Calibri-metric) type.
#
# Requires Google Chrome. Fonts live in assets/ so the render is reproducible.

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WEB="$(cd "$HERE/../.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="$WEB/public/resume.pdf"

[ -x "$CHROME" ] || { echo "Google Chrome not found at $CHROME" >&2; exit 1; }

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# --headless=old is required: the new headless mode hangs on --print-to-pdf here.
# The disable-* flags stop it blocking on first-run/network chores.
"$CHROME" \
  --headless=old \
  --disable-gpu \
  --no-sandbox \
  --no-first-run \
  --no-default-browser-check \
  --disable-extensions \
  --disable-sync \
  --disable-background-networking \
  --disable-component-update \
  --no-pdf-header-footer \
  --allow-file-access-from-files \
  --virtual-time-budget=8000 \
  --user-data-dir="$TMP/chrome" \
  --print-to-pdf="$TMP/resume.pdf" \
  "file://$HERE/resume.html" >/dev/null 2>&1 &
CPID=$!
for _ in $(seq 1 30); do kill -0 "$CPID" 2>/dev/null || break; sleep 1; done
kill -9 "$CPID" 2>/dev/null || true
wait "$CPID" 2>/dev/null || true

[ -s "$TMP/resume.pdf" ] || { echo "Chrome produced no PDF" >&2; exit 1; }

cp "$TMP/resume.pdf" "$OUT"
echo "wrote $OUT"