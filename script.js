// QUOTES CONTROLER
const express = require('express');
const app = express();

 app.listen(3000);

var quoteController = (function() {
    //Aqui acomodaremos que se guarde la informacion


    var allQuotes = {

        other : [],
        terror : [],
        romance : [],
        scifi : [],
        fantasy : [],
        commedy : [],
        mystery : [],
        adventure : [],
        self : [],

    };




    //Class of quote box
    class QuoteBoxInfo {
        constructor (id, quote, author, source) {
            this.id = id;
            this.quote = quote;
            this.author = author;
            this.source = source;

        }
    };





    //Terror subclass
    class TerrorQuote extends QuoteBoxInfo{
        constructor (id, quote, author, source, category){
            super (id, quote, author, source);
            this.category = 'terror';
        }
    } 

    //Other subclass
    class OtherQuote extends QuoteBoxInfo{
        constructor (id, quote, author, source, category){
            super (id, quote, author, source);
            this.category = 'other';
        }
    }  

    //Romance subclass
    class RomanceQuote extends QuoteBoxInfo{
        constructor (id, quote, author, source, category){
            super (id, quote, author, source);
            this.category = 'romance';
        }
    }
    //Scifi subclass
    class ScifiQuote extends QuoteBoxInfo{
        constructor (id, quote, author, source, category){
            super (id, quote, author, source);
            this.category = 'scifi';
        }
    }

    //Fantasy subclass
    class FantasyQuote extends QuoteBoxInfo{
        constructor (id, quote, author, source, category){
            super (id, quote, author, source);
            this.category = 'fantasy';
        }
    }
    //mystery subclass
    class MysteryQuote extends QuoteBoxInfo{
        constructor (id, quote, author, source, category){
            super (id, quote, author, source);
            this.category = 'mystery';
        }
    }
    //Adventure subclass
    class AdventureQuote extends QuoteBoxInfo{
        constructor (id, quote, author, source, category){
            super (id, quote, author, source);
            this.category = 'adventure';
        }
    }
    //Self subclass
    class SelfQuote extends QuoteBoxInfo{
        constructor (id, quote, author, source, category){
            super (id, quote, author, source);
            this.category = 'self';
        }
    }

    //Commedy subclass
    class CommedyQuote extends QuoteBoxInfo{
        constructor (id, quote, author, source, category){
            super (id, quote, author, source);
            this.category = 'commedy';
        }
    }





    //Testing quotes
    const testOther1 = new OtherQuote(1, "this is a testing quote no 1", 'Stephen King', 'The shining', 'other');
    const testOther2 = new OtherQuote(2, "this is a testing quote no 2", 'Allan Poe', 'The Raven', 'other');
    const testOther3 = new OtherQuote(3, "this is a testing quote no 3", 'Oscar Wilde', 'Dorian Gray', 'other');

    allQuotes.other.push(testOther1);
    allQuotes.other.push(testOther2);
    allQuotes.other.push(testOther3);




    return{



        addQuote: function(quote, author, source, category) {
            var newItem, ID;


            // Create new ID
            if (allQuotes[category].length > 0) {


                ID = allQuotes[category][allQuotes[category].length - 1].id + 1;
            } else {
                ID = 1;   
            }

            // Switch statement

            switch (category) {

                case 'other':
                    newItem = new OtherQuote(ID, quote, author, source, category)
                    break;

                case 'terror':
                    newItem = new TerrorQuote(ID, quote, author, source, category)
                    break;

                case 'romance':
                    newItem = new RomanceQuote(ID, quote, author, source, category)
                    break;

                case 'scifi':
                    newItem = new ScifiQuote(ID, quote, author, source, category)
                    break;

                case 'fantasy':
                    newItem = new FantasyQuote(ID, quote, author, source, category)
                    break;

                case 'commedy':
                    newItem = new CommedyQuote(ID, quote, author, source, category)
                    break;

                case 'mystery':
                    newItem = new MysteryQuote(ID, quote, author, source, category)
                    break;

                case 'adventure':
                    newItem = new AdventureQuote(ID, quote, author, source, category)
                    break;

                case 'self':
                    newItem = new SelfQuote(ID, quote, author, source, category)
                    break;

            }




            // Push it into our data structure
            allQuotes[category].push(newItem);


            // Return the new element
            return newItem;
        }, 



        //Edit quote method
        editQuote: (id, quote, author, source, category) => {

            //find quote
            var found = allQuotes[category].map((current) =>{
                return current.id; 
            });
            var index = found.indexOf(id);

            console.log(index);

            //Replace information
            if (index !== -1){
                allQuotes[category][index].quote = quote;
                allQuotes[category][index].author = author;
                allQuotes[category][index].source = source;
                allQuotes[category][index].category = category;
            }

            return;

        },

        //Identify ID
        identifyID : (element) => {

            var itemID, splitID, category, ID, wholeQuote;

            itemID = element.parentNode.parentNode.parentNode.id;

            splitID = itemID.split('-');
            category = splitID[0];
            ID = parseInt(splitID[1]);

            wholeQuote = [ID, category, itemID];

            return wholeQuote;

        },


        //Delete quote from object
        deleteItem: (id, category)=>{

            var found = allQuotes[category].map((current) =>{
                return current.id; 
            });
            var index = found.indexOf(id);


            if (index !== -1){
                allQuotes[category].splice(index, 1);
            }

            console.log(allQuotes[category]);

        },  

        //Obtain information
        obtainItem: (id, category) =>{

            var found = allQuotes[category].find((element) =>{
                return element.id === id; 
            });
            return found;

        },





        //Testing function
        QTest: function(){
            console.log(allQuotes);

        },

    }





})();


















