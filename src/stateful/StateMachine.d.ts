import type { IState } from "./IState";

export interface IStateMachine<States extends string> {
	init(state_initial : States , ...params : any): void;
}
