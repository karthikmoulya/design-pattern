import Document from './document';

//Creating a document containing an array of two arrays
const ORIGINAL_DOCUMENT = new Document('Original', [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
]);
console.log(ORIGINAL_DOCUMENT);
console.log();

const DOCUMENT_COPY_1 = ORIGINAL_DOCUMENT.clone(1); // Shallow Copy
DOCUMENT_COPY_1.name = 'COPY 1';

//This also modified ORIGINAL_DOCUMENT because of Shallow Copy when using mode 1
DOCUMENT_COPY_1.array[1][2] = 200;
console.log(DOCUMENT_COPY_1);
console.log(ORIGINAL_DOCUMENT);
console.log();

const DOCUMENT_COPY_2 = ORIGINAL_DOCUMENT.clone(1); // Shallow Copy
DOCUMENT_COPY_2.name = 'COPY 2';

//This does NOT modify ORIGINAL_DOCUMENT because it changes the complete array[1] refrence
//that was Shallow Copied when using mode 1
DOCUMENT_COPY_2.array[1] = [9, 10, 11, 12];
console.log(DOCUMENT_COPY_2);
console.log(ORIGINAL_DOCUMENT);
console.log();

const DOCUMENT_COPY_3 = ORIGINAL_DOCUMENT.clone(2); // Deep Copy
DOCUMENT_COPY_3.name = 'COPY 3';

//This mode does NOT modify ORIGINAL_DOCUMENT because it changes the complete of array[1][0]
//that was deep copied recursively when using mode 2
//that was Shallow Copied when using mode 1
DOCUMENT_COPY_3.array[1][2] = 12345;
console.log(DOCUMENT_COPY_3);
console.log(ORIGINAL_DOCUMENT);
console.log();
