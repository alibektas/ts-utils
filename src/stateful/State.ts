import type { IState } from "./IState";
import { NullInnerStateError } from "./StateError";

export abstract class State<StateName extends string , StateInput> implements IState {

    protected inner : StateInput | null = null;

    /**
     *
    */
    constructor(protected state_name : StateName) {}
    
    onEnter(o : StateInput): void {
      console.log(`utils-ts onEnter() , state : ${this.state_name}`);
		  this.inner = o;
    }

    onExit(): StateInput {
		  console.log(`utils-ts onExit() , state : ${this.state_name}`);
      
      if (this.inner === null ) {
        throw new NullInnerStateError();
      }
      
      const i = this.inner;
      this.inner = null;
      
      return i;
    }

}