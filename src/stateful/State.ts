import { IState } from "./IState";

export abstract class State<StateName extends string , StateInput> implements IState {

    protected _state : StateInput | null = null;

    /**
     *
    */
    constructor(protected state_name : StateName) {}
    
    onEnter(o : StateInput): void {
        console.log(`utils-ts onEnter() , state : ${this.state_name}`);
		this._state = o;
    }

    onExit(): void {
		console.log(`utils-ts onExit() , state : ${this.state_name}`);
    }

}