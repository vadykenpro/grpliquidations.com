export type SignupFormProps = {
  showForm: boolean;
  heading: string;
  emailLabel: string;
  emailName: string;
  emailValue: string;
  emailInputClassName: string;
  showErrorMessage: boolean;
  errorMessage: string;
  showTimeoutMessage: boolean;
  timeoutMessage: string;
  disclaimerText: string;
  serviceLinkText: string;
  serviceLinkHref: string;
  submitButtonText: string;
  emptyStateClassName: string;
};

export const SignupForm = (props: SignupFormProps) => {
  if (!props.showForm) {
    return <p className={props.emptyStateClassName}></p>;
  }

  return (
    <form className="box-border caret-transparent fill-zinc-800 min-h-[100px] outline-[3px] break-words mx-auto">
      <div className="box-border caret-transparent fill-zinc-800 outline-[3px] break-words"></div>
      <h2 className="text-purple-900 text-[28px] font-bold box-border caret-transparent clear-both fill-zinc-800 leading-[42px] break-words mb-3">
        {props.heading}
      </h2>
      <div className="box-border caret-transparent fill-zinc-800 outline-[3px] break-words text-left mb-6">
        <label className="relative font-bold box-border caret-transparent block fill-zinc-800 leading-4 outline-[3px] break-words mb-3 before:accent-auto before:box-border before:caret-transparent before:text-red-500 before:block before:fill-zinc-800 before:text-base before:not-italic before:normal-nums before:font-bold before:tracking-[normal] before:leading-4 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-left-3 before:-top-1 before:font-helvetica_neue">
          {props.emailLabel}
        </label>
        <div className="text-red-500 text-sm font-semibold box-border caret-transparent hidden fill-zinc-800 leading-[21px] outline-[3px] break-words mb-1.5"></div>
        <input
          type="email"
          name={props.emailName}
          value={props.emailValue}
          className={props.emailInputClassName}
        />
      </div>

      {props.showErrorMessage && (
        <div className="box-border caret-transparent hidden fill-zinc-800 outline-[3px] break-words">
          <div className="text-red-500 text-sm font-semibold box-border caret-transparent fill-zinc-800 leading-[21px] outline-[3px] break-words text-left mb-1.5">
            {props.errorMessage}
          </div>
        </div>
      )}

      {props.showTimeoutMessage && (
        <div className="box-border caret-transparent hidden fill-zinc-800 outline-[3px] break-words">
          <div className="text-red-500 text-sm font-semibold box-border caret-transparent fill-zinc-800 leading-[21px] outline-[3px] break-words text-left mb-1.5">
            {props.timeoutMessage}
          </div>
        </div>
      )}

      <div className="box-border caret-transparent fill-zinc-800 outline-[3px] break-words">
        <p className="text-[11px] box-border caret-transparent fill-zinc-800 leading-[normal] break-words mb-6">
          {props.disclaimerText}
          <a
            href={props.serviceLinkHref}
            className="box-border caret-transparent fill-zinc-800 outline-[3px] break-words underline hover:outline-0"
          >
            {props.serviceLinkText}
          </a>
        </p>
      </div>

      <button
        type="submit"
        className="text-white bg-purple-900 caret-transparent block fill-zinc-800 tracking-[3px] leading-4 outline-[3px] break-words text-center w-full border border-purple-900 p-4 rounded-[3px] hover:bg-purple-800 hover:border-purple-800"
      >
        {props.submitButtonText}
      </button>
    </form>
  );
};
