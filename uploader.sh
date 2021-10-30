# Deploy Database Layer
cd ./layers/database
echo $PWD
yarn deploy

# Deploy External Layer
cd ..
echo $PWD


# Deploy External Layer
cd ./externals
echo $PWD
serverless deploy

# Deploy Main Lambdas
cd ..
cd ..
echo $PWD
serverless deploy