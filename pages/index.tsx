import type { NextPage } from 'next'
import Head from 'next/head'
import shallow from "zustand/shallow"
import useModal from "@store/store"

import Modal from '@components/ui/Modal'
import styles from '@styles/Home.module.css'

const Home: NextPage = () => {
   const [setVisibility] = useModal(
      (state) => [state.setVisibility],
      shallow
   )

   const openModalHandler = (): void => {
      setVisibility("flex")
   }

   return (
      <>
         <div className={styles.container}>
            <h1>index</h1>

            <button onClick={()=> openModalHandler()}>
               Modal
            </button>
         </div>

         <Modal>
            <h1>Title</h1>
         </Modal>
      </>
   );
}

export default Home
