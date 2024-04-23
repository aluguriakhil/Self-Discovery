import Title from "./components/Title"
import Form from "./components/Form"
import { useState } from "react";
import Details from "./components/Details";
import About from "./components/About";
import '../style.css';

export default function App() {

  const [dateInfo, setDateInfo] = useState({
    day: null,
    month: null,
    year: null
  });

  const handleFormSubmit = (formData) => {

    const { dob } = formData;
    const dateObj = new Date(dob);

    const utcTime=dateObj.getTime();
    const istTime=new Date(utcTime+(5.5*60*60*1000));
    
    const day = istTime.getDate();
    const month = istTime.getMonth();
    const year = istTime.getFullYear();

    setDateInfo({ day, month, year });
  }

  return (
    <>
      <Title />
      <Form onSubmit={handleFormSubmit} />
      <Details dateInfo={dateInfo} />
      <About/>
     
    </>
  )
}