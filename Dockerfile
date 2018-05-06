# base iamge
FROM node:9.11.1

# This won't create any image but just add meta data to the config file
LABEL maintainer="5066aman@gmail.com"

# this will create a new layer
# we are copying everything in the root directory to the src folder
COPY . /src


# this is just a meta data in the config file
WORKDIR /src

#this will create a new layer
RUN npm install --silent

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
