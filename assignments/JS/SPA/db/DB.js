let customerDB = [
    setCustomer("C00-001","Bandara","Galle",20000),
    setCustomer("C00-002","Ramal","Colombo",10000),
    setCustomer("C00-003","Virat","Panadura",20000),
    setCustomer("C00-004","John","Matara",10000),
    setCustomer("C00-005","Perera","Panadura",30000),
    setCustomer("C00-006","Fernando","Galle",30000),
];

let itemDB = [
    setItem("ITM-001","Rice",180,50),
    setItem("ITM-002","Sugar",130,20),
    setItem("ITM-003","Biscuit",90,17)
];

let cartDB = [];

let ordersDB = [
    setOrder("ORD-001","C00-001","Bandara","21/09/2022",1000.00,50, 950.00),
    setOrder("ORD-002","C00-003","Virat","12/10/2022",800.00,5, 795.00)
];
