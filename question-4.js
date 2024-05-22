// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let minQuantity = inventory[0];
inventory.forEach((item) => {
  if (item.quantity < minQuantity.quantity) {
    minQuantity.quantity = item;
  }
});
console.log(minQuantity);

console.log(
  "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " +
    minQuantity.quantity.name +
    "ซึ่งมี " +
    minQuantity.quantity.quantity
);
