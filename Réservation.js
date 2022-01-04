
function remove_type() {
    for (let i = 1; i < form.type.length; i++) {
        form.type.options[i].innerText = '';
    }
}
let vitaz;
form.cars.addEventListener('change', function () {
    let index = form.cars.selectedIndex;
    let type;

    // choose what is index of véhicule
    switch (index) {
        case 1:
            remove_type();
            type = ['Electrique', 'Essence'];
            vitaz = 'none';
            break;
        case 2:
            remove_type();
            type = ['Electrique', 'Hybride', 'Essence', 'Diesel'];  
            vitaz = 'Manual';
            break;
        case 3:
            remove_type();
            type = ['Hybride', 'Essence', 'Diesel'];
            vitaz = 'Manual';
            break;
        case 4:
            remove_type();
            type = ['Hybride', 'Essence', 'Diesel'];
            vitaz = 'Manual';
            break;
        case 5:
            remove_type();
            type = ['Diesel'];
            vitaz = 'Automatique';
            break;
        case 6:
            remove_type();
            type = ['Diesel', 'Essence'];
            vitaz = 'Automatique';
            break;
        case 7:
            remove_type();
            type = ['Diesel'];
            vitaz = 'Manual';
            break;
    }

    // fill fuel and gearbox
    for (let i = 0; i < type.length; i++) {
        form.type.options[i + 1].innerText = type[i];
    }
    form.vitaz.options[1].innerText = vitaz;
});