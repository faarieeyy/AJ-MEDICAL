import os
from PIL import Image

os.makedirs('public/images', exist_ok=True)

# 1. Page 1 Hero Photo: Doctor holding endoscopy handle
p1 = Image.open('pdf_renders/page_1.png')
# Total size: 2084 x 5928
# Hero photo is on the right: x: 1050 to 2084, y: 150 to 1350
hero_photo = p1.crop((1020, 150, 2084, 1360))
hero_photo.save('public/images/home-hero.webp', 'WEBP', quality=92)
print('Saved home-hero.webp:', hero_photo.size)

# 2. Page 1 Service 1: Flexible Endoscope (hands holding black scope)
# y: 1720 to 2015, x: 100 to 535
srv1 = p1.crop((100, 1720, 535, 2015))
srv1.save('public/images/flexible-endoscope.webp', 'WEBP', quality=92)
print('Saved flexible-endoscope.webp:', srv1.size)

# 3. Page 1 Service 2: Rigid Endoscope (laparoscope)
srv2 = p1.crop((580, 1720, 1020, 2015))
srv2.save('public/images/rigid-endoscope.webp', 'WEBP', quality=92)
print('Saved rigid-endoscope.webp:', srv2.size)

# 4. Page 1 Service 3: Karl Storz Equipment (stacked CCU and light source)
srv3 = p1.crop((1065, 1720, 1505, 2015))
srv3.save('public/images/storz-equipment.webp', 'WEBP', quality=92)
print('Saved storz-equipment.webp:', srv3.size)

# 5. Page 1 Service 4: Ultrasound Probe (cart & transducer)
srv4 = p1.crop((1550, 1720, 1985, 2015))
srv4.save('public/images/ultrasound-probe.webp', 'WEBP', quality=92)
print('Saved ultrasound-probe.webp:', srv4.size)

# 6. Page 1 Why Choose Cart: Device cart
# y: 2300 to 3350, x: 1200 to 2084
cart = p1.crop((1200, 2350, 2084, 3350))
cart.save('public/images/equipment-cart.webp', 'WEBP', quality=92)
print('Saved equipment-cart.webp:', cart.size)

# 7. Page 1 Hospital Logos
p1.crop((110, 4015, 465, 4170)).save('public/images/hospital-zulekha.webp', 'WEBP', quality=95)
p1.crop((500, 4015, 845, 4170)).save('public/images/hospital-mediclinic.webp', 'WEBP', quality=95)
p1.crop((875, 4015, 1220, 4170)).save('public/images/hospital-kanad.webp', 'WEBP', quality=95)
p1.crop((1255, 4015, 1600, 4170)).save('public/images/hospital-nmc.webp', 'WEBP', quality=95)
p1.crop((1630, 4015, 1980, 4170)).save('public/images/hospital-aster.webp', 'WEBP', quality=95)
print('Saved hospital logos in WebP')

# 8. Page 1 CTA: Surgical Lamp
# y: 4450 to 5100, x: 1100 to 2040
lamp = p1.crop((1150, 4480, 2040, 5080))
lamp.save('public/images/surgical-lamp.webp', 'WEBP', quality=92)
print('Saved surgical-lamp.webp:', lamp.size)

# 9. Page 2 Assets
p2 = Image.open('pdf_renders/page_2.png')
# Total size: 2084 x 7051
# Scope mechanism close-up from hero:
scope_mech = p2.crop((1150, 150, 2084, 1150))
scope_mech.save('public/images/endoscopy-mechanism.webp', 'WEBP', quality=92)
print('Saved endoscopy-mechanism.webp:', scope_mech.size)

# Technician under microscope: y: 1400 to 2150, x: 1150 to 2000
microscope = p2.crop((1100, 1380, 2000, 2180))
microscope.save('public/images/technician-microscope.webp', 'WEBP', quality=92)
print('Saved technician-microscope.webp:', microscope.size)

# Glowing 3D Earth Globe: y: 4200 to 5200, x: 650 to 1550
globe = p2.crop((650, 4200, 1550, 5200))
globe.save('public/images/earth-globe.webp', 'WEBP', quality=92)
print('Saved earth-globe.webp:', globe.size)

# Technician repairing equipment: y: 5600 to 6400, x: 1080 to 1750
tech_rep = p2.crop((1080, 5580, 1750, 6420))
tech_rep.save('public/images/technician-repair.webp', 'WEBP', quality=92)
print('Saved technician-repair.webp:', tech_rep.size)

# Vital signs monitor: y: 5750 to 6150, x: 1720 to 2010
vitals = p2.crop((1720, 5750, 2010, 6150))
vitals.save('public/images/hospital-monitor.webp', 'WEBP', quality=92)
print('Saved hospital-monitor.webp:', vitals.size)

# 10. Page 3 Assets
p3 = Image.open('pdf_renders/page_3.png')
# Surgical instruments set:
surg_inst = p3.crop((1100, 2450, 1890, 2900))
surg_inst.save('public/images/surgical-instruments.webp', 'WEBP', quality=92)
print('Saved surgical-instruments.webp:', surg_inst.size)

# 11. Page 4 Assets
p4 = Image.open('pdf_renders/page_4.png')
# Endoscope distal tip: y: 1400 to 2200, x: 100 to 1050
distal_tip = p4.crop((100, 1400, 1050, 2220))
distal_tip.save('public/images/endoscopy-tip.webp', 'WEBP', quality=92)
print('Saved endoscopy-tip.webp:', distal_tip.size)

# Technician tuning scope: y: 4400 to 5200, x: 1050 to 2084
scope_tuning = p4.crop((1050, 4400, 2084, 5250))
scope_tuning.save('public/images/technician-scope-tuning.webp', 'WEBP', quality=92)
print('Saved technician-scope-tuning.webp:', scope_tuning.size)

# 12. Page 5 Assets
p5 = Image.open('pdf_renders/page_5.png')
# Headset on desk: y: 3550 to 4250, x: 1050 to 2084
headset = p5.crop((1050, 3550, 2084, 4280))
headset.save('public/images/contact-headset.webp', 'WEBP', quality=92)
print('Saved contact-headset.webp:', headset.size)

# Also save logos as WebP
im_dark = Image.open('public/images/logo_dark.png')
im_dark.save('public/images/logo-dark.webp', 'WEBP')
im_light = Image.open('public/images/logo_light.png')
im_light.save('public/images/logo-white.webp', 'WEBP')
print('Saved logo-dark.webp and logo-white.webp')

print('All 19 individual photographic and logo assets converted to WebP successfully!')
