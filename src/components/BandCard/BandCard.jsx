import bandmember from "./member.jpeg"

const BandCard = () =>{
    return (      
        <div className="band-member-card">
            <p>Name</p>
            <img src={bandmember} alt="" />
        </div>
    )
}

export default BandCard;