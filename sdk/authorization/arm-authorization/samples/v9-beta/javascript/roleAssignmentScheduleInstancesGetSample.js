/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AuthorizationManagementClient } = require("@azure/arm-authorization");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the specified role assignment schedule instance.
 *
 * @summary Gets the specified role assignment schedule instance.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/GetRoleAssignmentScheduleInstanceByName.json
 */
async function getRoleAssignmentScheduleInstanceByName() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const scope =
    "providers/Microsoft.Subscription/subscriptions/dfa2a084-766f-4003-8ae1-c4aeb893a99f";
  const roleAssignmentScheduleInstanceName = "ed9b8180-cef7-4c77-a63c-b8566ecfc412";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const result = await client.roleAssignmentScheduleInstances.get(
    scope,
    roleAssignmentScheduleInstanceName
  );
  console.log(result);
}

async function main() {
  getRoleAssignmentScheduleInstanceByName();
}

main().catch(console.error);
