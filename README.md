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
