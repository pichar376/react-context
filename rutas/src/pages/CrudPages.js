import CrudTable from "../components/CrudTable";
import Loader from "../components/Loader";
import Message from "../components/Message";


const CrudPages = ({loading,error,db,setDataToEdit,deleteData,setForm}) => {
  return ( 
    <div>
    {loading && <Loader />}
    {error && (
      <Message
      msg={`Error ${error.status}: ${error.statusText}`}
      bgColor="#dc3545"
      />
      )}
      {db && (
        <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        setForm={setForm}
        />
        )}
        </div>
   );
}
 
export default CrudPages;