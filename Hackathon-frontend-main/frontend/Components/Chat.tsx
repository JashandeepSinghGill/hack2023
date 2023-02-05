import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/chat.module.css";
import {TiWeatherCloudy} from "react-icons/ti";
import ResponseMsg from "./ResponseMessage";
import { AnyCnameRecord } from "dns";


interface ChatMessage {
  message: string;
  sender: "user" | "response";
}

const Chat: React.FC = () => {
  var dateVariable = new Date();

  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDate =
    monthNames[dateVariable.getMonth()] +
    " " +
    dateVariable.getDate() +
    ", 2023";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, res?: any) => {
    event.preventDefault();
    const body = res ? {message: res} : {message}
    setChatHistory(chatHistory.concat([
      { message: res ? res : message, sender: "user" },
      { message: ".....", sender: "response" },
    ]));

    
    console.log(body)
    try {
      const response = await fetch(
        "http://localhost:5000/gptai",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( body ),
        }
      );

      console.log(response)
      const data = await response.json();
      // console.log(data.message.replace("\n", "<br>"))


      setChatHistory(chatHistory.concat([
        { message: res ? res : message, sender: "user" },
        { message: data.message, sender: "response" },
       
      ]));
    } catch (error) {
      console.error(error);
      setChatHistory(chatHistory.concat([
        { message: res ? res : message, sender: "user" },
        { message: "sorry", sender: "response" },
      ]));
      setChatHistory(chatHistory.concat([
        { message: res ? res : message, sender: "user" },
        { message: "sorry", sender: "response" },
      ]));
    }

   

    console.log(chatHistory);
    setMessage("");

    // responsePlease();

    // try {
    //   const response = await fetch(
    //     "https://your-backend-api-url.com/get-response",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ message }),
    //     }
    //   );
    //   const data = await response.json();


    //   setChatHistory([
    //     ...chatHistory,
    //     { message: data.message, sender: "response" },
    //   ]);
    // } catch (error) {
    //   console.error(error);
    //   setChatHistory([
    //     ...chatHistory,
    //     {
    //       message: "Sorry, I couldn't get a response. Please try again later.",
    //       sender: "response",
    //     },
    //   ]);
    // }
   

   

    console.log(chatHistory);
    setMessage("");

    // responsePlease();

    // try {
    //   const response = await fetch(
    //     "https://your-backend-api-url.com/get-response",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ message }),
    //     }
    //   );
    //   const data = await response.json();


    //   setChatHistory([
    //     ...chatHistory,
    //     { message: data.message, sender: "response" },
    //   ]);
    // } catch (error) {
    //   console.error(error);
    //   setChatHistory([
    //     ...chatHistory,
    //     {
    //       message: "Sorry, I couldn't get a response. Please try again later.",
    //       sender: "response",
    //     },
    //   ]);
    // }
   
  };

  // const responsePlease = async ()=> {

  //   // alert("chk")
  //   try {
  //     const response = await fetch(
  //       "https://your-backend-api-url.com/get-response",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ message }),
  //       }
  //     );
  //     const data = await response.json();


  //     setChatHistory(chatHistory.concat([
  //       { message: data.message, sender: "response" },
  //     ]));
  //   } catch (error) {
  //     console.error(error);
  //     setChatHistory(chatHistory.concat([
  //       { message: "sorry", sender: "response" },
  //     ]));
  //   }
  //    setMessage("");
  // }

  // const responsePlease = async ()=> {

  //   // alert("chk")
  //   try {
  //     const response = await fetch(
  //       "https://your-backend-api-url.com/get-response",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ message }),
  //       }
  //     );
  //     const data = await response.json();


  //     setChatHistory(chatHistory.concat([
  //       { message: data.message, sender: "response" },
  //     ]));
  //   } catch (error) {
  //     console.error(error);
  //     setChatHistory(chatHistory.concat([
  //       { message: "sorry", sender: "response" },
  //     ]));
  //   }
  //    setMessage("");
  // }

  return (




    <Container>

      <div className={`${styles.date}`}>
        <p>{todayDate}</p>
      </div>

      <Row>
<Col md={4}>
<h3>Suggestions</h3>
<p style={{marginTop: "10%"}}><i>You may ask like - </i></p>
<div className={`${styles.suggest}`}>
  <>
 {TiWeatherCloudy} <p style={{padding: "10px"}} onClick={(e) => {handleSubmit(e as any, "Events you Might Like")}}> Events you Might Like </p>
</>
</div>

<div className={`${styles.suggest}`}>
  <>
 {TiWeatherCloudy} <p style={{padding: "10px"}} onClick={(e) => {handleSubmit(e as any, "What's the weather in calgary today")}}> What's the weather today </p>
</>
</div>

<div className={`${styles.suggest}`}>
  <>
 {TiWeatherCloudy} <p style={{padding: "10px"}} onClick={(e) => {handleSubmit(e as any, "Cost to travel banff from Calgary")}}> Cost to travel Banff </p>
</>
</div>

<div className={`${styles.suggest}`}>
  <>
 {TiWeatherCloudy} <p style={{padding: "10px"}} onClick={(e) => {handleSubmit(e as any, "Places to go for skiing in calgary")}}> Venues to go for skiing </p>
</>
</div>


</Col>

        <Col md={8}>
          {chatHistory.map((chat, index) => {
            return (
              <div
                className={`row ${
                  chat.sender === "user"
                    ? "justify-content-end float-right"
                    : "justify-content-start float-left"
                }`}
                key={index}
              >
                <div className={`col-auto`}>
                  <div className={`${styles.bubbleForuser}`}>
                    {chat.sender === "user" ? chat.message : <p><ResponseMsg message={chat.message}/></p>}
                  </div>
                
                </div>
              </div>
            );
          })}
 <Form onSubmit={handleSubmit} className={`${styles.search_div}`}>
        <div className={`${styles.search_div}`}>
          <Form.Control
            className={`${styles.chatbox}`}
            style={{
              border: "1px solid #F5F5F5",
              borderRadius: "30px",
              padding: "20px",
              borderBottomLeftRadius: "0",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
            placeholder="Press enter to message.."
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          {/* <Button
            variant="primary"
            type="submit"
            style={{ display: "inline", float: "right" }}
          >
            Send
          </Button> */}
        </div>
      </Form>


        </Col>

      </Row>

      {/* <Row class="position-fixed fixed-bottom w-25 justify-content-center align-items-center">
        <Col
          md={12}
          class="position-fixed fixed-bottom w-25 justify-content-center align-items-center"
        >

      </Row>

      {/* <Row class="position-fixed fixed-bottom w-25 justify-content-center align-items-center">
        <Col
          md={12}
          class="position-fixed fixed-bottom w-25 justify-content-center align-items-center"
        >
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="position-fixed fixed-bottom w-25 margin-auto"
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button variant="primary" type="submit" style={{ marginTop: 10 }}>
              Send
            </Button>
          </Form>
        </Col>
      </Row> */}

     
    </Container>

    /* <Button
            variant="primary"
            type="submit"
            style={{ display: "inline", float: "right" }}
          >
            Send
          </Button> */
  );
};

export default Chat;
