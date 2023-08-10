async function dataFether() {
    const res = await fetch('http://localhost:3001/api/hello', {
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
            {data.data.map((item: { name: string }, index: number) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}

export default HomeName