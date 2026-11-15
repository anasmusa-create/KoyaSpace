import re

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Find devices or records
records_match = re.search(r'const\s+RECORDS\s*=\s*(\[[\s\S]*?\]);', content)
if records_match:
    print('Found RECORDS array in app.js!')
    # Let's count items and print IDs
    names = re.findall(r'name:\s*[\'"`]([^\'"`]+)[\'"`]', records_match.group(1))
    print(f'Total records: {len(names)}')
    for n in names:
        print(' -', n)
else:
    print('RECORDS array not matched directly, searching for records...')
    matches = re.findall(r'id:\s*[\'"`]([^\'"`]+)[\'"`],\s*name:\s*[\'"`]([^\'"`]+)[\'"`]', content)
    print(f'Matched id/name pairs: {len(matches)}')
    for i, (rid, rname) in enumerate(matches):
        print(f' [{i+1}] {rid}: {rname}')
