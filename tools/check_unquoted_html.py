import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    # If line has HTML tag like <span or <div or <p
    if any(tag in l for tag in ['<span', '<div', '<p', '<b', '<button', '<h']):
        # check if line has quotes: ` or " or '
        has_quote = any(q in l for q in ['`', '"', "'"])
        if not has_quote:
            print(f'Line {i+1}: {repr(l)}')
