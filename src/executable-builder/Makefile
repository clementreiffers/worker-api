create-builder:
	docker build \
		--build-arg GIT='https://github.com/clementreiffers/rust-workers.git' \
		-t test \
		-f prebuild.Dockerfile \
		. --no-cache

run-builder: create-builder
	docker run -it test sh

clean:
	docker image prune
	docker volume prune
	docker container prune
