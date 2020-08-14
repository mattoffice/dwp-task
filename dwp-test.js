const express = require('express')
const distanceBetweenPoints = require('distance-between-geocoordinates')

const app = express()
const port = 3000

const axios = require('axios')
const BASE_URL = 'https://bpdts-test-app.herokuapp.com/'

const London = {
    lat: 51.5074,
    lng: 0.1278
  }

const getDistanceBetweenTwoPoints = (London, loc) => {
var responseData = distanceBetweenPoints(London, loc, 'mile')
let distance = responseData.distance
if (distance <= 50) {
    return true
} else {
    return false
}
}

const getAllUsers = () =>
  axios({
    method: 'GET',
    url: BASE_URL + `/users`
  })

const getLondonUsers = () => 
    axios({
    method: 'GET',
    url: BASE_URL + `/city/London/users`
  })


const asyncGetUsersWithLondonCoords = async () => {
const response = await getAllUsers()
return await response.data.filter(user =>
    getDistanceBetweenTwoPoints(London, {
    lat: user.latitude,
    lng: user.longitude
    })
)
}

const asyncGetLondonUsers = async () => {
    const response = await getLondonUsers();
    return response.data
}

app.get('/', async (req, res) => {
    let londonites = await asyncGetLondonUsers();
    let usrsWithLondonCoords = await asyncGetUsersWithLondonCoords();
    res.send({ message: 'Users within 50 miles of London', allMatches: londonites.concat(usrsWithLondonCoords)
    }) })

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`)
})