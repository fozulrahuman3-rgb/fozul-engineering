"""One-off favicon generator for FAHEEM Engineering Consultancy.
Builds a full favicon set from the real gold monogram logo
(src/assets/faheem-monogram-gold.webp), replacing the leftover
placeholder "R" icon set in public/. Run with: python scripts/generate-favicons.py
"""
import base64
import io
from PIL import Image, ImageDraw

SRC = 'src/assets/faheem-monogram-gold.webp'
NAVY = (6, 8, 22, 255)  # matches --bg: #060816
CANVAS = 1024
CORNER_RADIUS_RATIO = 0.22  # matches the rounded-square brand mark treatment
LOGO_SCALE = 0.80  # logo occupies 80% of the canvas, leaving a clean margin

def build_master():
    src = Image.open(SRC).convert('RGBA')
    bbox = src.getbbox()
    logo = src.crop(bbox)

    # Pad the cropped logo to a perfect square (centered) before scaling,
    # so it isn't stretched/distorted when placed on the square canvas.
    lw, lh = logo.size
    side = max(lw, lh)
    padded = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    padded.paste(logo, ((side - lw) // 2, (side - lh) // 2), logo)

    canvas = Image.new('RGBA', (CANVAS, CANVAS), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    radius = int(CANVAS * CORNER_RADIUS_RATIO)
    draw.rounded_rectangle([0, 0, CANVAS - 1, CANVAS - 1], radius=radius, fill=NAVY)

    logo_size = int(CANVAS * LOGO_SCALE)
    resized_logo = padded.resize((logo_size, logo_size), Image.LANCZOS)
    offset = ((CANVAS - logo_size) // 2, (CANVAS - logo_size) // 2)
    canvas.alpha_composite(resized_logo, offset)
    return canvas

def save_png(img, size, path):
    resized = img.resize((size, size), Image.LANCZOS)
    resized.save(path, format='PNG')
    print(f'wrote {path} ({size}x{size})')

def save_ico(img, path, sizes=(16, 24, 32, 48)):
    frames = [img.resize((s, s), Image.LANCZOS) for s in sizes]
    frames[0].save(path, format='ICO', sizes=[(s, s) for s in sizes], append_images=frames[1:])
    print(f'wrote {path} (sizes {sizes})')

def save_svg_wrapper(img, path, embed_size=256):
    small = img.resize((embed_size, embed_size), Image.LANCZOS)
    buf = io.BytesIO()
    small.save(buf, format='PNG')
    b64 = base64.b64encode(buf.getvalue()).decode('ascii')
    svg = f'''<svg width="{embed_size}" height="{embed_size}" viewBox="0 0 {embed_size} {embed_size}" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,{b64}" width="{embed_size}" height="{embed_size}" />
</svg>
'''
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg)
    print(f'wrote {path} (embedded {embed_size}x{embed_size} PNG)')

def save_og_banner(img, path, embed_size=480):
    """Rebuilds public/og-faheem-logo.svg: same 1200x630 banner (background
    glow + title/tagline text kept as crisp vector), with only the broken
    icon graphic replaced by an embedded raster of the real logo."""
    small = img.resize((embed_size, embed_size), Image.LANCZOS)
    buf = io.BytesIO()
    small.save(buf, format='PNG')
    b64 = base64.b64encode(buf.getvalue()).decode('ascii')
    svg = f'''<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#040B15"/>
  <rect width="1200" height="630" fill="url(#bgGlow)"/>
  <image href="data:image/png;base64,{b64}" x="78" y="75" width="240" height="240"/>
  <text x="360" y="220" fill="#F3F7FF" font-size="58" font-family="Segoe UI, Arial, sans-serif" font-weight="700">FAHEEM Engineering Consultancy</text>
  <text x="360" y="286" fill="#A6B7CC" font-size="34" font-family="Segoe UI, Arial, sans-serif">Quality. Asset Integrity. Practical Engineering Solutions.</text>
  <defs>
    <radialGradient id="bgGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(980 120) rotate(145) scale(760 560)">
      <stop stop-color="#0F4E33" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#040B15" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
'''
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg)
    print(f'wrote {path} (embedded {embed_size}x{embed_size} PNG icon)')

if __name__ == '__main__':
    master = build_master()
    # Master is kept in memory only - not written to public/, to avoid an
    # unreferenced file being deployed. Re-run this script to regenerate
    # everything from source whenever the logo changes.

    save_png(master, 16, 'public/favicon-16x16.png')
    save_png(master, 32, 'public/favicon-32x32.png')
    save_png(master, 48, 'public/favicon-48x48.png')
    save_png(master, 180, 'public/apple-touch-icon.png')
    save_ico(master, 'public/favicon.ico')
    save_svg_wrapper(master, 'public/favicon.svg')
    save_og_banner(master, 'public/og-faheem-logo.svg')
