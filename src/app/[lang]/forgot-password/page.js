import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "Forgot Password | Edmy - React Nextjs Learning Management System",
};

const page = async ({ params }) => {
	const { lang } = await params;
	return (
		<>
			<PageBanner
				pageTitle="Forgot Password"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Forgot Password"
				lang={lang}
			/>

			<ForgotPasswordForm />
		</>
	);
};

export default page;
