
function remove_type() {
    for (let i = 1; i < form.type.length; i++) {
        form.type.options[i].innerText = '';
    }
}
let vitaz ;
form.cars.addEventListener('change', function () {
    let index = form.cars.selectedIndex;
    let type;

    // choose what is index of véhicule
    switch (index) {
        case 1:
            //Moto
            remove_type();
            type = ['Electrique', 'Essence'];
            vitaz = 'none';
            break;
        case 2:
            // Catadine
            remove_type();
            type = ['Electrique', 'Hybride', 'Essence', 'Diesel'];  
            vitaz = 'Manual';
            break;
        case 3:
            // Compact
            remove_type();
            type = ['Hybride', 'Essence', 'Diesel'];
            vitaz = 'Manual';
            break;
        case 4:
            // Utilitaire
            remove_type();
            type = ['Diesel'];
            vitaz = 'Manual';
            break;
        case 5:
            // Engin de chantier
            remove_type();
            type = ['Diesel','Essence'];
            vitaz = 'Manual';
            break;
        case 6:
            // Berlin
            remove_type();
            type = ['Diesel', 'Essence','Hybride'];
            vitaz = 'Automatique';
            break;
        case 7:
            // Camion
            remove_type();
            type = ['Diesel'];
            vitaz = 'Automatique';
            break;
    }

    for (let i = 0; i < type.length; i++) {
        form.type.options[i + 1].innerText = type[i];
    }
    form.vitaz.options[0].innerText = vitaz;
});

document.querySelector("#Bottom").addEventListener('click', function () {
    mic()
});
let prix;
function mic(){

    let cars = document.querySelector("select[name='cars']").value;
    let type = document.querySelector("select[name='type']").value;
    let day = document.querySelector("#number").value;
    

    // calculate Moto
    if(vitaz === 'none'){
        
        if(cars === 'Moto')
        {  
            if(type === 'Electrique'){
                prix = (10 * 0.05) + 10;
                prix = prix * day;
                affichage();
            }
            if(type =='Essence'){
                prix = (10 * 0.14) + 10;
                prix = prix * day;
                affichage();
            }
            
        }
    }
        //----Manual
    if(vitaz == 'Manual'){
        // calculate Citadine
        if(cars == 'Citadine')
        {
            if(type == 'Electrique'){
                prix = (12 * 0.05) + 12;
                prix = prix * day;
                affichage();
            }
            if(type == 'Hybride'){
                prix = (12 * 0.09) + 12;
                prix = prix * day;
                affichage();
            }
            if(type == 'Essence'){
                prix = (12 * 0.14) + 12;
                prix = prix * day;
                affichage();
            }
            if(type == 'Diesel'){
                prix = (12 * 0.21) + 12;
                prix = prix * day;
                affichage();
            }
        }
        // calculate Compact
        if(cars == 'Compact')
        {
            if(type == 'Hybride'){
                prix = (14 * 0.09) + 14;
                prix = prix * day;
                affichage();
            }
            if(type == 'Essence'){
                prix = (14 * 0.14) + 14;
                prix = prix * day;
                affichage();
            }
            if(type == 'Diesel'){
                prix = (14 * 0.21) + 14;
                prix = prix * day;
                affichage();
            }
        }
         // calculate Utilitaire
         if (cars == 'Utilitaire')
         {
            if(type == 'Diesel'){
                prix = (16 * 0.21) + 16;
                prix = prix * day;
                affichage();
            }
         }
         // calculate Engin de Chantier
         if (cars == 'Engin de Chantier')
         {
            if(type == 'Diesel'){
                prix = (900 * 0.21) + 900;
                prix = prix * day;
                affichage();
            }
         }
    }
    //-----Outomatique
    if(vitaz == 'Outomatique'){
         // calculate Berline
         if(cars == 'Berline')
         {
             if(type == 'Hybride'){
                 prix = ((20 * 0.09) + (20 * 0.19)) + 20;
                 prix = prix * day;
                 affichage();
             }
             if(type == 'Essence'){
                prix = ((20 * 0.14) + (20 * 0.19)) + 20;
                prix = prix * day;
                affichage();
            }
            if(type == 'Diesel'){
                prix = ((20 * 0.21) + (20 * 0.19)) + 20;
                prix = prix * day;
                affichage();
            }
         }
         // calculate Camion
         if(cars == 'Camion')
         {
            if(type == 'Diesel'){
                prix = ((250 * 0.21) + (250 * 0.19)) + 250;
                prix = prix * day;
                affichage();
            }
         }
    }
};
function affichage(){
    
    document.getElementById('affichage').innerHTML='your price is :'+prix;
}