class SudokuSolver {

  // Function for validate input
  hasInvalidInput(string) {
    let invalidCharacter = /[^1-9]/.test(string);
    if (invalidCharacter) return 'Invalid characters in puzzle';
    return;
  }

  // Function for validate rows...
  hasInvalidRow(string/*, row, column, value*/) {
    let row = [];
    let strIndex = 0;
    // ...loops until all characters in string is checked
    while (strIndex<81) {
      // ...loops until one row is completed...
      while (row.length<9) {
        row.push(string[strIndex]);
        strIndex++;
      }
      // ...checks row and returns true if invalid...
      if (hasDuplicate(row)) return true;
      row = [];
    // ...or return false if all rows are valid
    }
    return false
  }

  // Function for validate columns...
  hasInvalidColumn(string/*, row, column, value*/) {
    let column = [];
    let strIndex = 0;
    let colIndex = 0;
    // ...make loops for all columns... 
    while (colIndex<9) {
      // ...with loops for all characters...
      while (strIndex<81) {
        // ...where a character is added from the string to the column array...
        column.push(string[strIndex]);
        // ...heads for character in next column...
        strIndex+=9;
      }
      // ...or checks completed column and returns true if invalid...
      if (hasDuplicate(column)) return true;
      // ...or creates a new column...
      colIndex++;
      column = [];
      // ...and heads for character next to first character of the previous column...
      strIndex = colIndex;
    }
    //　...or return false if all columns are valid
    return false;
  }

  // Function for validate regions...
  hasInvalidRegion(string/*, row, column, value*/) {
    let region = [];
    let strIndex = 0;
    let rowIndex = 0;
    let regIndex = 0;
    // ...make loops for all regions...
    while (regIndex<9) {
      // ...with loops for all characters in one region...
      while (region.length<9) {
        // ...with loops for all characters from one row in each region...
        while (rowIndex<3) {
          // ...where a character is added from the string to the region array... 
          region.push(string[strIndex]);
          // ...heads for the next character...
          strIndex++;
          rowIndex++;
        }
        // ...or heads for a new character at the next row... 
        strIndex+=6;
        rowIndex = 0;
      }
      // ...or checks completed region and returns true if invalid...
      if (hasDuplicate(region)) return true;
      // ...heads for a new region...
      region = [];
      regIndex++;
      // ...a new character starting at top row...
      if (regIndex<3) strIndex = regIndex*3;
      // ...three rows below... 
      else if (regIndex<6) strIndex = 18 + regIndex*3;
      // ...or another three rows below...
      else if (regIndex<9) strIndex = 36 + regIndex*3;
    }
    //　...or return false if all regions are valid
    return false
  }

  // Function for solving sudoku by brute force...
  solve(numArray, answer) {
    if (this.hasInvalidInput(numArray.join(''))) throw this.hasInvalidInput(numArray);
    // ...replaces empty elements with dots...
    for (let index = 0; index < numArray.length; index++) {
      const element = numArray[index];
      if(element==='') {
        numArray[index] = '.'
      }
    }
    let backToIndex = numArray.length;
    // ...loops solving which...
    while (gaps(numArray)>0) {
      let gapsBefore = gaps(numArray);
      // ...heads for the first gap...
      let index = numArray.indexOf('.');
      // ...with the first number...
      let number = 1;
      // ...loops a trial which...
      while (isInvalid(numArray) || number===1) {
        if (number<10) {
        // ...increments the number...
        numArray[index] = number++;
        } else {
          // ...or modifies numArray...
          modify(numArray, backToIndex);
          if (backToIndex>numArray.lastIndexOf(lastFilled(numArray))) {
            // ...updates backToIndex if a gap is reset...
            backToIndex = numArray.lastIndexOf(lastFilled(numArray));
          }
          // ...heads back to solving...
          break;
        }
      }
      let gapsAfter = gaps(numArray);
      if (gapsBefore>gapsAfter) {
        // ...updates backToIndex if a gap is filled...
        backToIndex = numArray.lastIndexOf(lastFilled(numArray));
      }
      if (backToIndex<0) {
        throw "says 'cannot be solved'";
      }
    }
    return numArray;
  }
}

export let solver = new SudokuSolver();

function hasDuplicate(array) {
  let duplicates = array.reduce(function(accumulator, currentValue, currentIndex, array) {
    if (array.indexOf(currentValue) !== currentIndex && currentValue !== '.') {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []); // [] is the initial value
  return duplicates.length>0;
}

// Function to back and find a different numArray...
function modify(numArray, backToIndex) {
  // ...resets filled numbers...
  while (backToIndex<numArray.lastIndexOf(lastFilled(numArray))) {
    numArray[numArray.lastIndexOf(lastFilled(numArray))] = '.';
  }
  while (lastFilled(numArray)===9) {
    // ...resets last filled number 9...
    numArray[numArray.lastIndexOf(lastFilled(numArray))] = '.';
  }
  // ...increments last filled number 1-8...
  numArray[numArray.lastIndexOf(lastFilled(numArray))] = lastFilled(numArray)+1;
  return;
}

// Function to return if numArray is invalid
function isInvalid(numArray) {
  if (solver.hasInvalidRow(numArray.join('')) || solver.hasInvalidColumn(numArray.join('')) || solver.hasInvalidRegion(numArray.join(''))) {
    return true;
  } else return false;
}

// Function to return last filled number...
function lastFilled(numArray) {
  // ...finds numbers filled in...
  let filled = numArray.reduce(function (accumulator, currentValue) {
    // (ignores numbers from the clue since they are strings)
    if (typeof(currentValue) === 'number') {
      accumulator.push(currentValue);
    }
    return accumulator
  }, []);
  return filled[filled.length-1];
}

// Function to return number of gaps...
function gaps (numArray) {
  return numArray.filter(gaps => gaps == '.').length;
}
