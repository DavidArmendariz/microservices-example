# k8s

## Basic commands

First, we need to tell Kubernetes to use the Docker daemon running **inside** of the single node cluster instead of the host's.

We can achieve this by running:

```zsh
eval $(minikube docker-env)
```

To use the config files inside `infra/k8s/`:

```zsh
kubectl apply -f infra/k8s/
```

To get the pods:

```zsh
kubectl get pods
```

To delete the objects created by the config file in `infra/k8s/`:

```zsh
kubectl delete -f infra/k8s/
```

## Other commands

The `docker ps` command would be equivalent to `kubectl get pods`

The `docker exec -it [container_id] [cmd]` command would be equivalent to `kubectl exec -it [pod_name] [cmd]`

The `docker logs [container_id]` command would be equivalent to `kubectl logs [pod_name]`

We have several other commands like:

- `kubectl delete pod [pod_name]`
- `kubectl apply -f [config_file]`
- `kubectl describe pod [pod_name]`
- `kubectl get deployments`
- `kubectl describe deployment [depl_name]`
- `kubectl delete deployment [depl_name]`
