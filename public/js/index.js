var inputText = document.getElementById('inputText');
        inputText.value= sessionStorage.getItem('temp')
        inputText.addEventListener('change',() => {
            sessionStorage.setItem('temp',inputText.value)
        })

