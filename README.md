1) cd approuter

2) npm install

3) 
```
cf create-service xsuaa default uaa-approuter -c "{\"xsappname\":\"approuter-i856367\"}"
cf create-service xsuaa default uaa-approuter-cc-sap-i856367 -c "{\"xsappname\":\"approuter-i856367\",\"identityzone\":\"cc-sap\"}"
```
4)
```
https://approuter-i856367-2.cfapps.sap.hana.ondemand.com/index.html
https://approuter-i856367-2.cfapps.sap.hana.ondemand.com/api/users.json
```
