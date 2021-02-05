import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessage } from '../_actions/message_actions';
import Message from './Sections/Message';
import { List, Icon, Avatar } from 'antd';
import Card from "./Sections/Card";

function Chatbot() {

    useEffect(()=>{

        eventQuery('hello')

    },[])

    const textQuery = async (text) => {
        let conversation = {
            who: 'user',
            content: {
                text:{
                    text:text
                }
            }
        }
        console.log(conversation)
        const textQueryVariable = {
            text
        }

        try {
           const response = await Axios.post('/api/dialogFlow/textQuery',textQueryVariable)
           const content = response.data.fulfillmentMessages[0]
           conversation = {
               who: 'bot',
               content:content
           }
           console.log(conversation)

        }catch (error){
            conversation = {
                who: 'bot',
                content: {
                    text:{
                        text:" Error just occured, please check the problem"
                    }
                }
            }
            console.log(conversation)
        }
    }
    const eventQuery = async (event) => {
       
        const eventQueryVariable = {
            event
        }

        try {
           const response = await Axios.post('/api/dialogFlow/eventQuery',eventQueryVariable)
           const content = response.data.fulfillmentMessages[0]
           let conversation = {
               who: 'bot',
               content:content
           }
           console.log(conversation)

        }catch (error){
           let conversation = {
                who: 'bot',
                content: {
                    text:{
                        text:" Error just occured, please check the problem"
                    }
                }
            }
            console.log(conversation)
        }
    }

    const keyPressHanlder = (e) => {
       if(e.key === 'Enter'){
           if(!e.target.value){
               return alert('is blank')
           }
           textQuery(e.target.value)

           e.target.value = '';
       }
     
    }

    return (
        <div style={{
            height: 700, width: 700,
            border: '3px solid black', borderRadius: '7px'
        }}>
            <div style={{ height: 644, width: '100%', overflow: 'auto' }}>




            </div>
            <input
                style={{
                    margin: 0, width: '100%', height: 50,
                    borderRadius: '4px', padding: '5px', fontSize: '1rem'
                }}
                placeholder="Send a message..."
                onKeyPress={keyPressHanlder}
                type="text"
            />

        </div>
    )
}

export default Chatbot;
