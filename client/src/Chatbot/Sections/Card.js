import React from 'react'
import { Card, Icon } from 'antd';

const { Meta } = Card;



function CardComponent({cardInfo}) {
  console.log(cardInfo)
    return (
      <Card
      style={{ width: 300 }}
      cover={
          <img
              alt={cardInfo.fields.description.stringValue}
              src={cardInfo.fields.image.stringValue} />
      }
      actions={[
          <a target="_blank" rel="noopener noreferrer" href={cardInfo.fields.Link.stringValue}>
              <Icon type="ellipsis" key="ellipsis" />
          </a>
      ]}
  >
      <Meta
          title={cardInfo.fields.description.stringValue}
          description={cardInfo.fields.description.stringValue}
      />

  </Card>


    )
}

export default CardComponent
