export interface BlogPost {
  id: string;
  title: string;
  titleJapanese: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "start-japanese",
    title: "How to get started with learning Japanese",
    titleJapanese: "日本語学習の始め方",
    excerpt: "This blog is about how I got started with learning Japanese!",
     content: `
<p>Hello everyone! Welcome to my first ever blog. Today we are gonna discuss how to get started with learning Japanese.</p>

<p>Firstly, I’m just gonna give you guys the harsh truth: ask yourself <strong>why am I learning Japanese?</strong> If your reason to learn is good enough, then you might start learning it.</p>

<p>Because learning Japanese <strong>TAKES TIME</strong> — the language is huge. If you don’t have the patience to learn it, then you won’t be able to clear your language exams.</p>

<p>Now then, let’s get to the main content which is divided into four main steps. Let’s go over them step by step.</p>

<br />
<hr />
<br />

<h3>Step 1: Learn Hiragana and Katakana (alphabets of Japanese language)</h3>
<br />
<p>- Hiragana is like the main part of the Japanese language. It is usually used in words that are not written in kanji.</p>

<p>- Katakana is exactly the same as hiragana. It’s just a different version with the exact same sounds, used in slang and foreign names, etc...</p>

<p><strong>Make sure you practice this until you master it</strong>, or you will hit roadblocks when you jump into the next step.</p>

<p>I have attached an image here for reference:</p>

<br />
<hr />
<br />

<img src="https://learnjapanese.moe/img/hiragana_katakana_LARGE.png" alt="Hiragana and Katakana Chart" class="w-full rounded-lg shadow-md" />

<br />
<hr />
<br />

<h3>Step 2: Vocabulary and Grammar</h3>
<br />

<p>Now that your hiragana and katakana are perfect, here comes the hard part — <strong>Kanji</strong>.</p>

<p>Kanji, meaning "Chinese characters", is another one of the writing systems used in Japanese. They are <strong>WAY</strong> different than the alphabets. There are thousands of them used in Japanese. But don’t worry though — these guys are <em>not</em> to be studied and grinded like kana.</p>
<br />
<p><strong>Kanji are only supposed to be used in words</strong>.</p>
<br />
<p>While you’re on your journey to master Japanese, you’ll realize that complex characters in kanji are just simple components mixed together — though there is no way you’ll recognize that at first.</p>
<br />
<p>To get started with vocabulary, I suggest you go through the <strong>Kaishi 1.5k deck</strong>, which is available on Anki.</p>


<p>Want to get started with Anki? 👉 <a href="https://www.youtube.com/watch?v=6Fv3oxkogX4" target="_blank">Click here for a YouTube tutorial</a></p>
<p>And heres the link for 👉 <a href="https://ankiweb.net/shared/info/1196762551" target="_blank">Kaishi 1.5k</a></p>
<p>And for grammar, you can just follow the grammar playlist 👉 <a href="https://youtube.com/playlist?list=PLd5-Wp_4tLqYZxS5j3g6kbeOfVXlTkr3N&si=DGAI_9njZuwGKIdG" target="_blank">Japanese Grammar Playlist</a></p>

<br />
<hr />
<br />

<h3>Step 3: Immersion</h3>
<br/>
<p>Now comes the fun part: <strong>Immersion</strong>!</p>

<p>For immersion, you can honestly use any type of content you prefer, just make sure you pick one which is Japanese and fun for you.</p>

<p>At first, you might pause at every single word and look it up in the dictionary to know what it means. And this is completely fine.</p>

<p>As you progress, you might transcend and start immersing without looking anything up — which is the whole point of immersion.</p>

<br />
<hr />
<br />

<h3>Step 4: The Final Stage</h3>
<br />
<p>Please don’t try to learn all the vocabulary, grammar, and immerse in content all at once. This is a <strong>crucial mistake</strong> made by many.</p>

<p>I would suggest you do a little bit of everything or just go with what you want to learn.</p>

<p><strong>And remember, BE PATIENT</strong> — as it’s a long journey (^_^)</p>

<p>If you want to follow a structured path, you can check out the website I made:<br />
KIBAN - <a href="https://kiban-one.vercel.app" target="_blank">https://kiban-one.vercel.app</a></p>
<br />
<p>Well then, thank you for reading this blog and hope to see you later. (^_^)</p>
`
,
    date: "2025-07-16",
    readTime: "3 min read",
    tags: ["Japan", "Japanese", "language"]
  },
  {
  id: "importance-of-immersion",
  title: "What is Immersion and How Important it is",
  titleJapanese: "言語没入とは何か、そしてその重要性",
  excerpt: "So then let's start by knowing what immersion actually is. Most of you were already immersing without even knowing it.",
  content: `
<p>Lets start by knowing what immersion actually is.</p>
<p>I'm sure many of you watch anime or any Japanese dramas and stuff. So, while you're watching these in Japanese you're exposed to the Japanese language and the way they speak. This exposure to the language is called <strong >Immersing (or) immersion.</strong></p>
<br />
<hr />
<br />

<p>You may know some words like Thank you, or good morning in Japanese. How do you know these words? It was through immersion. Most of you were already immersing without even knowing it.</p>
<p>Why is immersion important you might think? Well, if you truly want to learn a language fully you need to understand how the natives of that language speak. And what better way to do that than to actually listening to the way they talk.</p>

<br />

<p>Immersion replicates the natural way humans learn their first language – by being surrounded by it and actively participating in communication. This leads to more intuitive understanding and faster acquisition to accelerate your language learning. Immersion is important no matter how much of a beginner you are. There's no rule saying that you have to be a professional and understand every single word when immersing.</p>
<p>Now, what type of content should you consume when immersing? Honestly.... it can be anything related to the language you want to learn. Whether if its anime, music, series, movies.... anything really as long as you enjoy it.</p>

<br />

<h3>Why immersion is important :</h3>

<ul>
  <li>- Accelerated Language Acquisition and Fluency</li>
  <li>- Enhanced Comprehension and Authentic Usage of the language</li>
  <li>- Significant Cognitive Benefits</li>
  <li>- Deep Cultural Understanding</li>
  <li>- Academic and Career Advantages</li>
</ul>

<br />

<p>While full immersion (e.g., living in the target country) is often seen as the gold standard, don't worry it's also possible to create mini-immersion environments at home through consistent engagement with media, language exchange partners, and setting daily routines in the target language. The core principle remains: the more you are surrounded by and actively use the language, the faster and more effectively you will learn.</p>
<br />
<p>You can also try talking to real people to improve your fluency through sites like omegle or online games or whatever there is out there. Obiviously if you are a beginner, you might feel like this is a waste of time since you have to go to the dictionary to search up the meaning of every word. But, with time and consistently you will be able to watch and enjoy the content in a flow state.</p>

<p>p.s. even I am at the part where I have to search up every word and I can indeed confirm that its a bit annoying but I will not stop and keep going.</p>
<br />

<p>I started thinking, what if there was a website where I can stream content with dual subtitles and when I click on every word it shows me the meaning of that word? I took matters into my own hands and started building KOTONAMI. A site where you can stream your favourite content without the hassle of searching a word every 2 seconds.</p>
<br />
<p>So, please look forward to it and I hope to see you again later.(^_^)</p>
<br />
<hr />
<br />
<img src="/immersion.png" alt="Immersion Visual" class="w-full rounded-lg shadow-md" />
`,
  date: "2025-07-20",
  readTime: "3 min read",
  tags: ["Immersion", "Japanese", "Language Learning"]
}

];
