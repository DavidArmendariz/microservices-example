# k8s

## Basic commands

If we want to use the Docker daemon running **inside** of the single node cluster instead of the host's, we can achieve this by running the following command:

```zsh
eval $(minikube docker-env)
```

This is not necessary if we are pulling images from Docker Hub.

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

## Ingress

- `kubectl get ingress`
- `kubectl delete ingress [ingress_name]`
