import hotkeys, { type KeyHandler } from "hotkeys-js";

export abstract class AppState<StateName extends string, StateInput> {
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
		this.exit_hotkey_scope();
	}

	/** Introduce all the shortcuts here using hotkeys-js lib. */
	protected enter_hotkey_scope() {
		hotkeys.setScope(this.name);
	}

	/** Revert all the shortcuts. */
	protected exit_hotkey_scope() {
		hotkeys.setScope("all");
	}

	create_hotkey( key : string , method : KeyHandler) {
		console.log("Create hotkey");
		hotkeys(key , this.name , ( ke  , ht ) => {
			console.log(`State ${this.state_name} keypress : ${key} event is fired.`);
			method(ke , ht);
		});
	}
}

