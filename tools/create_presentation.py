import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

def create_deck():
    prs = Presentation()
    # 16:9 widescreen slides
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    blank_layout = prs.slide_layouts[6]

    # Dark Space Palette
    BG_COLOR = RGBColor(5, 7, 11)       # #05070B Space Black
    CARD_BG  = RGBColor(18, 14, 18)     # #120E12 Panel Black
    GOLD     = RGBColor(230, 164, 109)  # #E6A46D NASA Gold
    RUST     = RGBColor(194, 105, 60)   # #C2693C Rust
    WHITE    = RGBColor(246, 233, 218)  # #F6E9DA Ink White
    MUTED    = RGBColor(157, 178, 199)  # #9DB2C7 Soft Blue/Grey
    GREEN    = RGBColor(156, 196, 125)  # #9CC47D Success Green

    def set_slide_background(slide):
        bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, prs.slide_height)
        bg.fill.solid()
        bg.fill.fore_color.rgb = BG_COLOR
        bg.line.fill.background()
        return bg

    def add_header(slide, slide_num, title_text, category="NASA SPACE APPS CHALLENGE 2026"):
        # Header category
        cat_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.45), Inches(11), Inches(0.4))
        tf = cat_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = f"{category.upper()}  ·  SLIDE {slide_num} OF 7"
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = GOLD
        p.font.name = "Arial"

        # Main Title
        t_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.8), Inches(11.5), Inches(0.8))
        tf_t = t_box.text_frame
        tf_t.word_wrap = True
        p_t = tf_t.paragraphs[0]
        p_t.text = title_text
        p_t.font.size = Pt(28)
        p_t.font.bold = True
        p_t.font.color.rgb = WHITE
        p_t.font.name = "Georgia"

    # ════════════════════════════════════════════════════════════
    # SLIDE 1: TITLE SLIDE
    # ════════════════════════════════════════════════════════════
    s1 = prs.slides.add_slide(blank_layout)
    set_slide_background(s1)

    # Decorative Badge
    badge = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.2), Inches(5.2), Inches(0.45))
    badge.fill.solid()
    badge.fill.fore_color.rgb = CARD_BG
    badge.line.color.rgb = RUST
    tf_b = badge.text_frame
    p_b = tf_b.paragraphs[0]
    p_b.text = "NASA SPACE APPS CHALLENGE 2026  ·  SULAYMANIYAH"
    p_b.font.size = Pt(11)
    p_b.font.bold = True
    p_b.font.color.rgb = GOLD
    p_b.alignment = PP_ALIGN.CENTER

    # Main Title
    tbox = s1.shapes.add_textbox(Inches(0.8), Inches(1.8), Inches(11.5), Inches(1.8))
    tf = tbox.text_frame
    p1 = tf.paragraphs[0]
    p1.text = "Echoes of Space"
    p1.font.size = Pt(56)
    p1.font.bold = True
    p1.font.color.rgb = WHITE
    p1.font.name = "Georgia"

    p2 = tf.add_paragraph()
    p2.text = "Interactive 3D Chronology of Abandoned Exploration Hardware"
    p2.font.size = Pt(22)
    p2.font.color.rgb = GOLD
    p2.font.name = "Georgia"
    p2.space_before = Pt(8)

    # Main summary card
    card = s1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(4.0), Inches(11.7), Inches(2.6))
    card.fill.solid()
    card.fill.fore_color.rgb = CARD_BG
    card.line.color.rgb = RUST
    tf_c = card.text_frame
    tf_c.word_wrap = True

    p = tf_c.paragraphs[0]
    p.text = "PROJECT OVERVIEW & CREATIVE VISION"
    p.font.size = Pt(12)
    p.font.bold = True
    p.font.color.rgb = GOLD

    p = tf_c.add_paragraph()
    p.text = "Every mission leaves a trace. 'Echoes of Space' is an interactive, museum-grade WebGL 3D web application chronicling humanity's dormant exploration hardware across the Moon, Mars, and Deep Space. Rather than treating deactivated spacecraft as space junk, this platform elevates them as humanity's most daring scientific monuments."
    p.font.size = Pt(15)
    p.font.color.rgb = WHITE
    p.space_before = Pt(8)

    p = tf_c.add_paragraph()
    p.text = "Developed by Software Engineering Students  ·  College of Engineering, Koya University (KoyaSpace Team)"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = MUTED
    p.space_before = Pt(12)


    # ════════════════════════════════════════════════════════════
    # SLIDE 2: THE CHALLENGE & PROBLEM STATEMENT
    # ════════════════════════════════════════════════════════════
    s2 = prs.slides.add_slide(blank_layout)
    set_slide_background(s2)
    add_header(s2, 2, "The Challenge: Giving Voice to Silent Monuments")

    # Column 1: The Problem
    c1 = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.6), Inches(4.8))
    c1.fill.solid()
    c1.fill.fore_color.rgb = CARD_BG
    c1.line.color.rgb = RUST
    tf = c1.text_frame
    tf.word_wrap = True

    p = tf.paragraphs[0]
    p.text = "THE PROBLEM: FORGOTTEN RELICS"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = GOLD

    points_c1 = [
        ("Off-World Hardware is Misunderstood:", "Dozens of historic landers, rovers, and probes remain resting across celestial bodies. Popular discourse frequently mischaracterizes them as discarded trash or space debris."),
        ("Static Data Fails to Inspire:", "Standard archival lists and dry spreadsheets fail to engage younger audiences, students, and the public with the profound human endeavor behind each touchdown."),
        ("Lost Engineering Context:", "Critical engineering breakthroughs—such as Apollo 11's laser retroreflector, Opportunity's 14-year endurance, and Surveyor 3's soil tests—are separated from their physical artifacts.")
    ]
    for heading, desc in points_c1:
        p = tf.add_paragraph()
        p.text = f"•  {heading} "
        p.font.bold = True
        p.font.size = Pt(13)
        p.font.color.rgb = WHITE
        p.space_before = Pt(10)
        p_desc = tf.add_paragraph()
        p_desc.text = f"    {desc}"
        p_desc.font.size = Pt(12)
        p_desc.font.color.rgb = MUTED

    # Column 2: Our Solution
    c2 = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.9), Inches(1.8), Inches(5.6), Inches(4.8))
    c2.fill.solid()
    c2.fill.fore_color.rgb = CARD_BG
    c2.line.color.rgb = GREEN
    tf2 = c2.text_frame
    tf2.word_wrap = True

    p = tf2.paragraphs[0]
    p.text = "OUR SOLUTION: 'ECHOES OF SPACE'"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = GREEN

    points_c2 = [
        ("Living Digital Monuments:", "We resurrect 13 authentic NASA spacecraft in real-time 3D, allowing users to orbit, inspect, and explore their actual physical mechanisms and scientific payloads."),
        ("First-Person Storytelling:", "Each spacecraft tells its own story in the first person ('I am Surveyor 3...', 'I am Eagle...'), connecting human emotions with rigorous scientific milestones."),
        ("Verified NASA Data Foundation:", "100% of telemetry, coordinates, resting sites, and mission discoveries are sourced directly from NASA's NSSDCA Master Catalog and Science archives.")
    ]
    for heading, desc in points_c2:
        p = tf2.add_paragraph()
        p.text = f"✔  {heading} "
        p.font.bold = True
        p.font.size = Pt(13)
        p.font.color.rgb = WHITE
        p.space_before = Pt(10)
        p_desc = tf2.add_paragraph()
        p_desc.text = f"    {desc}"
        p_desc.font.size = Pt(12)
        p_desc.font.color.rgb = MUTED


    # ════════════════════════════════════════════════════════════
    # SLIDE 3: SYSTEM ARCHITECTURE & SOFTWARE STACK
    # ════════════════════════════════════════════════════════════
    s3 = prs.slides.add_slide(blank_layout)
    set_slide_background(s3)
    add_header(s3, 3, "Technical Architecture & Software Engineering Stack")

    tech_cards = [
        ("1. Real-Time 3D WebGL Engine", "Three.js & Canvas Pipelines", 
         "• Real-time 3D rendering with procedural planet maps\n• Zero broken image requests: dynamic crater noise maps generated via 2D Canvas\n• Raycasting surface beacons and orbital touch/mouse controls\n• Smooth 60 FPS performance across desktop and mobile devices",
         Inches(0.8), Inches(1.8), Inches(3.7), Inches(4.8)),

        ("2. Modular Story Engine", "models/story-extras.js", 
         "• Standardized drop-in architecture for new 3D spacecraft\n• 100% preserves Three.js geometry, shaders & flight rigs\n• Eliminates white-screen flash with dark pre-rendering overlays\n• Single source of truth: narration perfectly matches on-screen cards",
         Inches(4.8), Inches(1.8), Inches(3.7), Inches(4.8)),

        ("3. Web APIs & Native Systems", "Accessibility & Audio Synthesis", 
         "• Web Speech API (SpeechSynthesis) auto-narration\n• Sound-driven auto-scrolling synced to speech conclusion\n• Fullscreen API for immersive museum kiosk experiences\n• LocalStorage persistence for user preferences & age mode",
         Inches(8.8), Inches(1.8), Inches(3.7), Inches(4.8))
    ]

    for title, subtitle, bullets, left, top, w, h in tech_cards:
        box = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, w, h)
        box.fill.solid()
        box.fill.fore_color.rgb = CARD_BG
        box.line.color.rgb = RUST
        tf = box.text_frame
        tf.word_wrap = True

        p = tf.paragraphs[0]
        p.text = title
        p.font.size = Pt(14)
        p.font.bold = True
        p.font.color.rgb = GOLD

        p_sub = tf.add_paragraph()
        p_sub.text = subtitle
        p_sub.font.size = Pt(11)
        p_sub.font.color.rgb = MUTED
        p_sub.space_before = Pt(3)

        p_body = tf.add_paragraph()
        p_body.text = bullets
        p_body.font.size = Pt(12)
        p_body.font.color.rgb = WHITE
        p_body.space_before = Pt(14)


    # ════════════════════════════════════════════════════════════
    # SLIDE 4: DUAL-AUDIENCE INCLUSIVITY
    # ════════════════════════════════════════════════════════════
    s4 = prs.slides.add_slide(blank_layout)
    set_slide_background(s4)
    add_header(s4, 4, "Innovation: Dual-Audience Inclusivity (Junior vs. Specialist)")

    # Explanation banner
    banner = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(11.7), Inches(0.85))
    banner.fill.solid()
    banner.fill.fore_color.rgb = CARD_BG
    banner.line.color.rgb = GOLD
    tf_ban = banner.text_frame
    p_ban = tf_ban.paragraphs[0]
    p_ban.text = "A single click dynamically adapts the entire interface, on-screen text, vocal narration pitch/rate, and educational depth for either children or aerospace specialists."
    p_ban.font.size = Pt(13)
    p_ban.font.color.rgb = WHITE
    p_ban.alignment = PP_ALIGN.CENTER

    # Left Card: Junior Mode
    jc = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(2.9), Inches(5.6), Inches(3.9))
    jc.fill.solid()
    jc.fill.fore_color.rgb = CARD_BG
    jc.line.color.rgb = GOLD
    tf_j = jc.text_frame
    tf_j.word_wrap = True

    p = tf_j.paragraphs[0]
    p.text = "🌟 JUNIOR EXPLORER MODE (AGES 6–12)"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = GOLD

    j_points = [
        "First-Person Storytelling: Spacecraft speak directly to kids ('I weighed as much as a school bus! 🚌', 'I bounced three times!').",
        "Accessible Analogies: Complex orbital mechanics translated into intuitive relatable concepts (e.g., transit method explained as a moth flying across a car headlight).",
        "Warm Audio Narration: TTS engine modulates to a warmer, friendlier pitch and pacing (pitch: 1.05, rate: 0.95)."
    ]
    for pt in j_points:
        p = tf_j.add_paragraph()
        p.text = f"• {pt}"
        p.font.size = Pt(12.5)
        p.font.color.rgb = WHITE
        p.space_before = Pt(10)

    # Right Card: Specialist Mode
    sc = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.9), Inches(2.9), Inches(5.6), Inches(3.9))
    sc.fill.solid()
    sc.fill.fore_color.rgb = CARD_BG
    sc.line.color.rgb = MUTED
    tf_s = sc.text_frame
    tf_s.word_wrap = True

    p = tf_s.paragraphs[0]
    p.text = "🔬 MISSION SPECIALIST MODE (AGES 13+)"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = MUTED

    s_points = [
        "Rigorous Telemetry: Full NSSDCA identification, launch vehicle stages, coordinate precision, and dry/wet mass budgets.",
        "Engineering Trade-Offs: Documents thruster erosion, 1201/1202 computer overload alarms, battery thermal dissipation, and solar photon pressure.",
        "Technical Telemetry Voice: TTS modulates to steady, authoritative engineering tempo (rate: 1.0, pitch: 0.95)."
    ]
    for pt in s_points:
        p = tf_s.add_paragraph()
        p.text = f"• {pt}"
        p.font.size = Pt(12.5)
        p.font.color.rgb = WHITE
        p.space_before = Pt(10)


    # ════════════════════════════════════════════════════════════
    # SLIDE 5: 13 NASA DEVICES ACROSS 3 CELESTIAL REALMS
    # ════════════════════════════════════════════════════════════
    s5 = prs.slides.add_slide(blank_layout)
    set_slide_background(s5)
    add_header(s5, 5, "Official NASA Space Apps Catalog: 13 Devices, 7 Working 3D Tours")

    realms = [
        ("🌕 THE MOON", "4 Official NASA Devices", 
         "1. Surveyor 3  [3D STORY TOUR]\n    First lunar soil mechanics tests (1967-035A)\n2. Apollo 11 Lunar Module  [3D STORY TOUR]\n    Eagle descent stage & laser retroreflector (1969-059C)\n3. Lunar Roving Vehicles (LRVs)  [DOSSIER]\n    Apollo 15–17 folding buggies with wire wheels\n4. ALSEP Scientific Packages  [DOSSIER]\n    Long-duration nuclear-powered seismic stations",
         Inches(0.8), Inches(1.8), Inches(3.7), Inches(4.8)),

        ("🔴 MARS", "5 Official NASA Devices", 
         "1. Ingenuity Mars Helicopter  [3D STORY TOUR]\n    First powered flight on another planet (2020-052B)\n2. Mars Pathfinder & Sojourner  [3D STORY TOUR]\n    Airbag touchdown & first microrover (1996-068A)\n3. Opportunity Rover (MER-B)  [3D STORY TOUR]\n    14-year, 45 km endurance marathon (2003-032A)\n4. Viking 1 & 2 Landers  [DOSSIER]\n    First successful Mars landing & biology tests\n5. Phoenix & InSight Landers  [DOSSIER]\n    Martian arctic ice & 1,319 marsquakes",
         Inches(4.8), Inches(1.8), Inches(3.7), Inches(4.8)),

        ("🌌 DEEP SPACE", "4 Official NASA Devices", 
         "1. Pioneer 10 Deep Space Probe  [3D STORY TOUR]\n    First past Asteroid Belt & Jupiter (1972-012A)\n2. Kepler Space Telescope  [3D STORY TOUR]\n    Discovered 2,662+ confirmed exoplanets (2009-011A)\n3. Dawn Spacecraft  [DOSSIER]\n    Orbit of Vesta & Ceres with ion propulsion\n4. NEAR Shoemaker  [DOSSIER]\n    First soft touchdown on an asteroid (433 Eros)",
         Inches(8.8), Inches(1.8), Inches(3.7), Inches(4.8))
    ]

    for title, count_label, items, left, top, w, h in realms:
        box = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, w, h)
        box.fill.solid()
        box.fill.fore_color.rgb = CARD_BG
        box.line.color.rgb = RUST
        tf = box.text_frame
        tf.word_wrap = True

        p = tf.paragraphs[0]
        p.text = title
        p.font.size = Pt(16)
        p.font.bold = True
        p.font.color.rgb = GOLD

        p_cnt = tf.add_paragraph()
        p_cnt.text = count_label
        p_cnt.font.size = Pt(11)
        p_cnt.font.color.rgb = MUTED
        p_cnt.space_before = Pt(2)

        p_items = tf.add_paragraph()
        p_items.text = items
        p_items.font.size = Pt(11.5)
        p_items.font.color.rgb = WHITE
        p_items.space_before = Pt(14)


    # ════════════════════════════════════════════════════════════
    # SLIDE 6: INTERACTIVE EXPERIENCE: SOUND JOURNEY & QUIZZES
    # ════════════════════════════════════════════════════════════
    s6 = prs.slides.add_slide(blank_layout)
    set_slide_background(s6)
    add_header(s6, 6, "Interactive Experience: Voice Journey & Telemetry Quizzes")

    features = [
        ("🔊 Sound-Driven Auto-Scroll", "Hands-Free Guided Storytelling",
         "• Clicking '▶ Start Interactive Journey' begins automated chapter playback\n• Voice reads the active chapter text word-for-word\n• As speech ends, the page automatically smooth-scrolls to the next chapter\n• Three.js camera rigs automatically pivot to highlight corresponding rover/probe parts\n• User wheel scroll or touch immediately pauses playback safely",
         Inches(0.8), Inches(1.8), Inches(5.6), Inches(4.8)),

        ("🚀 Mission Debrief Quizzes", "Reinforcing STEM Education",
         "• Every 3D model concludes with an interactive 4-question telemetry quiz\n• Evaluates user knowledge on launch vehicles, payloads, and discoveries\n• Instant visual feedback (green for correct, red for incorrect)\n• Detailed scientific explanations provided for every answer\n• Qualification badges: '🏆 Mission Specialist Qualified' or '🌟 Completed'",
         Inches(6.9), Inches(1.8), Inches(5.6), Inches(4.8))
    ]

    for title, subtitle, bullets, left, top, w, h in features:
        box = s6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, w, h)
        box.fill.solid()
        box.fill.fore_color.rgb = CARD_BG
        box.line.color.rgb = GOLD
        tf = box.text_frame
        tf.word_wrap = True

        p = tf.paragraphs[0]
        p.text = title
        p.font.size = Pt(15)
        p.font.bold = True
        p.font.color.rgb = GOLD

        p_sub = tf.add_paragraph()
        p_sub.text = subtitle
        p_sub.font.size = Pt(11)
        p_sub.font.color.rgb = MUTED
        p_sub.space_before = Pt(3)

        p_body = tf.add_paragraph()
        p_body.text = bullets
        p_body.font.size = Pt(13)
        p_body.font.color.rgb = WHITE
        p_body.space_before = Pt(14)


    # ════════════════════════════════════════════════════════════
    # SLIDE 7: IMPACT, TEAM & PROJECT LINKS
    # ════════════════════════════════════════════════════════════
    s7 = prs.slides.add_slide(blank_layout)
    set_slide_background(s7)
    add_header(s7, 7, "Impact, University Heritage & Submission Links")

    # Left Column: Team & Impact
    lc = s7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.8), Inches(5.6), Inches(4.8))
    lc.fill.solid()
    lc.fill.fore_color.rgb = CARD_BG
    lc.line.color.rgb = RUST
    tf_l = lc.text_frame
    tf_l.word_wrap = True

    p = tf_l.paragraphs[0]
    p.text = "KOYA UNIVERSITY ENGINEERING TEAM"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = GOLD

    impact_points = [
        ("Department of Software Engineering:", "Developed by software engineering students at the Faculty of Engineering, Koya University (Kurdistan Region of Iraq)."),
        ("STEM & Educational Outreach:", "Demonstrates that university software engineers can build high-performance WebGL educational tools rivaling commercial science museum exhibits."),
        ("Preserving Off-World Heritage:", "Supports international initiatives to preserve historic extraterrestrial landing sites as shared human cultural landmarks.")
    ]
    for heading, desc in impact_points:
        p = tf_l.add_paragraph()
        p.text = f"•  {heading} "
        p.font.bold = True
        p.font.size = Pt(13)
        p.font.color.rgb = WHITE
        p.space_before = Pt(10)
        p_desc = tf_l.add_paragraph()
        p_desc.text = f"    {desc}"
        p_desc.font.size = Pt(12)
        p_desc.font.color.rgb = MUTED

    # Right Column: Submission Links
    rc = s7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.9), Inches(1.8), Inches(5.6), Inches(4.8))
    rc.fill.solid()
    rc.fill.fore_color.rgb = CARD_BG
    rc.line.color.rgb = GREEN
    tf_r = rc.text_frame
    tf_r.word_wrap = True

    p = tf_r.paragraphs[0]
    p.text = "PROJECT LINKS & REPOSITORY"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = GREEN

    p = tf_r.add_paragraph()
    p.text = "🔗 GitHub Open-Source Repository:"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.space_before = Pt(14)

    p = tf_r.add_paragraph()
    p.text = "https://github.com/anasmusa-create/KoyaSpace"
    p.font.size = Pt(12)
    p.font.color.rgb = GOLD
    p.space_before = Pt(2)

    p = tf_r.add_paragraph()
    p.text = "🚀 Submission Deliverables Complete:"
    p.font.size = Pt(13)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.space_before = Pt(16)

    deliverables = [
        "13 Verified NASA Equipment Records across Moon, Mars & Deep Space",
        "7 Interactive 3D WebGL Model Tours with Camera Rigs",
        "6 NASA Mission Archive Telemetry Dossiers",
        "Dual-Audience Junior & Specialist Narration Engine",
        "Zero 404 Console Errors & Fast Instant Loading"
    ]
    for d in deliverables:
        p = tf_r.add_paragraph()
        p.text = f"✔  {d}"
        p.font.size = Pt(11.5)
        p.font.color.rgb = MUTED
        p.space_before = Pt(6)

    # Save presentation
    out_path = os.path.join(r"C:\AntigravityProjects\NasaChallenge", "Echoes_of_Space_Presentation.pptx")
    prs.save(out_path)
    print(f"Presentation saved successfully to: {out_path}")

create_deck()
