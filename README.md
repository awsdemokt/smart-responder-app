# Serverlessapp with backend connectivity

## To start Smart Responder app, you need to install the required npm packages
npm install

## Search "//TODO - Uncomment to make Smart Responder Work", in the the following files in the src/components and uncomment the code.
- index.js
- Email.js
- Emails.js
- EmailQueue.js
- EmailReply.js
- FourEyeCheckQueue.js
- FourEyeCheckApproval.js

## Open src/config.json and mention values of config parameters from your AWS account / environment

- smartresponder_frontend_api_endpoint = your smart responder front api endpoint
- smartresponder_websocket_api_endpoint = your smart respinder websocket api endpoint
- process_travelDesk_reply_to_4eye_check_approver = state machine arn
- send_reply_to_customer = state machine arn
- REGION = your region where you will be deploying smart responder application
- USER_POOL_ID = Cognito user pool id
- APP_CLIENT_ID = your cognito app client id





