/* Language Atlas content catalog.
 * Add lessons here. Each lesson supplies examples, a mini glossary, and a retryable quiz.
 * This file contains ONLY sample/public study content; never put private notes here.
 */
window.ATLAS_DATA = {
  languages: [
    { id:'ko', label:'Korean', native:'한국어', flag:'🇰🇷', level:'Returning learner', description:'Build on your Korean foundation through everyday expressions and sentence patterns.', focus:'Polite speech · sentence patterns · listening', color:'#b68a84', speech:'ko-KR' },
    { id:'zh', label:'Mandarin', native:'普通话', flag:'🇨🇳', level:'New foundation', description:'Learn sound and tone distinctions, then build useful spoken sentences.', focus:'Tones · pinyin · characters', color:'#be9f74', speech:'zh-CN' },
    { id:'ru', label:'Russian', native:'Русский', flag:'🇷🇺', level:'New foundation', description:'Get comfortable with Cyrillic and essential everyday Russian.', focus:'Cyrillic · pronunciation · cases', color:'#8297b3', speech:'ru-RU' },
    { id:'it', label:'Italian', native:'Italiano', flag:'🇮🇹', level:'New foundation', description:'Take advantage of Spanish cognates while paying attention to Italian differences.', focus:'Conversation · verbs · pronunciation', color:'#8eaa90', speech:'it-IT' }
  ],
  lessons: [
    {
      id:'ko-greetings', language:'ko', unit:'01', title:'Greetings & everyday politeness', level:'Foundation review', minutes:12,
      description:'Review expressions you can use immediately, and notice when politeness changes meaning.',
      outcomes:['Recognize common polite greetings','Choose an appropriate thank-you expression','Listen and repeat useful phrases'],
      explanation:'Korean commonly uses different speech levels depending on context. The -요 ending is a useful everyday polite pattern, but not every polite expression ends the same way. Practice the full phrase, not only a word-for-word translation.',
      examples:[
        {native:'안녕하세요.', reading:'annyeonghaseyo', meaning:'Hello. (polite)'},
        {native:'감사합니다.', reading:'gamsahamnida', meaning:'Thank you. (formal/polite)'},
        {native:'안녕!', reading:'annyeong', meaning:'Hi / bye. (casual)'}
      ],
      vocab:[['안녕하세요','annyeonghaseyo','hello (polite)'],['감사합니다','gamsahamnida','thank you'],['네','ne','yes'],['아니요','aniyo','no'],['안녕','annyeong','hi / bye (casual)']],
      quiz:[
        {question:'Which greeting is appropriate in many everyday polite situations?',options:['안녕!','안녕하세요.','아니요'],correct:1,why:'안녕하세요 is a standard polite hello; 안녕 is casual.'},
        {question:'What does 감사합니다 mean?',options:['Thank you','See you later','Excuse me'],correct:0,why:'감사합니다 is a formal/polite way to thank someone.'}
      ]
    },
    {
      id:'ko-introductions', language:'ko', unit:'02', title:'Introducing yourself', level:'Foundation review', minutes:15,
      description:'Build simple self-introductions with topic marking and polite endings.',
      outcomes:['Recognize the topic particle 는','Read a simple introduction','Explain the difference between a topic and a subject'],
      explanation:'저 means “I” in polite or humble speech. 는 marks the topic after a vowel-ending noun or pronoun. In 저는 학생이에요, you introduce yourself as the topic of the sentence. 이에요 follows a consonant-ending noun, while 예요 follows a vowel-ending noun.',
      examples:[
        {native:'저는 학생이에요.', reading:'jeoneun haksaeng-ieyo', meaning:'I am a student.'},
        {native:'저는 미국에 살아요.', reading:'jeoneun migug-e sarayo', meaning:'I live in the United States.'},
        {native:'만나서 반가워요.', reading:'mannaseo bangawoyo', meaning:'Nice to meet you.'}
      ],
      vocab:[['저','jeo','I (polite/humble)'],['는','neun','topic particle (after a vowel)'],['학생','haksaeng','student'],['살아요','sarayo','live (polite present)'],['반가워요','bangawoyo','glad to meet you']],
      quiz:[
        {question:'In 저는 학생이에요, what does 저는 indicate?',options:['A past-tense verb','I, as the topic','A question word'],correct:1,why:'저 is “I,” and 는 marks it as the topic.'},
        {question:'Which ending follows 학생 (a consonant-ending noun)?',options:['예요','이에요','까지'],correct:1,why:'이에요 follows consonant-ending nouns like 학생.'}
      ]
    },
    {
      id:'zh-tones', language:'zh', unit:'01', title:'Pinyin & the four tones', level:'Beginner', minutes:14,
      description:'Learn how tone changes meaning before memorizing long word lists.',
      outcomes:['Recognize four tone marks','Distinguish basic tone patterns','Say simple syllables slowly and clearly'],
      explanation:'Standard Mandarin uses four main lexical tones plus a neutral tone. In pinyin, tone marks are written above a vowel. Tone is part of the word: changing the pitch contour can change the meaning. Listen to native audio regularly, not only romanization.',
      examples:[
        {native:'妈', reading:'mā · first tone', meaning:'mother'},
        {native:'麻', reading:'má · second tone', meaning:'hemp'},
        {native:'马', reading:'mǎ · third tone', meaning:'horse'},
        {native:'骂', reading:'mà · fourth tone', meaning:'to scold'}
      ],
      vocab:[['妈','mā','mother'],['麻','má','hemp'],['马','mǎ','horse'],['骂','mà','to scold'],['吗','ma','question particle (neutral tone)']],
      quiz:[
        {question:'Which pinyin form shows the third tone?',options:['mà','mǎ','má'],correct:1,why:'The third tone is written with a caron (ˇ), as in mǎ.'},
        {question:'Why is tone practice essential?',options:['It changes word meaning','Tones are only used in writing','It replaces grammar'],correct:0,why:'The same syllable with different tones can refer to different words.'}
      ]
    },
    {
      id:'zh-intro', language:'zh', unit:'02', title:'Hello, my name is…', level:'Beginner', minutes:15,
      description:'Start a simple introduction with high-frequency sentences.',
      outcomes:['Greet someone','Introduce your name','Recognize a basic question particle'],
      explanation:'Mandarin does not conjugate verbs for person the way many European languages do. 我 (wǒ) means I; 叫 (jiào) can mean to be called. 吗 (ma) turns many statements into yes/no questions when placed at the end. The characters and pronunciation should be learned together.',
      examples:[
        {native:'你好！', reading:'nǐ hǎo', meaning:'Hello!'},
        {native:'我叫安娜。', reading:'wǒ jiào Ānnà', meaning:'My name is Anna.'},
        {native:'你好吗？', reading:'nǐ hǎo ma', meaning:'How are you? (textbook greeting)'}
      ],
      vocab:[['你','nǐ','you'],['好','hǎo','good'],['我','wǒ','I / me'],['叫','jiào','to be called'],['名字','míngzi','name']],
      quiz:[
        {question:'What is the function of 叫 in 我叫安娜?',options:['To make a negative','To say “am called”','To indicate a plural'],correct:1,why:'我叫安娜 means “I am called Anna.”'},
        {question:'Which character means “I”?',options:['你','我','好'],correct:1,why:'我 (wǒ) means I or me.'}
      ]
    },
    {
      id:'ru-letters', language:'ru', unit:'01', title:'Meet the Cyrillic alphabet', level:'Beginner', minutes:14,
      description:'Start reading Russian with a few familiar and unfamiliar letters.',
      outcomes:['Identify common Cyrillic letters','Avoid deceptive look-alikes','Sound out a few short words'],
      explanation:'Russian uses the Cyrillic alphabet. Some letters look like Latin letters and have similar sounds (А, М), while others are false friends: В sounds like English v, Н sounds like n, and Р sounds like r. Work on recognition before speed.',
      examples:[
        {native:'мама', reading:'mama', meaning:'mom'},
        {native:'метро', reading:'metro', meaning:'metro / subway'},
        {native:'дом', reading:'dom', meaning:'house'}
      ],
      vocab:[['А а','a','a sound'],['В в','v','v sound'],['Н н','n','n sound'],['Р р','r','rolled/tapped r sound'],['дом','dom','house']],
      quiz:[
        {question:'What sound does Russian В usually represent?',options:['b','v','w'],correct:1,why:'В looks like B but usually represents a v sound.'},
        {question:'Which word means “house”?',options:['дом','мама','метро'],correct:0,why:'дом (dom) means house.'}
      ]
    },
    {
      id:'ru-greetings', language:'ru', unit:'02', title:'Greetings & introductions', level:'Beginner', minutes:15,
      description:'Use informal and polite expressions in everyday situations.',
      outcomes:['Choose between informal and polite greetings','Say thank you','Recognize a basic introduction'],
      explanation:'Привет is informal; Здравствуйте is a formal or polite greeting. Russian uses both informal and formal forms of “you,” depending on context. Start with expressions as whole units while you become familiar with case endings.',
      examples:[
        {native:'Привет!', reading:'privet', meaning:'Hi! (informal)'},
        {native:'Здравствуйте!', reading:'zdravstvuyte', meaning:'Hello! (polite/formal)'},
        {native:'Меня зовут Анна.', reading:'menya zovut Anna', meaning:'My name is Anna.'}
      ],
      vocab:[['Привет','privet','hi (informal)'],['Здравствуйте','zdravstvuyte','hello (formal)'],['Спасибо','spasibo','thank you'],['Да','da','yes'],['Нет','nyet','no']],
      quiz:[
        {question:'Which is a polite/formal greeting?',options:['Привет','Здравствуйте','Нет'],correct:1,why:'Здравствуйте is appropriate in formal or polite situations.'},
        {question:'What does Спасибо mean?',options:['Please','Thank you','Goodbye'],correct:1,why:'Спасибо means thank you.'}
      ]
    },
    {
      id:'it-greetings', language:'it', unit:'01', title:'Your first Italian conversation', level:'Beginner', minutes:12,
      description:'Build useful greetings, and notice similarities and differences with Spanish.',
      outcomes:['Greet someone appropriately','Say thanks','Recognize everyday parting expressions'],
      explanation:'Italian and Spanish share many Latin roots, so some vocabulary will feel familiar. Watch for different pronunciation and meanings rather than assuming every similar-looking word works the same way. Ciao is commonly informal and used for both greeting and farewell.',
      examples:[
        {native:'Ciao!', reading:'chow', meaning:'Hi! / Bye! (informal)'},
        {native:'Buongiorno!', reading:'bwohn-JOR-no', meaning:'Good morning / good day!'},
        {native:'Grazie mille.', reading:'GRAHT-tsyeh MEEL-leh', meaning:'Thanks a lot.'}
      ],
      vocab:[['ciao','chow','hi / bye (informal)'],['buongiorno','bwohn-JOR-no','good morning/day'],['grazie','GRAHT-tsyeh','thank you'],['per favore','pehr fah-VOH-reh','please'],['arrivederci','ah-ree-veh-DEHR-chee','goodbye']],
      quiz:[
        {question:'Which expression is especially informal?',options:['Ciao','Buongiorno','Arrivederci'],correct:0,why:'Ciao is very common among friends and in informal situations.'},
        {question:'What does grazie mean?',options:['Please','Thank you','Tomorrow'],correct:1,why:'Grazie means thank you.'}
      ]
    },
    {
      id:'it-essere', language:'it', unit:'02', title:'Essere & avere', level:'Beginner', minutes:16,
      description:'Practice two foundational verbs: to be and to have.',
      outcomes:['Recognize io sono and io ho','Contrast Italian with Spanish','Build short present-tense sentences'],
      explanation:'Essere means “to be,” and avere means “to have.” In the present tense: io sono (I am), tu sei (you are), io ho (I have), tu hai (you have). Like Spanish, Italian often drops subject pronouns because the verb form signals the subject.',
      examples:[
        {native:'Sono qui.', reading:'SOH-no kwee', meaning:'I am here.'},
        {native:'Ho un libro.', reading:'oh oon LEE-bro', meaning:'I have a book.'},
        {native:'Sei pronto?', reading:'say PRON-toh', meaning:'Are you ready? (masculine form)'}
      ],
      vocab:[['essere','EH-seh-reh','to be'],['avere','ah-VEH-reh','to have'],['sono','SOH-no','I am / they are'],['ho','oh','I have'],['libro','LEE-bro','book']],
      quiz:[
        {question:'Which means “I have”?',options:['Io sono','Io ho','Tu sei'],correct:1,why:'Io ho is the first-person singular of avere.'},
        {question:'What does Sono qui mean?',options:['I am here','I have a book','You are here'],correct:0,why:'Sono is I am and qui means here.'}
      ]
    }
  ],
  resources: [
    {id:'ko-patterns',language:'ko',category:'Grammar',title:'Polite speech notebook',body:'Start by recognizing -요 patterns and common formal endings. Keep examples from shows or conversations, including context and who is speaking.'},
    {id:'ko-listening',language:'ko',category:'Listening',title:'Korean listening routine',body:'Listen once for overall meaning, once with captions, then repeat a short phrase aloud. Note unfamiliar connectors or endings.'},
    {id:'zh-tones-guide',language:'zh',category:'Pronunciation',title:'Mandarin tone reference',body:'First tone: steady and high (mā). Second: rising (má). Third: low/dipping in isolation (mǎ; realization varies in connected speech). Fourth: sharply falling (mà). Neutral: light (ma).'},
    {id:'zh-characters',language:'zh',category:'Writing',title:'Characters and pinyin',body:'Study a character together with sound, tone, meaning, and a full example word. Avoid memorizing characters without pronunciation.'},
    {id:'ru-cyrillic',language:'ru',category:'Writing',title:'Cyrillic look-alikes',body:'А = a, В = v, Е = ye/e depending on context, Н = n, Р = r, С = s, У = u, Х = kh. Always connect letters to audio.'},
    {id:'ru-cases',language:'ru',category:'Grammar',title:'Russian case roadmap',body:'The six commonly taught cases are nominative, genitive, dative, accusative, instrumental, and prepositional. Begin with high-frequency phrases before memorizing full paradigms.'},
    {id:'it-spanish',language:'it',category:'Comparisons',title:'Italian vs. Spanish',body:'Use cognates as clues, but verify differences in pronunciation, spelling, grammatical gender, and false friends.'},
    {id:'it-verbs',language:'it',category:'Grammar',title:'Starter verb chart',body:'Essere: io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono. Avere: io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno.'}
  ]
};
