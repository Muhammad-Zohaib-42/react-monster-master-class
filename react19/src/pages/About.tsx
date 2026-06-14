const About = () => {

  const posts = Array.from({length: 100000}).map((_, index) => `post ${index + 1}`)

  return (
    <section>
        <h1>Posts</h1>
        <ul>
            {
                posts.map((post, index) => (<li key={index}>{post}</li>))
            }
        </ul>
    </section>
  )
}

export default About