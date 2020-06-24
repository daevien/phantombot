FROM openjdk:11-jre-slim
LABEL maintainer "Aldotroid"

# Version
ARG PHANTOMBOT_VERSION='3.2.0'

# Install dependencies
RUN apt update && apt install -y wget unzip

# Phantombot Installation
RUN mkdir -p /root/tmp && \
    cd /root/tmp && \
    wget -q https://github.com/PhantomBot/PhantomBot/releases/download/v$PHANTOMBOT_VERSION/PhantomBot-$PHANTOMBOT_VERSION.zip && \
    unzip PhantomBot-$PHANTOMBOT_VERSION.zip && \
    rm PhantomBot-$PHANTOMBOT_VERSION.zip && \
    mv PhantomBot-$PHANTOMBOT_VERSION /phantombot && \
    chmod u+x /phantombot/launch*

RUN cd && rm -rf /root/tmp

RUN chmod u+x /phantombot/java-runtime-linux/bin/java

#COPY lang/ /phantombot/scripts/lang/

COPY start* /

EXPOSE 25000-25004

CMD ["/start"]
