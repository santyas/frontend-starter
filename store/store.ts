import create, {GetState, SetState} from 'zustand'
import {devtools} from "zustand/middleware"

interface VisibilitySlice {
	visibility: string;
	setVisibility: (param: string) => void;
}
type ModalState = VisibilitySlice

const modalVisibility = (set: SetState<ModalState>, get: GetState<ModalState>) => ({
	visibility: "hidden",
	setVisibility: (param: string) => {
		set((prev) => ({ visibility: prev.visibility == "hidden" ? "flex" : "hidden" }));
	}
})

const useModal = create<ModalState>()(devtools((set, get) => ({
	...modalVisibility(set, get),
})))

export default useModal