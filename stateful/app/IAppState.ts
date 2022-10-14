import type { IState } from "../IState";

export interface IAppState extends IState {
	/** Introduce all the shortcuts here using hotkeys-js lib. */
	enter_hotkey_scope: () => void;

	/** Revert all the shortcuts. */
	exit_hotkey_scope: () => void;
}
