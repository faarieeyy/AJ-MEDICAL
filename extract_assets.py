import pymupdf
import os

doc = pymupdf.open('AJ_Medical_Pagewise_Full_Website_Layouts.pdf')
os.makedirs('extracted_assets', exist_ok=True)

image_count = 0
for i, page in enumerate(doc):
    for img_index, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image['image']
        image_ext = base_image['ext']
        w = base_image['width']
        h = base_image['height']
        image_name = f'extracted_assets/p{i+1}_img{img_index}_{xref}.{image_ext}'
        with open(image_name, 'wb') as f:
            f.write(image_bytes)
        image_count += 1
        print(f"Page {i+1}: Image {xref} ({w}x{h}, {image_ext}, {len(image_bytes)} bytes) -> {image_name}")

print(f"Total images extracted: {image_count}")
