docker pull rmohr/activemq
docker run -d -p  61616:61616 -p 61613:61613 -p 8161:8161 --name mq_container1 --network weechat_network -i rmohr/activemq


