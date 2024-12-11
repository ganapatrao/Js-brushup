const orders = [
  {
    orderId: 101,
    customerName: "Alice Johnson",
    product: "Laptop",
    quantity: 1,
    price: 1500,
    orderDate: "2024-12-10",
  },
  {
    orderId: 102,
    customerName: "Bob Smith",
    product: "Smartphone",
    quantity: 2,
    price: 800,
    orderDate: "2024-12-11",
  },
  {
    orderId: 103,
    customerName: "Charlie Davis",
    product: "Headphones",
    quantity: 3,
    price: 150,
    orderDate: "2024-12-11",
  },
  {
    orderId: 104,
    customerName: "Diana Lee",
    product: "Monitor",
    quantity: 1,
    price: 300,
    orderDate: "2024-12-12",
  },
];

/************const names = ["Alice", "Bob", "Charlie", "Diana"];

const search = "Ali";
const filteredNames = names.filter(name => name.includes(search));

console.log(filteredNames); // ["Alice"]
*********** */

//   const values = Object.values(user);
// console.log(values); // ["Alice", 25, "New York"]

//filer by just customername
/*
function filterByname(input) {
  return orders.filter((data) =>
    data.customerName.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  );
}

let result = filterByname("char");

console.log(result);
*/

//filter by any value
/*
function filterByname(searchby) {
  orders.filter((data) => console.log(Object.values(data)));
}

[ 101, 'Alice Johnson', 'Laptop', 1, 1500, '2024-12-10' ]
[ 102, 'Bob Smith', 'Smartphone', 2, 800, '2024-12-11' ]
[ 103, 'Charlie Davis', 'Headphones', 3, 150, '2024-12-11' ]
[ 104, 'Diana Lee', 'Monitor', 1, 300, '2024-12-12' ]
*/

function filterByname(searchby) {
  return orders.filter((data) => {
    console.log(data);
    Object.values(data).some((result) => //.some() is necessary: it lets you inspect each value individually and apply .includes() on its string form.
      result.toString().toLowerCase().includes(searchby)
    );
  });
}

let filtered = filterByname("dian");
console.log(filtered);
