import {create} from 'zustand'

interface ModalState {
	visibility: string
	setVisibility: () => void
}

/*const modalVisibility = (set: SetState<ModalState>) => ({
	visibility: "hidden",
	setVisibility: () => {
		set((prev) => ({ visibility: prev.visibility == "hidden" ? "flex" : "hidden" }))
	}
})*/

const useModal = create<ModalState>()((set) => ({
	visibility: "hidden",
	setVisibility: () => {
		set((state) => ({ visibility: state.visibility == "hidden" ? "flex" : "hidden" }))
	}
}))

export default useModal