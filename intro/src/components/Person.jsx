import React from 'react'

const Person = ({imgSrc, name, age, isMarried, hobbies}) => {
  return (
    <section>
        <img src={imgSrc} alt="" />
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>isMarried:</strong> {isMarried ? "true" : "false"}</p>
        <p><strong>Hobbies:</strong> <ul>
                {
                    hobbies.map(hobby => (<li key={hobby}>{hobby}</li>))
                }
            </ul></p>
    </section>
  )
}

export default Person