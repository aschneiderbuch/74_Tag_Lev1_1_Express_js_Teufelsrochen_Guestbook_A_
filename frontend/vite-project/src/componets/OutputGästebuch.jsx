


import React from 'react'

export const OutputGästebuch = ( { post } ) => {
  return (
    <>
    <h1>OutputGästebuch</h1>
    <p> { post.getVorname } </p>
    <p> { post.getNachname } </p>
    <p> { post.getEmail } </p>
    <p> { post.getNachricht } </p>
    </>
  )
}
