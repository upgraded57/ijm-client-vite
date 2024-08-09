import { IoIosCloseCircle } from "react-icons/io";

export default function Waitlist({ setQ }) {
  const joinWaitlist = async (e) => {
    e.preventDefault();
    alert("Your information will be saved. You will be contacted in due time");

    setQ("");

    const data = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch(
        "https://vettme-api.onrender.com/api/basic/waitlist",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result) return alert("Your information has been saved.");
    } catch (error) {
      return alert("Your information could not be saved. Please retry");
    }
  };
  return (
    <div className="w-full h-screen fixed inset-0 bg-black/20 px-[4vw] flex items-center justify-center backdrop-blur-sm">
      <div className="rounded-lg px-6 py-10 bg-white relative max-w-[400px] shadow-lg">
        <div className="right-4 top-4 absolute cursor-pointer">
          <IoIosCloseCircle
            className="text-2xl text-red-clr"
            onClick={() => setQ("")}
          />
        </div>
        <h2 className="v-text-bold text-3xl mb-4">
          Join the <span className="text-red-clr uppercase">waitlist</span>
        </h2>
        <p className="p-text">
          Join the wailist now to be among the testers of the beta version when
          it launches.
        </p>

        <form onSubmit={joinWaitlist} className="w-full mt-10">
          <label htmlFor="fullName" className="w-full block mb-4">
            <p className="p-text uppercase">full name</p>
            <input
              type="text"
              className="input input-bordered w-full"
              id="fullName"
              name="name"
              required
            />
          </label>
          <label htmlFor="email" className="w-full block mb-4">
            <p className="p-text uppercase">email address</p>
            <input
              type="email"
              className="input input-bordered w-full"
              id="email"
              name="email"
            />
          </label>
          <label htmlFor="phone" className="w-full block mb-4">
            <p className="p-text uppercase">phone number (optional)</p>
            <input
              type="phone"
              className="input input-bordered w-full"
              id="phone"
              name="phone_number"
            />
          </label>

          <button
            type="submit"
            className="btn bg-red-clr text-white shadow-none border-none hover:bg-red-600"
          >
            Join the waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
