import { ModalCloseButton } from "@/components/ModalCloseButton";
import { SignupForm } from "@/components/forms/SignupForm";

export const SignupModal = () => {
  return (
    <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
      <div className="fixed text-[14.592px] box-border caret-transparent hidden h-full leading-[24.8064px] outline-[3px] w-full md:text-[17px] md:leading-[28.9px]">
        <div className="fixed text-[14.592px] box-border caret-transparent leading-[24.8064px] max-h-[calc(100%_-_100px)] max-w-[620px] min-w-[350px] outline-[3px] overflow-x-hidden overflow-y-auto w-[calc(100%_-_40px)] left-2/4 top-2/4 md:text-[17px] md:leading-[28.9px]">
          <div className="text-[14.592px] bg-white box-border caret-transparent fill-zinc-800 h-full leading-[24.8064px] min-h-[100px] opacity-0 outline-[3px] rounded-[5px] md:text-[17px] md:leading-[28.9px]">
            <ModalCloseButton />
            <div className="text-[14.592px] box-border caret-transparent fill-zinc-800 leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]">
              <div className="text-zinc-800 text-base bg-white box-border caret-transparent fill-zinc-800 leading-6 outline-[3px] p-6 rounded-[5px] font-helvetica_neue">
                <div className="box-border caret-transparent hidden fill-zinc-800 min-h-[100px] outline-[3px] break-words">
                  <h2 className="text-purple-900 text-[28px] font-bold box-border caret-transparent clear-both fill-zinc-800 leading-[42px] break-words mb-3">
                    Thanks for signing up!
                  </h2>
                  <p className="box-border caret-transparent fill-zinc-800 break-words mb-6">
                    You can unsubscribe at any time using the Unsubscribe link
                    at the bottom of every email.
                  </p>
                </div>
                <SignupForm
                  showForm={true}
                  heading="Get 10% off now!"
                  emailLabel="Email"
                  emailName="email_address"
                  emailValue=""
                  emailInputClassName="appearance-none text-sm shadow-[rgba(0,0,0,0.1)_0px_1px_2px_0px_inset] box-border caret-transparent fill-zinc-800 h-[46px] leading-[21px] outline-[3px] break-words text-start w-full border border-gray-400 px-[15px] py-2.5 rounded-[3px] border-solid"
                  showErrorMessage={true}
                  errorMessage="Sorry, we could not complete your sign-up. Please contact us to resolve this."
                  showTimeoutMessage={true}
                  timeoutMessage="Operation timed out, please try again."
                  disclaimerText="By submitting this form, you are consenting to receive marketing emails from: GRP Liquidations, 1640 142nd Ave, Dorr, MI, 49323, US, https://Grpliquidations.com. You can revoke your consent to receive emails at any time by using the SafeUnsubscribe® link, found at the bottom of every email."
                  serviceLinkText="Emails are serviced by Constant Contact."
                  serviceLinkHref="https://www.constantcontact.com/legal/service-provider"
                  submitButtonText="Sign up!"
                  emptyStateClassName=""
                />
                <SignupForm
                  showForm={false}
                  heading=""
                  emailLabel=""
                  emailName=""
                  emailValue=""
                  emailInputClassName=""
                  showErrorMessage={false}
                  errorMessage=""
                  showTimeoutMessage={false}
                  timeoutMessage=""
                  disclaimerText=""
                  serviceLinkText=""
                  serviceLinkHref=""
                  submitButtonText=""
                  emptyStateClassName="text-[11px] box-border caret-transparent fill-zinc-800 leading-[16.5px] break-words text-center pt-2.5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]"></div>
      </div>
      <div className="text-[14.592px] box-border caret-transparent leading-[24.8064px] outline-[3px] md:text-[17px] md:leading-[28.9px]"></div>
    </div>
  );
};
