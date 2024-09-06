import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../redux/user/userActions";
import { connect } from "react-redux";

function Signup({ user, fetchUser }) {

  const navigate = useNavigate();
  const [clickcount, setClickCount] = useState(0);
  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.loader) {
      console.log("Loading");
    } else {
      console.log("Loading Done");
    }

    if (!(user.userInfo === null)) {
      console.log("You are logged In");
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (inputValue.fullName === "") return;

    async function getUser() {
      const response = await fetch("http://localhost:8000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
        credentials: "include",
      });
      const data = await response.json();
      console.log(data)
      fetchUser();
    }

    getUser();
  }, [clickcount]);

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClickCount(clickcount + 1);
  };

  return (
    <div className="flex mt-[-63px] min-h-screen flex-1 items-center flex-col justify-center px-6 py-12 lg:px-8">
      {user.loader ? (
        <div className="mt-10 mx-auto w-full text-center max-w-sm text-lg font-bold">
          Loading...
        </div>
      ) : (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h5 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Create your account
            </h5>
          </div>

          <div className="mt-10 mx-auto w-full max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-base font-medium leading-6 text-gray-900">
                  Full name
                </label>
                <input
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-base  leading-6 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 "
                  type="text"
                  name="fullName"
                  value={inputValue.fullName}
                  onChange={handleInputValues}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-base font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <input
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-base  leading-6 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 "
                  type="email"
                  name="email"
                  value={inputValue.email}
                  onChange={handleInputValues}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-base font-medium leading-6 text-gray-900">
                  Password
                </label>
                <input
                  className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-base  leading-6 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-indigo-600 "
                  type="password"
                  name="password"
                  value={inputValue.password}
                  onChange={handleInputValues}
                  required
                />
              </div>

              <div>
                <button
                  className="mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inidigo-600"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <p className="mt-10 text-center text-lg text-gray-500">
            Already have account?
            <button
              onClick={() => navigate("/login")}
              className="pl-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Log in
            </button>
          </p>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
