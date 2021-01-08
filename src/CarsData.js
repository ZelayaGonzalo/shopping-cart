function importAll(r) {
    return r.keys().map(r)
  }
const images = importAll(require.context('./CarIcons', false, /\.(png|jpe?g|svg)$/))
const data=[];
function createCarsData(brand,name,img,shortDescription,longDescription,price,onCart){
    return({
        brand,
        name,
        img,
        shortDescription,
        longDescription,
        price,
        onCart,
    })
}

const hilux=createCarsData("Toyota","Toyota Hilux",images[1].default,"Preparada para cualquier desafío","long description",2500000, 0)
const toyota86=createCarsData("Toyota","Toyota 86",images[0].default,"El placer de manejar un deportivo","long description",2000000, 0)
const mustang=createCarsData("Ford","Ford Mustang GT",images[2].default,"Senti el nuevo motor V8","long description",4000000, 0)
const ranger=createCarsData("Ford","Ford Ranger",images[3].default,"Todo se puede superar","Long Description",3000000, 0)
data.push(toyota86)
data.push(hilux)
data.push(mustang)
data.push(ranger)

export default data