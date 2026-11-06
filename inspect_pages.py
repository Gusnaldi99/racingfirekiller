import re

def inspect_file(fname):
    with open(fname, 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()
    print(f"=== {fname} ({len(text)} bytes) ===")
    clean = re.sub(r'<script.*?</script>', '', text, flags=re.DOTALL | re.IGNORECASE)
    clean = re.sub(r'<style.*?</style>', '', clean, flags=re.DOTALL | re.IGNORECASE)
    clean = re.sub(r'<svg.*?</svg>', '', clean, flags=re.DOTALL | re.IGNORECASE)
    lines = [l.strip() for l in re.sub(r'<[^>]+>', '\n', clean).split('\n') if l.strip()]
    print(f"Non-empty lines count: {len(lines)}")
    for i, line in enumerate(lines[:60]):
        print(f"{i+1}: {line}")

inspect_file('lithium_raw.html')
print("\n" + "="*50 + "\n")
inspect_file('racing_raw.html')

