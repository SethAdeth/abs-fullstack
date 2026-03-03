import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F3FF] pt-20">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-[#5B21B6] hover:bg-[#7C3AED] text-white",
            card: "bg-white border border-[#E5E7EB] shadow-sm",
            headerTitle: "text-[#1F2937]",
            headerSubtitle: "text-[#6B7280]",
            socialButtonsBlockButton: "border-[#E5E7EB] text-[#1F2937] hover:bg-[#5B21B6]/10",
            formFieldLabel: "text-[#6B7280]",
            formFieldInput: "bg-white border-[#E5E7EB] text-[#1F2937] focus:border-[#5B21B6]",
            footerActionLink: "text-[#5B21B6] hover:text-[#7C3AED]",
            identityPreviewEditButton: "text-[#5B21B6]",
          },
        }}
      />
    </div>
  );
}
