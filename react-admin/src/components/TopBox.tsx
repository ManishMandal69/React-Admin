import { topDealUsers } from "../data"
import "../styles/topbox.scss"

const TopBox = () => {
  return (
    <div className="topBox">
        <h1>TopDeals</h1>
        <div className="list">
            {topDealUsers.map((users)=>{
                return(
                    <div className="listItem" key={users.id}>
                        <div className="users">
                            <img src={users.img} alt="" />
                        </div>
                        <div className="userText">
                            <span className="username">{users.username}</span>
                            <span className="email">{users.email}</span>
                        </div>
                        <span>${users.amount}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TopBox