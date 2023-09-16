var quotes = [
    {
        quote: `<p class="mt-3 mb-1">“Be yourself; everyone else is already taken.”</p>`,
        author: `<p>― Oscar Wilde</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</p>`,
        author: `<p>― Albert Einstein</p>`
    },
    {
        quote: `<p class="mt-3 mb-1">“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”</p>`,
        author: `<p>― Bernard M. Baruch</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Be the change that you wish to see in the world.””</p>`,
        author: `<p>― Dr. Seuss</p>`
    },
    {
        quote: `<p class="mt-3 mb-1">“You only live once, but if you do it right, once is enough.”</p>`,
        author: `<p>― Mae West</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”</p>`,
        author: `<p>― Steve Jobs</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”</p>`,
        author: `<p>― William W. Purkey</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“The fool doth think he is wise, but the wise man knows himself to be a fool.”</p>`,
        author: `<p>― William Shakespeare, As You Like It</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Any fool can know. The point is to understand.”</p>`,
        author: `<p>― Albert Einstein</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“It is never too late to be what you might have been.”</p>`,
        author: `<p>― George Eliot</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Life isn't about finding yourself. Life is about creating yourself.”</p>`,
        author: `<p>― George Bernard Shaw</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Success is not final, failure is not fatal: it is the courage to continue that counts.”</p>`,
        author: `<p>― Winston S. Churchill</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“The secret of life, though, is to fall seven times and to get up eight times.”</p>`,
        author: `<p>― Paulo Coelho, The Alchemist</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Think before you speak. Read before you think.”</p>`,
        author: `<p>― Fran Lebowitz, The Fran Lebowitz Reader</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Never let your sense of morals prevent you from doing what is right.”</p>`,
        author: `<p>― Isaac Asimov, Foundation</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Turn your wounds into wisdom.”</p>`,
        author: `<p>― Oprah Winfrey</p>` 
    },
    {
        quote: `<p class="mt-3 mb-1">“Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.”</p>`,
        author: `<p>― Rumi</p>` 
    },
];

function displayQuotes(){
    var cartoona = Number(Math.floor(Math.random()*quotes.length));
    document.getElementById("quote").innerHTML = quotes[cartoona].quote;
    document.getElementById("author").innerHTML = quotes[cartoona].author;
    
}


























