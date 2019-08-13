export default class DropDownHolder {
    static dropDown;

    static setDropDown(dropDown) {
        console.log(3334444444)
        this.dropDown = dropDown;
    }

    static getDropDown() {
        return this.dropDown;
    }
}
