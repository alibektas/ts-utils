import type { IAppState } from "./IAppState";
import hotkeys from "hotkeys-js";

export abstract class State<StateName extends string, StateInput>
  implements IAppState
{
  constructor(protected state_name: StateName) {}

  protected _state: StateInput | null = null;

  get name(): StateName {
    return this.state_name;
  }

  onEnter(o: StateInput) {
    this._state = o;
    this.enter_hotkey_scope();
  }

  onExit() {
    this.leave_hotkey_scope();
  }

  enter_hotkey_scope() {
    hotkeys.setScope(this.name);
  }

  leave_hotkey_scope() {
    throw new Error("NotImplemented");
  }
}

export interface ABC {}
