/* 
    Make a state names mesages which has an array of message : ['a', 'b', 'c']
    Render the number of messages in the mesage state
    if there is no messages render a text saying no new messages
    if there is only 1 "You have 1 message" as output 
*/

import { useState } from 'react';


function Messages() {
    const [text, setText] = useState(['num 1', 'num 2'])

    function clickMe() {
        setText(prevText => {
            console.log(...prevText)
            return [...prevText, `num ${prevText.length + 1}`]
        })

    }




    return (
        <>
            <button onClick={clickMe}>Add Message</button>
            <div className="message">
                <p>you have {text.length} messages </p>
            </div>
        </>
    )
}

export default Messages


