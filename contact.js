  const scriptURL = '<https://script.google.com/a/andrew.cmu.edu/macros/s/AKfycbwGTFShTkfZJkR_IdYslR696cTH5nBeyGDaqst_JS1d/dev>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
