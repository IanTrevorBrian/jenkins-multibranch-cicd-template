FROM jenkins/jenkins:lts

USER root

# Install OS dependencies (needed for git + docker)
RUN apt-get update && apt-get install -y \
    ca-certificates \
    curl \
    git \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

# Copy plugin list
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt

# Install Jenkins plugins
RUN jenkins-plugin-cli -f /usr/share/jenkins/ref/plugins.txt

# Copy Jenkins Configuration as Code (JCasC)
COPY casc.yaml /var/jenkins_home/casc.yaml

# Allow Jenkins user to run Docker
RUN usermod -aG docker jenkins

USER jenkins
