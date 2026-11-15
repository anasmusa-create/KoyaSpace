import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    # Check lines like: key: '...'
    m = re.match(r"^(\s+[a-zA-Z0-9_]+:\s*)'([\s\S]*)'(,\s*|\s*)$", line)
    if m:
        prefix, content, suffix = m.groups()
        unescaped = re.findall(r"(?<!\\)'", content)
        if unescaped:
            print(f"Line {i+1} has {len(unescaped)} unescaped single quotes: {line.strip()[:90]}")
