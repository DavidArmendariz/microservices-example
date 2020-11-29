# Posts microservice

To build an image with the `latest` tag:

```zsh
docker build -t [USERNAME]/[REPO] .
```

To push this image to Docker Hub first login with `docker login` and then:

```zsh
docker push [USERNAME]/[REPO]
```