// UI CONTROLER



var UIController = (function(){
    //DOM STRING WITH DOG
    var DOMstrings = {
        newQuoteSection:'new-quote-section',
        editQuoteSection:'edit-quote-section',
        saveBtn: '.save-btn',
        saveBtnID: 'save-btn',
        editBtnID: 'edit-save-btn-app',    
        closeBtn: '.cancel-btn',
        editCloseBtn: '.cancel-edit',
        newQuoteBtn:'new-quote-btn',
        quoteInput:'.add-quote',
        authorInput:'.add-author',
        sourceInput:'.add-source',
        categoryInput:'.add-category',
        quoteMainContainer: '.quote-main-container',
        otherIcon: 'tags',
        terrorIcon:'skull',
        romanceIcon:'heart',
        scifiIcon:'rocket',
        fantasyIcon:'dragon',
        commedyIcon:'laugh-beam',
        mysteryIcon:'user-secret',
        adventureIcon:'globe-americas',
        selfIcon:'spa',
        editBtn:'edit-btn',
        deleteBtn:'delete-btn',
        addQuote:'.add-quote',
        addAuthor:'.add-author',
        addSource:'.add-source',
        addQuoteID:'add-quote',
        addAuthorID:'add-author',
        addSourceID:'add-source',
        selectBox: 'select-box',
        editBox: 'edit-box',
        editQuoteID:'edit-quote',
        editAuthorID:'edit-author',
        editSourceID:'edit-source',
        btnSection:'button-section',
        terrorBtn:'terror-btn',
        romanceBtn:'romance-btn',
        scifiBtn:'scifi-btn',
        fantasyBtn:'fantasy-btn',
        commedyBtn:'commedy-btn',
        misteryBtn:'mistery-btn',
        adventureBtn:'adventure-btn',
        selfBtn:'self-btn',
        otherBtn:'other-btn',
        allBtn:'all-btn',
        allBtnClass:'.category',

    };

    //Close Window Function
    var closeWindow = (whichBtn, whichDiv) => { document.querySelector(whichBtn).addEventListener('click', function(){
        document.getElementById(whichDiv).classList.toggle('displayblock');
        document.getElementById(whichDiv).classList.toggle('displaynone');

        document.querySelector(DOMstrings.quoteInput).value = '';
        document.querySelector(DOMstrings.authorInput).value = '';
        document.querySelector(DOMstrings.sourceInput).value = '';
        document.getElementById(DOMstrings.selectBox).value = 'other';

    } )};



    //Add new Quote
    var addNewQuoteOut = () => {

        document.getElementById(DOMstrings.newQuoteSection).classList.toggle('displaynone');
        document.getElementById(DOMstrings.newQuoteSection).classList.toggle('displayblock');

        // document.getElementById(DOMstrings.editBtnID).classList.toggle('displaynone');
    };

    var chooseIcon = (category) =>{
        var category = category;
        switch (category) {

            case 'other':
                icon = DOMstrings.otherIcon;
                break;

            case 'terror':
                icon = DOMstrings.terrorIcon;
                break;

            case 'romance':
                icon = DOMstrings.romanceIcon;
                break;

            case 'scifi':
                icon = DOMstrings.scifiIcon;
                break;

            case 'fantasy':
                icon = DOMstrings.fantasyIcon;
                break;

            case 'commedy':
                icon = DOMstrings.commedyIcon;
                break;

            case 'mystery':
                icon = DOMstrings.mysteryIcon;
                break;

            case 'adventure':
                icon = DOMstrings.adventureIcon;
                break;

            case 'self':
                icon = DOMstrings.selfIcon;
                break;

        }
        return icon;
    };



    return{



        addNewQuote: () => {
            document.getElementById(DOMstrings.newQuoteBtn).addEventListener('click', addNewQuoteOut);
        },



        //Getting information function
        getInfo: (quoteID, authorID, sourceID, boxID) => {
            return {
                //Get Quote
                quote : document.getElementById(quoteID).value,

                author : document.getElementById(authorID).value,

                source : document.getElementById(sourceID).value, 

                category : document.getElementById(boxID).value,
            };
        },


        saveNewQuote:  () =>  { 
            //close windows
            closeWindow(DOMstrings.saveBtn, DOMstrings.newQuoteSection);

        },

        cancelQuote: () => {
            //Clear fields and close window
            closeWindow(DOMstrings.closeBtn, DOMstrings.newQuoteSection);
        }, 
        cancelEdit: () => {
            //Clear fields and close window
            closeWindow(DOMstrings.editCloseBtn, DOMstrings.editQuoteSection);
        },



        //Return DOM strings
        getDOMstrings: function() {
            return DOMstrings;
        },


        // testing: (datos) => {console.log(datos);},





        addQuoteUI: (newStoredQuote, category, quote, author, source) =>{

            var html, icon, element, ID;

            ID = newStoredQuote.id;

            icon = chooseIcon(category);

            element = DOMstrings.quoteMainContainer;


            html = `<!-- Quote container-->

<div id="${category}-${ID}" class="center-align z-depth-2 quote-container ${category}-container">

<!-- head -->
<div class="row"> 

<div class="valign-wrapper col s6 m6 l6">
<div id="icon-category" class='category ${category}-cat'>
<i class="fas fa-${icon}"></i>&nbsp;&nbsp;${category}
</div>
</div>

<div class='col s6 m6 l6 right-align'>
<i id="edit-btn" class="edit-btn fas fa-edit"></i>&nbsp;&nbsp;<i id="delete-btn" class="delete-btn fas fa-trash-alt"></i>
</div>
</div>

<!-- content -->
<p id="quote-tag" class='quote'>"${quote}"</p>
<p id="author-and-source" class='author_and_title'><i>${author}</i>  &mdash; <strong>${source}</strong></p> 
</div>`;

            // Insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('afterbegin', html);

        },


        acceptCancel : (editOrDelete) =>{
            var answer;
            answer = confirm(`Are you sure you want to ${editOrDelete} this quote?`) ;
            return answer;
        },  



        //Delete quote from UI
        deleteUIQuote: (selectorID) => {

            var el = document.getElementById(selectorID)
            el.parentNode.removeChild(el);
        },

        editUIQuote: (selectorID, oldQuote, newQuote, newID) => {

            var selectorID = selectorID;

            var oldQuoteId = {
                id : oldQuote.id,
                quote : oldQuote.quote,
                author : oldQuote.author,
                source : oldQuote.source,
                category : oldQuote.category,
            };

            var newQuoteId = {
                id : newID,
                quote : newQuote.quote,
                author : newQuote.author,
                source : newQuote.source,
                category : newQuote.category,

            };

            var el =  document.getElementById(selectorID);
            el.id = `${newQuoteId.category}-${newQuoteId.id}`

            el.className = `center-align z-depth-2 quote-container ${newQuoteId.category}-container`;

            var icon = chooseIcon(newQuoteId.category);

            el.querySelector('#icon-category').innerHTML = `<i class="fas fa-${icon}"></i>&nbsp;&nbsp;${newQuoteId.category}`;

            el.querySelector('#icon-category').classList=`category ${newQuoteId.category}-cat`;

            el.querySelector('#quote-tag').innerHTML = newQuoteId.quote;




            el.querySelector('#author-and-source').innerHTML = `<i>${newQuoteId.author}</i>  &mdash; <strong>${newQuoteId.source}</strong>`;

            //el.removeChild(el);

            //console.log(selectorID);

        },

        //Recofnice btn
        hideShowCategory: (category)=>{
            console.log(category);
        },


    }})();



























