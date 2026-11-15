import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# search for function names or variable declarations after line 500
lines = text.splitlines()
print(f'Total lines in app.js: {len(lines)}')

# Let's find functions or const declarations
for i, line in enumerate(lines):
    if re.match(r'^(const|let|var|function)\s+[a-zA-Z0-9_]+', line):
        if 'DOSSIER_DATA' not in line:
            print(f'Line {i+1}: {line[:80]}')
