const Experience = () => {
  return (
    <section id="experiences">
      <div className="container flex flex-col gap-4">
        <h2>My Experiences</h2>

        <div className="card-outline flex flex-col gap-4">
          <div>
            <div className="flex justify-between">
              <h3 className="title mb-2">CODIUM Co., Ltd.</h3>
              <p className="mb-2">July 2022 - Present</p>
            </div>
            <p className="text-lg">Frontend Developer</p>
          </div>
          <div>
            <h4 className="sub-title font-semibold">Responsibilities:</h4>
            <ul className="list-disc pl-6">
              <li>
                <p>Created user interfaces using Angular.</p>
              </li>
              <li>
                <p>Designed and implemented UX/UI and responsive layouts.</p>
              </li>
              <li>
                <p>
                  Worked closely with backend developers to integrate APIs,
                  connecting frontend components with backend services.
                </p>
              </li>
            </ul>
          </div>
          <p>I’ve had the chance to work on some exciting projects:</p>
          <div>
            <div className="flex justify-between border-b-[1px] border-aqua mb-2">
              <h4 className="sub-title">
                Credit information Recording System:
              </h4>
              {/* <div className="text-aqua">
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-down"></i>
              </div> */}
            </div>
            <p>
              Developing a credit information request and document management
              recording system for Thailand's sole credit information provider.
            </p>
          </div>
          <div>
            <div className="flex justify-between border-b-[1px] border-aqua mb-2">
              <h4 className="sub-title">e-Memo System:</h4>
              {/* <div className="text-aqua">
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-down"></i>
              </div> */}
            </div>
            <p>
              Designed and implemented custom form and workflows tailored to
              client needs, enhancing internal communications and approval
              processes.
            </p>
          </div>
          <div>
            <div className="flex justify-between border-b-[1px] border-aqua mb-2">
              <h4 className="sub-title">e-Budget System:</h4>
              {/* <div className="text-aqua">
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-down"></i>
              </div> */}
            </div>
            <p>
              I had the opportunity to be 80% involved in building the User
              Interface for the newly developed prototype e-Budget System, which
              is a large-scale product for managing internal budgeting in
              organizations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <h4 className="sub-title font-semibold">Technologies Used:</h4>
            <ul className="flex flex-wrap gap-4">
              <li className="bubble">Angular</li>
              <li className="bubble">TypeScript</li>
              <li className="bubble">Bootstrap</li>
              <li className="bubble">Gitlab</li>
              <li className="bubble">Figma</li>
            </ul>
          </div>
          {/* <div className="expand-toggle">
            <span className="flex items-center gap-2">
              More Details <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span className="flex items-center gap-2">
              Hide <i className="fa-solid fa-chevron-up"></i>
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
