db.permissions.drop();
db.roles.drop();
db.user_roles.drop();

db.permissions.insertMany([
    { _id: 'manage_organization', action: 'manage', subject: 'organization'},
    { _id: 'create_organization', action: 'create', subject: 'organization'},
    { _id: 'read_organization', action: 'read', subject: 'organization' },
    { _id: 'update_organization', action: 'update', subject: 'organization'},
    { _id: 'delete_organization', action: 'delete', subject: 'organization'},
    { _id: 'manage_role', action: 'manage', subject: 'role'},
    { _id: 'create_role', action: 'create', subject: 'role'},
    { _id: 'read_role', action: 'read', subject: 'role' },
    { _id: 'update_role', action: 'update', subject: 'role'},
    { _id: 'delete_role', action: 'delete', subject: 'role'},
    { _id: 'manage_user', action: 'manage', subject: 'user' },
    { _id: 'create_user', action: 'create', subject: 'user' },
    { _id: 'read_user', action: 'read', subject: 'user' },
    { _id: 'update_user', action: 'update', subject: 'user' },
    { _id: 'delete_user', action: 'delete', subject: 'user' },
    { _id: 'manage_userRole', action: 'manage', subject: 'userRole' },
    { _id: 'read_userRole', action: 'read', subject: 'userRole' },
    { _id: 'manage_feed', action: 'manage', subject: 'feed' },
    { _id: 'create_feed', action: 'create', subject: 'feed' },
    { _id: 'read_feed', action: 'read', subject: 'feed' },
    { _id: 'update_feed', action: 'update', subject: 'feed' },
    { _id: 'delete_feed', action: 'delete', subject: 'feed' },
    { _id: 'manage_feedRun', action: 'manage', subject: 'feedRun' },
    { _id: 'create_feedRun', action: 'create', subject: 'feedRun' },
    { _id: 'read_feedRun', action: 'read', subject: 'feedRun' },
    { _id: 'manage_article', action: 'manage', subject: 'article' },
    { _id: 'create_article', action: 'create', subject: 'article' },
    { _id: 'read_article', action: 'read', subject: 'article' },
    { _id: 'update_article', action: 'update', subject: 'article' },
    { _id: 'delete_article', action: 'delete', subject: 'article' },
    { _id: 'manage_billing', action: 'manage', subject: 'billing'},
    { _id: 'read_billing', action: 'read', subject: 'billing' },
    { _id: 'update_billing', action: 'update', subject: 'billing'},
    { _id: 'delete_billing', action: 'delete', subject: 'billing'},
    { _id: 'manage_tag', action: 'manage', subject: 'tag' },
    { _id: 'create_tag', action: 'create', subject: 'tag' },
    { _id: 'read_tag', action: 'read', subject: 'tag' },
    { _id: 'update_tag', action: 'update', subject: 'tag' },
    { _id: 'delete_tag', action: 'delete', subject: 'tag' },
    { _id: 'read_gpt', action: 'read', subject: 'gpt' },
    { _id: 'update_gpt', action: 'update', subject: 'gpt' },
    { _id: 'delete_gpt', action: 'delete', subject: 'gpt' },
    { _id: 'manage_gptRequest', action: 'manage', subject: 'gptRequest' },
    { _id: 'create_gptRequest', action: 'create', subject: 'gptRequest' },
    { _id: 'read_gptRequest', action: 'read', subject: 'gptRequest' },
    { _id: 'manage_block', action: 'manage', subject: 'block' },
    { _id: 'create_block', action: 'create', subject: 'block' },
    { _id: 'read_block', action: 'read', subject: 'block' },
    { _id: 'update_block', action: 'update', subject: 'block' },
    { _id: 'delete_block', action: 'delete', subject: 'block' },
    { _id: 'manage_template', action: 'manage', subject: 'template' },
    { _id: 'create_template', action: 'create', subject: 'template' },
    { _id: 'read_template', action: 'read', subject: 'template' },
    { _id: 'update_template', action: 'update', subject: 'template' },
    { _id: 'delete_template', action: 'delete', subject: 'template' },
    { _id: 'manage_folder', action: 'manage', subject: 'folder' },
    { _id: 'create_folder', action: 'create', subject: 'folder' },
    { _id: 'read_folder', action: 'read', subject: 'folder' },
    { _id: 'update_folder', action: 'update', subject: 'folder' },
    { _id: 'delete_folder', action: 'delete', subject: 'folder' },
    { _id: 'manage_contactsProvider', action: 'manage', subject: 'contactsProvider' },
    { _id: 'create_contactsProvider', action: 'create', subject: 'contactsProvider' },
    { _id: 'read_contactsProvider', action: 'read', subject: 'contactsProvider' },
    { _id: 'update_contactsProvider', action: 'update', subject: 'contactsProvider' },
    { _id: 'delete_contactsProvider', action: 'delete', subject: 'contactsProvider' },
    { _id: 'manage_emailsProvider', action: 'manage', subject: 'emailsProvider' },
    { _id: 'create_emailsProvider', action: 'create', subject: 'emailsProvider' },
    { _id: 'read_emailsProvider', action: 'read', subject: 'emailsProvider' },
    { _id: 'update_emailsProvider', action: 'update', subject: 'emailsProvider' },
    { _id: 'delete_emailsProvider', action: 'delete', subject: 'emailsProvider' }
]);

