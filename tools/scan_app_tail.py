import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if any(k in l for k in ['function', 'const ', 'let ', 'var ']):
        if i > 700:
            print(f'{i+1}: {l.strip()[:90]}')
