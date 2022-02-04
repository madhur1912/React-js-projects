import React from "react"


class ConditionalMsg extends React.Component {
    constructor() {
        super()
        this.state = {
            unreadmsg: [
              "hy mr..",
              "hello buddy.."
            ]
        }
    }


    render() {
        return(
            <div>
<h2>you have {this.unreadmsg.length} unread msg</h2>
            </div>
        )
    }

}
export default ConditionalMsg
