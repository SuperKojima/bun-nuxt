FROM oven/bun:latest

RUN apt-get update -qq \
    && apt-get install -qq -y --no-install-recommends \
      curl \
      dumb-init \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /src/*.deb

COPY ../ /var/www/html

RUN bun install

EXPOSE 3000

CMD ["/bin/bash"]
