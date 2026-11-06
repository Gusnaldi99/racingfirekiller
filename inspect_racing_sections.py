with open('racing_raw.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
body = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
if body:
    print("Body length:", len(body.group(1)))
    # print all section tags
    sections = re.findall(r'<section[^>]*>(.*?)</section>', body.group(1), re.DOTALL | re.IGNORECASE)
    print(f"Total sections: {len(sections)}")
    for i, s in enumerate(sections):
        id_m = re.search(r'id=[\"\']([^\"\']+)[\"\']', s)
        cls_m = re.search(r'class=[\"\']([^\"\']+)[\"\']', s)
        print(f"Section {i+1}: ID={id_m.group(1) if id_m else 'None'} | Class={cls_m.group(1)[:50] if cls_m else 'None'}")

