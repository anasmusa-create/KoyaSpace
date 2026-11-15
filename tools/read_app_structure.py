import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

print('Length of app.js:', len(text))
lines = text.splitlines()
for i in range(min(60, len(lines))):
    print(f'{i+1}: {lines[i]}')
