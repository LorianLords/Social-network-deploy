
import Friend from "./SidebarFriends/Friend";


let Sidebar = () => {
    let friends = [
        {id: 1, name: 'Angel'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Gregory'},
        {id: 4, name: 'Joel'}
    ]

    let friendsItem = friends.map( friend =>    <Friend name={friend.name} key={friend.id}/>)
    return (
       <div className={'sidebar'}>
           <h2>Friends</h2>
           {friendsItem}
       </div>
    )
}

export default Sidebar;