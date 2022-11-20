import React, {useEffect} from 'react';
import Styles from './ChatPage.module.css'
import Navbar from "../../components/Navbar/Navbar";
import Message from "../../components/Message/Message";
import Input from "../../components/Input/Input";

const ws = new WebSocket()

const ChatPage = () => {

    useEffect(() => {
        ws.addEventListener('message')
    }, [])
    const messages = [
        {
            id: '1a',
            text: 'Hello? Helloooo???'
        },
        {
            id: '1b',
            text: 'Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???'
        },
        {
            id: '2a',
            text: 'Hello? Helloooo???Hello? Helloooo???'
        },
        {
            id: '2b',
            text: 'Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???'
        },
        {
            id: '1a',
            text: 'Hello? Helloooo???'
        },
        {
            id: '1b',
            text: 'Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???'
        },
        {
            id: '2a',
            text: 'Hello? Helloooo???Hello? Helloooo???'
        },
        {
            id: '2b',
            text: 'Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???'
        },
        {
            id: '1a',
            text: 'Hello? Helloooo???'
        },
        {
            id: '1b',
            text: 'Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???'
        },
        {
            id: '2a',
            text: 'Hello? Helloooo???Hello? Helloooo???'
        },
        {
            id: '2b',
            text: 'Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???Hello? Helloooo???'
        },
    ]

    return (
        <div className={Styles.mainWrapper}>
            <div className={Styles.content}>
                <Navbar chat={true}/>
                <div className={Styles.chatContainer}>
                    <div className={Styles.chat}>
                        <div className={Styles.messageWindow}>
                            {messages.map(msg => (
                                <Message text={msg.text} id={msg.id}/>
                            ))}
                        </div>
                        <div className={Styles.input}>
                            <Input type={'text'} className={'chatInput'} placeholder={'Задайте вопрос'}/>
                            <div className={Styles.sendMessage}>
                                <img src="/send.svg" className={Styles.logo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;