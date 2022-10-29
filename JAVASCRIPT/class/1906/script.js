(function (window, document) {


    function getVal(obj, path) {
        
    }
    function setVal(obj, path, value) { // "last"
        const paths = path.split('.');
        if(paths.length === 1) { // paths = ["last"]
            obj[path] = value;
            return;
        }
        const p = paths[0]; // pet
        const newObj = obj[p];
        const pathsRest = paths.slice(1); // ['name', 'last']
        const newPath = pathsRest.join('.'); //"name.last"
        setVal(newObj, newPath, value);
    }
    
    let obj = {
        age: 57,
        color: "purple",
        isHubgry: true,
        friends: ["Itzhak", "David", { name: "shmulik" }],
        pet: {
            name: {
                first: "Rusty",
                last: "Dog"
            },
            species: "Dog",
            age: 2
        }
    };
    

})(window, document);
