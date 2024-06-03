// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory.map((item) => {
  if (item.name === "Apple") {
    item.quantity = 200;
  }
});

let addNewInventory = { name: "Orange", price: 20, quantity: 300 };
inventory.push(addNewInventory);

let totalValue = inventory.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalValue} บาท`);
