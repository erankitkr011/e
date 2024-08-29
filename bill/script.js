const categories = [{
    id : "C1",
    categoryName : "Platters",
    superCategory : {
  
      superCategoryName : "South Indian",
      id : "SC1"
    }
  },];
  
  const menu = [{ id : "item1",
      itemName : "Butter Roti",
      rate : 20,
      taxes : [
        {
          name : "Service Charge",
          rate : 10,
          isInPercent : false
        }, {
          name : "GST",
          rate : 5,
          isInPercent : true
        }
      ],
      category : {
        categoryId : "C2"
      }
  
    },
    { id : "item2",
        itemName : "Butter",
        rate : 20,
        taxes : [
          {
            name : "Service Charge",
            rate : 10,
            isInPercent : false
          }, {
            name : "GST",
            rate : 5,
            isInPercent : true
          }
        ],
        category : {
          categoryId : "C2"
        }
    
      }];
  
  bill = { id : "B1",
    billNumber : 1,
    opentime : "06 Nov 2020 14:19",
    customerName : "CodeQuotient",
    billItems : [
      {
        id : "item1",
        quantity : 3,
        discount : {
          rate : 10,
          isInPercent : true
        }
  
      },
      {
        id : "item2",
        quantity : 5,
        discount : {
          rate : 10,
          isInPercent : false
        }
  
      },
    ]
  };


  function calculateBill(bill) {
    let totalBillAmount = 0;
    let billItems = [];

    bill.billItems.forEach((billItem) => {
        const menuItem = menu.find((item) => item.id === billItem.id);
        
    
        let itemPrice = menuItem.rate;
    
        if (billItems.discount) {
          if (billItems.discount.isInPercent) {
            itemPrice = itemPrice - itemPrice * billItem.discount.rate;
          } else {
            itemPrice = itemPrice - billItem.discount.rate;
          }
        }
    
        menuItem.taxes.forEach((tax) => {
          if (tax.isInPercent) {
            itemPrice = itemPrice + (itemPrice * tax.rate) / 100;
          } else {
            itemPrice = itemPrice + tax.rate;
          }
        });

        totalprice = itemPrice*billItem.quantity;
        console.log(totalprice);
        totalBillAmount += totalprice;
        let billname = `${menuItem.itemName} @ ${menuItem.rate} x ${billItem.quantity} = ${totalprice}`;
        billItems.push(billname);
      });


    return [totalBillAmount, billItems];
  }


  console.log(calculateBill(bill))