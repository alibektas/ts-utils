export interface IState {
	onEnter(...params: Array<unknown>): void;
	onExit(): void;
}

export interface StateMachine<States extends string> {
	states: { [name in States]: IState };
	get state(): IState;
	transition(to: States): void;
}
