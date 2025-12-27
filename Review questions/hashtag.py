import re

def extract_hashtags(text):
    ans=re.findall("#[a-zA-Z0-9]+",text)
    st=' '.join(ans)
    print(st)

text="Loving #Python3 and #AI in #2025 "
extract_hashtags(text)
