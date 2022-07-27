
// we're storing each youtube object (video) in an array, and passing the array key into the class, so the class instance can refer to itself externally
// this is necessary for two reasons
// first, the event listener function we pass to Youtube has to be globally accessible, so passing "this.blah" doesn't work
// it has to be passed as a string also, so putting "this" in quotes makes it lose its special meaning
// second, when we create timeout functions, the meaning of "this" inside that function loses its scope, so we have to refer to the class externally from there too.


// _yt is the global youtube array that stores each youtube object. yti is the array key, incremented automatically for each new object created
// 2012-02-13 can't use non alphanumeric characters anymore so we need to choose a new unique name without underscores
// used to be _yt, we'll change to yoobtoob
