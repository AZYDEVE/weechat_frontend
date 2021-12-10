PROJECT_NETWORK='weechat_network'
CLIENT_IMAGE='weechat-client-image'
CLIENT_CONTAINER1='wee-chat1'
CLIENT_CONTAINER2='wee-chat2'
CLIENT_CONTAINER3='wee-chat3'
CLIENT_CONTAINER4='wee-chat4'
CLIENT_CONTAINER5='wee-chat5'


# clean up existing resources, if any
echo "----------Cleaning up existing resources----------"
docker container stop $CLIENT_CONTAINER1 2> /dev/null && docker container rm $CLIENT_CONTAINER1 2> /dev/null
docker container stop $CLIENT_CONTAINER2 2> /dev/null && docker container rm $CLIENT_CONTAINER2 2> /dev/null
docker container stop $CLIENT_CONTAINER3 2> /dev/null && docker container rm $CLIENT_CONTAINER3 2> /dev/null
docker container stop $CLIENT_CONTAINER4 2> /dev/null && docker container rm $CLIENT_CONTAINER4 2> /dev/null
docker container stop $CLIENT_CONTAINER5 2> /dev/null && docker container rm $CLIENT_CONTAINER5 2> /dev/null


docker network rm $PROJECT_NETWORK 2> /dev/null

# only cleanup
if [ "$1" == "cleanup-only" ]
then
  exit
fi

# create a custom virtual network
echo "----------creating a virtual network----------"
docker network create $PROJECT_NETWORK

# build the images from Dockerfile
echo "----------Building images----------"
docker build --rm -t $CLIENT_IMAGE .



# run the image and open the required ports
echo "----------Running sever app----------"
docker run --rm -d  -p 3000:3002/ --name $CLIENT_CONTAINER1 --network $PROJECT_NETWORK -i $CLIENT_IMAGE 
docker run --rm -d  -p 3002:3002/ --name $CLIENT_CONTAINER2 --network $PROJECT_NETWORK -i $CLIENT_IMAGE 
docker run --rm -d  -p 3004:3002/ --name $CLIENT_CONTAINER3 --network $PROJECT_NETWORK -i $CLIENT_IMAGE 
docker run --rm -d  -p 3006:3002/ --name $CLIENT_CONTAINER4 --network $PROJECT_NETWORK -i $CLIENT_IMAGE 
docker run --rm -d  -p 3008:3002/ --name $CLIENT_CONTAINER5 --network $PROJECT_NETWORK -i $CLIENT_IMAGE 


#SERVER_IP=$(docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $SERVER_CONTAINER1)




