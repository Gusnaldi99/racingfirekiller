with open('racing_raw.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

print(html[:4000])
print("\n--- NEXT 4000 ---\n")
print(html[4000:8000])
print("\n--- NEXT 4000 ---\n")
print(html[8000:12000])
print("\n--- NEXT 4000 ---\n")
print(html[12000:16000])
print("\n--- NEXT 4000 ---\n")
print(html[16000:])

