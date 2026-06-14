import { useForm, type SubmitHandler } from "react-hook-form"

interface FormData {
  name: string,
  email: string,
  password: string
}

function App() {

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }

  return <main className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-xl font-bold mb-5">useForm( ) hook</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <input {...register('name', {required: "name is requierd"})} className="border outline-none rounded p-2" type="text" placeholder="Enter name" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <input {...register('email', {required: "email is requierd", pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Invalid email address"
      }})} className="border outline-none rounded p-2" type="email" placeholder="Enter email" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input {...register('password', {required: "password is requierd", minLength: {
        value: 8,
        message: "password must be atleast 8 characters long"
      }})} className="border outline-none rounded p-2" type="password" placeholder="Enter password" />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <button disabled={isSubmitting} className="p-2 bg-gray-800 text-gray-300 cursor-pointer rounded">{isSubmitting ? "loading..." : "Submit"}</button>
    </form>
  </main>
}

export default App