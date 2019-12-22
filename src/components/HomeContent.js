import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card has-background-grey-light">
                    <div className="card-content">
                        <div className="content">
                            <h4>AWS Translate</h4>
                            <p className="is-size-7">Amazon Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation. Neural machine translation is a form of language translation automation that uses deep learning models to deliver more accurate and more natural sounding translation than traditional statistical and rule-based translation algorithms. Amazon Translate allows you to localize content - such as websites and applications - for international users, and to easily translate large volumes of text efficiently.</p>
                            <p><a href="https://aws.amazon.com/translate/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady has-background-warning">
                    <div className="card-content">
                        <div className="content">
                            <h4>AWS Comprehend</h4>
                            <p className="is-size-7">Amazon Comprehend is a natural language processing (NLP) service that uses machine learning to find insights and relationships in text. No machine learning experience required.</p>
                            <p><a href="https://aws.amazon.com/comprehend/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady has-background-link">
                     <div className="card-content">
                        <div className="content">
                            <h4 className="has-text-white">AWS Step Functions</h4>
                            <p className="is-size-7 has-text-white">AWS Step Functions lets you coordinate multiple AWS services into serverless workflows so you can build and update apps quickly. Using Step Functions, you can design and run workflows that stitch together services, such as AWS Lambda, AWS Fargate, and Amazon SageMaker, into feature-rich applications. Workflows are made up of a series of steps, with the output of one step acting as input into the next.</p>
                            <p><a className="has-text-white" href="https://aws.amazon.com/step-functions/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady has-background-primary">
                    <div className="card-content ">
                        <div className="content">
                            <h4>Cognito</h4>
                            <p className="is-size-7">Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0.</p>
                            <p><a href="https://aws.amazon.com/cognito/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady has-background-info">
                    <div className="card-content">
                        <div className="content has-text-white">
                            <h4 className="has-text-white">DynamoDB</h4>
                            <p className="is-size-7">Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications.</p>
                            <p><a className="has-text-white" href="https://aws.amazon.com/dynamodb">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-content has-background-danger">
                        <div className="content">
                            <h4 className="has-text-white">Amplify</h4>
                            <p className="is-size-7 has-text-white">AWS Amplify makes it easy to create, configure, and implement scalable mobile and web apps powered by AWS. Amplify seamlessly provisions and manages your mobile backend and provides a simple framework to easily integrate your backend with your iOS, Android, Web, and React Native frontends.</p>
                            <p><a className="has-text-white" href="https://aws.amazon.com/amplify/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady has-background-warning">
                    <div className="card-content">
                        <div className="content">
                            <h4>API Gateway (Rest + Websocket)</h4>
                            <p className="is-size-7">Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services. Using API Gateway, you can create RESTful APIs and WebSocket APIs that enable real-time two-way communication applications. API Gateway supports containerized and serverless workloads, as well as web applications.</p>
                            <p><a href="https://aws.amazon.com/api-gateway/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady has-background-link">
                    <div className="card-content">
                        <div className="content has-text-white">
                            <h4 className="has-text-white">AWS Lambda</h4>
                            <p className="is-size-7">AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.

With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app.</p>
                            <p><a className="has-text-white" href="https://aws.amazon.com/lambda/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady has-background-success">
                     <div className="card-content">
                        <div className="content">
                            <h4 className="has-text-white">AWS SES</h4>
                            <p className="is-size-7 has-text-white">Amazon Simple Email Service (Amazon SES) is a cloud-based email sending service designed to help digital marketers and application developers send marketing, notification, and transactional emails. It is a reliable, cost-effective service for businesses of all sizes that use email to keep in contact with their customers.

You can use our SMTP interface or one of the AWS SDKs to integrate Amazon SES directly into your existing applications. You can also integrate the email sending capabilities of Amazon SES into the software you already use, such as ticketing systems and email clients.</p>
                            <p><a className="has-text-white" href="https://aws.amazon.com/ses/">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
