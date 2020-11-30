# Microservices example

This is a repo intended to show an app built with microservices.

Here you will find:

- The React client
- A posts microservice
- A comments microservice
- A very simple event bus to handle asynchronous communication
- A query microservice that will have all the information of posts and comments joined together
- A moderation microservice that moderates comments

## Getting started

To get started, you need to install Skaffold. Then simply run:

```zsh
skaffold dev
```

This will take care to sync all of our changes inside the our local k8s cluster. Remember that all of the configuration of k8s can be found inside `/infrastructure/k8s/`
