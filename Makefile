IMAGE_NAME=clementreiffers/artist-worker

wrangler-build:
	npx wrangler publish --dry-run --outdir ./build --minify true

build-run-release: clean wrangler-build
	yarn workerd serve my-config.capnp

build-docker:
	colima start
	docker-buildx build --tag=$(IMAGE_NAME) .

build-push-docker: build-docker
	docker push $(IMAGE_NAME)

build-run-docker: build-docker
	docker run -p 8080:8080 $(IMAGE_NAME)

clean:
	rm -fr ./build ./dist

delete-kubernetes-ressources:
	kubectl delete deployments artist-worker
	kubectl delete services artist-worker
	kubectl delete ingress artist-worker

deploy-kubernetes-ressources: delete-kubernetes-ressources build-push-docker
	kubectl apply -f ./kubernetes/artist-worker/deployment.yaml
	kubectl apply -f ./kubernetes/artist-worker/service.yaml
	kubectl apply -f ./kubernetes/artist-worker/ingress.yaml