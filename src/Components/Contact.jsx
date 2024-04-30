import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";

const Contact = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const sendMessage = { name, email, message };
    console.log(sendMessage);
  };
  return (
    <div className="bg-[#BAB9BA] p-6">
      <div>
        <h2 className="text-4xl text-center text-[#0A2D45] mb-6">
          Get In Tuch
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="p-4">
          <h3>Address</h3>
          <p className="bg-white p-2 rounded-lg mb-4">
            <span className="font-bold">Phone:</span> 01722489174
          </p>
          <p className="bg-white p-2 rounded-lg mb-4">
            <span className="font-bold">Email:</span> shamimmahmud077@gmail.com
          </p>
          <p className="bg-white p-2 rounded-lg mb-4">
            <span className="font-bold">Location:</span> Fulchari, Gaibandha,
            Bangladesh.
          </p>
        </div>
        {/* className="bg-[#FFFFFF]" */}
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Full Name</label>
            <br />
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              className="p-2 rounded-lg w-full"
              placeholder="full name"
            />
            <br />
            <br />

            <label htmlFor="">Email</label>
            <br />
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              className="p-2 rounded-lg w-full"
              placeholder="exemple@xyz.com"
            />
            <br />
            <br />

            <label htmlFor="">Message</label>
            <br />
            <textarea
              name="message"
              id=""
              className="p-2 rounded-lg w-full"
              cols="30"
              rows="10"
            ></textarea>

            <br />
            <br />

            <input type="submit" className="btn w-full" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
