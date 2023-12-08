# This script will install/update Minecraft Bedrock 
cp server.properties server.properties_old
DOWNLOAD_URL=$(curl -H "Accept-Encoding: identity" -H "Accept-Language: en" -s -L -A "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; BEDROCK-UPDATER)" https://minecraft.net/en-us/download/server/bedrock/ |  grep -o 'https://minecraft.azureedge.net/bin-linux/[^"]*')
sudo wget $DOWNLOAD_URL -O bedrock-server.zip
unzip bedrock-server.zip
cp server.properties_old server.properties
sudo service minecraft@survival restart
