'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BiMailSend, BiWinkSmile } from 'react-icons/bi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { usePost } from '~/services/dashboard'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import AdminLayout from '~/app/(authenticated)/components/layoutAdmin'

const Register = ({ session }: any) => {
  const router = useRouter()
  const { mutateAsync: register, error: errorRegister }: any = usePost('user')

  const [values, setValues] = useState({ pass: '', confirmPass: '' })
  const [showPass, setShowPass] = useState({
    pass: false,
    confirmPass: false,
  })

  const handleToggleShowPass = (inputName: string) => {
    setShowPass((prevShowPass: any) => ({
      ...prevShowPass,
      [inputName]: !prevShowPass[inputName],
    }))
  }
  const isNotMatch = values.confirmPass && values.pass !== values.confirmPass
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault()
      const { email, fullname, password, confirm_password } = e.target
      const payload: any = {
        email: email.value,
        fullname: fullname.value,
        password: password.value,
        confirm_password: confirm_password.value,
        role: 'USER',
      }
      if (password.length < 6) {
        toast.error('Password minimal 6 karakter!')
        return
      }
      if (isNotMatch) {
        toast.error('Password dan Confirm Password tidak cocok!')
        return
      }

      await register(payload)
      router.push('/login')
    } catch (error) {}
  }

  useEffect(() => {
    if (errorRegister) {
      toast.error(errorRegister?.response?.data?.message)
    }
  }, [errorRegister])

  return (
    <AdminLayout sidebar={false} header={false}>
      <div className="flex min-h-[90vh] justify-center items-center">
        <div className="md:w-[600px] rounded border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="w-full flex flex-wrap items-center">
            <div className="w-full border-stroke dark:border-strokedark xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-9 text-2xl text-center font-bold text-black dark:text-white sm:text-title-xl2">
                  Sign Up
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <span className="absolute right-4 top-4">
                        <BiMailSend className="text-2xl opacity-50" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        required
                        name="fullname"
                        type="text"
                        placeholder="Enter your Fullname"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <span className="absolute right-4 top-4">
                        <BiWinkSmile className="text-2xl opacity-50" />
                      </span>
                    </div>
                  </div>
                  <PasswordInput
                    label="Password"
                    name="password"
                    showPass={!!showPass.pass}
                    handleToggleShowPass={() => handleToggleShowPass('pass')}
                    onChange={(e: any) =>
                      setValues({ ...values, pass: e.target.value })
                    }
                  />
                  <PasswordInput
                    label="Confirm Password"
                    name="confirm_password"
                    showPass={!!showPass.confirmPass}
                    error={isNotMatch}
                    handleToggleShowPass={() =>
                      handleToggleShowPass('confirmPass')
                    }
                    onChange={(e: any) =>
                      setValues({ ...values, confirmPass: e.target.value })
                    }
                  />
                  <div className="mb-5">
                    <input
                      type="submit"
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                      value="Sign Up"
                    />
                  </div>
                  {/* <div className="cursor-pointer flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                    <span>
                      <BiLogoGoogle className="text-2xl opacity-50" />
                    </span>
                    Sign Up with Google
                  </div> */}
                  <div className="mt-6 text-center">
                    <div>
                      Already have an account?
                      <Link href="/login" className="text-slate-400 pl-2">
                        Login
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

function PasswordInput({
  label,
  showPass = false,
  error,
  onChange,
  handleToggleShowPass,
  name,
}: any) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2.5 block font-medium text-black dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          onChange={onChange}
          required
          type={showPass ? 'text' : 'password'}
          placeholder=" "
          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />

        <span className="absolute right-4 top-4 text-2xl cursor-pointer opacity-50">
          <AiOutlineEye
            className={showPass ? 'hidden' : ''}
            onClick={handleToggleShowPass}
          />
          <AiOutlineEyeInvisible
            className={showPass ? '' : 'hidden'}
            onClick={handleToggleShowPass}
          />
        </span>
      </div>
      {error && (
        <div className="text-red-500 text-xs pl-1">
          Password dan Confirm Password tidak cocok!{' '}
        </div>
      )}
    </div>
  )
}

export default Register
