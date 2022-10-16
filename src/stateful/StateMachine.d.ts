import type { IState } from "./IState";

export interface IStateMachine<States extends string> {
	states: { [name in States]: IState };
	get state(): States;
	transition(to: States): void;
}
