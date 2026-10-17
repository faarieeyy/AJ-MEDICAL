import os
from PIL import Image

def convert_to_webp(src_path, dst_path, is_logo_or_graphic=False):
    if not os.path.exists(src_path):
        print(f"Skipping missing source: {src_path}")
        return False
    
    img = Image.open(src_path)
    # Determine best webp settings for exact quality
    if is_logo_or_graphic or img.mode in ('RGBA', 'LA', 'P'):
        # Lossless WebP for logos and transparent graphics
        img.save(dst_path, 'WEBP', lossless=True, quality=100, method=6)
    else:
        # High-fidelity exact quality for photos
        # method=6 does the most thorough compression search
        img.save(dst_path, 'WEBP', quality=98, method=6)
    
    orig_size = os.path.getsize(src_path)
    new_size = os.path.getsize(dst_path)
    print(f"CONVERTED: {src_path} ({img.size}) -> {dst_path} [{new_size:,} bytes]")
    return True

def run():
    print("--- 1. Converting App-Referenced High-Res Masters ---")
    
    # 1. Home hero background from master scratch_hero_bg_p1.png
    if os.path.exists('scratch_hero_bg_p1.png'):
        convert_to_webp('scratch_hero_bg_p1.png', 'public/images/home-hero-bg.webp')
    
    # 2. Service Cards from full 834x687 master PNGs
    service_maps = [
        ('public/images/service_card_endoscope.png', 'public/images/flexible-endoscope.webp'),
        ('public/images/service_card_storz.png', 'public/images/storz-equipment.webp'),
        ('public/images/service_card_surgical.png', 'public/images/surgical-instruments.webp'),
        ('public/images/service_card_ultrasound.png', 'public/images/ultrasound-probe.webp'),
        ('public/images/service_rigid_scope.png', 'public/images/rigid-endoscope.webp'),
    ]
    for src, dst in service_maps:
        convert_to_webp(src, dst)

    # 3. Hospital Logos (Lossless WebP)
    logo_maps = [
        ('public/images/client_zulekha.png', 'public/images/hospital-zulekha.webp', True),
        ('public/images/client_mediclinic.png', 'public/images/hospital-mediclinic.webp', True),
        ('public/images/client_kanad.png', 'public/images/hospital-kanad.webp', True),
        ('public/images/client_nmc.png', 'public/images/hospital-nmc.webp', True),
        ('public/images/client_aster.png', 'public/images/hospital-aster.webp', True),
        ('public/images/logo_dark.png', 'public/images/logo-dark.webp', True),
        ('public/images/logo_light.png', 'public/images/logo-white.webp', True),
    ]
    for src, dst, is_logo in logo_maps:
        convert_to_webp(src, dst, is_logo)

    # 4. About Section Visual from scratch_clean_1020.png
    if os.path.exists('scratch_clean_1020.png'):
        convert_to_webp('scratch_clean_1020.png', 'public/images/about-technician-visual.webp')

    # 5. Page Features from master PNGs
    page_assets = [
        ('public/images/cta_surgical_lamp.png', 'public/images/surgical-lamp.webp'),
        ('public/images/about_story_microscope.png', 'public/images/technician-microscope.webp'),
        ('public/images/about_technician_repair.png', 'public/images/technician-repair.webp'),
        ('public/images/about_monitors.png', 'public/images/hospital-monitors.webp'),
        ('public/images/why_choose_cart.png', 'public/images/equipment-cart.webp'),
        ('public/images/about_reach_globe.png', 'public/images/earth-globe.webp'),
        ('public/images/contact_headset.png', 'public/images/contact-headset.webp'),
        ('public/images/endoscopy_tip.png', 'public/images/endoscopy-tip.webp'),
        ('public/images/endoscopy_technician_scope.png', 'public/images/technician-scope-tuning.webp'),
    ]
    for src, dst in page_assets:
        convert_to_webp(src, dst)

    print("\n--- 2. Converting ALL other PNG files in public/images to WebP ---")
    for f in os.listdir('public/images'):
        if f.endswith('.png'):
            base = os.path.splitext(f)[0]
            webp_name = f"{base}.webp"
            src_p = os.path.join('public/images', f)
            dst_p = os.path.join('public/images', webp_name)
            is_logo = 'logo' in f.lower() or 'client' in f.lower()
            convert_to_webp(src_p, dst_p, is_logo)

    print("\n--- 3. Converting Slices in public/slices to WebP ---")
    if os.path.exists('public/slices'):
        for f in os.listdir('public/slices'):
            if f.endswith('.png'):
                base = os.path.splitext(f)[0]
                webp_name = f"{base}.webp"
                src_p = os.path.join('public/slices', f)
                dst_p = os.path.join('public/slices', webp_name)
                convert_to_webp(src_p, dst_p)

    print("\nAll images converted to WebP format in exact quality successfully!")

if __name__ == '__main__':
    run()
