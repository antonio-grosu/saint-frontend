import Image from "next/image";
import axios from "axios";
import { useState } from "react";
function Join() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [option, setOption] = useState("");
  const [number, setNumber] = useState("");
  const [insta, setInsta] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };
  const handleInstaChange = (e) => {
    setInsta(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://saint-api.vercel.app", {
        name: name,
        email: email,
        country: country,
        number: number,
        option: option,
        userName: userName,
        insta: insta,
      });
      console.log(response.data);
      setSent(!sent);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="bg-gray-950 min-h-screen  gap-12 flex-col md:flex-row flex items-center justify-between py-36 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
      <div className="md:w-7/12">
        <h1 className="text-white text-4xl font-semibold">
          Join Saint's Team Today and Start Earning More !
        </h1>
        {!sent && (
          <p className="md:block hidden text-white mt-8">
            By completing and submitting the form, you are sending a proposal
            for working together. After a further analysis, we will get back to
            you!{" "}
          </p>
        )}
        {sent && (
          <div className="bg-green-300/20 md:block hidden slide-right mt-8 p-4 rounded-md border-2 border-green-300 w-full text-center">
            <p className="font text-sm">
              <span className="text-xl mb-2 font-bold block">
                You Applied Successfully!{" "}
              </span>
              Saint's Models Agency Team will get back to you in a short time!
            </p>
          </div>
        )}
        <div className="flex flex-col items-center gap-4 mt-8">
          <Image
            alt="Logos"
            src="/logo.png"
            className="w-full"
            width={1920}
            height={1920}
          />
          <Image
            alt="Logos"
            src="/only.png"
            className="w-5/12"
            width={1920}
            height={1920}
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-7/12 slide-in w-full mx-auto flex flex-col gap-4 bg-white/10 p-6"
      >
        {/* ... other form elements */}
        <div>
          <label className="text-white">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Your Full Name"
            className="block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40 "
          ></input>
        </div>

        <div className="slide-in">
          <label className="text-white">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Your Email"
            className="block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40 "
          ></input>
        </div>
        <div className="slide-in">
          <label className="text-white">Your Instagram</label>
          <input
            type="username"
            value={insta}
            onChange={handleInstaChange}
            required
            placeholder="Your Instagram"
            className="block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40 "
          ></input>
        </div>
        <div className="flex flex-col ">
          <span className="text-white mr-4 block">
            Do you have an OnlyFans Account?
          </span>
          <div className="flex items-center justify-start mt-2 gap-2">
            <label className="text-white mr-2 block">
              <input
                type="radio"
                value="DA"
                checked={option === "DA"}
                onChange={handleOptionChange}
                className="bg-red-200"
              />
              Yes
            </label>
            <label className="text-white block">
              <input
                type="radio"
                value="NU"
                checked={option === "NU"}
                onChange={handleOptionChange}
                className="bg-red-200"
              />
              No
            </label>
          </div>
        </div>
        {option === "DA" && (
          <div>
            <label className="text-white">Your username</label>
            <input
              type="username"
              value={userName}
              onChange={handleUserNameChange}
              required
              placeholder="Your OnlyFans Username"
              className="block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40 "
            ></input>
          </div>
        )}
        <div>
          <label className="text-white">Country</label>
          <select
            value={country}
            onChange={handleCountryChange}
            className="capitalize block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40"
          >
            <option value="">--Select a country--</option>
            <option>Afghanistan</option>
            <option>Albania</option>
            <option>Algeria</option>
            <option>Andorra</option>
            <option>Angola</option>
            <option>Argentina</option>
            <option>Armenia</option>
            <option>Australia</option>
            <option>Austria</option>
            <option>Azerbaijan</option>
            <option>Bahamas</option>
            <option>Bahrain</option>
            <option>Bangladesh</option>
            <option>Barbados</option>
            <option>Belarus</option>
            <option>Belgium</option>
            <option>Belize</option>
            <option>Benin</option>
            <option>Bhutan</option>
            <option>Bolivia</option>
            <option>Bosnia and Herzegovina</option>
            <option>Botswana</option>
            <option>Brazil</option>
            <option>Brunei</option>
            <option>Bulgaria</option>
            <option>Burkina Faso</option>
            <option>Burundi</option>
            <option>Cambodia</option>
            <option>Cameroon</option>
            <option>Canada</option>
            <option>Cape Verde</option>
            <option>Central African Republic</option>
            <option>Chad</option>
            <option>Chile</option>
            <option>China</option>
            <option>Colombia</option>
            <option>Comoros</option>
            <option>Congo</option>
            <option>Costa Rica</option>
            <option>Croatia</option>
            <option>Cuba</option>
            <option>Cyprus</option>
            <option>Czech Republic</option>
            <option>Denmark</option>
            <option>Djibouti</option>
            <option>Dominica</option>
            <option>Dominican Republic</option>
            <option>Ecuador</option>
            <option>Egypt</option>
            <option>El Salvador</option>
            <option>Equatorial Guinea</option>
            <option>Eritrea</option>
            <option>Estonia</option>
            <option>Eswatini</option>
            <option>Ethiopia</option>
            <option>Fiji</option>
            <option>Finland</option>
            <option>France</option>
            <option>Gabon</option>
            <option>Gambia</option>
            <option>Georgia</option>
            <option>Germany</option>
            <option>Ghana</option>
            <option>Greece</option>
            <option>Grenada</option>
            <option>Guatemala</option>
            <option>Guinea</option>
            <option>Guinea-Bissau</option>
            <option>Guyana</option>
            <option>Haiti</option>
            <option>Honduras</option>
            <option>Hungary</option>
            <option>Iceland</option>
            <option>India</option>
            <option>Indonesia</option>
            <option>Iran</option>
            <option>Iraq</option>
            <option>Ireland</option>
            <option>Israel</option>
            <option>Italy</option>
            <option>Jamaica</option>
            <option>Japan</option>
            <option>Jordan</option>
            <option>Kazakhstan</option>
            <option>Kenya</option>
            <option>Kiribati</option>
            <option>Kuwait</option>
            <option>Kyrgyzstan</option>
            <option>Laos</option>
            <option>Latvia</option>
            <option>Lebanon</option>
            <option>Lesotho</option>
            <option>Liberia</option>
            <option>Libya</option>
            <option>Liechtenstein</option>
            <option>Lithuania</option>
            <option>Luxembourg</option>
            <option>Madagascar</option>
            <option>Malawi</option>
            <option>Malaysia</option>
            <option>Maldives</option>
            <option>Mali</option>
            <option>Malta</option>
            <option>Marshall Islands</option>
            <option>Mauritania</option>
            <option>Mauritius</option>
            <option>Mexico</option>
            <option>Micronesia</option>
            <option>Moldova</option>
            <option>Monaco</option>
            <option>Mongolia</option>
            <option>Montenegro</option>
            <option>Morocco</option>
            <option>Mozambique</option>
            <option>Myanmar</option>
            <option>Namibia</option>
            <option>Nauru</option>
            <option>Nepal</option>
            <option>Netherlands</option>
            <option>New Zealand</option>
            <option>Nicaragua</option>
            <option>Niger</option>
            <option>Nigeria</option>
            <option>North Korea</option>
            <option>North Macedonia</option>
            <option>Norway</option>
            <option>Oman</option>
            <option>Pakistan</option>
            <option>Palau</option>
            <option>Panama</option>
            <option>Papua New Guinea</option>
            <option>Paraguay</option>
            <option>Peru</option>
            <option>Philippines</option>
            <option>Poland</option>
            <option>Portugal</option>
            <option>Qatar</option>
            <option>Romania</option>
            <option>Russia</option>
            <option>Rwanda</option>
            <option>Saint Kitts and Nevis</option>
            <option>Saint Lucia</option>
            <option>Saint Vincent and the Grenadines</option>
            <option>Samoa</option>
            <option>San Marino</option>
            <option>Sao Tome and Principe</option>
            <option>Saudi Arabia</option>
            <option>Senegal</option>
            <option>Serbia</option>
            <option>Seychelles</option>
            <option>Sierra Leone</option>
            <option>Singapore</option>
            <option>Slovakia</option>
            <option>Slovenia</option>
            <option>Solomon Islands</option>
            <option>Somalia</option>
            <option>South Africa</option>
            <option>South Korea</option>
            <option>South Sudan</option>
            <option>Spain</option>
            <option>Sri Lanka</option>
            <option>Sudan</option>
            <option>Suriname</option>
            <option>Sweden</option>
            <option>Switzerland</option>
            <option>Syria</option>
            <option>Taiwan</option>
            <option>Tajikistan</option>
            <option>Tanzania</option>
            <option>Thailand</option>
            <option>Timor-Leste</option>
            <option>Togo</option>
            <option>Tonga</option>
            <option>Trinidad and Tobago</option>
            <option>Tunisia</option>
            <option>Turkey</option>
            <option>Turkmenistan</option>
            <option>Tuvalu</option>
            <option>Uganda</option>
            <option>Ukraine</option>
            <option>United Arab Emirates</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Uruguay</option>
            <option>Uzbekistan</option>
            <option>Vanuatu</option>
            <option>Vatican City</option>
            <option>Venezuela</option>
            <option>Vietnam</option>
            <option>Yemen</option>
            <option>Zambia</option>
            <option>Zimbabwe</option>
          </select>
        </div>
        <div>
          <label className="text-white">Your Phone Number</label>
          <input
            type="tel"
            value={number}
            onChange={handleNumberChange}
            required
            placeholder="Your Phone Number"
            className="block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40 "
          ></input>
        </div>
        {!sent && (
          <button
            type="submit"
            className="w-full text-center hover:shadow-xl hover:shadow-pink-500/30 transition-all bg-pink-500 text-white font-semibold py-2 rouneded-md mt-4"
          >
            Submit
          </button>
        )}
        {sent && (
          <div className="bg-green-300/20 block md:hidden slide-right mt-8 p-4 rounded-md border-2 border-green-300 w-full text-center">
            <p className="font text-sm">
              <span className="text-xl mb-2 font-bold block">
                You Applied Successfully!{" "}
              </span>
              Saint's Models Agency Team will get back to you in a short time!
            </p>
          </div>
        )}
      </form>
      {!sent && (
        <p className="block md:hidden text-white mt-8">
          By completing and submitting the form, you are sending a proposal for
          working together. After a further analysis, we will get back to you!{" "}
        </p>
      )}
    </div>
  );
}

export default Join;
