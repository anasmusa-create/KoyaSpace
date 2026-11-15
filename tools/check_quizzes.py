import sys
sys.stdout.reconfigure(encoding='utf-8')

for name in ['models/surveyor3.html', 'models/opportunity.html', 'models/pioneer10.html']:
    with open(name, 'r', encoding='utf-8', errors='ignore') as f:
        c = f.read()
    idx = c.find('quiz:')
    if idx != -1:
        print(f'=== {name} QUIZ ===')
        print(c[idx:idx+600])
