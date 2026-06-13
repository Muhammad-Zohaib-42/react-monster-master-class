import { useState, type ChangeEvent, type FormEvent } from "react"
import styles from "./styles/contactForm.module.css"

interface FormData {
    name: string,
    email: string,
    password: string
}

const ContactForm = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: ""
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target

    setFormData(prev => ({...prev, [name]: value}))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('formData: ', formData)
  }

  return (
    <main>
        <section style={{display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", gap: "5rem"}}>
            <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button>Register</button>
                </form>
            </div>
            <div>
                <h2>User Data</h2>
                <h3>Name: {formData.name}</h3>
                <h3>Email: {formData.email}</h3>
                <h3>Password: {formData.password}</h3>
            </div>
        </section>
    </main>
  )
}

export default ContactForm