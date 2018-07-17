/**
 * The reducer registry manages the initial and future register process of reducers.
 * It enables lazy loading of reducers by implementing a state-saving replacement of the
 * store reducer.
 *
 * The idea and source code was originally written by the DEV team at Twitter, see this post:
 * http://nicolasgallagher.com/redux-modules-and-code-splitting/
 *
 * @export
 */
class ReducerRegistry {
    private _emitChange: Function;
    private _reducers: any;

    constructor() {
        this._emitChange = null;
        this._reducers = {};
    }

    public getReducers(): any {
        return { ...this._reducers };
    }

    public register(name: string, reducer: Function): void {
        this._reducers = { ...this._reducers, [name]: reducer };
        if (this._emitChange) {
            this._emitChange(this.getReducers());
        }
    }

    public setChangeListener(listener: Function): void {
        this._emitChange = listener;
    }
}

export const reducerRegistry: ReducerRegistry = new ReducerRegistry();