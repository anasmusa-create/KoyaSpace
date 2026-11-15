import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    stripped = l.strip()
    # Check if line contains unquoted translate, rgba, deg, or unquoted strings
    if any(k in stripped for k in ['translate(-50%', 'deg)']):
        print(f"Line {i+1}: {repr(l)}")
    # Check lines starting with style. or = that have unquoted values
    if '.style.' in stripped and '=' in stripped:
        rhs = stripped.split('=', 1)[1].strip()
        if not (rhs.startswith('`') or rhs.startswith('"') or rhs.startswith("'") or rhs.startswith('(') or rhs.startswith('Math.') or rhs.startswith('is') or rhs.startswith('data.') or rhs.startswith('r.') or rhs.startswith('places') or rhs.startswith('null') or rhs.startswith('true') or rhs.startswith('false')):
            print(f"Line {i+1} style assign: {repr(l)}")
