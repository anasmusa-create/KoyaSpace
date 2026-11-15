import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's check places object
start = text.find('const places = {')
end = text.find('/* ── state ── */', start)
places_code = text[start:end]

print("Scanning places object in app.js...")
for match in re.finditer(r"id:\s*'([^']+)',\s*title:\s*'([^']+)',[\s\S]*?storyPage:\s*([^,\n]+),\s*has3D:\s*([^,\n]+)", places_code):
    rid, title, sp, h3d = match.groups()
    print(f"[{rid}] {title} | 3D: {h3d.strip()} | storyPage: {sp.strip()}")
