import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openContact, closeContact] = useModal(false);
  const [isOpenSongSearch, openSongSearch, closeSongSearch] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Contenido de Modal 1</p>
        <img src="http://placeimg.com/400/400/nature" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Contenido de Modal 2</p>
        <img src="http://placeimg.com/400/400/animals" />
      </Modal>
      <button onClick={openContact}>Contact Form</button>
      <Modal isOpen={isOpenContact} closeModal={closeContact}>
        <ContactForm />
      </Modal>
      <button onClick={openSongSearch}>Song Search</button>
      <Modal isOpen={isOpenSongSearch} closeModal={closeSongSearch}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal en Portal</button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en Portal</h3>
        <p>
          Este es el contanido de un modal que carga en otro nodo del DOM
          diferente a donde carga nuestra APP de React, gracias a un React
          Portal.
        </p>
        <img src="http://placeimg.com/400/400/tech" alt="tech" />
      </ModalPortal>
    </div>
  );
};
export default Modals;
