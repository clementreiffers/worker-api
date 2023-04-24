wrangler-build:
	npx wrangler publish --dry-run --outdir ./build --minify true

build-run-release: clean wrangler-build
	yarn workerd serve my-config.capnp

build-run-docker:
	colima start
	docker-buildx build --tag=artist-worker .
	docker run -p 8080:8080 artist-worker

clean:
	rm -fr ./build ./dist