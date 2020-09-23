
let quotes = {
    'John Piper' : 'It is better to lose your life than to waste it',
    'John Bunyan' : 'It is said that in some countries trees will grow, but will bear no fruit because there is no winter there',
    'Jonathan Edwards' : 'The way to Heaven is ascending; we must be content to travel uphill, though it be hard and tiresome, and contrary to the natural bias of our flesh',
    'John Calvin' : 'All the blessings we enjoy are Divine deposits, committed to our trust on this condition, that they should be dispensed for the benefit of our neighbors',
    'Bruce Lee' : 'Genius: The capacity to see and to express what is simple, simply', 
    'Arthur Rimbaud' : 'Genius is the recovery of childhood at will',
    'Len Wein' : 'A true friend is someone who is there for you when he’d rather be anywhere else',
    'William James' : 'Act as if what you do makes a difference. It does', 
    'Og Mandino' : 'Action will destroy your procrastination', 
    'Soren Kierkeegard' : 'Life is not a problem to be solved, but a reality to be experienced',
    'Mark Twain' : 'You can’t depend on your eyes when your imagination is out of focus',
    'Winston Churchill' : 'We make a living by what we get, but we make a life by what we give',
    'C. S. Lewis': 'Life is too deep for words, so don’t try to describe it, just live it',
    'Henrik Ibsen' : 'A thousand words will not leave so deep an impression as one deed',
    'Bob Marley' : 'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for'
}

let val = Object.keys(quotes).length;
let vals = 0;

document.getElementById('submit').onclick = function nextQuote () {
    for (x = 0 ; x < val; x++){
        vals = Math.floor(Math.random() * val);
    }
    return document.getElementById('quotes').innerHTML =  '<p id="their-quote"><strong><i><span>"</span>' + Object.values(quotes)[vals] + '</i></strong></p>' +  "<p id='writers'><em> ~ " + Object.keys(quotes)[vals] + "</em></p>";
}


