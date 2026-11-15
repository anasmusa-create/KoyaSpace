import sys, re
sys.stdout.reconfigure(encoding='utf-8')

with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    code = f.read()

# 1. Clean dirty string tails in DOSSIER_DATA
# e.g. ",\\n      },\\n      specialist: {\\n        en: "
code = re.sub(r'\",\\s*},\\s*specialist:\\s*{\\s*en:\\s*\"', '', code)
code = re.sub(r'\",\\s*specs:\\s*\[\s*{\s*k:\\s*{\\s*en:\\s*\"[^\"]*\"', '', code)

# 2. Fix storyPage paths in places
code = code.replace("'models/surveyor3.html?craft=apollo11'", "'models/apollo11.html'")
code = code.replace("'models/opportunity.html?craft=ingenuity'", "'models/ingenuity.html'")
code = code.replace("'models/opportunity.html?craft=sojourner'", "'models/pathfinder.html'")
code = code.replace("'models/pioneer10.html?craft=kepler'", "'models/kepler.html'")

# 3. Remove pingCurrentDist and ping assignments
code = re.sub(r'// ping distance\s*\n\s*pingCurrentDist = [^;]+;\s*\n', '', code)

# 4. Remove dosPing in renderDossierContent
code = re.sub(r'// Ping button in dossier\s*\n\s*const dosPing = q\(\'dos-ping-btn\'\);[\s\S]*?\}\s*\n', '', code)

# 5. Remove the entire Wake-Up Ping section
code = re.sub(r'/\* ── Wake-Up Ping ── \*/[\s\S]*?(?=/\* ── Procedural planet map textures ── \*/)', '', code)

# 6. Remove any remaining window.openPingFromDashboard or closePing
code = re.sub(r'window\.openPingFromDashboard\s*=\s*function\s*\(\)\s*\{[\s\S]*?\};', '', code)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Updated app.js successfully! Ping count in app.js:", code.lower().count('ping'))
