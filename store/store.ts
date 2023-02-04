import {create, SetState} from 'zustand'
import {devtools} from "zustand/middleware"

interface VisibilitySlice {
	visibility: string;
	setVisibility: () => void;
}
type ModalState = VisibilitySlice

const modalVisibility = (set: SetState<ModalState>) => ({
	visibility: "hidden",
	setVisibility: () => {
		set((prev) => ({ visibility: prev.visibility == "hidden" ? "flex" : "hidden" }))
	}
})

const useModal = create<ModalState>()(devtools((set) => ({
	...modalVisibility(set),
})))

export default useModal