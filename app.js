
// BUDGET CONTROLLER
var budgetController = (function () {
  

})();

// UI CONTOLLER
var UIController = (function() {
  
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }
  
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    
    getDOMstrings: function() {
      return DOMstrings;
    }
  }
  
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl ){
  
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
      if(e.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });                           
  };

  
  var ctrlAddItem = function(){
    // 1. get input data
    
    var input = UICtrl.getInput();
    
    // 2. Add the item to the budget controller
    
    // 3. Add the item to the UI
    
    // 4. Calculate the budget
    
    // 5. Display the budget
  };
  
  return {
    init: function() {
      console.log('application has started');
      setupEventListeners();
    }
  };
  
})(budgetController, UIController);

controller.init();