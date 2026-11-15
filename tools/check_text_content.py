import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if '.textContent' in l and '=' in l:
        rhs = l.split('=', 1)[1].strip()
        # check if rhs starts with valid JS expression
        valid_starts = ['`', '"', "'", 'data.', 'rec.', 'd.', 'label', 'val', 't', 'f', 'isSpec', 'places', 'current', '(', 'mode']
        if not any(rhs.startswith(v) for v in valid_starts):
            print(f"Line {i+1}: {repr(l)}")
