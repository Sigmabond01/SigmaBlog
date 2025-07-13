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
    id: "midnight-reflections",
    title: "Midnight Reflections on Digital Solitude",
    titleJapanese: "デジタル孤独についての深夜の反省",
    excerpt: "In the blue glow of screens and city lights, we find ourselves more connected yet more alon than ever before. A meditation on modern isolation.",
    content: `The city never sleeps, they say, but sometimes I wonder if it ever truly awakens. Here I sit, bathed in the electric blue of my monitor, watching the world scroll by in fragments of light and shadow.

There's something profoundly beautiful about the midnight hour. The way neon signs reflect off wet pavement, creating rivers of color in the darkness. The hum of distant traffic becomes a lullaby, and the few souls still wandering the streets move like ghosts through a digital dreamscape.

I've been thinking about connection lately. How we're more linked than ever through fiber optic cables and wireless signals, yet somehow more isolated. Each notification is a small electric shock, reminding us that life exists beyond our screens, but rarely pulling us fully into it.

The Japanese have a word, "mono no aware," that speaks to the bittersweet awareness of the impermanence of all things. Tonight, I feel that deeply. The messages that arrive and disappear, the relationships that bloom and fade in the space between keystrokes, the moments of genuine connection that pierce through the digital noise before vanishing into the endless stream.

Perhaps this is the new poetry of our time – not written in verse, but coded in the language of pixels and light. Each blog post, each tweet, each story we share is a small lamp in the darkness, hoping to illuminate something true about the human experience.

In the end, maybe that's enough. Maybe it's not about escaping the digital world, but about finding authentic moments within it. Like now, writing these words in the deep blue of night, hoping they'll reach someone else who's awake and wondering about the same things.

The city hums on, and I continue to type, adding my small voice to the great digital symphony of our age.`,
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["reflection", "digital", "solitude", "night"]
  },
  {
    id: "midnight-reflections",
    title: "Midnight Reflections on Digital Solitude",
    titleJapanese: "デジタル孤独についての深夜の反省",
    excerpt: "In the blue glow of screens and city lights, we find ourselves more connected yet more alone than ever before. A meditation on modern isolation.",
    content: `The city never sleeps, they say, but sometimes I wonder if it ever truly awakens. Here I sit, bathed in the electric blue of my monitor, watching the world scroll by in fragments of light and shadow.

There's something profoundly beautiful about the midnight hour. The way neon signs reflect off wet pavement, creating rivers of color in the darkness. The hum of distant traffic becomes a lullaby, and the few souls still wandering the streets move like ghosts through a digital dreamscape.

I've been thinking about connection lately. How we're more linked than ever through fiber optic cables and wireless signals, yet somehow more isolated. Each notification is a small electric shock, reminding us that life exists beyond our screens, but rarely pulling us fully into it.

The Japanese have a word, "mono no aware," that speaks to the bittersweet awareness of the impermanence of all things. Tonight, I feel that deeply. The messages that arrive and disappear, the relationships that bloom and fade in the space between keystrokes, the moments of genuine connection that pierce through the digital noise before vanishing into the endless stream.

Perhaps this is the new poetry of our time – not written in verse, but coded in the language of pixels and light. Each blog post, each tweet, each story we share is a small lamp in the darkness, hoping to illuminate something true about the human experience.

In the end, maybe that's enough. Maybe it's not about escaping the digital world, but about finding authentic moments within it. Like now, writing these words in the deep blue of night, hoping they'll reach someone else who's awake and wondering about the same things.

The city hums on, and I continue to type, adding my small voice to the great digital symphony of our age.`,
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["reflection", "digital", "solitude", "night"]
  }
];