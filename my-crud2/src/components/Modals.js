import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Input from "./Input";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import SongSearch from "./SongSearch";

const Modals = () => {
  const [isOpenModal1,openModal1,closeModal1]=useModal(true);
  const [isOpenModal2,openModal2,closeModal2]=useModal(false);
  const [isOpenModalForm,openModalform,closeModalForm]=useModal(false);
  const [isOpenSong,openModalSong,closeModalSong]=useModal(false);
  const [isOpenModalPortal,openModalPortal,closeModalPortal]=useModal(false);



  return ( 
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1} >
        <h3>Modal 1</h3>
      <p>Hola este es el contenido de mi modal</p>
      <img src="https://placeimg.com/400/400/animals"alt="Animals"/>
      </Modal>
      <button onClick={openModal2}>Modal 2</button>

      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
      <p>otro modal</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at quaerat officiis voluptas officia porro perferendis architecto illum velit, ullam molestiae quia delectus consectetur ea? Fugiat ratione maiores et? Consequatur?</p>
  <img src="https://placeimg.com/400/400/nature"alt="Nature"/>
  </Modal>
  <button onClick={openModalform}>formulario</button>
  <Modal isOpen={isOpenModalForm}closeModal={closeModalForm}>
    <ContactForm/>
  </Modal>
  <button onClick={openModalSong}>buscador canciones</button>
  <Modal isOpen={isOpenSong}closeModal={closeModalSong}>
   
  </Modal>
<button onClick={openModalPortal}>modal portal</button>
  <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal}>
        <h3>Modal Portal</h3>
      <p>otro modal</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at quaerat officiis voluptas officia porro perferendis architecto illum velit, ullam molestiae quia delectus consectetur ea? Fugiat ratione maiores et? Consequatur?</p>
  <img src="https://placeimg.com/400/400/tec"alt="tec"/>
  </ModalPortal>
</div>
   );
}
 
export default Modals;