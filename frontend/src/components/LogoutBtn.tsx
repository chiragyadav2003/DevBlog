
export const LogoutBtn = () => {
    return (
        <button
            onClick={logout}
            className="relative py-2 pr-8 pl-2 text-black text-base font-bold  overflow-hidden bg-white  hover:scale-105 "
        >
        Logout
        </button>
)}

const logout = () =>{
    localStorage.clear();
    window.location.href = '/';
}