//GLOBAL CONTROLER


const controller = (function(quoteCtrl, UICtrl){

    //Setup listeners

    //New quote event listener
    var setupEventListeners = () => {
        var wholeObtained;
        var DOM = UICtrl.getDOMstrings();

        //Add quote
        document.getElementById(DOM.saveBtnID).addEventListener('click', ctrlAddQuote);


        //Save Quote
        UICtrl.addNewQuote();


        //Close Quote iput and clear fields
        UICtrl.saveNewQuote();

        //show and hide categories


        //recognice buttons
        var allBtnSection = document.getElementById(DOM.btnSection).querySelectorAll(DOM.allBtnClass);      //.querySelectorAll('button').id;
      
allBtnSection.forEach(function(elem){
    elem.addEventListener('click',  function(){
        console.log(this.id); 
    });
});




// Edit delete quotes
        document.addEventListener('click', function(){
            var wholeQuote, obtainedQuote;
            var DOM = UICtrl.getDOMstrings();
            var element = event.target;

            if(element.tagName == 'I' && element.classList.contains(DOM.editBtn))

            {
                var DOM = UICtrl.getDOMstrings();
                console.log("click en edit");

                //Identify ID and category
                wholeQuote = quoteCtrl.identifyID(element);

                obtainedQuote = quoteCtrl.obtainItem(wholeQuote[0], wholeQuote[1]);
                document.getElementById(DOM.editQuoteSection).classList.toggle('displaynone');

                document.getElementById(DOM.editQuoteSection).classList.toggle('displayblock');




                document.getElementById(DOM.editQuoteID).value = obtainedQuote.quote;
                document.getElementById(DOM.editAuthorID).value = obtainedQuote.author;
                document.getElementById(DOM.editSourceID).value = obtainedQuote.source;
                document.getElementById(DOM.editBox).value = obtainedQuote.category;

                wholeObtained = {wholeQuote, obtainedQuote};
                // console.log(wholeObtained);

                return wholeObtained;

            }
            else if (element.tagName == 'I' && element.classList.contains(DOM.deleteBtn)) {


                //ASk if you want to delete
                var answer = UICtrl.acceptCancel('delete');

                if (answer == true){
                    wholeQuote = quoteCtrl.identifyID(element);

                    //Delete from object
                    quoteCtrl.deleteItem(wholeQuote[0], wholeQuote[1]);

                    //Delete from UI
                    UICtrl.deleteUIQuote(wholeQuote[2]);
                    return;
                }
            }
            return;}
                                 );





        document.getElementById(DOM.editBtnID).addEventListener('click', () => {
            checkIfEdit(wholeObtained);
            return ;
        });





    };


    // Cancel Quote
    UICtrl.cancelQuote();
    UICtrl.cancelEdit();




    //Add new quote function
    var ctrlAddQuote = () => {
        var DOM = UICtrl.getDOMstrings();

        if(
            document.querySelector(DOM.quoteInput).value === '' ||document.querySelector(DOM.authorInput).value === '' ||  document.querySelector(DOM.sourceInput).value=== '')

        {
            alert("Please fill all required fields");
            document.getElementById(DOM.newQuoteSection).classList.toggle('displaynone');
            document.getElementById(DOM.newQuoteSection).classList.toggle('displayblock');

        } else {
            var input, newStoredQuote;

            // 1. Get the field input data
            input = UICtrl.getInfo(DOM.addQuoteID, DOM.addAuthorID, DOM.addSourceID, DOM.selectBox);  


            //2. Add the new quote
            newStoredQuote = quoteCtrl.addQuote(input.quote, input.author, input.source, input.category);
            // Add the item to the UI
            UICtrl.addQuoteUI(newStoredQuote, input.category, input.quote, input.author, input.source);
        }

    };





    //Check edit quote
    var checkIfEdit = function (wholeObtained) {

        var wholeQuote, obtainedQuote, originalCategory;
        wholeQuote = wholeObtained.wholeQuote;
        obtainedQuote = wholeObtained.obtainedQuote;
        originalCategory = obtainedQuote.category;
        var DOM = UICtrl.getDOMstrings();
        //console.log(wholeQuote, obtainedQuote);

        if 
            (
                document.getElementById(DOM.editQuoteID).value === '' ||document.getElementById(DOM.editAuthorID).value === '' ||  document.getElementById(DOM.editSourceID).value=== '')

        {
            alert("Please fill all required fields");
            document.getElementById(DOM.editQuoteSection).classList.toggle('displaynone');
            document.getElementById(DOM.editQuoteSection).classList.toggle('displayblock');
            document.getElementById(DOM.editQuoteID).value = obtainedQuote.quote;
            document.getElementById(DOM.editAuthorID).value = obtainedQuote.author;
            document.getElementById(DOM.editSourceID).value = obtainedQuote.source;
            document.getElementById(DOM.editBox).value = obtainedQuote.category;



        } 

        else {
            var answer = UICtrl.acceptCancel('edit');

            if (answer == true){
                var input, newEditQuote;

                // 1. Get the field input data
                input = UICtrl.getInfo(DOM.editQuoteID, DOM.editAuthorID, DOM.editSourceID, DOM.editBox);

                //2 check category
                if (input.category === originalCategory){
                    // If the category is the same, save it in the same id
                    UICtrl.editUIQuote(wholeQuote[2], obtainedQuote, input, obtainedQuote.id);

                    newEditQuote = quoteCtrl.editQuote(obtainedQuote.id, input.quote, input.author, input.source, input.category);
                }

                else {
                    //If the category changes, create a new one and delete the old one
                    //var answer = UICtrl.acceptCancel('edit');

                    if (answer == true){



                        newStoredQuote = quoteCtrl.addQuote(input.quote, input.author, input.source, input.category);

                        // Replace UI
                        UICtrl.editUIQuote(wholeQuote[2], obtainedQuote, input, newStoredQuote.id);


                        //Delete from object
                        quoteCtrl.deleteItem(wholeQuote[0], wholeQuote[1]);





                    }

                }}



            document.getElementById(DOM.editQuoteSection).classList.toggle('displaynone');

            document.getElementById(DOM.editQuoteSection).classList.toggle('displayblock');
            //4. Update UI
            return;
            // }   

        }

    } ;





    setupEventListeners();
})(quoteController, UIController);









