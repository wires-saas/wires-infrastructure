db.organization_plans.drop();
db.webhook_events.drop();

['alphabet'].forEach(organizationSlug => {

    let planId = new ObjectId();
    db.organization_plans.insertMany([
        {
            _id: planId,
            organization: organizationSlug,
            type: 'custom',
            subscriptionId: 'sub_1QP4MYHVaIr4W6SiD6g3yswk', // will not match any subscription on production
            customerId: 'cus_RHdbE6KKH1OXcI', // will not match any customer on production
            currentPeriodStart: 1732549090000,
            currentPeriodEnd: 1735141090000,
            status: 'active',
            customerEmail: 'admin.alphabet@wires.fr',
            lastInvoice: 'https://invoice.stripe.com/i/acct_1QJMWUHVaIr4W6Si/test_YWNjdF8xUUpNV1VIVmFJcjRXNlNpLF9SSGRkWjJjYkp6TGZ5dGlsblJXVVRJaExveUViQTM3LDEyMzA4OTg5Mw0200OU03HpcV?s=ap',
            customPermissions: [],
            createdAt: ISODate('2024-11-25T14:00:48.764Z'),
            updatedAt: ISODate('2024-11-25T14:00:48.764Z'),
            __v: 0
        }
    ]);

    db.organizations.updateOne({_id: organizationSlug}, {$set: {plan: planId}});

});

['wires'].forEach(organizationSlug => {

    let planId = new ObjectId();
    db.organization_plans.insertMany([
        {
            _id: ObjectId('674dcd795e57dd93ef89c06e'),
            subscriptionId: 'sub_1QRbEoHVaIr4W6SijXhdTlxU',
            __v: 0,
            createdAt: ISODate('2024-12-02T15:08:41.787Z'),
            customPermissions: [],
            organization: 'wires',
            status: 'active',
            type: 'custom',
            updatedAt: ISODate('2024-12-02T15:09:35.332Z'),
            currentPeriodEnd: 1735830518000,
            currentPeriodStart: 1733152118000,
            customerEmail: 'antoine@bloupy.com',
            customerId: 'cus_RKFkg2ihrYInLM',
            lastInvoice: 'https://invoice.stripe.com/i/acct_1QJMWUHVaIr4W6Si/test_YWNjdF8xUUpNV1VIVmFJcjRXNlNpLF9SS0ZrNVAwWWszMkVXaGQ4dEJkVnlSMFY0S05NRXhtLDEyMzY5MjkyMQ02005GpJDgYP?s=ap',
            trialEnd: 0
        }
    ]);

    db.organizations.updateOne({_id: organizationSlug}, {$set: {plan: planId}});

});

['breizh', 'le-rheu', 'discord'].forEach(organizationSlug => {

    let planId = new ObjectId();
    db.organization_plans.insertMany([
        {
            _id: planId,
            organization: organizationSlug,
            type: 'free',
            customPermissions: [],
            createdAt: ISODate('2024-10-12T10:10:48.764Z'),
            updatedAt: ISODate('2024-10-12T10:10:48.764Z'),
            __v: 0
        }
    ]);

    db.organizations.updateOne({_id: organizationSlug}, {$set: {plan: planId}});

});