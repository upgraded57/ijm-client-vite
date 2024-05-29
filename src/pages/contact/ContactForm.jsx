export default function ContactForm() {
  const sendMessage = (e) => {
    e.preventDefault();
    const messageData = Object.fromEntries(new FormData(e.target));

    console.log(messageData);
  };

  return (
    <form onSubmit={sendMessage} className="mt-10 w-full">
      <div className="my-6">
        <label htmlFor="full_name">
          <p className="text-sm text-grey-clr uppercase">Full Name</p>
          <input
            type="text"
            name="full_name"
            id="full_name"
            className="input bg-light-grey-clr w-full"
          />
        </label>
      </div>
      <div className="my-6">
        <label htmlFor="email">
          <p className="text-sm text-grey-clr uppercase">Email Address</p>
          <input
            type="email"
            name="email"
            id="email"
            className="input bg-light-grey-clr w-full"
          />
        </label>
      </div>
      <div className="my-6">
        <label htmlFor="phone">
          <p className="text-sm text-grey-clr uppercase">Phone Number</p>
          <input
            type="tel"
            inputMode="numeric"
            name="phone"
            id="phone"
            className="input bg-light-grey-clr w-full"
          />
        </label>
      </div>
      <div className="my-6">
        <label htmlFor="message">
          <p className="text-sm text-grey-clr uppercase">Message</p>
          <textarea
            name="message"
            id="message"
            className="textarea resize-none bg-light-grey-clr w-full"
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn w-full bg-green-clr text-white text-xl font-normal uppercase hover:bg-green-clr"
      >
        send message
      </button>
    </form>
  );
}
