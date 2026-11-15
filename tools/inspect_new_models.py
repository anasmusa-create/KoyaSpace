import os

dir_path = r'C:\Users\hp\Downloads\Telegram Desktop'
files = {
    'apollo11': 'apollo_11_lunar_module_easep_1969_059c.html',
    'ingenuity': 'Ingenuity__the_helicopter_that_flew_on_Mars.html',
    'pathfinder': 'mars_pathfinder_nasa_science.html',
    'kepler': 'Kepler_ the planet hunter.html'
}

for key, fname in files.items():
    fp = os.path.join(dir_path, fname)
    with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    print('========================================')
    print(f'KEY: {key} -> {fname} ({len(content)} bytes)')
    # Find head and body start
    head_start = content.find('<head>')
    body_start = content.find('<body')
    print('Head start:', head_start, 'Body start:', body_start)
    print('First 200 chars:')
    print(content[:200])
    print('Last 300 chars:')
    print(content[-300:])
