
class SortingModule {

    constructor(orderBy, target) {
        if(orderBy !== null || orderBy !== '') {
            // keyWord check toUpperCase
            this.orderBy = orderBy.toUpperCase();
        }else {
            this.orderBy = orderBy ?? 'ASC'; // default ASC
        }
        this.target = target ?? 'id'; // default id
    }

    // sorting Solution -> ASC || DESC
    orderBy() {
        return this.orderBy;
    }

    target() {
        return this.target;
    }

    sortingToList(list) {
        if(this.orderBy === 'ASC') {
            return list.sort((a, b) => {
                if(a[this.target] > b[this.target]) {
                    return 1;
                }else if(a[this.target] < b[this.target]) {
                    return -1;
                }else {
                    return 0;
                }
            });
        }else if(this.orderBy === 'DESC') {
            return list.sort((a, b) => {
                if(a[this.target] > b[this.target]) {
                    return -1;
                }else if(a[this.target] < b[this.target]) {
                    return 1;
                }else {
                    return 0;
                }
            });
        }else {
            return list;
        }
    }



}

export default SortingModule;