import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# find const DOSSIER_DATA = { ... };
m = re.search(r'const\s+DOSSIER_DATA\s*=\s*(\{[\s\S]*?\n  \});', text)
if m:
    print("Found DOSSIER_DATA block! Length:", len(m.group(1)))
    # Try parsing as JSON (since it's formatted as JSON)
    try:
        data = json.loads(m.group(1))
        print("DOSSIER_DATA parsed as VALID JSON! Total entries:", len(data))
        for k in data:
            print(f" - {k}: {data[k]['name']}")
    except Exception as e:
        print("JSON parse error:", e)
        # Find where error is
        err_msg = str(e)
        if "char" in err_msg:
            pos = int(re.search(r'char (\d+)', err_msg).group(1))
            print("Around error:")
            print(m.group(1)[max(0, pos-100):pos+100])
else:
    print("Could not find DOSSIER_DATA block boundary.")
