import re

# Removes the Central Kurdish ("ku") half of every {en, ku} pair from the legacy data files.
pat = re.compile(r',?\s*\bku:\s*"(?:[^"\\]|\\.)*"')
for n in ['moon', 'mars-1', 'mars-2', 'deep']:
    s = open('legacy-echoes/js/data-%s.js' % n, encoding='utf-8').read()
    out, k = pat.subn('', s)
    ar = re.findall(r'[\u0600-\u06FF]', out)
    print(n, 'removed', k, 'arabic chars left', len(ar), 'ku: left', out.count('ku:'))
    open('data/%s.js' % n, 'w', encoding='utf-8').write(out)
