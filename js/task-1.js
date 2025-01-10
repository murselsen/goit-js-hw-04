console.log('~~~~~~~~~ Task 1: ~~~~~~~~~');

const isEnoughCapacity = (products, containerSize) => {
  // Toplam ürün boyutunu tutacak değişkeni tanımlar ve sıfırlar
  let totalProductSize = 0;

  // Ürün listesindeki elemanların değerlerini totalProductSize'a ekleyerek toplam ürün boyutunu hesaplar.
  Object.values(products).forEach(product => {
    totalProductSize += product;
  });

  // Toplam Ürün Sayısı
  // console.log('Total Product Size:', totalProductSize);

  // Konteyner içerisindeki toplam ürün boyutu ile karşılaştırma yaparak yeterli kapasite olup olmadığını kontrol ed
  if (totalProductSize <= containerSize) {
    return true;
  } else {
    return false;
  }
};

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
