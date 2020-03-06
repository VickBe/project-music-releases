import React from 'react'
import data from './data.json'
import {
  Album
} from './Album'
console.log(data)

export const App = () => {
    return ( <
      div > {
        data.albums.items.map((album) => {
            return ( < Album key = {album.artists[0].name}
              image = {album.images[1].url}
              artistName = {album.artists[0].name}
              title = {album.name}/>)
            })
        } </div>
      )
    }