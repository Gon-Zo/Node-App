export class StartDTO {

    private _name: string

    private _content: string

    constructor(name: string, content: string) {
        this._name = name
        this._content = content
    }

    get name(): string {
        return this._name
    }

    get content(): string {
        return this._content
    }

    set name(name: string) {
        this._name = name
    }

    set content(content: string) {
        this._content = content
    }
}