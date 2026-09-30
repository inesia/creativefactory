import json

with open('extracted_assets/text_inventory.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

with open('extracted_assets/text_inventory.txt', 'w', encoding='utf-8') as out:
    for i, item in enumerate(items):
        txt = item['text']
        sz = item['size']
        font = item['font']
        color = item['color']
        bbox = item['bbox']
        out.write(f"[{i:03d}] {bbox} sz={sz:4.1f} font={font:20s} col={color} | {txt}\n")

print(f"Written {len(items)} items to extracted_assets/text_inventory.txt")
