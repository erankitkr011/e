const Emp = [
    {
      EmpName: "Arpit Jain",
      EmpID: 1068
    },
    {
      EmpName: "Samuel Bond",
      EmpID: 1079
    },
    {
      EmpName: "Rishabh Garg",
      EmpID: 1080
    },
  ];
  
  // Task 1
  function findEmpIndexById(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].EmpID === id) {
        return i;
      }
    }
    return -1;
  }
  
  // Task 2
  function getEmpInitials(array) {
    return array.map(emp => {
      return emp.EmpName.split(' ')
        .map(word => word[0])
        .join('');
    });
  }

  console.log(findEmpIndexById(Emp, 1079));
  console.log(getEmpInitials(Emp));