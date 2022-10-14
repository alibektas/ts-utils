export interface IState {
  onEnter(...params: Array<any>): void;
  onExit(): void;
}

export interface StateMachine<States extends string> {
  states: { [name in States]: IState };

  get state(): IState;

  constructor(states: Array<IState>): this;
  transition(to: IState): IState;
}