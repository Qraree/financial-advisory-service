import React from 'react';
import Styles from './Message.module.css'

const Message = (props) => {
    return (
        <div className={Styles.messageContainer} style={{justifyContent: props.id.includes('a') ? 'flex-start' : 'flex-end'}}>
            <div className={Styles.message}>
                {props.text}
            </div>
        </div>
    );
};

export default Message;