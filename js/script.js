
const quote = document.querySelector( "#quote" );
const author = document.querySelector( "#author" );
const newQuoteBtn = document.querySelector( "#newQuoteBtn" );
const quotesBox = document.querySelector( ".quotes" );
const quotes =
    [
        {
            "quote": "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
            "author": "John Lennon"
        },
        {
            "quote": "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.",
            "author": "Paulo Coelho"
        },
        {
            "quote": "I like the night. Without the dark, we'd never see the stars.",
            "author": "Stephenie Meyer"
        },
        {
            "quote": "They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.",
            "author": "Tom Bodett"
        },
        {
            "quote": "Life's under no obligation to give us what we expect.",
            "author": "Margaret Mitchell"
        },
        {
            "quote": "You can cut all the flowers but you cannot keep Spring from coming.",
            "author": "Pablo Neruda"
        },
        {
            "quote": "Instead of worrying about what you cannot control, shift your energy to what you can create.",
            "author": "Roy T. Bennett"
        },
        {
            "quote": "You only live once, but if you do it right, once is enough.",
            "author": "Mae West"
        },
        {
            "quote": "One day, in retrospect, the years of struggle will strike you as the most beautiful.",
            "author": "Sigmund Freud"
        },
        {
            "quote": "Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.",
            "author": "Roy T. Bennett"
        },
        {
            "quote": "Happiness is not something ready made. It comes from your own actions.",
            "author": "Dalai Lama XIV"
        },
        {
            "quote": "You talk when you cease to be at peace with your thoughts.",
            "author": "Kahlil Gibran"
        },
        {
            "quote": "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.",
            "author": "Marcel Proust"
        },
        {
            "quote": "Success is getting what you want, happiness is wanting what you get.",
            "author": "W.P. Kinsella"
        },
        {
            "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
            "author": "Oliver Goldsmith"
        }
    ];

let lastIndex = null;
function newQuote ()
{
    let index;
    // to ensure that quote not show twice after each other
    do
    {
        index = Math.floor( Math.random() * quotes.length );
    } while ( index === lastIndex );
    lastIndex = index;
    quotesBox.classList.remove( "animate-quote" );
    // browser re-compute layout of quote to ensure class trigger
    void quotesBox.offsetWidth; 
    quotesBox.classList.add( "animate-quote" );
    quote.innerText = quotes[ index ].quote;
    author.innerText = `― ${ quotes[ index ].author } ―`;
}
newQuoteBtn.addEventListener( 'click', newQuote );