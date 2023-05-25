IMAGE_NAME=ghcr.io/clementreiffers/worker-api:latest
WORKERD=ghcr.io/clementreiffers/worker-api:latest

wrangler-build:
	npx wrangler publish --dry-run --outdir ./build --minify true

build-run-release: clean wrangler-build
	  npx workerd serve my-config.capnp

build-serv: clean #wrangler-build
	workerd compile old-config.capnp > serv.out

build-run-serv: build-serv
	./serv.out

build-workerd-docker:
	#docker build -t $(WORKERD) -f workerd.Dockerfile . --no-cache

build-docker:
	docker build --tag=$(IMAGE_NAME) .  --no-cache

build-all-docker: build-workerd-docker build-docker

build-push-docker: build-docker
	docker push $(IMAGE_NAME)

build-run-docker: build-all-docker
	docker run -p 8080:8080 $(IMAGE_NAME)

clean:
	rm -fr ./build ./dist serv

delete-kubernetes-ressources:
	kubectl delete deployments artist-worker
	kubectl delete services artist-worker
	kubectl delete ingress artist-worker

deploy-kubernetes-ressources:
	kubectl apply -f ./kubernetes/artist-worker/deployment.yaml
	kubectl apply -f ./kubernetes/artist-worker/service.yaml
	kubectl apply -f ./kubernetes/artist-worker/ingress.yaml
