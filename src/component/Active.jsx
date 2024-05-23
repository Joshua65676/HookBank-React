
export default function Active(){
    return(
       <div className="pt-20 ml-5 space-y-10 md:flex md:pt-10 md:ml-28 md:space-x-20 md:space-y-0">
         <div className="space-x-5">
            <span className="text-4xl font-bold text-white">3800+</span>
            <span className="text-xl text-transparent md:text-2xl bg-clip-text bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600">User Active</span>
         </div>
         <vl className="hidden md:flex line"/>
         <div className="space-x-5">
            <span className="text-4xl font-bold text-white">230+</span>
            <span className="text-xl text-transparent md:text-2xl bg-clip-text bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600">TRUSTED BY COMPANY</span>
         </div>
         <vl className="hidden md:flex md:pt-0 line"/>
         <div className="space-x-5">
            <span className="text-4xl font-bold text-white">$230M+</span>
            <span className="text-xl text-transparent md:text-2xl bg-clip-text bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600">TRANSACTION</span>
         </div>
       </div>
    )
}