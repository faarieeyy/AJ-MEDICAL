from PIL import Image
import os

os.makedirs('public/images', exist_ok=True)

# Helper to crop relative coordinates
def crop_rel(img, x1_pct, y1_pct, x2_pct, y2_pct, out_name):
    w, h = img.size
    box = (int(w * x1_pct), int(h * y1_pct), int(w * x2_pct), int(h * y2_pct))
    c = img.crop(box)
    c.save(f'public/images/{out_name}.png')
    print(f'Cropped {out_name}: {c.size}')

# Load pages
p1 = Image.open('pdf_renders/page_1.png')
p2 = Image.open('pdf_renders/page_2.png')
p3 = Image.open('pdf_renders/page_3.png')
p4 = Image.open('pdf_renders/page_4.png')
p5 = Image.open('pdf_renders/page_5.png')

print("Cropping assets from Page 1...")
# Page 1 logo
crop_rel(p1, 0.05, 0.005, 0.27, 0.022, 'logo_dark')
# Page 1 Hero Scope
crop_rel(p1, 0.44, 0.02, 1.0, 0.23, 'hero_scope')

# Page 1 Service cards (4 cards)
# y range: ~0.24 to 0.35
crop_rel(p1, 0.045, 0.239, 0.255, 0.320, 'service_flexible_scope')
crop_rel(p1, 0.275, 0.239, 0.485, 0.320, 'service_rigid_scope')
crop_rel(p1, 0.505, 0.239, 0.715, 0.320, 'service_storz_equipment')
crop_rel(p1, 0.735, 0.239, 0.945, 0.320, 'service_ultrasound_probe')

# Page 1 Why Choose Cart
crop_rel(p1, 0.55, 0.37, 1.0, 0.575, 'why_choose_cart')

# Page 1 Client logos
crop_rel(p1, 0.05, 0.615, 0.22, 0.670, 'client_zulekha')
crop_rel(p1, 0.235, 0.615, 0.405, 0.670, 'client_mediclinic')
crop_rel(p1, 0.42, 0.615, 0.59, 0.670, 'client_kanad')
crop_rel(p1, 0.605, 0.615, 0.775, 0.670, 'client_nmc')
crop_rel(p1, 0.79, 0.615, 0.96, 0.670, 'client_aster')

# Page 1 CTA Surgical Lamp
crop_rel(p1, 0.50, 0.73, 0.98, 0.86, 'cta_surgical_lamp')

# Page 1 Footer logo
crop_rel(p1, 0.05, 0.89, 0.26, 0.93, 'logo_light')

print("Cropping assets from Page 2...")
# Page 2 Hero Scope
crop_rel(p2, 0.46, 0.015, 1.0, 0.17, 'about_hero_scope')
# Page 2 Our Story Microscope
crop_rel(p2, 0.48, 0.18, 0.98, 0.32, 'about_story_microscope')
# Page 2 What Drives Us Scope
crop_rel(p2, 0.46, 0.34, 1.0, 0.48, 'about_outcomes_scope')
# Page 2 Our Reach Globe
crop_rel(p2, 0.30, 0.58, 0.72, 0.74, 'about_reach_globe')
# Page 2 Committed to a Healthier Tomorrow
crop_rel(p2, 0.51, 0.76, 0.81, 0.91, 'about_technician_repair')
crop_rel(p2, 0.82, 0.80, 0.96, 0.865, 'about_monitors')

print("Cropping assets from Page 3...")
# Page 3 Hero Scope
crop_rel(p3, 0.46, 0.015, 1.0, 0.19, 'services_hero_scope')
# Page 3 Service Cards
crop_rel(p3, 0.08, 0.24, 0.48, 0.35, 'service_card_endoscope')
crop_rel(p3, 0.51, 0.24, 0.91, 0.35, 'service_card_storz')
crop_rel(p3, 0.08, 0.37, 0.48, 0.48, 'service_card_ultrasound')
crop_rel(p3, 0.51, 0.37, 0.91, 0.48, 'service_card_surgical')
# Page 3 Need Support CTA Scope
crop_rel(p3, 0.48, 0.71, 1.0, 0.86, 'services_cta_scope')

print("Cropping assets from Page 4...")
# Page 4 Hero Scope
crop_rel(p4, 0.46, 0.015, 1.0, 0.19, 'endoscopy_hero_scope')
# Page 4 Extending Life Tip
crop_rel(p4, 0.035, 0.21, 0.52, 0.36, 'endoscopy_tip')
# Page 4 Process banner right
crop_rel(p4, 0.58, 0.50, 1.0, 0.66, 'endoscopy_process_scope')
# Page 4 Trusted Care Technician
crop_rel(p4, 0.44, 0.69, 1.0, 0.85, 'endoscopy_technician_scope')
# Page 4 CTA Scope
crop_rel(p4, 0.48, 0.85, 1.0, 0.94, 'endoscopy_cta_scope')

print("Cropping assets from Page 5...")
# Page 5 Hero Scope
crop_rel(p5, 0.46, 0.018, 1.0, 0.23, 'contact_hero_scope')
# Page 5 Map
crop_rel(p5, 0.53, 0.365, 0.955, 0.655, 'contact_map')
# Page 5 Headset
crop_rel(p5, 0.48, 0.67, 1.0, 0.84, 'contact_headset')

print("All crops completed successfully!")
