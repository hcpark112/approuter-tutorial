npm install --registry=http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.milestones.npm --proxy=null

cf create-service xsuaa default uaa-approuter-i856367 -c "{\"xsappname\":\"approuter-i856367\"}
cf create-service xsuaa default uaa-approuter-cc-sap-i856367 -c "{\"xsappname\":\"approuter-i856367\",\"identityzone\":\"cc-sap\"}"