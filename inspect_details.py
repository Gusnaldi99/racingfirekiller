import re

# Let's inspect racing_raw.html in detail
with open('racing_raw.html', 'r', encoding='utf-8', errors='ignore') as f:
    racing_html = f.read()

print("=== RACING FIRE KILLER FULL TEXT ===")
clean_racing = re.sub(r'<script.*?</script>', '', racing_html, flags=re.DOTALL | re.IGNORECASE)
clean_racing = re.sub(r'<style.*?</style>', '', clean_racing, flags=re.DOTALL | re.IGNORECASE)
clean_racing = re.sub(r'<svg.*?</svg>', '', clean_racing, flags=re.DOTALL | re.IGNORECASE)
racing_lines = [l.strip() for l in re.sub(r'<[^>]+>', '\n', clean_racing).split('\n') if l.strip()]
for line in racing_lines:
    print(line)

print("\n" + "="*50 + "\n")

# Let's inspect lithium.js to extract all section titles, components, features, navigation
with open('lithium.js', 'r', encoding='utf-8', errors='ignore') as f:
    js_text = f.read()

# find JSX strings or section headers
strings = re.findall(r'"([^"\\]{4,100})"', js_text)
print("Found strings in lithium.js:", len(strings))
# print sample interesting strings
interesting = [s for s in strings if any(k in s.lower() for k in ['section', 'apar', 'hartindo', 'keunggulan', 'fitur', 'spesifikasi', 'sertifikasi', 'hubungi', 'faq', 'tentang', 'produk', 'kontak', 'fast'])]
print(f"Interesting strings count: {len(interesting)}")
for s in interesting[:50]:
    print(" -", s)

