# Phantombot on Docker

Run:
1. `mkdir bot bot/config && cd bot`
2. `touch config/botlogin.txt` <- You need to edit this to match your settings
3. Run container
```
docker run -d \
  -p 6667:6667 \
  -p 25000-25005:25000-25005 \
  -v ${PWD}/config/:/phantombot/config \
  --name phantombot \
  --restart=always \
  aldovc/phantombot:3.2.0
```

Notes: Custom language is not working atm (v3.2.0) so it is not included in this image
