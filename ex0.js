const facts = fetch('https://catfact.ninja/fact1')
  .then((res) => {
    // let result = res.json();
    // console.log("then result", result);
    return res.json();
  })
  .then((fact) => {
    console.log(fact);
  })
  .catch((error) => {
    console.log('Error', error);
  });
