import os


parent_dir = "pages"

for p in os.listdir(parent_dir):
    if os.path.isdir(os.path.join(parent_dir, p)):
        dir = "pages/" + p
    else:
        continue

    files = os.listdir(dir)
    for f in files:
        if "mdx" not in f:
            os.system(f"mv {dir}/{f} {dir}/{f}x")
