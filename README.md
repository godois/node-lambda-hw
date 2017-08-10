# node-lambda-hw
The first AWS lambda script published by command line

# running locally
node-lambda run && \
  --handler index.handler && \
  -j event.json && \
  -u nodejs4.3 && \
  -x context.json

# packing
node-lambda package -A C:/tmp -n PublishedLambda

# deploying
# before run the command below, configure /user/.aws/credentials file

node-lambda deploy -n PublishedLambda --handler index.handler -u nodejs4.3 -o arn:aws:iam::908533226281:role/service-role/execute_my_lambda

#updating API GAteway from aws-cli
aws apigateway import-rest-api --body 'file://C:/projetos/godois/swagger-test/MyDemoAPI-test-swagger.json'

aws apigateway put-rest-api --body 'file://C:/projetos/godois/swagger-test/MyDemoAPI-test-swagger.json'

aws sts assume-role --role-arn arn:aws:iam::908533226281:role/execute_api_gateway --role-session-name "ApiGateway" --profile skapeeapigtw
