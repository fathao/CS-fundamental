const binarySearch = (stuff, searchElement) => {
  var currentElement;
  var currentIndex;
  var maxIndex = stuff.length -1;
  var minIndex = 0;

 //while minIndex is less than maxIndex 
while (minIndex <= maxIndex) {
  currentIndex = Math.floor((minIndex + maxIndex)/ 2);
  // setting up a index that is in the middle of the array

  currentElement = stuff[currentIndex];
//setting up a index that is in the middle of the array

  if (currentElement < searchElement) {
    minIndex = currentIndex + 1;
  }// if mid 
  else if ( currentElement > searchElement) {
    maxIndex = currentIndex - 1;
  }
  else {
    return currentIndex;
    }
  }
  return false;
}