const organizationSlugs = ['alphabet', 'breizh', 'le-rheu', 'discord', 'wires'];

organizationSlugs.forEach(organizationSlug => {

    let planId = new ObjectId();
    db.organization_plans.insertMany([
        {
            _id: planId,
            organization: organizationSlug,
            type: 'basic',
            customPermissions: [],
            createdAt: ISODate('2024-10-12T10:10:48.764Z'),
            updatedAt: ISODate('2024-10-12T10:10:48.764Z'),
            __v: 0
        }
    ]);

    db.organizations.updateOne({ _id: organizationSlug }, { $set: { plan: planId } });


    db.roles.insertMany([
        {
            _id: { role: 'admin', organization: organizationSlug },
            permissions: [
                'manage_organization',
                'manage_role',
                'manage_user',
                'manage_userRole',
                'manage_feed',
                'manage_article',
                'manage_feedRun',
                'manage_billing',
                'manage_tag',
                'read_gpt',
                'update_gpt',
                'delete_gpt',
                'create_gptRequest',
                'manage_block',
                'manage_template',
                'manage_folder',
                'manage_contactsProvider',
                'manage_emailsProvider',
            ],
            createdAt: ISODate('2024-07-20T21:36:20.247Z'),
            updatedAt: ISODate('2024-07-20T21:36:20.247Z'),
            __v: 0
        },
        {
            _id: { role: 'manager', organization: organizationSlug },
            permissions: [
                'read_organization',
                'read_role',
                'manage_user',
                'read_userRole',
                'update_feed',
                'read_feed',
                'create_feed',
                'create_feedRun',
                'read_feedRun',
                'create_article',
                'read_article',
                'update_article',
                'delete_article',
                'manage_tag',
                'read_gpt',
                'create_gptRequest',
                'manage_block',
                'manage_template',
                'manage_folder',
                'read_contactsProvider',
                'read_emailsProvider',
            ],
            createdAt: ISODate('2024-07-20T21:38:02.632Z'),
            updatedAt: ISODate('2024-07-20T21:38:02.632Z'),
            __v: 0
        },
        {
            _id: { role: 'user', organization: organizationSlug },
            permissions: [
                'read_organization',
                'read_role',
                'read_user',
                'read_userRole',
                'read_article',
                'read_feed',
                'read_tag',
                'read_gpt',
                'create_gptRequest',
                'read_block',
                'read_template',
                'read_folder',
                'read_contactsProvider',
                'read_emailsProvider',
            ],
            createdAt: ISODate('2024-07-20T21:38:33.047Z'),
            updatedAt: ISODate('2024-07-20T21:38:33.047Z'),
            __v: 0
        }
    ]);
});

