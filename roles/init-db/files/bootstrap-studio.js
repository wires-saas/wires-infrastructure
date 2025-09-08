db.blocks.drop();
db.folders.drop();
db.folder_items.drop();

const organizationSlugs = ['alphabet', 'breizh', 'le-rheu', 'discord', 'wires'];

organizationSlugs.forEach(organizationSlug => {

    db.folders.insertMany([
        {
            _id: { folder: '670574f237c09a4be6849858', organization: organizationSlug },
            displayName: 'Headers',
            description: '',
            parentFolder: null,
            createdAt: ISODate('2024-10-08T18:07:46.004Z'),
            updatedAt: ISODate('2024-10-08T18:07:46.004Z')
        },
        {
            _id: { folder: '6705755437c09a4be684987e', organization: organizationSlug },
            displayName: 'Contents',
            description: null,
            parentFolder: null,
            createdAt: ISODate('2024-10-08T18:09:24.321Z'),
            updatedAt: ISODate('2024-10-08T18:09:24.321Z')
        },
        {
            _id: { folder: '6705755937c09a4be6849887', organization: organizationSlug },
            displayName: 'Footers',
            description: null,
            parentFolder: null,
            createdAt: ISODate('2024-10-08T18:09:29.030Z'),
            updatedAt: ISODate('2024-10-08T18:09:29.030Z')
        }
    ]);

    db.blocks.insertMany([
        {
            _id: {
                block: '670576bde8c905763f09657f',
                organization: organizationSlug,
                timestamp: 1728411325086
            },
            displayName: 'Header 1',
            description: 'Simple header with logo and organization title, centered',
            code: '<header>\n' +
                '    <img src="https://www.dev.wires.fr/assets/imgs/logo_purple.png" width="80" class="block m-auto"/>\n' +
                '    <h3 class="text-center">' + organizationSlug + '</h3>\n' +
                '</header>',
            wysiwygEnabled: false,
            isArchived: false,
            parameters: [],
            createdAt: ISODate('2024-10-08T18:15:25.088Z'),
            updatedAt: ISODate('2024-10-08T18:15:25.088Z')
        },
        {
            _id: {
                block: '6705784ae8c905763f096616',
                organization: organizationSlug,
                timestamp: 1728411722544
            },
            displayName: 'Footer 1',
            description: 'Basic footer with unsubscribe link, social networks and legal mentions',
            code: '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 20px; font-family: Arial, sans-serif;">\n' +
                '    <tr>\n' +
                '        <td align="center">\n' +
                '            <!-- Image/logo section -->\n' +
                '            <img src="https://via.placeholder.com/50" alt="Company Logo" style="display: block; max-width: 150px; height: auto; margin-bottom: 20px;" />\n' +
                '        </td>\n' +
                '    </tr>\n' +
                '    <tr>\n' +
                '        <td align="center" style="color: #555555; font-size: 12px; line-height: 18px; text-align: center; padding: 10px 0;">\n' +
                '            <!-- Mentions légales -->\n' +
                `            <p style="margin: 0;">© 2024 ${organizationSlug}. Tous droits réservés.</p>\n` +
                `            <p style="margin: 0;">123 Rue de l'Entreprise, 75000 Paris, France</p>\n` +
                '            <p style="margin: 0;">Numéro SIRET : 123 456 789 00012</p>\n' +
                `            <p style="margin: 0;">[Ajouter d'autres informations légales si nécessaire]</p>\n` +
                '        </td>\n' +
                '    </tr>\n' +
                '    <tr>\n' +
                '        <td align="center" style="padding: 20px 0;">\n' +
                '            <!-- Lien de désinscription -->\n' +
                '            <a href="[URL_DE_DESINSCRIPTION]" style="color: #007BFF; text-decoration: none; font-size: 12px;">Se désinscrire</a>\n' +
                '        </td>\n' +
                '    </tr>\n' +
                '</table>\n',
            wysiwygEnabled: false,
            isArchived: false,
            parameters: [],
            createdAt: ISODate('2024-10-08T18:22:02.545Z'),
            updatedAt: ISODate('2024-10-08T18:22:02.545Z')
        },
        {
            _id: {
                block: '67057c3d3324f03722ba1838',
                organization: organizationSlug,
                timestamp: 1728412733413
            },
            displayName: 'Article 1',
            description: 'Article block with image, title, description and article link, centered',
            code: '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; padding: 20px; font-family: Arial, sans-serif;">\n' +
                '    <tr>\n' +
                "        <!-- Section de l'image de l'article -->\n" +
                '        <td align="center" style="padding-bottom: 30px;">\n' +
                `            <img src="https://via.placeholder.com/600x200" alt="Image de l'article" style="display: block; max-width: 100%; height: auto; border-radius: 5px;" />\n` +
                '        </td>\n' +
                '    </tr>\n' +
                '    <tr>\n' +
                "        <!-- Titre de l'article -->\n" +
                '        <td align="center" style="padding: 10px 0;">\n' +
                `            <h2 style="font-size: 20px; color: #333333; margin: 0;">Titre de l'Article</h2>\n` +
                '        </td>\n' +
                '    </tr>\n' +
                '    <tr>\n' +
                "        <!-- Description de l'article -->\n" +
                '        <td align="center" style="padding: 10px 0 20px 0; color: #555555; font-size: 14px; line-height: 22px;">\n' +
                `            <p style="margin: 0; padding: 0 20px;">Ceci est une description de l'article. Vous pouvez y décrire brièvement le contenu, les points principaux ou les informations que vous souhaitez mettre en avant. Ajoutez autant de détails que nécessaire pour susciter l'intérêt du lecteur.</p>\n` +
                '        </td>\n' +
                '    </tr>\n' +
                '    <tr>\n' +
                "        <!-- Lien de l'article -->\n" +
                '        <td align="center" style="padding: 20px 0;">\n' +
                `            <a href="[URL_DE_L_ARTICLE]" style="background-color: #007BFF; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 14px;">Lire l'article</a>\n` +
                '        </td>\n' +
                '    </tr>\n' +
                '</table>\n',
            wysiwygEnabled: false,
            isArchived: false,
            parameters: [],
            createdAt: ISODate('2024-10-08T18:38:53.416Z'),
            updatedAt: ISODate('2024-10-08T18:38:53.416Z')
        }
    ]);


    if (organizationSlug === 'alphabet') {
        const fakeBlock = {
            _id: {
                block: '670576bde8c905763f09657f',
                organization: organizationSlug,
                timestamp: Date.now()
            },
            displayName: 'Bloc ',
            description: 'Fake empty block',
            code: '<span>Fake block</span>',
            wysiwygEnabled: false,
            isArchived: false,
            parameters: [],
            createdAt: ISODate('2024-12-01T18:15:25.088Z'),
            updatedAt: ISODate('2024-12-01T18:15:25.088Z')
        };

        const fakeBlocks = Array.from({length: 21})
            .map((u, i) => i)
            .map(i => ({
                ...fakeBlock,
                displayName: `Bloc ${i}`,
                description: `Fake empty block #${i}`,
                _id: { block: new ObjectId().toString(), organization: organizationSlug, timestamp: Date.now() + i}
            }));

        db.blocks.insertMany(fakeBlocks);
    }

    db.folder_items.insertMany([
        {
            _id: {
                item: '670576bde8c905763f09657f',
                folder: '670574f237c09a4be6849858',
                organization: organizationSlug
            },
            type: 'block',
            createdAt: ISODate('2024-10-08T18:18:08.709Z'),
            updatedAt: ISODate('2024-10-08T18:18:08.709Z')
        },
        {
            _id: {
                item: '6705784ae8c905763f096616',
                folder: '6705755937c09a4be6849887',
                organization: organizationSlug
            },
            type: 'block',
            createdAt: ISODate('2024-10-08T18:22:59.478Z'),
            updatedAt: ISODate('2024-10-08T18:22:59.478Z')
        },
        {
            _id: {
                item: '67057c3d3324f03722ba1838',
                folder: '6705755437c09a4be684987e',
                organization: organizationSlug
            },
            type: 'block',
            createdAt: ISODate('2024-10-08T18:39:29.885Z'),
            updatedAt: ISODate('2024-10-08T18:39:29.885Z')
        }
    ]);

});