const Javascript = () => {
  const posts = Array.from({length: 100000}).map((_, index) => `post ${index + 1}`)

  return (
    <section>
      <h1 className="text-xl font-semibold">JavaScript</h1>
      <ul>
        <li>JavaScript</li>
        <li>used to make the webpages interactive</li>
        {
            posts.map((post, index) => <li key={index}>{post}</li>)
        }
      </ul>
    </section>
  )
}

export default Javascript