import { observable,action } from 'mobx';
import User from './User';

class Index {
    user = {};

    constructor() {
        this.user = new User();
    }
}

export default  new Index();
