import Image from "next/image";
function Join() {
  return (
    <div className="bg-gray-950 min-h-screen  gap-12 flex-col md:flex-row flex items-center justify-between py-36 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 ">
      <div className="md:w-7/12">
        <h1 className="text-white text-4xl font-semibold">
          Join Saint's Team Today and Start Earning More !
        </h1>
        <p className="md:block hidden text-white mt-8">
          By completing and submitting the form, you are sending a proposal for
          working together. After a further analysis, we will get back to you!{" "}
        </p>
        <div className="flex  item-center justify-between gap-4 mt-12">
          <Image src="/logo.svg" className="w-8/12" width={0} height={0} />
          <Image src="/only.svg" className="w-8/12" width={0} height={0} />
        </div>
      </div>
      <form className="md:w-7/12 slide-in w-full mx-auto  bg-white/10 p-6">
        <h1 className="text-center w-full mb-4 underline underline-offset-4 text-2xl font-semibold text-white">
          Team Registration
        </h1>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="text-white">Full Name</label>
            <input
              type="name"
              required
              placeholder="Your Full Name"
              className="block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40 "
            ></input>
          </div>
          <div>
            <label className="text-white">Your OnlyFans Username</label>
            <input
              type="username"
              required
              placeholder="Your Account Username"
              className="block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40 "
            ></input>
          </div>
          <div>
            <label className="text-white">Your Email</label>
            <input
              type="email"
              required
              placeholder="Your Email"
              className="block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40 "
            ></input>
          </div>
          <div>
            <label className="text-white">Country</label>
            <select className="capitalize block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40">
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
              required
              placeholder="Your Phone Number"
              className="block mt-2 bg-pink-500/10 border-2 w-full py-1 focus:border-pink-500 focus:outline-none px-4 text-pink-500 border-pink-500/50 rounded-full placeholder:text-pink-500/40 "
            ></input>
          </div>
          <button className="w-full text-center  hover:shadow-xl hover:shadow-pink-500/30 transition-all bg-pink-500 text-white font-semibold py-2 rouneded-md mt-4">
            Submit
          </button>
        </div>
      </form>
      <p className="block md:hidden text-white mt-8">
        By completing and submitting the form, you are sending a proposal for
        working together. After a further analysis, we will get back to you!{" "}
      </p>
    </div>
  );
}

export default Join;
