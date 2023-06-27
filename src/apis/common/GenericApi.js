import axios from "axios";

class GENERIC_API {

    constructor(uri) {
        this.uri = uri;
    }

    uri() {
        return this.uri;
    }

    // Get
    get(id, config ={}) {
        return axios.get(`${this.uri}/${id}`, config)
            .then((res) => {
                return res;
            })
    }

    // Save
    save() {

    }

    //List
    list() {

    }

}

export default GENERIC_API