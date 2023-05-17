delete-worker-ns:
	kubectl delete ns worker

deploy-worker: delete-worker-ns
	kubectl apply -f deployment.yaml
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml # kind
	#kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.40.2/deploy/static/provider/cloud/deploy.yaml #docker-desktop?


deploy ssh-server:
	kubectl apply -f ssh-server.yaml

create-kind-cluster:
	cat kind_cluster.yaml | kind create cluster --config=-


deploy-in-kind:
	kind delete cluster
	make create-kind-cluster
	make deploy-worker
