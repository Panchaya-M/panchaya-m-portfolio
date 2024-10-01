const Contact = () => {
  const contacts = [
    {
      link: "mailto:panchaya.meeboonpor@gmail.com",
      icon: "fa-solid fa-envelope",
      text: "panchaya.meeboonpor@gmail.com",
    },
    {
      link: "https://www.linkedin.com/in/panchaya-meeboonpor/",
      icon: "fa-brands fa-linkedin",
      text: "Panchaya Meeboonppor",
    },
    {
      link: "https://github.com/Panchaya-M",
      icon: "fa-brands fa-github",
      text: "Panchaya M",
    },
    {
      link: "tel:+66987652194",
      icon: "fa-solid fa-phone",
      text: "0987652194",
    },
  ];

  return (
    <section id="contact">
      <div className="container flex flex-col gap-4">
        <h3 className="title text-white">Contact Me</h3>

        <ul>
          {contacts.map((contact, i) => (
            <li key={i} className="mb-2">
              <a
                href={contact.link}
                className="text-sm font-light hover:underline"
              >
                <i
                  className={`${contact.icon} pr-3 hover:scale-125 hover:transition-all`}
                ></i>
                {contact.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
