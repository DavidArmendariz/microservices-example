# k8s

## Basic commands

First, we need to tell Kubernetes to use the Docker daemon running **inside** of the single node cluster instead of the host's.

We can achieve this by running:

```zsh
eval $(minikube docker-env)
```

## Config files

To use a config file:

```zsh
kubectl apply -f [config_file]
```

To delete the objects created by the config file:

```zsh
kubectl delete -f [config_file]
```

## Pods

- `kubectl get pods`
- `kubectl describe pod [pod_name]`
- `kubectl exec -it [pod_name] [cmd]`
- `kubectl logs [pod_name]`
- `kubectl delete pod [pod_name]`

## Deployments

- `kubectl get deployments`
- `kubectl describe deployment [depl_name]`
- `kubectl delete deployment [depl_name]`
- `kubectl rollout restart deployment [depl_name]`

## Services

- `kubectl get services`
- `kubectl describe service [service_name]`

With Minikube, you can retrieve the IP address of the running cluster with `minikube ip`
