var distanceBetweenPoints = require('distance-between-geocoordinates')
var assert = require('assert')

const London = {
  lat: 51.5074,
  lng: 0.1278
}

const Newcastle = {
  lat: 54.9783,
  lng: 1.6178
}

const Maidstone = {
  lat: 51.2698,
  lng: 0.5189
}

const getDistanceBetweenNewcastleAndLondon = () => {
  var responseData = distanceBetweenPoints(London, Newcastle)
  let distance = responseData.distance
  console.log(distance)
  if (distance <= 50) {
    return true
  } else {
    return false
  }
}

const getDistanceBetweenLondonAndMaidstone = () => {
  var responseData = distanceBetweenPoints(London, Maidstone)
  let distance = responseData.distance
  console.log(distance)
  if (distance <= 50) {
    return true
  } else {
    return false
  }
}

describe('Distance', function() {
  describe('#>50KmFromLondon', function() {
    it('should return false when distance is greater than 50km', async function() {
      assert.strictEqual(await getDistanceBetweenNewcastleAndLondon(), false)
    })
  })
})

describe('Distance2', function() {
  describe('#<50KmOfLondon', function() {
    it('should return true when distance is less than 50km', async function() {
      assert.strictEqual(await getDistanceBetweenLondonAndMaidstone(), true)
    })
  })
})
