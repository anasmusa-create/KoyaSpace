import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if '.innerHTML' in l and '=' in l:
        rhs = l.split('=', 1)[1].strip()
        if not (rhs.startswith('`') or rhs.startswith('"') or rhs.startswith("'") or rhs.startswith('data.') or rhs.startswith('r.') or rhs.startswith('places')):
            print(f'Line {i+1}: {repr(l)}')
