export default class invalidFields {
    constructor() {
        this.fields = [];
    }

    add(id, el, error) {
        this.fields.push({
            id,
            el,
            error,
        });
    }

    reset() {
        this.fields = [];
    }

    hasFields() {
        return this.fields.length > 0;
    }

    first() {
        return this.fields[0];
    }
}
