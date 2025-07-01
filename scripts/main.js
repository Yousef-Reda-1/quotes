let Quotes = {
    "― Oscar Wilde": "Be yourself; everyone else is already taken.",
    "― Albert Einstein": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "― Mahatma Gandhi": "Be the change that you wish to see in the world.",
    "― Mark Twain": "If you tell the truth, you don't have to remember anything.",
    "― Confucius": "The journey of a thousand miles begins with one step.",
    "― Marilyn Monroe": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "― Nelson Mandela": "It always seems impossible until it's done.",
    "― Steve Jobs": "Your time is limited, so don't waste it living someone else'",
    "― Winston Churchill": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "― Helen Keller": "Life is either a daring adventure or nothing at all.",
    "― Albert Camus": "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    "― Maya Angelou": "You will face many defeats in life, but never let",
    "― Friedrich Nietzsche": "That which does not kill us makes us stronger.",
    "― Oscar Wilde": "We are all in the gutter, but some of us are looking at the stars.",
    "― J.K. Rowling": "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    "― C.S. Lewis": "You can make anything by writing.",
}
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let QuoteEle = document.createElement("p");
QuoteEle.className = "quote";
QuoteEle.classList.add("text-center", "my-5");

let authorEle = document.createElement("h2");
authorEle.className = "author";
function createQuoteElement(author, quote) {
    QuoteEle.innerHTML = quote
    document.querySelector(".container").appendChild(QuoteEle);
    
    authorEle.innerHTML = author;
    document.querySelector(".container").appendChild(authorEle);
}
let quoteButton = document.getElementById("quote");
quoteButton.addEventListener("click", function () {
    let randNum = getRandomNum(0, Object.keys(Quotes).length - 1);
    createQuoteElement(Object.keys(Quotes)[randNum], Object.values(Quotes)[randNum]);
})
