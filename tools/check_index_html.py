import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

print('index.html length:', len(text))
for line in text.splitlines():
    if any(k in line.lower() for k in ['tab', 'count', 'kurdish', 'badge', 'ping', 'modal']):
        print(line.strip())
