export default function RequestForm() {
  const sendMeetingRequest = (e) => {
    e.preventDefault();
    const requestData = Object.fromEntries(new FormData(e.target));

    console.log(requestData);
  };
  return (
    <form className="w-full" onSubmit={sendMeetingRequest}>
      <div className="my-4">
        <label htmlFor="full_name">
          <p className="text-sm text-white uppercase">full name</p>
          <input
            type="text"
            name="full_name"
            id="full_name"
            className="input w-full"
          />
        </label>
      </div>

      <div className="my-4">
        <label htmlFor="email">
          <p className="text-sm text-white uppercase">Email Address</p>
          <input
            type="email"
            name="email"
            id="email"
            className="input w-full"
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-wide bg-blue-clr hover:bg-blue-clr border-0 text-white font-[500]"
      >
        Request a Meeting
      </button>
    </form>
  );
}
