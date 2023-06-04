
import os
import json
from PIL import Image

# set the directory path
directory = "./img/"

data = []

# loop through all files and subdirectories in the specified directory
for root, dirs, files in os.walk(directory):
    for file in files:
        # check if file is an image
        if file.endswith(".jpg") or file.endswith(".jpeg") or file.endswith(".png"):
            # get the full filepath
            filepath = os.path.join(root, file)
            # get the relative path to the img folder
            relpath = filepath.split("img/")[1]
            # open the image and get its dimensions
            im = Image.open(filepath)
            width, height = im.size
            # create dict for image file
            img_dict = {
                "src": "/img/" + relpath.replace("\\", "/"),
                "width": width,
                "height": height
            }
            # append dict to data list
            data.append(img_dict)

# write the data to a json file
with open("img_data.json", "w") as f:
    json.dump(data, f)