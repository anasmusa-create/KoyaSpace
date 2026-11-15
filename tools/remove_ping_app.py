import sys
import re

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Remove lines 784-828 (Wake-Up Ping)
wake_ping_re = r'/\* ── Wake-Up Ping ── \*/[\s\S]*?(?=/\* ── seed random / noise ── \*/)'
text = re.sub(wake_ping_re, '', text)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Removed Wake-Up Ping from app.js successfully.")
