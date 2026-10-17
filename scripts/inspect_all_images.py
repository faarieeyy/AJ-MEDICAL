import os
from PIL import Image

files = os.listdir('public/images')
pngs = [f for f in files if f.endswith('.png')]
webps = [f for f in files if f.endswith('.webp')]

print(f"PNG files ({len(pngs)}):")
for p in sorted(pngs):
    path = os.path.join('public/images', p)
    im = Image.open(path)
    print(f"  {p:35s} size={im.size} bytes={os.path.getsize(path)}")

print(f"\nWEBP files ({len(webps)}):")
for w in sorted(webps):
    path = os.path.join('public/images', w)
    im = Image.open(path)
    print(f"  {w:35s} size={im.size} bytes={os.path.getsize(path)}")
