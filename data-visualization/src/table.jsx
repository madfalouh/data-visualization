import React, { useEffect, useReducer, useRef, useState } from "react";

import './TableCampagne.css';

import { useDispatch, useSelector } from "react-redux";

import BlockIcon from '@mui/icons-material/Block';

import DoneIcon from '@mui/icons-material/Done';

 

import campagneSlice, { fetchRequest , updateStatusToBlock } from "../../../features/campagnes/campagneSlice";

 

import { drop, size } from "lodash";

import Modal from "../Modal/Modal";

import DropDownMore from "../dropdownMore/DropDownMore";

import PaginationCampagne from "../PaginationCampagne/PaginationCampagne";

import ModalExecute from "../modalExecute/ModalExecute";

import Empty from "../../Empty/Empty"

 

const testObj = {key: -1, open: false}

 

const TableCampagne = () => {

   const [selectedId, setSelectedId] = useState(null);

   

        const [dropdownOpen, setDropdownOpen] = useState(false);

     

        const toggle = () => setDropdownOpen((prevState) => !prevState);

 

    const headers = ["Objet", "Date création", "Heure création", "Date exécution", "Heure exécution", "Statut", "Canal", "actions"];

   

    const dispatch = useDispatch();

 

    const data = useSelector(state => state.campagne.rows)

 

    const [openModal, setOpenModal] = useState(false)

    const [openMore, setOpenMore] = useState(false)

   

    const [openMoreRef, setOpenMoreRef] = useState(false)

 

    const [selectedKey , setSelectedKey] = useState()

 

    const [modalStatus, setModalStatus] = useState([]);

 

    const [openModalExecute,setOpenModalExecute] = useState(false);

   

const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

const dropDownref = useRef(null);

 

useEffect(() => {

    console.log(openMoreRef,"openMoreRefopenMoreRefopenMoreRef")

 

    document.removeEventListener('click',handleOutsideClick);

    if(openMoreRef)

    document.addEventListener('click', handleOutsideClick);

   

},[openMoreRef]);

 

const handleDropDownClick = () => {

    setDropDownIsOpen(!dropDownIsOpen);

};

 

const handleOutsideClick = (event) => {  

 

    if (dropDownref.current && !dropDownref.current?.contains( event.target)  &&    openMoreRef     )

   {

   

    //setDropDownIsOpen(false);

    setOpenMoreRef(false);

}

}

;

 

    const handleClick = (key) => {

        console.log(key,"openMore",openMore);

        setOpenMoreRef(!openMoreRef);

        setSelectedKey(key)

       

    }

 

    const handleOpenModal = (key) => {

        const newModal = modalStatus.forEach(elt => elt.open = false)

        setModalStatus(newModal);

        setModalStatus(...modalStatus, {key: key, open: true})

       /**  if(modalStatus.length === 0) {

            console.log('start ')

            setModalStatus(...modalStatus, {key: key, open: true})

            console.log(modalStatus);

        } else{

        const newModalStatus = modalStatus.map(status => {

            if(status.key === key) {

                console.log('start 2')

                return {key: key, open: true}

            } else {

                console.log('start 3')

                return {key: key, open: false}

            }

        })

        setModalStatus([]);

        setModalStatus(newModalStatus);**/

        console.log(modalStatus);

    }

 

    useEffect(() => {

        console.log('start 4')

       

    }, [modalStatus , openMore]);

 

    const cases = (status) => {

        switch (status) {

            case "Bloqué":

                return <div id="bloqué"><div id="dotbloqué"></div>{status}</div>

                break;

            case "En cours" :

                return <div id="encours"><div id="dotencours"></div>{status}</div>

                break;

            case "Initié" :

                return <div id="initié"><div id="dotinitié"></div>{status}</div>

                break ;

 

            case "Programmée" :

                return <div id="programmé"><div id="dotprogrammé"></div>{status}</div>

                break;

            default:

                return <div id="exécuté"><div id="dotexécuté"></div>{status}</div>

                break;

        }

    }

 const changeStatus =   (status) => {

  
dispatch( ActionOfChangeStatus(status)  )


}

 

    const casesForActions = (status) => {

        switch (status) {

            case "Bloqué":

                return <button id="ibttn3"onClick={() => { setOpenModalExecute(true)   ;   changeStatus(status)   }  }><DoneIcon fontSize="small" size={"1.25rem"} color={"#68CF7F"}        /></button>

                break;

            case "Exécuté" :

                return <DoneIcon size={"1.25rem"} opacity={"0.0"} id="ibttn3"  fontSize="small"/>

            default:

                return <button  id="ibttn1" onClick={  () =>  { setOpenModal(true)  ; changeStatus(status)   } }><BlockIcon fontSize="small"size={"1.25rem"}/> </button>

         

       

                break;

        }

    }

 

   

    const getIsOpenByKey = (key) => {

       //return modalStatus.findIndex(elt => (elt.key === key && elt.open)) != -1;

       return modalStatus.findIndex(key)

    }

    const isOpen = id => {

        setSelectedId(null);

        setOpenModal(false)

    }

const closeModal = () => {

    setSelectedId(null);

    setOpenModal(false)

}

   

 

    return (

        <>

 

   

       <div id="divIV">

   

        <table id="table">

            <thead>

                <tr>

                   

                    <th>Objet</th>  

                    <th>Date création</th>

                    <th>Heure création</th>

                    <th>Date exécution</th>

                    <th>Heure exécution</th>

                    <th>Statut</th>

                    <th>Canal</th>

                    <th>Actions</th>

                   

                </tr>

            </thead>

            <tbody>

           

     {data.map((el , index) => (

           

            <tr key={el._id}>

                <td id="des">{el.objet}</td>

                <td>{el.datec}</td>

                <td>{el.heurec}</td>

                <td>{el.datee}</td>

                <td>{el.heuree}</td>

                <td id="yo">{cases(el.statut)}</td>

                <td>{el.canal}</td>

               

                <div className="grid-container">

                    <div>

                        <td >{casesForActions(el.statut)}

                        <Modal  key={index} open={openModal} onClose={() => setOpenModal(false)} index={index} data={data}  />

                        <ModalExecute open={openModalExecute} onClose={() => setOpenModalExecute(false)}  /></td>

                         

                       

                           

                    </div>

 

                    <div className="more-test" >

                        <td>

                           

                               <DropDownMore  dropDownref={dropDownref}

                                open={() => getIsOpenByKey(index)} key={index}  />

 

                        </td>

                       

                    </div>

               

                </div>

               

            </tr>  

            ))}

                               

       

         

            </tbody>

                   

        </table>  

        <PaginationCampagne></PaginationCampagne>

   

</div>

       

 

        </>

     

    )

};

 

    export default TableCampagne;