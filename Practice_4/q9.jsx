
/*
ReactStrap ile aşağıdaki modal component'ini div içinde oluştur.
<Modal isOpen={true}> 
    <………..>Title</…………>
    <………..>Body Content</…………..> 
</Modal>



export default function App(){
 return (
  <div></div>
 )
}

*/


import { Modal, ModalHeader, ModalBody } from 'reactstrap';


export default function App(){
    return (
     <div>
        <Modal isOpen={true}>
        <ModalHeader >Title</ModalHeader>
        <ModalBody>
            Body Content
        </ModalBody>
      </Modal>
     </div>
    )
   }