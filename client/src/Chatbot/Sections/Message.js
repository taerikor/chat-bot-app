import React from 'react'
import { List, Icon, Avatar, message } from 'antd';

function Message({who,text}) {
    const AvatarIcon = who === 'bot' ? <Icon type='robot' /> : <Icon type='smile' /> 

    return (
        <List.Item style={{padding:'1rem'}}>
            <List.Item.Meta
            avatar={<Avatar icon={AvatarIcon} />}
            title={who}
            description={text}
            />
                
        </List.Item>
    )
}

export default Message
