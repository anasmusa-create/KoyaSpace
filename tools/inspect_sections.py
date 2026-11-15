import re
import os

dir_path = r'C:\Users\hp\Downloads\Telegram Desktop'
files = {
    'surveyor3': 'Surveyor 3_ the robot that tested the Moon.html',
    'apollo11': 'apollo_11_lunar_module_easep_1969_059c.html',
    'ingenuity': 'Ingenuity__the_helicopter_that_flew_on_Mars.html',
    'pathfinder': 'mars_pathfinder_nasa_science.html',
    'opportunity': 'Opportunity_ the rover that kept going.html',
    'pioneer10': 'Pioneer 10_ the probe that kept going.html',
    'kepler': 'Kepler_ the planet hunter.html'
}

for key, fname in files.items():
    fp = os.path.join(dir_path, fname)
    with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    sections = re.findall(r'<section[\s\S]*?</section>', content)
    print(f'=== {key} ({len(sections)} sections) ===')
    for i, s in enumerate(sections):
        # find h1, h2, or card content
        h1 = re.findall(r'<h1[\s\S]*?>(.*?)</h1>', s)
        h2 = re.findall(r'<h2[\s\S]*?>(.*?)</h2>', s)
        p = re.findall(r'<p[\s\S]*?>(.*?)</p>', s)
        title = h1[0] if h1 else (h2[0] if h2 else 'No heading')
        # clean html tags
        clean_title = re.sub(r'<[^>]+>', '', title).strip()
        first_p = re.sub(r'<[^>]+>', '', p[0]).strip() if p else ''
        first_p = (first_p[:60] + '...') if len(first_p) > 60 else first_p
        print(f'  [{i}] {clean_title} | {first_p}')
