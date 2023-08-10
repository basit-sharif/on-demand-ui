async function dataFether() {
    const res = await fetch('https://abdulbasitapis.vercel.app/api/languages', {
        next: {
            tags: ['name']
        }
    })
    return res.json();
}


const HomeName = async () => {
    let data = await dataFether();

    return (
        <div>
            {data.LanguagesDetails.map((item: { name: string }, index: number) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}

export default HomeName