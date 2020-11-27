const calculateSalesTax = function(salesData, taxRates) {
  const results = {};

  // Iterate through each company in the list
  for (let i = 0; i <= salesData.length - 1; i++) {

    // Initialize results object if it doesn't exist.
    if (!results[salesData[i]['name']]) {

      results[salesData[i]['name']] = { totalSales: 0, totalTaxes: 0 };

      // iterate through the row of sales data. Add sales data and tax data to new object.
      for (let j = 0; j <= salesData[i]['sales'].length - 1; j++) {
        results[salesData[i]['name']].totalSales += salesData[i].sales[j];
        results[salesData[i]['name']].totalTaxes += salesData[i].sales[j] * taxRates[salesData[i].province];
      }
    } else {
      for (let j = 0; j <= salesData[i]['sales'].length - 1; j++) {
        results[salesData[i]['name']].totalSales += salesData[i].sales[j];
        results[salesData[i]['name']].totalTaxes += salesData[i].sales[j] * taxRates[salesData[i].province];
      }
    }
  }
  console.log(results);
  return results;
};

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



calculateSalesTax(companySalesData, salesTaxRates);


