const UserVerification = ({
  heading,
  subhead,
}: {
  heading?: string;
  subhead?: string;
}) => {
  return (
    <>
      <p className="text-[#5F5F5F] font-aristoBold text-4xl mb-3 md:text-xl">
        {heading || "Set new password"}
      </p>
      <p className="text-lg text-[#7C7C7C] font-poppinsRegular md:text-sm">
        {subhead ||
          "Enter your registered email address to receive password reset link."}
      </p>
    </>
  );
};

export default UserVerification;
