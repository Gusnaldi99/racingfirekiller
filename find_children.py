import re

with open('lithium.js', 'r', encoding='utf-8', errors='ignore') as f:
    js = f.read()

# find children: "..."
children_texts = re.findall(r'children:[\"\']([^\"\']{10,120})[\"\']', js)
print("Children texts found:", len(children_texts))

# let's print unique interesting ones
seen = set()
for t in children_texts:
    if t not in seen:
        seen.add(t)
        if any(w in t.lower() for w in ['fire', 'killer', 'lithium', 'hartindo', 'bahaya', 'proteksi', 'solusi', 'produk', 'keunggulan', 'spesifikasi', 'sertifikasi', 'layanan', 'edukasi', 'baterai', 'apar', 'ev', 'af31', 'fast']):
            print(" +", t)

