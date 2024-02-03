"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { setDefaultAutoSelectFamily } from "net";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
 

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("signup failed", error.message);
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center gap-3 min-h-screen py-2">
    //   <h1
    //     className={`p-2 rounded-md ${
    //       loading === true ? " bg-red-500" : " bg-blue-500"
    //     }`}
    //   >
    //     {loading ? "Processing" : "Signup"}
    //   </h1>
    //   <hr />
    //   <label htmlFor="username">Username</label>
    //   <input
    //     className="p-2 rounded-md text-black"
    //     type="text"
    //     id="username"
    //     value={user.username}
    //     onChange={(e) => setUser({ ...user, username: e.target.value })}
    //     placeholder="username"
    //   />

    //   <label htmlFor="email">Email</label>
    //   <input
    //     className="p-2 rounded-md text-black"
    //     type="text"
    //     id="email"
    //     value={user.email}
    //     onChange={(e) => setUser({ ...user, email: e.target.value })}
    //     placeholder="email"
    //   />

    //   <label htmlFor="password">Password</label>
    //   <input
    //     className="p-2 rounded-md text-black"
    //     type="text"
    //     id="password"
    //     value={user.password}
    //     onChange={(e) => setUser({ ...user, password: e.target.value })}
    //     placeholder="password"
    //   />

    //   <button
    //     onClick={onSignup}
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //   >
    //     {buttonDisabled ? "Nosignup" : "Signup"}
    //   </button>

    //   <Link href={"/login"}>Visit Login</Link>
    // </div>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              {/* <input
                id="email"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                    message: "email not valid",
                  },
                })}
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> */}

              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              {/* {errors.email && <p className="text-red-600">{errors.email.message}</p>} */}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              {/* <input
                id="password"
                {...register("password", { required: "password is required" })}
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> */}
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />

              {/* {errors.password && <p className="text-red-600">{errors.password.message}</p>} */}
            </div>
          </div>

       

          <div>
            <button
              onClick={onSignup}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member ?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
