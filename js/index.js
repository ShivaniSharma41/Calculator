function insert(num) {
  console.log("button clicked");
  document.form.textview.value = document.form.textview.value + num;
}

function clear1() {
  console.log("clear button clicked");
  document.form.textview.value = "";
}

function back() {
  let exp = document.form.textview.value;
  document.form.textview.value = document.form.textview.value.substring(
    0,
    document.form.textview.value.length - 1
  );
}

function  equal() {
  var exp = document.form.textview.value;
  if (exp.length !== 0) {
    try{
      document.form.textview.value = eval(exp);
    }
     catch(e){
      console.log("Error Occured.");
      document.form.textview.value= "";
      alert("Error Occured.")
    }
  }
}
