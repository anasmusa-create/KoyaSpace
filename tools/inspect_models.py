import os
import sys

dir_path = r'C:\Users\hp\Downloads\Telegram Desktop'
files = [
    'Surveyor 3_ the robot that tested the Moon.html',
    'apollo_11_lunar_module_easep_1969_059c.html',
    'Ingenuity__the_helicopter_that_flew_on_Mars.html',
    'mars_pathfinder_nasa_science.html',
    'Opportunity_ the rover that kept going.html',
    'Pioneer 10_ the probe that kept going.html',
    'Kepler_ the planet hunter.html'
]

for f in files:
    fp = os.path.join(dir_path, f)
    with open(fp, 'r', encoding='utf-8', errors='ignore') as s:
        c = s.read()
    sections = c.count('<section')
    has_three = ('three' in c.lower())
    has_canvas = ('id="c"' in c) or ("id='c'" in c)
    print(f'{f}: length={len(c)}, sections={sections}, three={has_three}, canvas={has_canvas}')
