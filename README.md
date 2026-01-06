# CI Platform Template – Jenkins Multibranch Pipeline

This repository provides a **fully reproducible CI/CD platform template** built with **Jenkins**, **Docker Compose**, and a **Jenkins Multibranch Pipeline**.

The goal is to standardize the path to production for a microservice by enforcing **branch-based workflows**, **quality gates**, **security scans**, and **basic observability**, all from a single Git repository.

## Architecture Overview

This repository contains:
- A simple Node.js microservice
- Jenkins running in Docker
- A Jenkins Multibranch Pipeline
- A local authenticated Docker registry
- Prometheus for CI platform metrics

Everything is started using Docker Compose.

## Microservice

The example application is a simple Node.js service that exposes a health endpoint.

### develop

Purpose: continuous integration and fast feedback.

- Build
- Unit tests
- Static code analysis
- No container image pushed

### test

Purpose: pre-release validation.

- Build
- Unit tests
- Static code analysis
- Security scanning
- Docker image built and pushed

### prod

Purpose: release-ready artifacts.

- Build
- Unit tests
- Static code analysis
- Security scanning
- Docker image built and pushed

## Jenkins Pipeline

The pipeline is defined in a single `Jenkinsfile` and shared across all branches.

### Pipeline Stages

1. Build and test the application
2. Run static code analysis
3. Run security scans (test and prod only)
4. Build and push Docker images (test and prod only)

## Registry Authentication & Credentials

The Docker registry is secured using basic authentication.

### How credentials are handled

- Registry authentication is enabled in the Docker registry
- Credentials are defined using **Jenkins Configuration as Code (JCasC)**
- Credentials are injected into the pipeline at runtime using Jenkins credentials
- No secrets are stored in the repository or Jenkinsfile

### Jenkins Credential

- **ID:** docker-registry-creds
- **Type:** Username / Password
- **Usage:** Docker registry authentication during image push

## Automation Guarantee

No manual Jenkins configuration is required.

Once `docker compose up` is executed:
- Jenkins starts fully configured
- Plugins are installed automatically
- Credentials are created automatically
- Multibranch pipelines are discovered automatically
- Pipelines can run immediately

## Observability

Basic observability is included to monitor the CI platform itself.

### Prometheus

Prometheus collects Jenkins metrics to help answer questions such as:
- Is Jenkins healthy?
- Are builds running or failing?

## Prerequisites

- Docker Desktop (MacOS)
- Rancher Desktop for MacOS Monterey and earlier 
- Git
- Node.js (for local development only)

### Recommended IDE

- Visual Studio Code
  - Docker extension
  - Jenkinsfile support
  - YAML support


## Running the Platform

### 1. Clone the repository

```bash
git clone https://github.com/IanTrevorBrian/jenkins-multibranch-cicd-template.git
cd ci-platform-template

docker compose up --build


---

# STEP 12 — ACCESS SERVICES

```md
## Accessing Services

- Jenkins: http://localhost:8080  
  - Username: admin  
  - Password: admin

- Prometheus: http://localhost:9090

- Docker Registry: localhost:5000
