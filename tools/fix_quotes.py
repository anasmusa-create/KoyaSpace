with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Fix 1
text = text.replace(
    "the crew's journey home",
    "the crew\\'s journey home"
)
# Fix 2
text = text.replace(
    "revealing Moon's mantle and core",
    "revealing Moon\\'s mantle and core"
)
# Fix 3
text = text.replace(
    "hematite 'blueberries' proving",
    "hematite \"blueberries\" proving"
)
# Fix 4
text = text.replace(
    "carrying humanity's golden plaque",
    "carrying humanity\\'s golden plaque"
)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed all unescaped quotes in app.js!")
