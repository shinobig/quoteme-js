// QUOTES CONTROLER

var quoteController = (function() {
    //Aqui acomodaremos que se guarde la informacion


    var allQuotes = [];




    //Class of quote box
    class QuoteBoxInfo {
        constructor (id, quote, author, source, category) {
            this.id = id;
            this.quote = quote;
            this.author = author;
            this.source = source;
            this.category = category;

        }
    };







    //Testing quotes
    const testOther1 = new QuoteBoxInfo(1, "this is a testing quote no 1", 'Stephen King', 'The shining', 'other');
    const testOther2 = new QuoteBoxInfo(2, "this is a testing quote no 2", 'Allan Poe', 'The Raven', 'terror');
    const testOther3 = new QuoteBoxInfo(3, "this is a testing quote no 3", 'Oscar Wilde', 'Dorian Gray', 'other');
    const testOther4 = new QuoteBoxInfo(4, "this is a testing quote no 4", 'Vladimir Nokov', 'Lolita', 'romance');
    const testOther5 = new QuoteBoxInfo(5, "this is a testing quote no 5", 'J RR Tolkien', 'Lord of the rings', 'adventure');
    const testOther6 = new QuoteBoxInfo(6, "this is a testing quote no 6", 'Vasilib Kandinski', 'Spiritual in art', 'self');
    const testOther7 = new QuoteBoxInfo(7, "this is a testing quote no 7", 'Isaac Asinov', 'I robot', 'scifi');

    allQuotes.push(testOther1);
    allQuotes.push(testOther2);
    allQuotes.push(testOther3);
    allQuotes.push(testOther4); 
    allQuotes.push(testOther5);
    allQuotes.push(testOther6);
    allQuotes.push(testOther7);




    return{



        addQuote: function(quote, author, source, category) {
            var newItem, ID;


            // Create new ID
            if (allQuotes.length > 0) {


                ID = allQuotes[allQuotes.length - 1].id + 1;
            } else {
                ID = 1;   
            }

            newItem = new QuoteBoxInfo(ID, quote, author, source, category);



            // Push it into our data structure
            allQuotes.push(newItem);


            // Return the new element
            return newItem;
        }, 



        //Edit quote method
        editQuote: (id, quote, author, source, category) => {

            //find quote
            var found = allQuotes.map((current) =>{
                return current.id; 
            });
            var index = found.indexOf(id);

            console.log(index);

            //Replace information
            if (index !== -1){
                allQuotes[index].quote = quote;
                allQuotes[index].author = author;
                allQuotes[index].source = source;
                allQuotes[index].category = category;
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

            var found = allQuotes.map((current) =>{
                return current.id; 
            });
            var index = found.indexOf(id);


            if (index !== -1){
                allQuotes.splice(index, 1);
            }



        },  

        //Obtain information
        obtainItem: (id, category) =>{

            var found = allQuotes.find((element) =>{
                return element.id === id; 
            });
            return found;

        },

        identifyBtnCategory: (id) => {

            var itemID, category;

            itemID = id;

            splitID = itemID.split('-');
            category = splitID[0];

            return category;

        },


        findQuotesInCategory: (category) => {

            var filterQuote, receivedQuotes, currentQuote;

            class SelectedQuotes {
                constructor (id, quote, author, source, category) {
                    this.id = id;
                    this.quote = quote;
                    this.author = author;
                    this.source = source;
                    this.category = category;

                }
            };
            
            selectedQuotes = [];
            receivedQuotes = allQuotes;

            receivedQuotes.forEach(function(elem){
                currentQuote = elem;
                if (currentQuote.category === category){

                    filterQuote = new SelectedQuotes(currentQuote.id, currentQuote.quote, currentQuote.author, currentQuote.source, currentQuote.category);

                    // Push it into our data structure
                    selectedQuotes.push(filterQuote);


                }

                


            });

return selectedQuotes;

        },

        
        
        
        returnAllQuotes: () =>{
            return allQuotes;
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

<div id="${category}-${ID}" class="center-align z-depth-1 quote-container ${category}-container">

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

            el.className = `center-align z-depth-1 quote-container ${newQuoteId.category}-container`;

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

        // show and hide categories
        // 1. recognice buttons
        var allBtnSection = document.getElementById(DOM.btnSection).querySelectorAll(DOM.allBtnClass);      //.querySelectorAll('button').id;

        allBtnSection.forEach(function(elem){
            elem.addEventListener('click',  function(){
                var id = this.id;
                var categoryBtn = quoteCtrl.identifyBtnCategory(id);
                console.log(categoryBtn);

                //2. Clear screen
                document.querySelector(DOM.quoteMainContainer).innerHTML = "";

                //3. Search for said category
                var receivedQuotes, currentQuote;


                if (categoryBtn === "all"){
                    receivedQuotes = quoteCtrl.returnAllQuotes();
                    console.log(receivedQuotes);
                    //3.1 Print all quotes
                    receivedQuotes.forEach(function(elem){
                        currentQuote = elem;

                        UICtrl.addQuoteUI(currentQuote, currentQuote.category, currentQuote.quote, currentQuote.author, currentQuote.source); 

                    });



                }
                else {
                    receivedQuotes = quoteCtrl.findQuotesInCategory(categoryBtn);
 //3.1 Print all quotes
                    receivedQuotes.forEach(function(elem){
                        currentQuote = elem;

                        UICtrl.addQuoteUI(currentQuote, currentQuote.category, currentQuote.quote, currentQuote.author, currentQuote.source); 

                    });
                    
                }


               






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

                UICtrl.editUIQuote(wholeQuote[2], obtainedQuote, input, obtainedQuote.id);

                newEditQuote = quoteCtrl.editQuote(obtainedQuote.id, input.quote, input.author, input.source, input.category);

            }



            document.getElementById(DOM.editQuoteSection).classList.toggle('displaynone');

            document.getElementById(DOM.editQuoteSection).classList.toggle('displayblock');
            //4. Update UI
            return;
            // }   

        }

    } ;





    setupEventListeners();
})(quoteController, UIController);









