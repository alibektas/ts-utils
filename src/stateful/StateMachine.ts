import type { IState } from "./IState";

export interface StateMachine<States extends string> {
	states: { [name in States]: IState };
	get state(): IState;
	transition(to: States): void;
}
