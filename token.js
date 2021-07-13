function checkToken() {
    const authBook  = document.getElementById('auth-block') 
     if (window.localStorage.token) {
         if (!authBlock.classList.containers('logged-in')) {
             authBook.classList.add('logged-in');
             authBook.innerHTML = `
             <button class = 'btn btn-outline' onclick=`
         }else {
             window.location.pathname = '/sign-up.html'
             authBook.classList.remove
         }
     }

}
