import { useState } from "react";
import LOGO_IMAGE from "./assets/logo_pineapple.svg";
import LOGO_IMAGE_TEXT from "./assets/pineapple..svg";
import SUCCESS_IMAGE from "./assets/ic_success.svg";
import "./App.css";
import "./dist/output.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function App() {
  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValidEmailFormat = emailRegex.test(email);
  const isValidEmail = isValidEmailFormat && !email.endsWith(".co");

  const handleOnChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailTouched(true);
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail || !isCheckboxChecked) {
      return;
    } else {
      console.log("Form submitted successfully");
      setIsSubmitted(true);
    }
  };

  const isFormValid = isEmailTouched && isValidEmail && isCheckboxChecked;

  return (
    <div className="flex">
      {/* Left side div containing the form and related elements */}

      <div className="bg-[url('/src/assets/background_image.png')] sm:bg-gradient-to-b from-white to-[#F2F5FA] sm:mt-[90px] max-w-[680px] w-full">
        {/* Navigation bar*/}

        <nav className="bg-white justify-center flex ">
          <div className="flex max-w-[520px] w-full justify-between px-5 py-4 items-center sm:items-end">
            <a href="#" className="flex items-baseline">
              <img src={LOGO_IMAGE} alt="site-logo" className="mr-4" />
              <img
                src={LOGO_IMAGE_TEXT}
                alt="site-logo-text"
                className="hidden sm: max-h-4 sm:block"
              />
            </a>

            <ul className="flex space-x-8 h-5 text-darkgrey text-sm sm:text-base ">
              <li>
                <a className="focus:text-darkblue" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="focus:text-darkblue" href="#">
                  How it works
                </a>
              </li>
              <li>
                <a className="focus:text-darkblue" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main content DIV */}

        <div className="px-5 sm:px-0">
          <div className=" bg-gradient-to-b from-white to-[#F2F5FA] m-auto mt-[190px] py-[30px] mb-[190px] sm:mt-[218px]  max-w-[520px] w-full px-5">
            {/* Success image, shown after successfuk submission */}

            <img
              className={`pb-[35px] ${isSubmitted ? "" : "hidden"}`}
              src={SUCCESS_IMAGE}
              alt="success iamge"
            />
            <h1 className="text-xl sm:text-2xl mb-[15px]">
              {isSubmitted
                ? "Thanks for subscribing"
                : "Subscribe to Newsletter"}
            </h1>
            <p className="mb-[20px] text-sm sm:text-base sm:mb-[50px]">
              {isSubmitted
                ? "You have successfully subscribed to our email listing. Check your email for the discount code."
                : "Subscribe to our newsletter and get 10% discount on pineapple glasses."}
            </p>

            {/* Form */}
            <form
              className={`mb-[20px] sm:mb-[50px] ${
                isSubmitted ? "hidden" : ""
              }`}
              onSubmit={handleSubmit}
            >
              {/* Email input and submit button */}
              <div
                className={`group flex hover:shadow-sm border-[1px] transition-all w-full p-5 sm:py-[23px] sm:pl-[40px] sm:pr-[27px] ${
                  isEmailTouched &&
                  (!isValidEmail || !isCheckboxChecked || email.endsWith(".co"))
                    ? "border-[#B80808] border-l-[#B80808] border-l-4 hover:border-[#B80808] focus-within:border-[#B80808] focus-within:shadow-sm"
                    : "border-l-lightblue border-l-4 hover:border-lightblue focus-within:border-lightblue border-[#E3E3E4] focus-within:shadow-sm"
                }`}
              >
                <input
                  type="email"
                  value={email}
                  onChange={handleOnChange}
                  className="grow focus:outline-none overflow-hidden placeholder-red-100::placeholder placeholder-opacity-100::placeholder"
                  placeholder="Type your email address here..."
                />

                <button type="submit" disabled={!isFormValid}>
                  <svg
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-lightblue opacity-30 group-hover:opacity-100"
                  >
                    <path d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" />
                  </svg>
                </button>
              </div>

              {/* Error message */}

              {isEmailTouched &&
                (!isValidEmail ||
                  !isCheckboxChecked ||
                  email.endsWith(".co")) && (
                  <p className="text-[#B80808] text-xs font-bold py-[5px]">
                    {!isValidEmail && email === ""
                      ? "Email address is required"
                      : email.endsWith(".co")
                      ? "We are not accepting subscriptions from Colombia emails"
                      : !isValidEmail
                      ? "Please provide a valid e-mail address"
                      : "You need to agree to the terms of service"}
                  </p>
                )}

              {/* Terms of service checkbox */}

              <div className="flex mt-[20px] sm:mt-[50px]">
                <label
                  className={`w-[26px] h-[26px] flex items-center justify-center relative border-2 rounded cursor-pointer 
    ${
      isCheckboxChecked
        ? "bg-lightblue border-lightblue active:bg-darkblue active:border-darkblue"
        : "border-plastic-pink bg-transparent"
    }`}
                >
                  <input
                    className="opacity-0 absolute inset-0 z-10 w-full h-full cursor-pointer"
                    id="checkbox"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={isCheckboxChecked}
                  />
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute ${
                      isCheckboxChecked ? "fill-white" : "hidden"
                    }`}
                  >
                    <path
                      d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L4.70711 10.7071C4.31658 11.0976 3.68342 11.0976 3.29289 10.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L4 8.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z"
                    />
                  </svg>
                </label>

                <label
                  className="pl-4 text-darkgrey cursor-pointer"
                  htmlFor="checkbox"
                >
                  I agree to{" "}
                  <a
                    className=" text-[#131821]  focus:text-darkblue underline decoration-solid decoration-[#131821]"
                    href="#"
                  >
                    terms of service
                  </a>
                </label>
              </div>
            </form>

            {/* Social media buttons */}

            <div className="pt-[20px] justify-center flex border-t-[1px] border-[#E3E3E4] sm:pt-[50px]">
              <a
                href="#"
                className="group inline-flex border-2 border-[#E3E3E4] items-center justify-center w-[46px] h-[46px] mr-2 transition-colors duration-150 rounded-full focus:shadow-outline focus:bg-[#2F4A80] focus:border-[#2F4A80] hover:bg-[#4267B2] hover:border-[#4267B2] focus:shadow-3xl hover:shadow-3xl"
              >
                <svg
                  width="8"
                  height="16"
                  className="opacity-30 group-focus:fill-white group-hover:fill-white group-focus:opacity-100 group-hover:opacity-100"
                >
                  <path d="M5 5V3.5C5 3.23478 5.10536 2.98043 5.29289 2.79289C5.48043 2.60536 5.73478 2.5 6 2.5H7V0H5C4.20435 0 3.44129 0.31607 2.87868 0.87868C2.31607 1.44129 2 2.20435 2 3V5H0V8H2V16H5V8H7L8 5H5Z" />
                </svg>
              </a>

              <a
                href="#"
                className="group inline-flex border-2 border-[#E3E3E4] items-center justify-center w-[46px] h-[46px] mr-2 transition-colors duration-150 rounded-full focus:shadow-outline focus:bg-[#8F2762] focus:border-[#8F2762] hover:bg-[#C13584] hover:border-[#C13584] focus:shadow-3xl hover:shadow-3xl"
              >
                <svg
                  width="16"
                  height="16"
                  className="opacity-30 group-focus:fill-white group-hover:fill-white group-focus:opacity-100 group-hover:opacity-100"
                >
                  <path d="M1.35144 14.6498C-0.164562 13.1338 0.00848103 11.1079 0.00848103 7.99594C0.00848103 4.95594 -0.191562 2.88209 1.35144 1.34409C2.25912 0.492634 3.46312 0.0283075 4.70746 0.0506312C6.18046 -0.0153688 9.82744 -0.0183688 11.2994 0.0506312C14.3104 0.189631 15.8184 1.892 15.9504 4.702C16.0154 6.174 16.0194 9.81982 15.9504 11.2928C15.8414 13.6718 14.7224 14.9931 13.2394 15.5721C12.1504 15.9941 11.0865 15.992 8.00348 15.992C7.37848 15.992 6.79249 16.0008 6.24249 16.0008C4.14849 15.9988 2.57444 15.8728 1.35144 14.6498ZM13.6295 13.6307C14.6215 12.6307 14.5585 11.2909 14.5585 7.99594C14.5585 5.86094 14.5505 5.60799 14.5115 4.76499C14.3445 1.06499 11.5565 1.43979 8.00445 1.43979L7.97345 1.41977C5.83645 1.41977 5.58545 1.43081 4.73645 1.45981C1.03645 1.64981 1.41949 4.30271 1.41949 7.98471C1.41949 10.7077 1.21947 12.5029 2.33947 13.6209C3.31447 14.5989 4.65046 14.5487 7.98346 14.5487C11.2215 14.5497 12.6215 14.6387 13.6295 13.6307ZM3.90149 7.99887C3.90083 7.45953 4.00658 6.9255 4.2127 6.4271C4.41883 5.92869 4.72124 5.4759 5.10266 5.09458C5.48408 4.71325 5.93703 4.41093 6.43548 4.20493C6.93394 3.99892 7.4681 3.8931 8.00744 3.89389C9.09616 3.89389 10.1403 4.3262 10.9102 5.09604C11.68 5.86588 12.1125 6.91016 12.1125 7.99887C12.1109 9.08768 11.6769 10.1314 10.9059 10.9002C10.135 11.6691 9.09027 12.1003 8.00146 12.099C6.91407 12.099 5.87125 11.6667 5.10235 10.8978C4.33345 10.1289 3.90149 9.08626 3.90149 7.99887ZM5.34149 7.99887C5.34136 8.34893 5.41019 8.69545 5.54406 9.01889C5.67793 9.34234 5.87416 9.63655 6.12164 9.88413C6.36912 10.1317 6.66299 10.3278 6.98639 10.4618C7.30978 10.5958 7.65641 10.6649 8.00647 10.6649C8.35651 10.665 8.70315 10.5962 9.02655 10.4623C9.34995 10.3283 9.64374 10.1317 9.89117 9.88413C10.1386 9.63651 10.3348 9.34239 10.4685 9.01889C10.6022 8.69539 10.6709 8.34892 10.6705 7.99887C10.6706 7.64899 10.6018 7.30261 10.468 6.97934C10.3341 6.65607 10.1379 6.36249 9.8905 6.11508C9.6431 5.86768 9.34933 5.67128 9.02606 5.53745C8.70279 5.40362 8.35635 5.33468 8.00647 5.33481C7.65629 5.33428 7.30945 5.40283 6.98578 5.53647C6.6621 5.67011 6.36791 5.86619 6.12011 6.11362C5.87232 6.36105 5.67575 6.65489 5.54162 6.97837C5.40749 7.30184 5.33844 7.64869 5.33844 7.99887H5.34149ZM11.3155 3.73178C11.3156 3.60585 11.3405 3.48139 11.3889 3.36508C11.4372 3.24878 11.5079 3.14301 11.597 3.05405C11.6862 2.96509 11.792 2.8946 11.9084 2.84653C12.0248 2.79846 12.1495 2.77364 12.2754 2.77378C12.5296 2.77378 12.7734 2.87491 12.9532 3.05454C13.1331 3.23417 13.2342 3.47761 13.2344 3.73178C13.2346 3.85776 13.2099 3.98256 13.1617 4.09897C13.1136 4.21538 13.0429 4.32142 12.9539 4.41049C12.8648 4.49957 12.759 4.56987 12.6426 4.61801C12.5262 4.66616 12.4014 4.6909 12.2754 4.69077C12.1489 4.6913 12.0236 4.66665 11.9066 4.6185C11.7895 4.57036 11.6832 4.49992 11.5937 4.41049C11.5042 4.32107 11.4333 4.21447 11.385 4.09751C11.3367 3.98055 11.312 3.85538 11.3124 3.72885L11.3155 3.73178Z" />
                </svg>
              </a>

              <a
                href="#"
                className="group inline-flex border-2 border-[#E3E3E4] items-center justify-center w-[46px] h-[46px] mr-2 transition-colors duration-150 rounded-full focus:shadow-outline focus:bg-[#CC0000] focus:border-[#CC0000] hover:bg-[#FF0000] hover:border-[#FF0000] focus:shadow-3xl hover:shadow-3xl"
              >
                <svg
                  width="16"
                  height="11"
                  className="opacity-30 group-focus:fill-white group-hover:fill-white group-focus:opacity-100 group-hover:opacity-100"
                >
                  <path d="M8.00391 11C6.05691 11 3.55597 10.97 2.54297 10.913C1.61497 10.849 1.12871 10.7321 0.678711 9.93506C0.228711 9.13806 0 7.73496 0 5.50696V5.49695C0 3.23695 0.208711 1.86904 0.678711 1.06104C1.11271 0.294035 1.58392 0.147041 2.54492 0.092041C3.56592 0.024041 6.12391 0 8.00391 0C9.88391 0 12.435 0.024041 13.458 0.092041C14.419 0.147041 14.8913 0.292035 15.3203 1.06104C15.7913 1.86104 16.001 3.22802 16.001 5.49902V5.50598C16.001 7.77798 15.7923 9.14501 15.3223 9.93701C14.8923 10.699 14.422 10.849 13.458 10.913C12.448 10.969 9.94991 11 8.00391 11ZM6.00391 2.5V8.5L11.0039 5.5L6.00391 2.5Z" />
                </svg>
              </a>

              <a
                href="#"
                className="group inline-flex border-2 border-[#E3E3E4] items-center justify-center w-[46px] h-[46px] mr-2 transition-colors duration-150 rounded-full focus:shadow-outline focus:bg-[#177FBF] focus:border-[#177FBF] hover:bg-[#1DA1F2] hover:border-[#1DA1F2] focus:shadow-3xl hover:shadow-3xl"
              >
                <svg
                  width="16"
                  height="13"
                  className="opacity-30 group-focus:fill-white group-hover:fill-white group-focus:opacity-100 group-hover:opacity-100"
                >
                  <path d="M16 1.5378c-.6019.2625-1.2384.43696-1.89.518.6867-.40737 1.2001-1.05244 1.443-1.813001-.643.381336-1.3465.649874-2.08.794001-.4498-.479866-1.0335-.813405-1.6753-.9573199-.6418-.1439148-1.3121-.0915543-1.92371.1502839-.61166.241838-1.13648.661981-1.50632 1.205876-.36985.5439-.56763 1.18643-.56767 1.84416-.00259.25138.0229.50227.076.748-1.30494-.06359-2.58176-.40189-3.74698-.99278C2.96379 2.44414 1.93639 1.61397 1.114.598798.69185 1.32042.561093 2.17597.74843 2.99073c.187337.81477.67864 1.5273 1.37357 1.99207-.51891-.01266-1.02719-.14984-1.482-.4v.036c.001802.75718.263939 1.49072.74243 2.07755.4785.58683 1.14425.99126 1.88557 1.14545-.28061.07395-.56981.11027-.86.108-.20841.00371-.41661-.01507-.621-.056.21194.65102.62049 1.22034 1.16939 1.62955.54891.40922 1.21117.63825 1.89561.65545-1.16097.9083-2.59292 1.4013-4.067 1.4-.262509-.0005-.524713-.0179-.785-.052 1.49988.9665 3.24768 1.4778 5.032 1.472 1.22823.0085 2.4459-.2271 3.58231-.6931 1.1364-.4661 2.16889-1.1533 3.03749-2.0217.8686-.8684 1.556-1.90073 2.0223-3.03704.4663-1.13631.7021-2.35393.6939-3.58216 0-.145-.005-.285-.012-.424.647-.46301 1.2041-1.04012 1.644-1.703Z" />
                </svg>
              </a>
            </div>

            <div></div>
          </div>
        </div>
      </div>

      {/*Rigt side DIV (background) */}

      <div className="flex-1 bg-cover bg-no-repeat  bg-red-500 bg-[url('/src/assets/background_image.png')]"></div>
    </div>
  );
}

export default App;
