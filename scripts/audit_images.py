import os, re
from PIL import Image

img_refs = set()
for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.next' in root or '.gemini' in root or '.git' in root:
        continue
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8', errors='ignore') as fl:
                content = fl.read()
                matches = re.findall(r'[\'"](/images/[^\'"]+)[\'"]', content)
                for m in matches:
                    img_refs.add(m)

print(f"Total referenced images: {len(img_refs)}")
for r in sorted(img_refs):
    local_p = os.path.join('public', r.lstrip('/'))
    if os.path.exists(local_p):
        try:
            im = Image.open(local_p)
            print(f"EXISTS: {r} -> {im.format}, {im.size}, {os.path.getsize(local_p)} bytes")
        except Exception as e:
            print(f"ERROR reading {local_p}: {e}")
    else:
        print(f"MISSING: {r}")
