import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

print(f"Total lines in app.js: {len(lines)}")

# Let's find lines with unescaped single quotes in places object
# Between line 340 and 550
for i in range(340, 550):
    line = lines[i]
    # Check lines like: desc: '...' or descSpec: '...' or subtitle: '...'
    m = re.match(r"^(\s+[a-zA-Z0-9_]+:\s*)'([\s\S]*)'(,\s*)$", line)
    if m:
        prefix, content, suffix = m.groups()
        # Count unescaped single quotes in content
        # An unescaped quote is ' not preceded by \
        unescaped = re.findall(r"(?<!\\)'", content)
        if unescaped:
            print(f"Line {i+1} has {len(unescaped)} unescaped single quotes:")
            print(f"   {line.strip()}")
