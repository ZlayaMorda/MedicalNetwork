# Base image
FROM ubuntu:22.04

# Update and install required packages
RUN apt-get update
RUN apt-get -y install curl
#RUN apt-get install dialog apt-utils
#RUN DEBIAN_FRONTEND=noninteractive apt-get install -y software-properties-common
#RUN apt-get -y install python3-pip
# Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs

RUN npm i -g corepack && corepack enable

# Install global npm packages
RUN npm install -g @vue/cli
RUN npm install -g axios
RUN npm install -g formidable

# Install Python dependencies
#RUN pip3 install glob2 docx2txt networkx scikit-learn nltk pattern

# Set your working directory
WORKDIR /app

# Copy your application files if needed

COPY . /app

RUN npm install

# Set any commands you want to run when the container starts
# For example:
CMD ["npm", "start"]
