lines = open("app.js", encoding="utf-8").read().split("\n")
assert lines[0].startswith("(function(){"), lines[0][:30]
assert lines[1].startswith("const places={"), lines[1][:30]
assert lines[39] == "};", repr(lines[39])
block = open("tools/places_block.js", encoding="utf-8").read().rstrip("\n").split("\n")
out = lines[:1] + block + lines[40:]
open("app.js", "w", encoding="utf-8").write("\n".join(out))
print("spliced", len(lines), "->", len(out))
