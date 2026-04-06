const articles = [
  {
    slug: 'pourquoi-je-me-sens-vide',
    date: '2026-04-06',
    readTime: { fr: '8 min de lecture', en: '8 min read', ar: '٨ دقائق للقراءة' },
    title: {
      fr: 'Pourquoi je me sens vide alors que tout va bien ?',
      en: 'Why do I feel empty when everything is fine?',
      ar: 'لماذا أشعر بالفراغ رغم أن كل شيء على ما يرام؟',
    },
    excerpt: {
      fr: "Vous avez un travail stable, des proches aimants, peut-être même une vie que d'autres envieraient. Et pourtant… vous ressentez un vide intérieur.",
      en: "You have a stable job, loving people around you, maybe even a life others would envy. And yet… you feel an inner emptiness.",
      ar: "لديك عمل مستقر، وأحباء من حولك، وربما حياة يحسدك عليها الآخرون. ومع ذلك… تشعر بفراغ داخلي.",
    },
    content: {
      fr: [
        { type: 'intro', text: "Vous avez un travail stable, des proches aimants, peut-être même une vie que d'autres envieraient.\nEt pourtant… vous ressentez un vide intérieur.\nUne impression d'absence, de déconnexion, parfois difficile à expliquer.\nCe sentiment peut être déroutant, voire culpabilisant.\n\"Je n'ai aucune raison d'aller mal.\"\nEt pourtant, quelque chose ne va pas.\nExplorons ce que signifie réellement ce sentiment de vide, d'où il peut venir, et comment commencer à l'apaiser." },

        { type: 'heading', text: 'Le sentiment de vide : de quoi parle-t-on exactement ?' },
        { type: 'paragraph', text: "Le \"vide intérieur\" n'est pas un diagnostic en soi. C'est une expérience subjective. Cela ne signifie pas automatiquement que vous souffrez d'un trouble." },
        { type: 'paragraph', text: "Il peut se manifester par :" },
        { type: 'list', items: [
          "Une impression de déconnexion émotionnelle",
          "Un manque d'élan ou de motivation",
          "Une difficulté à ressentir du plaisir (anhédonie)",
          "Une sensation de \"flotter\", comme si vous étiez coupé de vous-même",
          "Un sentiment d'inutilité ou de perte de sens",
        ]},

        { type: 'heading', text: "Pourquoi peut-on se sentir vide alors que \"tout va bien\" ?" },
        { type: 'paragraph', text: "Ce sentiment n'est pas rare.\nIl touche souvent des personnes qui ont appris à fonctionner avant d'apprendre à ressentir." },

        { type: 'subheading', text: 'Le décalage entre réussite extérieure et réalité intérieure' },
        { type: 'paragraph', text: "Notre société valorise la performance, la stabilité, la réussite visible.\nMais le psychisme ne fonctionne pas selon ces critères.\nOn peut avoir \"réussi\" socialement, tout en étant intérieurement :" },
        { type: 'list', items: [
          'Déconnecté de ses désirs',
          'En mode survie',
          'Adapté aux attentes des autres',
        ]},
        { type: 'paragraph', text: 'Le vide peut alors signaler une coupure avec soi-même.' },

        { type: 'subheading', text: "L'anhédonie : quand le plaisir ne circule plus" },
        { type: 'paragraph', text: "L'anhédonie correspond à la diminution ou perte de la capacité à ressentir du plaisir.\nElle est décrite comme un symptôme central des troubles dépressifs dans le DSM-5 (American Psychiatric Association, 2013).\nCe n'est pas forcément une tristesse intense. C'est parfois un \"rien\"." },

        { type: 'subheading', text: 'Une stratégie de protection émotionnelle' },
        { type: 'paragraph', text: "Chez certaines personnes, le vide peut être une défense psychique.\nLorsque les émotions ont été trop intenses ou insécurisantes dans le passé, le psychisme peut \"éteindre\" partiellement l'accès aux affects.\nLe vide devient alors une forme d'anesthésie." },
        { type: 'quote', text: "Le psychanalyste Donald Winnicott (1960) a développé le concept de \"faux self\" pour décrire une adaptation excessive aux attentes de l'environnement au détriment du sentiment d'être vivant intérieurement." },

        { type: 'subheading', text: 'Une perte de sens' },
        { type: 'paragraph', text: "Le psychiatre Viktor Frankl (1946), fondateur de la logothérapie, a montré combien la quête de sens est centrale dans l'équilibre psychique.\nOn peut avoir tout ce qu'il faut, sans savoir pourquoi on vit ce que l'on vit." },

        { type: 'heading', text: 'Comment commencer à sortir de ce vide ?' },
        { type: 'paragraph', text: 'Voici quelques pistes concrètes :' },

        { type: 'subheading', text: '1. Nommer ce que vous ressentez' },
        { type: 'paragraph', text: "Mettre des mots est déjà un mouvement.\nLe vide n'est pas \"rien\" : c'est une expérience.\nEssayez d'écrire :" },
        { type: 'list', items: [
          'Quand est-ce que je ressens le plus ce vide ?',
          'Depuis quand ?',
          'À quoi ressemble-t-il ?',
        ]},

        { type: 'subheading', text: '2. Observer sans juger' },
        { type: 'paragraph', text: "Évitez les phrases comme :" },
        { type: 'list', items: [
          "\"Je n'ai pas le droit d'aller mal.\"",
          "\"Je devrais être reconnaissant.\"",
        ]},
        { type: 'paragraph', text: 'La culpabilité entretient la déconnexion.' },

        { type: 'subheading', text: '3. Explorer la question du désir' },
        { type: 'paragraph', text: "Demandez-vous :" },
        { type: 'list', items: [
          'Qu\'est-ce que je fais pour moi ?',
          'Si personne ne m\'observait, que choisirais-je ?',
        ]},
        { type: 'paragraph', text: 'Le vide peut parfois signaler un désir étouffé.' },

        { type: 'subheading', text: '4. Envisager un espace thérapeutique' },
        { type: 'paragraph', text: "Le sentiment de vide est souvent difficile à traverser sans soutien, car il est flou.\nLa thérapie permet :" },
        { type: 'list', items: [
          "D'explorer les émotions enfouies",
          'De reconnecter avec son histoire',
          'De retrouver progressivement une continuité intérieure',
        ]},

        { type: 'heading', text: 'Quand faut-il consulter ?' },
        { type: 'paragraph', text: "Il est important de demander de l'aide si le vide s'accompagne de :" },
        { type: 'list', items: [
          'Pensées noires',
          'Isolement marqué',
          'Troubles du sommeil persistants',
          "Perte d'intérêt généralisée",
        ]},
        { type: 'paragraph', text: 'Dans ces cas, une évaluation professionnelle est recommandée.' },

        { type: 'closing', text: "Se sentir vide alors que \"tout va bien\" n'est ni absurde, ni capricieux, ni ingrat.\nC'est souvent le signe que quelque chose en vous cherche à être entendu.\nLe vide peut être un signal.\nUn appel à vous reconnecter à ce qui est vivant, fragile, authentique." },
        { type: 'cta', text: "Si vous vous reconnaissez dans ces lignes, je propose des consultations en ligne dans un cadre confidentiel et bienveillant.\nParler permet parfois de redonner une forme à ce qui semblait n'être que du \"rien\".\nVous n'avez pas à faire face à cela seul." },
      ],
    },
  },
]

export default articles
