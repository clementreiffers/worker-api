create-builder:
	docker build \
		--build-arg IMAGE=python \
		--build-arg BUILD_COMMAND='pip install tomlq' \
		-t test \
		.

run-builder: create-builder
	docker run -it test sh
