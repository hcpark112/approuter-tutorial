# Orca Approuter [![David](https://img.shields.io/david/expressjs/express.svg)]()

Orca approuter acts as a single entry point for BOC application and all the BOC micro-services sit behind this. It is built on [SAP XS2 Application Router](https://github.wdf.sap.corp/xs2/approuter.js) and supports OAuth authentication and use JWT token to propagate user context when talking to all BOC services and BOC HANA service. It will leverage the service registry to guide the routing. With plug-in extension, it can also connect to the external system to support remote connectivity in BOC. 

The approuter has three main functions:

- Handle authentication for all apps of the application
- Serve static resources
- Perform route mapping (URL mapping)

## Prerequisite

Ensure that Node.JS including its NPM Packager Manager is installed:

```
node --version
npm --version
```

The developed approuter will run on the Cloud Foundry platform. Please install the [Cloud Foundry Command Line Interface (CLI)](https://help.cf.sap.hana.ondemand.com/frameset.htm?4ef907afb1254e8286882a2bdef0edf4.html). To verify:

```
cf version
```

## Setting Up the Development Environment

1. Log on to the Cloud Foundry Instance using the console client.
```
cf login -o OrcaAnalytics -s FPA36
```

2. Clone the Git repo or download a zip of the repo.
```
git clone git@github.wdf.sap.corp:orca/approuter.git
```

3. Build and install xs2 approuter.js.
```
cd approuter/approuter-orca
npm install --registry=http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.milestones.npm --proxy=null
```
That's it. Now you can use any Javascript editor you'd like for development. To deploy the changes, run:
```
cd approuter/approuter-orca
cf push
```

## Subscribing Approuter

1. Create subscription.
```
java -Dhttps.proxyHost=proxy.wdf.sap.corp -Dhttps.proxyPort=8080 -jar config.jar https://internal-xsuaa.authentication.sap.hana.ondemand.com hcp_onboarding 8VItfGFksjRQ subscription.create orca^!t162 <SAAS_TENANT_ID> <SUBSCRIPTION_ID>
```

2. Add the route.
```
cf map-router approuter-orca cfapps.sap.hana.ondemand.com -n <SAAS_TENANT_ID>-approuter-orca
```

## Test

> You can access BOC HANA using the following URL:
> ```
> https://<SAAS_TENANT_ID>.approuter-orca.cfapps.sap.hana.ondemand.com
> ```



