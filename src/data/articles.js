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

      en: [
        { type: 'intro', text: "You have a stable job, loving people around you, maybe even a life others would envy.\nAnd yet… you feel an inner emptiness.\nA sense of absence, of disconnection, sometimes hard to explain.\nThis feeling can be confusing, even guilt-inducing.\n\"I have no reason to feel bad.\"\nAnd yet, something is wrong.\nLet's explore what this feeling of emptiness really means, where it may come from, and how to begin easing it." },

        { type: 'heading', text: 'The feeling of emptiness: what are we really talking about?' },
        { type: 'paragraph', text: "\"Inner emptiness\" is not a diagnosis in itself. It is a subjective experience. It does not automatically mean you are suffering from a disorder." },
        { type: 'paragraph', text: "It can manifest as:" },
        { type: 'list', items: [
          "A sense of emotional disconnection",
          "A lack of drive or motivation",
          "Difficulty feeling pleasure (anhedonia)",
          "A sensation of \"floating\", as if cut off from yourself",
          "A feeling of uselessness or loss of meaning",
        ]},

        { type: 'heading', text: "Why can we feel empty when \"everything is fine\"?" },
        { type: 'paragraph', text: "This feeling is not uncommon.\nIt often affects people who learned to function before learning to feel." },

        { type: 'subheading', text: 'The gap between outer success and inner reality' },
        { type: 'paragraph', text: "Our society values performance, stability, visible success.\nBut the psyche does not operate by these criteria.\nYou can be socially \"successful\" while internally feeling:" },
        { type: 'list', items: [
          'Disconnected from your desires',
          'In survival mode',
          'Adapted to the expectations of others',
        ]},
        { type: 'paragraph', text: 'Emptiness can then signal a disconnection from yourself.' },

        { type: 'subheading', text: 'Anhedonia: when pleasure no longer flows' },
        { type: 'paragraph', text: "Anhedonia refers to the reduction or loss of the ability to feel pleasure.\nIt is described as a core symptom of depressive disorders in the DSM-5 (American Psychiatric Association, 2013).\nIt is not necessarily an intense sadness. Sometimes it is just \"nothing\"." },

        { type: 'subheading', text: 'A strategy of emotional protection' },
        { type: 'paragraph', text: "In some people, emptiness can be a psychic defence.\nWhen emotions have been too intense or destabilising in the past, the psyche may partially \"shut down\" access to feelings.\nEmptiness then becomes a form of anaesthesia." },
        { type: 'quote', text: "The psychoanalyst Donald Winnicott (1960) developed the concept of the \"false self\" to describe an excessive adaptation to environmental expectations at the expense of feeling alive inside." },

        { type: 'subheading', text: 'A loss of meaning' },
        { type: 'paragraph', text: "The psychiatrist Viktor Frankl (1946), founder of logotherapy, showed how central the search for meaning is to psychological balance.\nYou can have everything you need, without knowing why you are living the life you live." },

        { type: 'heading', text: 'How to begin moving out of this emptiness?' },
        { type: 'paragraph', text: 'Here are some concrete steps:' },

        { type: 'subheading', text: '1. Name what you feel' },
        { type: 'paragraph', text: "Putting it into words is already a movement.\nEmptiness is not \"nothing\": it is an experience.\nTry writing:" },
        { type: 'list', items: [
          'When do I feel this emptiness the most?',
          'Since when?',
          'What does it feel like?',
        ]},

        { type: 'subheading', text: '2. Observe without judging' },
        { type: 'paragraph', text: "Avoid phrases such as:" },
        { type: 'list', items: [
          "\"I have no right to feel bad.\"",
          "\"I should be grateful.\"",
        ]},
        { type: 'paragraph', text: 'Guilt reinforces disconnection.' },

        { type: 'subheading', text: '3. Explore the question of desire' },
        { type: 'paragraph', text: "Ask yourself:" },
        { type: 'list', items: [
          'What do I do for myself?',
          'If no one were watching, what would I choose?',
        ]},
        { type: 'paragraph', text: 'Emptiness can sometimes signal a stifled desire.' },

        { type: 'subheading', text: '4. Consider a therapeutic space' },
        { type: 'paragraph', text: "The feeling of emptiness is often difficult to navigate without support, because it is vague.\nTherapy can help:" },
        { type: 'list', items: [
          'Explore buried emotions',
          'Reconnect with your personal history',
          'Gradually recover a sense of inner continuity',
        ]},

        { type: 'heading', text: 'When should you seek help?' },
        { type: 'paragraph', text: "It is important to reach out if the emptiness is accompanied by:" },
        { type: 'list', items: [
          'Dark thoughts',
          'Significant withdrawal',
          'Persistent sleep disturbances',
          'Generalised loss of interest',
        ]},
        { type: 'paragraph', text: 'In these cases, a professional assessment is recommended.' },

        { type: 'closing', text: "Feeling empty when \"everything is fine\" is neither absurd, nor self-indulgent, nor ungrateful.\nIt is often a sign that something within you is seeking to be heard.\nEmptiness can be a signal.\nA call to reconnect with what is alive, fragile, authentic." },
        { type: 'cta', text: "If you recognise yourself in these lines, I offer online consultations in a confidential and caring setting.\nTalking can sometimes give shape to what seemed like \"nothing\".\nYou don't have to face this alone." },
      ],

      ar: [
        { type: 'intro', text: "لديك عمل مستقر، وأحباء من حولك، وربما حياة يحسدك عليها الآخرون.\nومع ذلك… تشعر بفراغ داخلي.\nإحساس بالغياب، بالانفصال، يصعب أحياناً تفسيره.\nهذا الشعور قد يكون محيّراً، بل ومُشعِراً بالذنب.\n\"ليس لديّ أيّ سبب لأكون بحال سيئة.\"\nومع ذلك، هناك شيء ما ليس على ما يرام.\nدعونا نستكشف ما يعنيه هذا الشعور بالفراغ حقاً، ومن أين قد يأتي، وكيف يمكن البدء في تخفيفه." },

        { type: 'heading', text: 'الشعور بالفراغ: عمّ نتحدث بالضبط؟' },
        { type: 'paragraph', text: "\"الفراغ الداخلي\" ليس تشخيصاً بحدّ ذاته. إنه تجربة ذاتية. لا يعني تلقائياً أنك تعاني من اضطراب." },
        { type: 'paragraph', text: "قد يتجلّى من خلال:" },
        { type: 'list', items: [
          "إحساس بالانفصال العاطفي",
          "فقدان الحماس أو الدافع",
          "صعوبة في الشعور بالمتعة (انعدام التلذذ)",
          "إحساس بأنك \"تطفو\"، كما لو كنت منقطعاً عن ذاتك",
          "شعور بعدم الجدوى أو فقدان المعنى",
        ]},

        { type: 'heading', text: "لماذا قد نشعر بالفراغ رغم أن \"كل شيء على ما يرام\"؟" },
        { type: 'paragraph', text: "هذا الشعور ليس نادراً.\nغالباً ما يصيب أشخاصاً تعلّموا أن يعملوا قبل أن يتعلّموا أن يشعروا." },

        { type: 'subheading', text: 'الفجوة بين النجاح الخارجي والواقع الداخلي' },
        { type: 'paragraph', text: "مجتمعنا يُقدّر الأداء، والاستقرار، والنجاح المرئي.\nلكن النفس لا تعمل وفق هذه المعايير.\nيمكن أن تكون \"ناجحاً\" اجتماعياً، بينما أنت داخلياً:" },
        { type: 'list', items: [
          'منفصل عن رغباتك',
          'في وضع البقاء',
          'متكيّف مع توقعات الآخرين',
        ]},
        { type: 'paragraph', text: 'قد يكون الفراغ إذاً إشارة إلى انقطاع عن الذات.' },

        { type: 'subheading', text: 'انعدام التلذذ: عندما لا تعود المتعة تتدفق' },
        { type: 'paragraph', text: "انعدام التلذذ يعني تراجع أو فقدان القدرة على الشعور بالمتعة.\nيوصف بأنه عرض محوري للاضطرابات الاكتئابية في DSM-5 (الجمعية الأمريكية للطب النفسي، 2013).\nليس بالضرورة حزناً شديداً. أحياناً يكون مجرد \"لا شيء\"." },

        { type: 'subheading', text: 'استراتيجية حماية عاطفية' },
        { type: 'paragraph', text: "عند بعض الأشخاص، قد يكون الفراغ دفاعاً نفسياً.\nعندما تكون المشاعر قد كانت شديدة أو مزعزعة في الماضي، قد تُطفئ النفس جزئياً الوصول إلى الأحاسيس.\nيصبح الفراغ حينها شكلاً من أشكال التخدير." },
        { type: 'quote', text: "طوّر المحلل النفسي دونالد وينيكوت (1960) مفهوم \"الذات الزائفة\" لوصف التكيّف المفرط مع توقعات البيئة على حساب الشعور بالحياة الداخلية." },

        { type: 'subheading', text: 'فقدان المعنى' },
        { type: 'paragraph', text: "أظهر الطبيب النفسي فيكتور فرانكل (1946)، مؤسس العلاج بالمعنى، مدى أهمية البحث عن المعنى في التوازن النفسي.\nيمكن أن تملك كل ما تحتاج، دون أن تعرف لماذا تعيش ما تعيشه." },

        { type: 'heading', text: 'كيف تبدأ بالخروج من هذا الفراغ؟' },
        { type: 'paragraph', text: 'إليك بعض الخطوات العملية:' },

        { type: 'subheading', text: '١. سمِّ ما تشعر به' },
        { type: 'paragraph', text: "وضع الكلمات هو بحدّ ذاته حركة.\nالفراغ ليس \"لا شيء\": إنه تجربة.\nحاول أن تكتب:" },
        { type: 'list', items: [
          'متى أشعر بهذا الفراغ أكثر؟',
          'منذ متى؟',
          'كيف يبدو؟',
        ]},

        { type: 'subheading', text: '٢. لاحظ دون أن تحكم' },
        { type: 'paragraph', text: "تجنّب عبارات مثل:" },
        { type: 'list', items: [
          "\"ليس من حقي أن أكون بحال سيئة.\"",
          "\"يجب أن أكون ممتنّاً.\"",
        ]},
        { type: 'paragraph', text: 'الشعور بالذنب يُديم الانفصال.' },

        { type: 'subheading', text: '٣. استكشف مسألة الرغبة' },
        { type: 'paragraph', text: "اسأل نفسك:" },
        { type: 'list', items: [
          'ما الذي أفعله لنفسي؟',
          'لو لم يكن أحد يراقبني، ماذا كنت سأختار؟',
        ]},
        { type: 'paragraph', text: 'قد يشير الفراغ أحياناً إلى رغبة مكبوتة.' },

        { type: 'subheading', text: '٤. فكّر في فضاء علاجي' },
        { type: 'paragraph', text: "الشعور بالفراغ غالباً ما يصعب تجاوزه بدون دعم، لأنه غامض.\nالعلاج النفسي يتيح:" },
        { type: 'list', items: [
          'استكشاف المشاعر المدفونة',
          'إعادة التواصل مع تاريخك الشخصي',
          'استعادة الشعور بالاستمرارية الداخلية تدريجياً',
        ]},

        { type: 'heading', text: 'متى يجب طلب المساعدة؟' },
        { type: 'paragraph', text: "من المهم طلب المساعدة إذا كان الفراغ مصحوباً بـ:" },
        { type: 'list', items: [
          'أفكار سوداء',
          'عزلة ملحوظة',
          'اضطرابات نوم مستمرة',
          'فقدان اهتمام عام',
        ]},
        { type: 'paragraph', text: 'في هذه الحالات، يُوصى بإجراء تقييم مهني.' },

        { type: 'closing', text: "الشعور بالفراغ رغم أن \"كل شيء على ما يرام\" ليس أمراً سخيفاً، ولا نزوة، ولا جحوداً.\nغالباً ما يكون علامة على أن شيئاً ما في داخلك يسعى لأن يُسمَع.\nالفراغ قد يكون إشارة.\ندعوة لإعادة التواصل مع ما هو حيّ، هشّ، أصيل." },
        { type: 'cta', text: "إذا وجدت نفسك في هذه السطور، أقدّم استشارات عبر الإنترنت في إطار سري ومليء بالرعاية.\nالحديث قد يمنح أحياناً شكلاً لما بدا وكأنه مجرد \"لا شيء\".\nلست مضطراً لمواجهة هذا بمفردك." },
      ],
    },
  },
]

export default articles
