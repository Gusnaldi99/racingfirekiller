import re

with open('lithium.js', 'r', encoding='utf-8', errors='ignore') as f:
    js = f.read()

# Let's find headings: text inside h1, h2, h3, h4 tags or aria-labelledby
headings = re.findall(r'<(?:h[1-6]|p|span|div)[^>]*class=[\"\'][^\"\']*[\"\'][^>]*>([^<]{10,120})<', js)
print("Headings/Labels found:", len(headings))

# Look for section headers:
section_headers = []
for h in headings:
    if any(k in h.lower() for k in ['bahaya', 'solusi', 'mengapa', 'keunggulan', 'produk', 'spesifikasi', 'sertifikasi', 'tentang', 'kontak', 'cara', 'perlindungan', 'edukasi', 'regulasi', 'layanan', 'mitra', 'klien', 'testimoni']):
        section_headers.append(h)

for s in set(section_headers):
    print(" -", s)

