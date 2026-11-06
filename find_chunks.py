import re

with open('lithium.js', 'r', encoding='utf-8', errors='ignore') as f:
    js = f.read()

# Look for dynamic imports or fetch
imports = re.findall(r'import\([\"\']([^\"\']+)[\"\']\)', js)
print('Dynamic imports:', imports)

# Look for fetch or json
fetches = re.findall(r'fetch\([\"\']([^\"\']+)[\"\']\)', js)
print('Fetches:', fetches)

# Let's find chunks mentioned in js
chunks = re.findall(r'\"([a-zA-Z0-9_\-\.\/]+\.js)\"', js)
print('Other JS files mentioned:', set(chunks))

