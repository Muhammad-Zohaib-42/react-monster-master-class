import { useRef, useState, type FormEvent } from "react"

type SubmitData = {
    name: string,
    email: string,
    password: string
}

const Form = () => {
  const [submittedData, setSubmittedData] = useState<SubmitData>({
    name: "",
    email: "",
    password: ""
  })

  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newData = {
        name: nameInputRef.current!.value,
        email: emailInputRef.current!.value,
        password: passwordInputRef.current!.value
    }

    setSubmittedData(newData)
  }

  return (
    <main>
        <form onSubmit={handleFormSubmit}>
            <h1>Register Account</h1>
            <input type="text" placeholder="Enter name" ref={nameInputRef} />
            <input type="email" placeholder="Enter email" ref={emailInputRef} />
            <input type="password" placeholder="Enter password" ref={passwordInputRef} />
            <button>Submit</button>
        </form>
        <section>
            <h2>Current Registered User Data</h2>
            <hr />
            <h3>Name: {submittedData.name}</h3>
            <h3>Email: {submittedData.email}</h3>
            <h3>Password: {submittedData.password}</h3>
        </section>
    </main>
  )
}

export default Form