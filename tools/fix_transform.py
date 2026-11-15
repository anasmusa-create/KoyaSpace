with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

bad = r"\translate(-50%,-50%) rotateX(deg) rotateY(deg) scale();"
good = "`translate(-50%,-50%) rotateX(${cssTilt}deg) rotateY(${cssTurn}deg) scale(${cssScale})`;"

count = text.count(bad)
print(f"Found {count} occurrences of bad transform string.")
text = text.replace(bad, good)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed all occurrences in app.js!")
