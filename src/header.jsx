const Header = ({selectedTeam, teamMemberCount})=>{
    return (
        <header className="p-2 text-light bg-dark">
            <h1 className="text-center">
               Team member alocation
            </h1>
            <h3>
                {selectedTeam} has {teamMemberCount} members
            </h3>
        </header>
    )
}
export default Header;