db.user_roles.insertMany([
    {
        _id: ObjectId('669d37b10692348a868cbe0c'),
        organization: 'alphabet',
        user: ObjectId('669d37450692348a868cbe02'),
        role: 'admin',
        __v: 0,
        createdAt: ISODate('2024-07-21T16:30:41.586Z'),
        updatedAt: ISODate('2024-07-21T16:30:41.586Z')
    },
    {
        _id: ObjectId('669d37c80692348a868cbe0e'),
        organization: 'alphabet',
        user: ObjectId('669d37730692348a868cbe05'),
        role: 'manager',
        __v: 0,
        createdAt: ISODate('2024-07-21T16:31:04.427Z'),
        updatedAt: ISODate('2024-07-21T16:31:04.427Z')
    },
    {
        _id: ObjectId('669d37df0692348a868cbe10'),
        organization: 'alphabet',
        user: ObjectId('669d379b0692348a868cbe08'),
        role: 'user',
        __v: 0,
        createdAt: ISODate('2024-07-21T16:31:27.689Z'),
        updatedAt: ISODate('2024-07-21T16:31:27.689Z')
    },
    {
        _id: ObjectId('66a7823c9022d68b2b890c92'),
        organization: 'alphabet',
        user: ObjectId('66a781b99022d68b2b890c84'),
        role: 'user',
        __v: 0,
        createdAt: ISODate('2024-07-29T11:51:24.033Z'),
        updatedAt: ISODate('2024-07-29T11:51:24.033Z')
    },
    {
        _id: ObjectId('66a7823c9022d68b2b890c93'),
        organization: 'breizh',
        user: ObjectId('66a781b99022d68b2b890c84'),
        role: 'admin',
        __v: 0,
        createdAt: ISODate('2024-07-29T11:51:24.033Z'),
        updatedAt: ISODate('2024-07-29T11:51:24.033Z')
    },
    {
        _id: ObjectId('66b52fef0bbc8e54c4d69e47'),
        organization: 'le-rheu',
        user: ObjectId('66b52fef0bbc8e54c4d69e45'),
        role: 'user',
        __v: 0,
        createdAt: ISODate('2024-08-08T20:51:59.771Z'),
        updatedAt: ISODate('2024-08-08T20:51:59.771Z')
    },
    {
        _id: ObjectId('66b530160bbc8e54c4d69e58'),
        organization: 'le-rheu',
        user: ObjectId('66b530160bbc8e54c4d69e56'),
        role: 'user',
        __v: 0,
        createdAt: ISODate('2024-08-08T20:52:38.878Z'),
        updatedAt: ISODate('2024-08-08T20:52:38.878Z')
    },
    {
        _id: ObjectId('66b53fd21ae83d8a946c3c28'),
        organization: 'discord',
        user: ObjectId('66b53fd21ae83d8a946c3c26'),
        role: 'user',
        __v: 0,
        createdAt: ISODate('2024-08-08T21:59:46.759Z'),
        updatedAt: ISODate('2024-08-08T21:59:46.759Z')
    },
    {
        _id: ObjectId('66b540051ae83d8a946c3c39'),
        organization: 'discord',
        user: ObjectId('66b540051ae83d8a946c3c37'),
        role: 'user',
        __v: 0,
        createdAt: ISODate('2024-08-08T22:00:37.424Z'),
        updatedAt: ISODate('2024-08-08T22:00:37.424Z')
    },
    {
        _id: ObjectId('66b540381ae83d8a946c3c5e'),
        organization: 'discord',
        user: ObjectId('66b540381ae83d8a946c3c5c'),
        role: 'user',
        __v: 0,
        createdAt: ISODate('2024-08-08T22:01:28.294Z'),
        updatedAt: ISODate('2024-08-08T22:01:28.294Z')
    }
]);