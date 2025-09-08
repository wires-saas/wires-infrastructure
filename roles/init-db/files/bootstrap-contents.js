db.feeds.drop();
db.feed_runs.drop();
db.articles.drop();
db.tags.drop();

// TODO insert feed runs (with different statuses)
// and articles

db.tags.insertMany([
    {
        _id: ObjectId('66d612f89eb6f99de073adf4'),
        displayName: 'Tag1',
        color: 'warning',
        description: 'contient place test',
        organization: 'alphabet',
        ruleset: [
            {
                field: 'metadata.title',
                operator: 'and',
                filters: [ { filterValue: 'place', filterType: 'contains' } ]
            }
        ],
        createdAt: ISODate('2024-09-02T19:33:12.111Z'),
        updatedAt: ISODate('2024-09-02T19:33:12.111Z'),
        __v: 0
    },
    {
        _id: ObjectId('66d90380f992f4bbcf6aa2bb'),
        displayName: '2Sept',
        color: 'success',
        description: '',
        organization: 'alphabet',
        ruleset: [
            {
                field: 'metadata.publishedAt',
                operator: 'and',
                filters: [ { filterValue: 1725228000000, filterType: 'dateIs' } ]
            }
        ],
        createdAt: ISODate('2024-09-05T01:04:00.702Z'),
        updatedAt: ISODate('2024-09-05T01:04:00.702Z'),
        __v: 0
    },
    {
        _id: ObjectId('66d90411d344215c0ce9919c'),
        displayName: '2Sept-bis',
        color: 'success',
        description: '',
        organization: 'alphabet',
        ruleset: [
            {
                field: 'metadata.publishedAt',
                operator: 'and',
                filters: [ { filterValue: 1725228000000, filterType: 'dateIs' } ]
            }
        ],
        createdAt: ISODate('2024-09-05T01:06:25.666Z'),
        updatedAt: ISODate('2024-09-05T01:06:25.666Z'),
        __v: 0
    },
    {
        _id: ObjectId('66fc7a1e73241e73f1bc2527'),
        displayName: 'débute par L',
        color: 'success',
        description: '',
        organization: 'alphabet',
        ruleset: [
            {
                field: 'metadata.title',
                operator: 'and',
                filters: [ { filterValue: 'L', filterType: 'startsWith' } ]
            }
        ],
        createdAt: ISODate('2024-10-01T22:39:26.886Z'),
        updatedAt: ISODate('2024-10-01T22:39:26.886Z'),
        __v: 0
    }
]);

db.feeds.insertMany([
    {
        _id: ObjectId('66cb654341972c3c36faf437'),
        organization: 'alphabet',
        displayName: 'CourrierPicard',
        description: '',
        urls: [ 'https://www.courrier-picard.fr/rss2/72/cible_principale' ],
        scrapingInterval: 1,
        scrapingGranularity: 'hour',
        scrapingEnabled: true,
        autoScrapingInterval: 20,
        autoScrapingGranularity: 'minute',
        authorizationType: 'none',
        createdAt: ISODate('2024-08-25T17:09:23.201Z'),
        updatedAt: ISODate('2024-08-25T23:26:04.179Z'),
        __v: 0
    }
])

db.feed_runs.insertMany([
    {
        _id: ObjectId('671f8304808b30ca1547ece6'),
        feed: '66cb654341972c3c36faf437',
        status: 'completed',
        articles: [
            'https://www.courrier-picard.fr/id572822/article/2024-10-27/la-fonction',
            'https://www.courrier-picard.fr/id572602/article/2024-10-26/la-honte',
            'https://www.courrier-picard.fr/id572339/article/2024-10-25/mad-usa',
            'https://www.courrier-picard.fr/id571998/article/2024-10-24/liban-les-paroles-et-les-actes',
            'https://www.courrier-picard.fr/id571674/article/2024-10-23/francais-consommez',
            'https://www.courrier-picard.fr/id571035/article/2024-10-21/letat-peut-il-tout',
            'https://www.courrier-picard.fr/id570699/article/2024-10-20/apres-lorage',
            'https://www.courrier-picard.fr/id570469/article/2024-10-19/une-route-partager',
            'https://www.courrier-picard.fr/id570045/article/2024-10-18/le-conseil-des-ministres-nest-plus-le-saint-des-saints',
            'https://www.courrier-picard.fr/id569847/article/2024-10-17/malaise-budgetaire'
        ],
        newArticles: [
            'https://www.courrier-picard.fr/id572822/article/2024-10-27/la-fonction',
            'https://www.courrier-picard.fr/id572602/article/2024-10-26/la-honte',
            'https://www.courrier-picard.fr/id572339/article/2024-10-25/mad-usa',
            'https://www.courrier-picard.fr/id571998/article/2024-10-24/liban-les-paroles-et-les-actes',
            'https://www.courrier-picard.fr/id571674/article/2024-10-23/francais-consommez',
            'https://www.courrier-picard.fr/id571035/article/2024-10-21/letat-peut-il-tout',
            'https://www.courrier-picard.fr/id570699/article/2024-10-20/apres-lorage',
            'https://www.courrier-picard.fr/id570469/article/2024-10-19/une-route-partager',
            'https://www.courrier-picard.fr/id570045/article/2024-10-18/le-conseil-des-ministres-nest-plus-le-saint-des-saints',
            'https://www.courrier-picard.fr/id569847/article/2024-10-17/malaise-budgetaire'
        ],
        scrapingDurationMs: 1557,
        articlesCreationMs: 2133,
        tagsApplied: 1,
        createdAt: ISODate('2024-10-28T12:26:44.732Z'),
        updatedAt: ISODate('2024-10-28T12:26:48.459Z'),
        __v: 1
    }
]);

