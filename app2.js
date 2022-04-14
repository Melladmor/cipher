    var encryption = document.getElementById('encryption');
    var decryption = document.getElementById('decryption');
    var text_cipher = document.getElementById("textarea1");
    var reuslt = document.getElementById("textarea2");
    var dark = document.getElementById('dark');
    var titleSmall = document.getElementById('titleSmall');
    var label = document.getElementById('label1');
    var head = document.getElementById('header');
    var foot = document.getElementById('footer')
class Cipher{
    constructor(){
        


        encryption.addEventListener('click',()=>{
            this.encrypt();
        });

        decryption.addEventListener('click',()=>{
            this.decrypt();
        });

        dark.addEventListener('click',()=>{
            this.darkMode();
        });
    }

    encrypt()
    {
    reuslt.value = window.btoa(text_cipher.value);


    }
    decrypt()
    {
    reuslt.value = window.atob(text_cipher.value);

    }
    darkMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
        text_cipher.classList.toggle('darkmodebody');
        reuslt.classList.toggle('darkmodebody');
        titleSmall.classList.toggle('darkmodebody');
        label.classList.toggle('darkmodebody');
        head.classList.toggle('darkmodebody');
        foot.classList.toggle('darkmodebody');
    }

    }

onload = new Cipher();

