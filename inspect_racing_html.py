with open('racing_raw.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

import re
print("HTML length:", len(html))
print("Stylesheets:", re.findall(r'<link[^>]*rel=[\"\']stylesheet[\"\'][^>]*href=[\"\']([^\"\']+)[\"\']', html))
print("Fonts:", re.findall(r'fonts\.googleapis\.com[^\"]*', html))
print("Inline styles:", len(re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL)))
print("Images in racing_raw.html:", re.findall(r'<img[^>]*src=[\"\']([^\"\']+)[\"\']', html))

