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

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

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