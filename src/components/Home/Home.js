function Home({data}){
    return(
        data.map((d) => {
            return(
                <p key={d.id}>{d.name}</p>
            )
        })
    )
}

export default Home;