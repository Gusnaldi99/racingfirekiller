import re

with open('lithium.js', 'r', encoding='utf-8', errors='ignore') as f:
    js = f.read()

# Look for Indonesian words
id_words = re.findall(r'\"([^\"]*?(?:kebakaran|pemadam|keunggulan|spesifikasi|baterai|bahaya|kendaraan|mobil|industri|sertifikasi|garansi)[^\"]*?)\"', js, re.IGNORECASE)
print(f"Indonesian text segments count: {len(id_words)}")
for w in sorted(list(set(id_words)))[:30]:
    print(" -", w)

