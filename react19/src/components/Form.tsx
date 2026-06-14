const Form = () => {
 
  const formAction = (FormData: any) => {
    const userData = {
        name: FormData.get("username"),
        email: FormData.get("email"),
        password: FormData.get("password")
    }

    console.log(userData)
  }

  return (
    <form action={formAction} className="border border-gray-300 p-5 rounded [&_div]:flex [&_div]:flex-col [&_div]:gap-1 [&_input]:border [&_input]:border-gray-400 [&_input]:p-2 [&_input]:rounded flex flex-col gap-2">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
        />
      </div>
      <button className="border rounded p-2 bg-gray-800 text-gray-200 cursor-pointer mt-3">Register</button>
    </form>
  );
};

export default Form;
