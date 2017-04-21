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
  takeRight: function (array, takeNum) {
    var takeArr = [];
    if(takeNum === 0) {
      return [];
    } else if(takeNum > array.length) {
      return array;
    } else if(takeNum) {
      for(var i = takeNum-1; i < array.length; i++) {
        takeArr.push(array[i]);
      }
      return takeArr;
    }
    takeArr.push(array[array.length-1]);
    return takeArr;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, value, start, end) {
    if(start && end) {
      return array.fill(value, start, end);
    }
    return array.fill(value);
  },

  // removes all given values from an array
  pull: function (array, values) {
    var loc;
        for(var i = 0; i < values.length; i++) {
          loc = array.indexOf(values[i]);
          if(loc >= 0) {
            array.splice(loc, 1);
          }
        }
    return array;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array, indices) {
    for(var i = indices.length-1; i >= 0; i--) {
      array.splice(indices[i], 1);
    }
    return array;
  },

  // creates an array excluding all the specified values
  without: function(array, values) {
    var loc;
        for(var i = 0; i < values.length; i++) {
          loc = array.indexOf(values[i]);
          if(loc >= 0) {
            array.splice(loc, 1);
          }
        }
    return array;
  },

  // returns an array with specified values excluded
  difference: function(array1, array2) {
    var diffNums = [];
    for(var i = 0; i < array1.length; i++) {
      if(array2.indexOf(array1[i]) === -1) {
        diffNums.push(array1[i]);
      }
    }
    return diffNums;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (array1, array2) {
    var grpdArr = [];
    var tempArr = [];
    if(array1.length === array2.length) {
      for(var i = 0; i < array1.length; i++) {
        tempArr.push(array1[i]);
        tempArr.push(array2[i]);
        grpdArr.push(tempArr);
        tempArr = [];
      }
    }
    return grpdArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (array) {
    var grpdArr = [];
    var array1 = [];
    var array2 = [];
    for(var i = 0; i < array.length; i++) {
      array1.push(array[i][0]);
      array2.push(array[i][1]);
    }
    grpdArr.push(array1);
    grpdArr.push(array2);
    return grpdArr;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(array, size){
    var arrChunk = [];
    var tempArr = [];
    var count = 0;
    if(size === 0) {
      return [];
    } else if(array === undefined || array.length === 0) {
      return [];
    } else if(array.length === size) {
      arrChunk.push(array);
      return arrChunk;
    } else if(array.length < size) {
      arrChunk.push(array);
      return arrChunk;
    } else {
      for(var i = 0; i < array.length; i++) {
        tempArr.push(array[i]);
        count++;
        if(count === size) {
          arrChunk.push(tempArr);
          count = 0;
          tempArr = [];
        } else if (i === array.length-1) {
          arrChunk.push(tempArr);
        }
      }
      return arrChunk;
    }
    return arrChunk;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(array, iteratee) {
    //var result = [];
    //var value;
    //for(value of array) {
      //result.push(value);
    //}
    //return result;
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