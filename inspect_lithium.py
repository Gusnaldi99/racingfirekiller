import re

with open('lithium.js', 'r', encoding='utf-8', errors='ignore') as f:
    js = f.read()

# Look for navigation links or id anchors (#)
anchors = sorted(list(set(re.findall(r'href=[\"\'](#[a-zA-Z0-9_-]+)[\"\']', js) + re.findall(r'\"(#[a-zA-Z0-9_-]+)\"', js))))
print('Anchors/Sections in lithium:', anchors)

# Search for component names or major sections
matches = re.findall(r'id:\"([a-zA-Z0-9_-]+)\"', js)
print('IDs found:', set(matches))

# Let's search for titles/headings in js
titles = re.findall(r'title:\"([^\"]+)\"', js)
print('Titles:', titles[:20])

subtitles = re.findall(r'subtitle:\"([^\"]+)\"', js)
print('Subtitles:', subtitles[:20])

