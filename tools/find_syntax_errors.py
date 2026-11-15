import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    stripped = l.strip()
    if '=' in stripped and any(tag in stripped for tag in ['<span', '<div', '<button', '<p', '<h']):
        if not any(q in stripped for q in ['"', "'", '`']):
            print(f"Line {i+1}: {stripped}")
    if '${' in stripped and not ('`' in stripped or '"' in stripped or "'" in stripped):
        print(f"Line {i+1} unquoted template: {stripped}")
