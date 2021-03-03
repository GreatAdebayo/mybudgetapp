if (localStorage.myBudget) {
  var array1 = JSON.parse(localStorage.myBudget);
} else {
  array1 = [];
}

var exp = [];

var startBudget = () => {
  let a = bId.value;
  let b = day.value;
  let c = amt.value;

  var obj1 = { budid: a, budgday: b, amount: c };

  array1.push(obj1);

  document.getElementById('estamt').value = c;

  var myJSON = JSON.stringify(array1);
  localStorage.setItem('myBudget', myJSON);

  if (a == '' && b == '') {
    confirm('Please fill in your budget details');
  } else {
    confirm('Budget Started');
  }

  document.getElementById('budbody').style.visibility = 'hidden';
};

var saveExpenses = () => {
  let d = bought.value;
  let e = amt1.value;

  let obj2 = { boug: d, spent: e };

  exp.push(obj2);

  let f = JSON.parse(localStorage.getItem('myBudget'));

  let g = f.length;

  f[g - 1].exp = exp;

  var z = document.getElementById('estamt').value;

  var x = z - e;

  if (z == '') {
    confirm('Please start a new budget');
  } else {
    document.getElementById('estamt').value = x;
  }

  var r = z / 2;
  if (x < r) {
    document.getElementById('redo').style.color = 'red';
  }

  localStorage.myBudget = JSON.stringify(f);
};

var createBudget = () => {
  document.getElementById('budbody').style.visibility = 'visible';
};

var obj;

var viewExp = () => {
  tab.innerHTML = '';

  let prop1 = document.getElementById('prop').value;
  console.log(prop1);
  budgett = JSON.parse(localStorage.getItem('myBudget'));

  budgett.forEach(function (each) {
    if (prop.value == each.budid) {
      obj = each;
    }
  });

  pee1.innerHTML = obj.amount;
  pee.innerHTML = obj.budgday;

  var Tot = 0;

  obj.exp.forEach(function (each, i) {
    Tot += Number(each.spent);

    tab.innerHTML += `<tr><td>${i + 1}</td><td>${each.boug}</td><td>${
      each.spent
    }</td></tr>`;
  });

  document.getElementById('pee2').innerHTML = '$' + Tot;

  document.getElementById('b1').style.visibility = 'visible';
  document.getElementById('b2').style.visibility = 'visible';
  document.getElementById('b3').style.visibility = 'visible';
  document.getElementById('b4').style.visibility = 'visible';
  document.getElementById('b5').style.visibility = 'visible';

  let z = Tot - obj.amount;

  if (Tot > obj.amount) {
    document.getElementById('pee3').innerHTML =
      'Budget Deficit' + ' ' + 'of:' + '$' + z;
    document.getElementById('pee3').style.color = 'red';
  } else {
    document.getElementById('pee3').innerHTML = 'In-Budget: GOOD JOB';
    document.getElementById('pee3').style.color = '#1A73E8';
  }
};

var printit = () => {
  window.print();
};