db.articles.insertMany([
    {
        _id: 'https://www.courrier-picard.fr/id572822/article/2024-10-27/la-fonction',
        url: 'https://www.courrier-picard.fr/id572822/article/2024-10-27/la-fonction',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [ '66fc7a1e73241e73f1bc2527' ],
        metadata: {
            title: 'La fonction',
            description: 'Les députés ont levé la séance sans aboutir dans le projet de budget 2025. Ils reprendront les débats le 5 novembre 2024.',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/27/node_572822/46292375/public/2024/10/27/28464006.jpeg?itok=ypgorGjK1730066115',
            categories: [ 'Edito' ],
            publishedAt: 1730066100000
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.351Z'),
        updatedAt: ISODate('2024-10-28T12:26:46.608Z')
    },
    {
        _id: 'https://www.courrier-picard.fr/id572602/article/2024-10-26/la-honte',
        url: 'https://www.courrier-picard.fr/id572602/article/2024-10-26/la-honte',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [ '66fc7a1e73241e73f1bc2527' ],
        metadata: {
            title: 'La honte',
            description: 'La menace qui continue de peser sur Paul Watson est une honte pour nous tous. Personne ne peut comprendre que l’écologiste reste détenu avec la crainte d’une extradition vers le Japon.',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/26/node_572602/46267315/public/2024/10/26/28275478.jpeg?itok=f4_GTcXV1729976223',
            categories: [ 'Edito' ],
            publishedAt: 1729976100000
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.351Z'),
        updatedAt: ISODate('2024-10-28T12:26:46.814Z')
    },
    {
        _id: 'https://www.courrier-picard.fr/id572339/article/2024-10-25/mad-usa',
        url: 'https://www.courrier-picard.fr/id572339/article/2024-10-25/mad-usa',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [],
        metadata: {
            title: 'Mad in USA',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/25/node_572339/46240844/public/2024/10/25/28351933.jpeg?itok=enXAkIkq1729884130',
            categories: [ 'Edito' ],
            publishedAt: 1729884119000,
            author: 'Daniel Muraz'
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.352Z'),
        updatedAt: ISODate('2024-10-28T12:26:46.997Z')
    },
    {
        _id: 'https://www.courrier-picard.fr/id571998/article/2024-10-24/liban-les-paroles-et-les-actes',
        url: 'https://www.courrier-picard.fr/id571998/article/2024-10-24/liban-les-paroles-et-les-actes',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [ '66fc7a1e73241e73f1bc2527' ],
        metadata: {
            title: 'Liban, les paroles et les actes',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/24/node_571998/46214521/public/2024/10/24/28282150.jpeg?itok=58jmsADp1729794721',
            categories: [ 'Edito' ],
            publishedAt: 1729794708000,
            author: 'Daniel Muraz'
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.352Z'),
        updatedAt: ISODate('2024-10-28T12:26:47.228Z')
    },
    {
        _id: 'https://www.courrier-picard.fr/id571674/article/2024-10-23/francais-consommez',
        url: 'https://www.courrier-picard.fr/id571674/article/2024-10-23/francais-consommez',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [],
        metadata: {
            title: 'Français, consommez !',
            description: 'Les Français n’ont jamais autant épargné (18 % de leur revenu en moyenne). De l’argent qui ne part pas dans l’économie et dans les caisses de l’État sous forme de TVA.',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/23/node_571674/46187766/public/2024/10/23/28212582.jpeg?itok=3AfnQRmZ1729703718',
            categories: [ 'Edito' ],
            publishedAt: 1729703700000,
            author: 'Francois Wojtalik'
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.352Z'),
        updatedAt: ISODate('2024-10-28T12:26:47.399Z')
    },
    {
        _id: 'https://www.courrier-picard.fr/id571035/article/2024-10-21/letat-peut-il-tout',
        url: 'https://www.courrier-picard.fr/id571035/article/2024-10-21/letat-peut-il-tout',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [ '66fc7a1e73241e73f1bc2527' ],
        metadata: {
            title: 'L’État peut-il tout ?',
            description: 'Le Doliprane, médicament le plus vendu en France, va passer sous contrôle d’un fonds d’investissement américain. L’État, via la Banque publique d’investissement (Bpi), va prendre une participation de 1 à 2 % du capital soit un investissement de 100 à 150 millions d’euros.',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/21/node_571035/46139004/public/2024/10/21/28088225.jpeg?itok=SswQOuRI1729539861',
            categories: [ 'Edito' ],
            publishedAt: 1729539837000,
            author: 'Francois Wojtalik'
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.352Z'),
        updatedAt: ISODate('2024-10-28T12:26:47.629Z')
    },
    {
        _id: 'https://www.courrier-picard.fr/id570699/article/2024-10-20/apres-lorage',
        url: 'https://www.courrier-picard.fr/id570699/article/2024-10-20/apres-lorage',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [],
        metadata: {
            title: 'Après l’orage',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/20/node_570699/46114130/public/2024/10/20/28031118.jpeg?itok=gJhi-F2n1729455364',
            categories: [ 'Edito' ],
            publishedAt: 1729455354000,
            author: 'Daniel Muraz'
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.352Z'),
        updatedAt: ISODate('2024-10-28T12:26:47.802Z')
    },
    {
        _id: 'https://www.courrier-picard.fr/id570469/article/2024-10-19/une-route-partager',
        url: 'https://www.courrier-picard.fr/id570469/article/2024-10-19/une-route-partager',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [],
        metadata: {
            title: 'Une route à partager',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/19/node_570469/46084906/public/2024/10/19/27936552.jpeg?itok=GtSyS6h51729417311',
            categories: [ 'Edito' ],
            publishedAt: 1729368996000
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.352Z'),
        updatedAt: ISODate('2024-10-28T12:26:47.988Z')
    },
    {
        _id: 'https://www.courrier-picard.fr/id570045/article/2024-10-18/le-conseil-des-ministres-nest-plus-le-saint-des-saints',
        url: 'https://www.courrier-picard.fr/id570045/article/2024-10-18/le-conseil-des-ministres-nest-plus-le-saint-des-saints',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [ '66fc7a1e73241e73f1bc2527' ],
        metadata: {
            title: 'Le conseil des ministres n’est plus le Saint des Saints',
            description: 'Emmanuel Macron n’a pas aimé les libres interprétations sorties du conseil des ministres.',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/18/node_570045/46054031/public/2024/10/18/B9736716583Z.1_20241018144838_000%2BGSUPIGLU8.3-0.jpg?itok=oopi4CmQ1729279491',
            categories: [ 'Edito' ],
            publishedAt: 1729255718000
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.352Z'),
        updatedAt: ISODate('2024-10-28T12:26:48.237Z')
    },
    {
        _id: 'https://www.courrier-picard.fr/id569847/article/2024-10-17/malaise-budgetaire',
        url: 'https://www.courrier-picard.fr/id569847/article/2024-10-17/malaise-budgetaire',
        organization: 'alphabet',
        feeds: [ '66cb654341972c3c36faf437' ],
        tags: [],
        metadata: {
            title: 'Malaise budgétaire',
            image: 'https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2024/10/17/node_569847/46033330/public/2024/10/17/27805311.jpeg?itok=hP2n_gV01729231213',
            categories: [ 'Edito' ],
            publishedAt: 1729187724000,
            author: 'Daniel Muraz'
        },
        stats: { sent: 0, displayed: 0, clicked: 0 },
        __v: 0,
        createdAt: ISODate('2024-10-28T12:26:46.352Z'),
        updatedAt: ISODate('2024-10-28T12:26:48.406Z')
    }
]);