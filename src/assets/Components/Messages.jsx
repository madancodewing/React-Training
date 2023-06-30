/* 
    Make a state names mesages which has an array of message : ['a', 'b', 'c']
    Render the number of messages in the mesage state
    if there is no messages render a text saying no new messages
    if there is only 1 "You have 1 message" as output 
*/

import { useState } from 'react';

const tabbedTog = [
    {
        title: "This is title 1",
        desc: "This is desc 1"
    },
    {
        title: "This is title 2",
        desc: "This is desc 2"
    },
    {
        title: "This is title 3",
        desc: "This is desc 3"
    },
]


const title = tabbedTog.map((newTitle, index) => {
    return (
        <button key={index}>{newTitle.title}</button>
    )
})
console.log(title)

function Messages() {

    return (
        <>
            {title}
        </>
    )
}

export default Messages


