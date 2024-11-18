const target = document.querySelector("#target");
const submit = document.querySelector("input[type='submit']");

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const firstname = document.querySelector("input[name='firstname']").value;
    const lastname = document.querySelector("input[name='lastname']").value;

    const f_name = firstname.charAt(0).toUpperCase() + firstname.slice(1);
    const l_name = lastname.charAt(0).toUpperCase() + lastname.slice(1);
    
    target.innerHTML = `Your name is ${f_name} ${l_name}`;
});