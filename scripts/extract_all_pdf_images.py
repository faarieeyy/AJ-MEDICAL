import pymupdf, os

doc = pymupdf.open('AJ_Medical_Pagewise_Full_Website_Layouts.pdf')
os.makedirs('pdf_raw_images', exist_ok=True)

for pno in range(len(doc)):
    page = doc[pno]
    images = page.get_images(full=True)
    print(f"Page {pno+1}: {len(images)} images")
    for idx, img in enumerate(images):
        xref = img[0]
        bi = doc.extract_image(xref)
        w, h = bi['width'], bi['height']
        ext = bi['ext']
        data = bi['image']
        out_fn = f"pdf_raw_images/p{pno+1}_img{idx}_{w}x{h}.{ext}"
        with open(out_fn, 'wb') as f:
            f.write(data)
        print(f"  Saved {out_fn} [{len(data):,} bytes]")

print("Extracted all raw images from PDF!")
