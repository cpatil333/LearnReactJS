import { createSessionStorage } from "react-router-dom";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useMyStore = create(persist((set, get) => ({
    count: 1,
    name: "manas kumar lal",
    increment: () => {
        set((state) => ({
            count: state.count + 1
        }))
    },
    capitalizeWord: () => {
        const { name } = get();
        set({
            name: name.charAt(0).toUpperCase() + name.slice(1)
        })
    }
}), { name: 'mystore', storage: createJSONStorage(() => sessionStorage) }))

export default useMyStore;