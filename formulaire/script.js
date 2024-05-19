function validation (){
    var user1 = document.getElementById('1');
    var user2 = document.getElementById('2');
    var user3 = document.getElementById('3');
    var user4 = document.getElementById('4');

    if( user1.value==''||user2.value=='' && user3.value==''||user4.value=='')
        alert("Veullez precisez les champs pour plus de precision de demande de service");
    else
    {
        alert("Votre demande de service a ete envoyez a l'entreprise pour traitement...")
    }
}