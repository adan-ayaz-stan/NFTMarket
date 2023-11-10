// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY HOOKS
import UserContextHook from "../../../hooks/UserContextHook";
    // IMPORTING NECESSARY COMPONENTS
import AuthModal from "../../../components/authModal/AuthModal";
// import { Navigate } from "react-router-dom";

// EXPORTING DEFAULT APPLYFORLAUNCHPADPAGE
export default function ApplyForLaunchpadPage(){
    // OBTAINING USERCONTEXT FROM HOOK
    const {dispatch} = UserContextHook()

    return(
        // A CONTAINER FOR THE WHOLE PAGE
        <div className="min-h-[100vh] scroll-smooth box-border transition-all duration-500 ease-in-out flex justify-center items-center">
            {/* A SIGNINMODAL COMPONANT THAT HANDLES AUTHENTICATION */}
            <AuthModal
                socialAuthStatement="Sign out with GitHub"
                emailAuthStatement="Sign out"
                switchAuthStatement={["Don't have an account", "Sign up"]}

                authFunction = {() => {dispatch({ type: "SIGN_OUT" })}}
            />
        </div>
    )
}