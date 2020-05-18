import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { separateIt } from "../helper"

const PLACE_DOG_URL = "https://placedog.net/500/280/?id="

const GridItems = () => (
  <StaticQuery
    query={graphql`
    query ItemsQuery {
      allItemsJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `}
    render={renderGrid}
  />
)

const renderGrid = (data) => {
  const Dogs = separateIt(data.allItemsJson.edges, 3)
  return (
    <>
      {Dogs.map((sub, index) => (
        <div key={index} style={styles.row}>
          {sub.map(item => <Item key={item.node.name} data={item} />)}
        </div>
      ))}
    </>
  )
}

const Item = ({ data }) => (
  <div style={styles.col}>
    <img style={{ margin: '0px 0' }}
      src={`${PLACE_DOG_URL}${data.node.id}`}
      alt={data.node.name} />
    <div>
      <h3 style={{ margin: '10px 0', textAlign: 'center' }}>{data.node.name}</h3>
    </div>
  </div>
)

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between"
  },
  col: {
    width: "32%"
  }
}

export default GridItems
