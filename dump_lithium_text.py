import re

with open('lithium.js', 'r', encoding='utf-8', errors='ignore') as f:
    js = f.read()

# Let's extract all Indonesian strings
strings = re.findall(r'\"([A-Z0-9\u00C0-\u017F][^\"\\]{15,300})\"', js)
id_strings = [s for s in strings if re.search(r'[a-z]', s) and not re.search(r'[{}\[\]<>]|var |function |class |return |const |import ', s)]

print(f"Total clean strings: {len(id_strings)}")
for i, s in enumerate(id_strings):
    print(f"{i+1}: {s}")

