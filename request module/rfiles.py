from PIL import Image
from io import BytesIO
import requests

r=requests.get('https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80')
i = Image.open(BytesIO(r.content))
fp=open("image.jpg","wb")
i.save(fp)