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
];
