import { useState, useContext } from 'react'
import Link from 'next/link'
import valid from '../utils/valid'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'

const SignUpPage = () => {
  const initalState = { firstname: '', lastname: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initalState)
  const { firstname, lastname, email, password, cf_password } = userData

  const [state, dispatch] = useContext(DataContext)

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(firstname, lastname, email, password, cf_password)
    if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg } })

    dispatch({ type: 'NOTIFY', payload: {loading: true } })

    const res = await postData('auth/register', userData)

    console.log(res)
  }

  return (
    <div className="container h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Create Your Account</h1>
              <div className="w-full mt-4">
                <form className="form-horizontal w-3/4 mx-auto" method="POST" action="#" onSubmit={handleSubmit}>
                  <div className="flex flex-col mt-4">
                    <input
                      id="firstname"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="firstname"
                      value={firstname}
                      placeholder="First Name"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="lastname"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="lastname"
                      value={lastname}
                      placeholder="Last Name"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="email"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="password"
                      type="password"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="cf_password"
                      type="password"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="cf_password"
                      value={cf_password}
                      placeholder="Password"
                      onChange={handleChangeInput}
                    />
                  </div>

                  <div className="flex items-center mt-4">
                    <input type="checkbox" name="remember" id="remember" className="mr-2" />
                    <label for="remember" className="text-sm text-grey-dark">
                      Remember Me
                    </label>
                  </div>

                  <div className="flex flex-col mt-8">
                    <button
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <Link href={{ pathname: `/login` }}>
                    <a class="no-underline hover:underline text-blue-dark text-xs">Already have an account?</a>
                  </Link>
                </div>
              </div>
            </div>
            {/* insert image here */}
            {/* <div class="hidden md:block md:w-1/2 rounded-r-lg" style="background: url(''); background-size: cover; background-position: center center;"></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
