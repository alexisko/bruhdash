var global = window || GLOBAL;

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
    return array[0];
  },

  // returns the last element of an array
  last: function (array) {
    return array[array.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, element) {
    for(var i = 0; i < array.length; i++) {
      if(array[i] === element) {
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from left to right
  lastIndexOf: function (array, element) {
    for(var i = array.length; i > 0; i--) {
      if(array[i] === element) {
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    var newArr = [];
    for(var i = 0; i < array.length-1; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  },
  
  // returns an array with all falsey values removed
  compact: function(array) {
    var trueArr = [];
    for(var i = 0; i < array.length; i++) {
      if(array[i]) {
        trueArr.push(array[i]);
      }
    }
    return trueArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, start, end) {
    var arrSlice = [];
    for(var i = start; i < end; i++) {
      arrSlice.push(array[i]);
    }
    return arrSlice;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, dropNum){
    var dropArr = [];

    if(dropNum === 0) { //drop === 0, return array
      return array;
    } else if (dropNum) { //drop is specified
      for(var j = dropNum; j < array.length; j++) {
        dropArr.push(array[j]);
      }
      return dropArr;
    }
    //no amount to drop is specified
    for(var i = 1; i < array.length; i++) {
      dropArr.push(array[i]);
    }
    return dropArr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, dropNum) {
    var dropArr = [];
    if(dropNum === 0) {
      return array;
    } else if (dropNum) {
      for(var j = 0; j < array.length-dropNum; j++) {
        dropArr.push(array[j]);
      }
      return dropArr;
    }

    for(var i = 0; i < array.length-1; i++) {
      dropArr.push(array[i]);
    }
    return dropArr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, takeNum) {
    var takeArr = [];
    if(takeNum === 0) {
      return [];
    } else if(takeNum > array.length) {
      return array;
    } else if(takeNum) {
      for(var i = 0; i < takeNum; i++) {
        takeArr.push(array[i]);
      }
      return takeArr;
    }
    takeArr.push(array[0]);
    return takeArr;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};