import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Fix line 721 and 723
text = text.replace(
    "q('dos-eyebrow').textContent = NASA Mission Archive ·  SECTOR · #;",
    "q('dos-eyebrow').textContent = `NASA Mission Archive · ${current.toUpperCase()} SECTOR · #${data.nssdca || ''}`;"
)

text = text.replace(
    "q('dos-tagline').textContent = data.tagline ? “” : '';",
    "q('dos-tagline').textContent = data.tagline ? `“${data.tagline}”` : '';"
)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed lines 721 and 723 in app.js!")
