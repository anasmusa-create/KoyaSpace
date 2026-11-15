import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

for i, line in enumerate(text.splitlines()):
    if 'places' in line.lower() and ('=' in line or ':' in line):
        print(f'{i+1}: {line[:100]}')
