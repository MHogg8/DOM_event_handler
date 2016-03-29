window.onload = function(){
var form = document.getElementById('newQuote');
 //attach it to the DOM;
 var quotes = document.querySelector('#quotes')
 quotes.appendChild(quoteArticle);

 /////////////////////////////////////User Input Quotes/////////////////////////////////////////////////
 var newClick = function(){
  var newQuote = document.getElementById('quoteText');
  var newCite = document.getElementById('quoteCite');

  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText =newQuote.value + " " ;

  var cite = document.createElement('cite');
  cite.innerText =newCite.value ;

  blockQuote.appendChild(cite);
  quoteArticle.appendChild(blockQuote);

 };

 form.onsubmit = function(event){ 
   event.preventDefault();     
   newClick();
 };


}
var liveFunction = function(){
  var newQuote = document.getElementById('quoteText');
  var newCite = document.getElementById('quoteCite');
  
  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText =newQuote.value + " " ;

  var cite = document.createElement('cite');
  cite.innerText =newCite.value;

  blockQuote.appendChild(cite);
  quoteArticle.appendChild(blockQuote);

  var list = document.getElementsByTagName('blockquote');
  list.removeChild(list.childNodes[0]);
 
}

//////////////////////////////////Add the original quotes///////////////////////////////////////////////
 var ourQuotes = [
            {text: 'Visual Basic is the way forward, I dont know why we are doing JavaScript.', author: 'Jay Chetty'}, 
            {text: 'the only CSS you need to know is background-color: tomato', author: 'Rick'}, 
            {text: 'Are those hand-cut artisan crisps?', author: 'Keith'}, 
            {text: 'scaffolding is nothing but a fiery hell.', author: 'Valerie'}, 
            {text: 'That is quite obviously a frog.', author: 'Jay Chetty'}
];

var quoteArticle = document.createElement('article'); // want to create a new element
quoteArticle.classList.add('quote'); // add to class quote

  for(var q of ourQuotes){

    var blockQuote = document.createElement('blockquote');
    blockQuote.innerText =q.text + " " ;

    var cite = document.createElement('cite');
    cite.innerText =q.author ;

    blockQuote.appendChild(cite);
    quoteArticle.appendChild(blockQuote);
}


