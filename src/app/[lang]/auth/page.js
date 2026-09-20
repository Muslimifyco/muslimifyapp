import PageBanner from "@/components/Shared/PageBanner";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";
import LoginRegisterContent from "@/components/Auth/LoginRegisterContent";

export const metadata = {
	title: "Authentication | Edmy - React Nextjs Learning Management System",
};

const page = async ({ params }) => {
	const { lang } = await params;
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect(`/${lang}/`);
	}
	return (
		<>
			<PageBanner
				pageTitle="Authentication"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Authentication"
				lang={lang}
			/>

			<LoginRegisterContent lang={lang} />
		</>
	);
};

export default page;
