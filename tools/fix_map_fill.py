with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

bad_pattern = """      ctx.fillStyle = kind === 'mars'
        ? 
gba(,48,36,)
        : 
gba(,,,);"""

good_pattern = """      ctx.fillStyle = kind === 'mars'
        ? `rgba(${shade + 40},48,36,${(r() * .18).toFixed(2)})`
        : `rgba(${shade},${shade},${shade},${(r() * .22).toFixed(2)})`;"""

text = text.replace(bad_pattern, good_pattern)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed makeMap ctx.fillStyle in app.js!")
