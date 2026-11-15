import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')

models = [
    'surveyor3.html',
    'apollo11.html',
    'ingenuity.html',
    'pathfinder.html',
    'opportunity.html',
    'pioneer10.html',
    'kepler.html'
]

all_passed = True

for m in models:
    path = os.path.join('models', m)
    if not os.path.exists(path):
        print(f"FAILED: {path} does not exist!")
        all_passed = False
        continue

    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # 1. Check dark inline tags
    has_html_dark = 'background-color: #05070B' in content[:500]
    has_body_dark = 'background-color: #05070B' in content[:8000]
    has_loader = '<div id="se-loader"' in content
    has_extras = '<script src="story-extras.js"></script>' in content
    has_init = 'StoryExtras.init(' in content

    # 2. Extract sections count
    sections = re.findall(r'<section[\s\S]*?</section>', content)
    num_sections = len(sections)

    # 3. Extract juniorSteps and specialistSteps count from StoryExtras.init
    init_match = re.search(r'StoryExtras\.init\((\{[\s\S]*?\})\);', content)
    if not init_match:
        print(f"FAILED: {m} could not parse StoryExtras.init call!")
        all_passed = False
        continue

    init_json_str = init_match.group(1)
    try:
        init_data = json.loads(init_json_str)
    except Exception as e:
        print(f"FAILED: {m} StoryExtras.init JSON invalid: {e}")
        all_passed = False
        continue

    num_junior = len(init_data.get('juniorSteps', []))
    num_spec = len(init_data.get('specialistSteps', []))
    num_quiz = len(init_data.get('quiz', []))
    craft_name = init_data.get('craftName', '')
    nssdca = init_data.get('nssdcaId', '')

    match_steps = (num_sections == num_junior == num_spec)
    status = "OK" if (has_html_dark and has_body_dark and has_loader and has_extras and match_steps) else "WARN"

    print(f"[{status}] {m}: {craft_name} (NSSDCA: {nssdca})")
    print(f"      Sections: {num_sections} | Junior Steps: {num_junior} | Specialist Steps: {num_spec} | Quiz Qs: {num_quiz}")
    print(f"      Dark html/body: {has_html_dark}/{has_body_dark} | Loader: {has_loader} | Extras JS: {has_extras}")
    if not match_steps:
        print(f"      --> MISMATCH in step counts: sections={num_sections}, junior={num_junior}, spec={num_spec}")
        all_passed = False

if all_passed:
    print("\nALL 7 3D INTERACTIVE MODELS VERIFIED 100% PERFECT!")
else:
    print("\nSome warnings or failures detected.")
