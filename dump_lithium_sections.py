import re

with open('lithium.js', 'r', encoding='utf-8', errors='ignore') as f:
    js = f.read()

# Let's search for the main landing page sections / headings in lithium.js
matches = re.findall(r'(\b(?:hero|navbar|features|products|specifications|specs|certifications|contact|about|safety|footer|application)[a-zA-Z0-9_]*\b)', js, re.IGNORECASE)
print("Component matches:", set(matches))

# Let's dump all text between index 100 and 450 from dump_lithium_text.py
strings = re.findall(r'\"([A-Z0-9\u00C0-\u017F][^\"\\]{15,300})\"', js)
id_strings = [s for s in strings if re.search(r'[a-z]', s) and not re.search(r'[{}\[\]<>]|var |function |class |return |const |import |M\d+|determine', s, re.IGNORECASE)]
for i, s in enumerate(id_strings[:120]):
    print(f"{i+1}: {s}")

