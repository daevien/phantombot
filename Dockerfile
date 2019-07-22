FROM openjdk:8-alpine
LABEL maintainer "Aldo Vega"

RUN apk add -U \
    bash \
    su-exec \
    wget \
    unzip

RUN \
    addgroup -g 1000 botuser && \
    adduser -Ss /bin/false -G botuser -u 1000 -h /home/botuser botuser && \
    mkdir /bot && \
    chown botuser:botuser /bot /home/botuser

ARG PHANTOMBOT_VERSION='3.0.0'

WORKDIR /bot

RUN wget -q https://github.com/PhantomBot/PhantomBot/releases/download/v$PHANTOMBOT_VERSION/PhantomBot-$PHANTOMBOT_VERSION.zip

RUN unzip -q PhantomBot-$PHANTOMBOT_VERSION.zip

RUN rm -f PhantomBot-$PHANTOMBOT_VERSION.zip

RUN mv PhantomBot-$PHANTOMBOT_VERSION phantombot

RUN chmod u+x phantombot/launch*

RUN touch phantombot/config/botlogin.txt

COPY lang/ phantombot/scripts/lang/

RUN chown -R botuser:botuser phantombot/

COPY start* /

EXPOSE 25000-25004

ENTRYPOINT ["/start"]
