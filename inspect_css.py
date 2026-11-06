with open('lithium.css', 'r', encoding='utf-8', errors='ignore') as f:
    css = f.read()

print("CSS length:", len(css))
# Check fonts
import re
fonts = re.findall(r'font-family:[^;}]+', css)
print("Fonts:", set(fonts))

# Check root variables or custom properties
vars_found = re.findall(r'(--[a-zA-Z0-9_-]+:[^;}]+)', css)
print("CSS Variables:", len(vars_found))
for v in vars_found[:15]:
    print(" -", v)

