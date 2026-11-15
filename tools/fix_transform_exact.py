with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

new_transform = "`translate(-50%,-50%) rotateX(${cssTilt}deg) rotateY(${cssTurn}deg) scale(${cssScale})`;\n"

for i, l in enumerate(lines):
    if 'rotateX(' in l and 'rotateY(' in l:
        indent = len(l) - len(l.lstrip())
        lines[i] = (' ' * indent) + (l.strip().split('=')[0].strip()) + ' = ' + new_transform
        print(f"Fixed line {i+1}: {lines[i]}")

with open('app.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Updated transform lines precisely.")
