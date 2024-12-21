import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Server is ready")
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Array of laughs',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
        },
        {
            id: 2,
            title: 'Infinite Loop of Fun',
            content: 'Why was the JavaScript developer sad? Because they didn’t null how to undefined their feelings!'
        },
        {
            id: 3,
            title: 'Classy Humor',
            content: 'Why did the programmer quit their job? Because they didn’t get arrays!'
        },
        {
            id: 4,
            title: '404 Jokes Not Found',
            content: 'Why do Python developers hate shopping? Because they keep getting “IndexError: item not found”!'
        },
        {
            id: 5,
            title: 'Debugging Blues',
            content: 'How many programmers does it take to change a light bulb? None. That’s a hardware problem!'
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})