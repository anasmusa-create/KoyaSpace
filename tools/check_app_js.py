import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
keys = re.findall(r'^\s{2}"([a-zA-Z0-9_-]+)":\s*\{', text, re.MULTILINE)
print('DOSSIER keys:', keys)

# check PLACES or devices array
places_match = re.search(r'const\s+PLACES\s*=\s*(\[[\s\S]*?\]);', text)
if places_match:
    print('Found PLACES!')
    print(places_match.group(0)[:500])
else:
    print('PLACES not matched with const PLACES = [')
    # search where places are defined
    p = re.findall(r'(\bPLACES\b[^\n]*)', text)
    print('Mentions of PLACES:', p[:5])
