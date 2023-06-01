ARG IMAGE as builder
FROM ${IMAGE}

ARG BUILD_COMMAND
RUN ${BUILD_COMMAND}

FROM scratch
COPY --from=builder /source/wrangler.toml /wrangler.toml
ARG BUILD_DESTINATION_DIR
COPY --from=builder /source/${BUILD_DESTINATION_DIR} /