
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Mensaje from "./Message";

const initialForm={
name:"",
email:"",
subject:"",
coments:"",
}
 const validationsForm=(form)=>{
   let errors={}
let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
let regexComments = /^.{1,255}$/;

   if(!form.name.trim()){
     errors.name="el campo Nombre es requerido"
   }else if(!regexName.test(form.name.trim())){
     errors.name="el campo nombre solo acepta espacios en blanco"
   }
   if(!form.email.trim()){
     errors.email="el campo email es requerido"
   }else if(!regexEmail.test(form.email.trim())){
     errors.email="el campo email solo acepta correos electronicos"
   }
  
   if(!form.subject.trim()){
     errors.subject="el campo subject es requerido"
   }
   if(!form.coments.trim()){
     errors.coments="el campo coments es requerido"
   }else if(!regexComments.test(form.coments.trim())){
     errors.coments="este espacio solo soporta 255 caracteres"
   }
   return errors;
   }
  
   let estilo={
     fonWeight:"bold",
     color:"red",
   }
const ContactForm = () => {
  

  const {form,
  errors,
  loading,
  response,
  handleChange,
  handleBlur,
  handleSubmit,}=useForm(initialForm,validationsForm);
  
  return ( 
    <div>

      
      
    <h3>Formulario de contacto</h3>
     <form onSubmit={handleSubmit}>
       <input type="text"name="name"placeholder="escribe tu nombre"onChange={handleChange}onBlur={handleBlur}value={form.name}required/>
       {errors.name&&<p style={estilo}>{errors.name}</p>}
       <input type="email"name="email"placeholder="escribe tu email"onChange={handleChange}onBlur={handleBlur}value={form.email}required/>
       {errors.email&&<p style={estilo}>{errors.email}</p>}
       <input type="text"name="subject"placeholder="Asunto atratar"onChange={handleChange}onBlur={handleBlur}value={form.subject}required/>
       {errors.subject&&<p style={estilo}>{errors.subject}</p>}
       <textarea name="coments"  cols="50" rows="5"placeholder="escribe tus comentarios"onChange={handleChange}onBlur={handleBlur}value={form.coments}required></textarea>
       {errors.coments&&<p style={estilo}>{errors.coments}</p>}
      <input className="submit" type="submit"value="Enviar"/>
       {loading&&<Loader/>}
       {response&&<Mensaje msg="los datos an sido enviados"/>}

       
       </form>
    </div>
   );
}
 
export default ContactForm;