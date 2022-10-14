import { IState } from "../IState";

export interface IAppState extends IState {
  /** Introduce all the shortcuts here using hotkeys-js lib. */
  enter_hotkey_scope: () => void;

  /** Revert all the shortcuts. */
  leave_hotkey_scope: () => void;
}
