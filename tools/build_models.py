import os
import re

# ── Loader HTML snippet (prevents any white screen flash) ──
def get_loader_html(craft_name):
    return f'''<div id="se-loader" style="position:fixed;inset:0;background:#05070B;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#f6e9da;font-family:'IBM Plex Sans',system-ui,sans-serif;transition:opacity 0.6s ease, visibility 0.6s ease;">
  <div style="width:48px;height:48px;border:3px solid rgba(255,214,170,0.18);border-top:3px solid #c2693c;border-radius:50%;animation:se-spin 1s linear infinite;margin-bottom:18px;"></div>
  <div style="font-family:Fraunces,Georgia,serif;font-size:26px;letter-spacing:-0.02em;margin-bottom:6px;">{craft_name}</div>
  <div style="font-size:12px;color:#9db2c7;letter-spacing:0.08em;text-transform:uppercase;">Establishing NSSDCA Telemetry Link...</div>
</div>
<style>
@keyframes se-spin {{ 0% {{ transform: rotate(0deg); }} 100% {{ transform: rotate(360deg); }} }}
</style>'''

# ── Ensure dark background inline on html and body tags ──
def apply_dark_theme_tags(html, craft_name):
    # Ensure html tag has dark background
    html = re.sub(
        r'<html[^>]*>',
        '<html lang="en" style="background-color: #05070B; color: #f5f5f7;">',
        html,
        count=1,
        flags=re.IGNORECASE
    )
    # Ensure body tag has dark background
    html = re.sub(
        r'<body([^>]*)>',
        lambda m: f'<body{m.group(1)} style="background-color: #05070B; margin: 0;">\n' + get_loader_html(craft_name),
        html,
        count=1,
        flags=re.IGNORECASE
    )
    return html

print("Loader helpers defined.")
