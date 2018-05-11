**WikiJam**

WikiJAM: Exploring Wikipedia Articles
by Jonathan Lee, Alex Fang and Marie Patino

The Product

WikiJAM (Jon-Alex-Marie) is a Chrome extension that quickly provides backend information about a Wikipedia article. Currently, it shows the date the page was created, who created it, the number of contributions it received (additions, edits and removals), the number of contributors who worked on the page, the Wikipedia user who created the page, the Top 20 contributors to the page and the profiles of those top contributors.

It was born out of a simple idea: many people go to Wikipedia as primary source of authority on a subject (YouTube even said it would fact-check fake news using Wikipedia), but most of the writing and editing Wikipedia entries are anonymous. Wikipedia administrators can limit access to articles, and have at times even locked down articles for edits, but the platform is still open-source. Anyone can contribute anything, which brings up ethical questions about bias and even fake news.

However, users can create profiles with self-reported identification badges. Wikipedians can volunteer information about themselves in virtually every category including gender, nationality, expertise, hobbies, language proficiency and religious beliefs. How many of the Wikipedians editing the article on abortion identify as women? How many of the Wikipedians contributing to the article on Donald Trump are U.S. citizens?

Gathering this information through conventional means is a time-consuming effort that requires mining through the guts of an article’s history and talk session, not to mention the individual user pages of the contributors. WikiJAM uses data from Wikipedia, MediaWiki API and Xtools to provide all this information with a single click.

The Intended Use

Our tool is primarily intended for researchers, fact-checkers and journalists. As we previously mentioned, Wikipedia is an extremely popular destination for research, particularly during major events. 

For example, using our tool, we can see that the Wikipedia page on the shooting spree at Stoneman Douglas High School in Parkland, Florida was made on February 14, 2018, on the same day the shooting occurred, by user RKJ_5. In just three months, the article already received 3,464 contributions from 552 Wikipedians, and received 168 edits in just this month.

There are valuable story and data opportunities here. How many of the Wikipedians editing this live in or around Parkland? Is there any evidence of malicious editing? What sort of information was available on the article when it received the most web traffic? What other articles do these Wikipedian contribute to—or more precisely, is there a niche group of Wikipedians who specialize in contributing to articles about mass shootings?

Possible unintended audiences include geeks and procrastinators. We found ourselves checking the Top 20 contributors of some weird Wikipedia articles (like furry fandom) and checking to see what hobbies they’re interested in and what other pages they extensively edit.

The Process

At first, we put together a rough concept by scraping all the data from the Wikipedia article on white supremacy using Python and the Jupyter Notebook. This was a leftover from our original project idea which was to study the talk pages of certain Wikipedia articles to see how toxic or contentious the discussions were. In this iteration of the extension (which back then was called WikiSpy), it simply pulled up the information we had scraped, but none of it was done live.

We then came up with the idea of sourcing data from Wikipedia, MediaWiki API and Xtools to get live results. This required us to code in JavaScript, a language none of us was familiar with, and Dr. Mark Hansen provided us with great assistance.


The Future

Justin Hendrix, director of NYC Media Lab, was interested in our project and offered to send it over to the Wikipedia team. We forwarded our pitch and we are waiting on a reply back.

For now, we are happy that the app is working and able to pull live information. In the future, we’d like to add more information about top contributors, such as the other Wikipedia pages they may edit. Through experimenting with the tool on a number of pages, we’ve tentatively found that a handful of people are responsible for making edits on some of the biggest articles. Wikipedians such as Jiang, WikiLaurent, Ran and Cybercobra are power users who appear on the top 20 contributors lists for the article on China and the article on Taiwan.


WikiJAM is a project by [Jonathan Lee](https://twitter.com/jon_g_lee), [Alex Fang](https://twitter.com/alexjfang) and [Marie Patino](https://twitter.com/mariepastora) from Columbia Journalism School, Class of 2018. Alex Fang and Marie Patino did all the scraping and coding for the project, while Jonathan Lee did presentation and research.

https://github.com/fizzyhill/Wiki_Extension
https://github.com/mariepastora/Def_wikiextension

