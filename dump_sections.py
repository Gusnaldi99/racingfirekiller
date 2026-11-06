with open('racing_raw.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
# extract all text inside sections
sections = re.findall(r'<section[^>]*id=[\"\']([^\"\']+)[\"\'][^>]*>(.*?)</section>', html, re.DOTALL | re.IGNORECASE)
for sec_id, sec_content in sections:
    print(f"\n=================== SECTION: {sec_id} ===================")
    clean = re.sub(r'<[^>]+>', ' ', sec_content)
    clean = ' '.join(clean.split())
    print(clean)

