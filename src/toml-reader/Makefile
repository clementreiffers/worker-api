create-builder:
	docker build \
		--build-arg GIT='https://github.com/clementreiffers/rust-workers.git' \
		-t test \
		. --no-cache

run-builder: create-builder
	docker run -it test sh
