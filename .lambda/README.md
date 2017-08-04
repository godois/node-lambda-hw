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
node-lambda deploy -a AKIAIZNAZZ3JTEER3BZA && \
  -s 8TXEB2IEIWfm8QXrFHaM0EAXJuzPRobtE65z8iCq -r us-east-1 -n PublishedLambda --handler index.handler


export AWS_ACCESS_KEY_ID=AKIAIZNAZZ3JTEER3BZA
export AWS_SECRET_ACCESS_KEY=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


set AWS_ACCESS_KEY_ID=AKIAIZNAZZ3JTEER3BZA
set AWS_SECRET_ACCESS_KEY=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
