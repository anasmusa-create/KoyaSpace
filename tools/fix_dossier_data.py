import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's clean the dirty patterns in junior and specialist:
# Pattern: \",\s*},\s*specialist:\s*{\s*en:\s*\"
def fix_field(s):
    # If the text has '",\n      },\n      specialist: {\n        en: "' embedded inside it, cut it out
    idx = s.find('",\\n      },\\n      specialist: {\\n        en: "')
    if idx != -1:
        s = s[:idx]
    idx2 = s.find('",\n      },\n      specialist: {\n        en: "')
    if idx2 != -1:
        s = s[:idx2]
    # Also if specialist has '",\n    },\n\n    specs: [\n      {\n        k: { en: "'
    idx3 = s.find('",\\n    },\\n\\n    specs:')
    if idx3 != -1:
        s = s[:idx3]
    idx4 = s.find('",\n    },\n\n    specs:')
    if idx4 != -1:
        s = s[:idx4]
    return s

# Let's inspect all 13 devices and format them cleanly
# Find each "device_id": { ... } inside DOSSIER_DATA
print("Cleaning dirty JSON fragments from DOSSIER_DATA...")

# A regex that cleans the embedded legacy structure
text = re.sub(r'\",\\s*},\\s*specialist:\\s*\{\\s*en:\\s*\"[\s\S]*?(?=\"specialist\":)', '",\n    ', text)
text = re.sub(r'\",\\s*},\\s*specs:\\s*\[[\s\S]*?(?=\"facts\":)', '",\n    ', text)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Replacement done.")
