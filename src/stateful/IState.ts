export interface IState {
	onEnter(...params: Array<unknown>): void;
	onExit(): void;
}
