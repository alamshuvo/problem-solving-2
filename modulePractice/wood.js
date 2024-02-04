//** use add and multification to calculate wood requirments */
function woodQuantityCal(chair,tabel,bed) {
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;
    const allChairWood=perChairWood*chair;
    const allTableWood=perTableWood*tabel;
    const allBedWood=perBedWood*bed;
    const allRequirWood=allChairWood+allTableWood+allBedWood;
    return allRequirWood;
    
}
console.log(woodQuantityCal(0,0,2));